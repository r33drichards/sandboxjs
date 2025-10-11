import axios, { AxiosInstance } from 'axios';
import { Sandbox, Terminal, FileEntry, CreateSandboxOptions, RunCommandOptions } from "../sandbox.js";

export interface IncusConnectionOptions {
  baseURL: string;
  cert?: string;      // Client certificate path
  key?: string;       // Client key path
  serverCert?: string; // Server certificate fingerprint for verification
  project?: string;   // Default project to use
  token?: string;     // Authentication token for web UI
}

export class IncusSandbox extends Sandbox {
  private instanceName: string | null = null;
  private project: string;
  private connectionOptions: IncusConnectionOptions;
  private axiosInstance: AxiosInstance;

  constructor(options?: IncusConnectionOptions) {
    super();

    // If INCUS_URL env var is set and no options provided, parse it
    if (!options && process.env.INCUS_URL) {
      const urlParts = new URL(process.env.INCUS_URL);
      const token = urlParts.searchParams.get('auth_token');
      const baseURL = `${urlParts.protocol}//${urlParts.host}`;
      
      this.connectionOptions = {
        baseURL,
        token: token || undefined,
        project: 'default'
      };
    } else {
      this.connectionOptions = options || { baseURL: 'http://localhost:8443' };
    }
    
    this.project = this.connectionOptions.project || 'default';

    // Create axios instance with base configuration
    const axiosConfig: any = {
      baseURL: this.connectionOptions.baseURL,
      timeout: 30000,
      withCredentials: true, // Enable cookies
    };

    this.axiosInstance = axios.create(axiosConfig);

    // Add authentication cookie if provided
    if (this.connectionOptions.token) {
      // Add request interceptor to include auth cookie
      this.axiosInstance.interceptors.request.use((config) => {
        // Set cookie header for authentication
        config.headers['Cookie'] = `auth_token=${this.connectionOptions.token}`;
        return config;
      });
    }
  }

  async init(id?: string, createOptions?: CreateSandboxOptions): Promise<void> {
    if (id) {
      // Connect to existing instance
      this.instanceName = id;
      await this.ensureInstanceRunning();
    } else {
      // Create new instance
      await this.createInstance(createOptions);
    }
  }

  private async createInstance(createOptions?: CreateSandboxOptions): Promise<void> {
    const instanceName = `sandbox-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    const instanceConfig = {
      name: instanceName,
      type: 'container',
      source: {
        type: 'image',
        alias: createOptions?.template || 'nixos/container'
      },
      config: createOptions?.envs ?
        Object.entries(createOptions.envs).reduce((acc, [key, value]) => {
          acc[`environment.${key}`] = value;
          return acc;
        }, {} as Record<string, string>) : {}
    };

    // Create the instance and wait for the operation to complete
    const response = await this.axiosInstance.post('/1.0/instances', instanceConfig, {
      params: { project: this.project }
    });

    // Extract operation ID from response and wait for completion
    const operationId = response.data.operation?.split('/').pop();
    if (operationId) {
      console.log(`Waiting for instance creation operation ${operationId} to complete...`);
      await this.waitForOperation(operationId, 300000); // 5 minutes for NixOS container creation
      console.log(`Instance ${instanceName} creation completed`);
    }

    this.instanceName = instanceName;
    await this.startInstance();
    await this.waitForContainerReady();
  }

  private async startInstance(): Promise<void> {
    if (!this.instanceName) {
      throw new Error("No instance name available");
    }

    const startConfig = {
      action: 'start'
    };

    console.log(`Starting instance ${this.instanceName}...`);
    const response = await this.axiosInstance.put(`/1.0/instances/${this.instanceName}/state`, startConfig, {
      params: { project: this.project }
    });

    // Extract operation ID from response and wait for completion
    const operationId = response.data.operation?.split('/').pop();
    if (operationId) {
      console.log(`Waiting for start operation ${operationId} to complete...`);
      await this.waitForOperation(operationId, 120000); // 2 minutes for start operation
    }

    // Wait for instance to be running (handled in waitForContainerReady)
  }

  private async ensureInstanceRunning(): Promise<void> {
    if (!this.instanceName) {
      throw new Error("No instance name available");
    }

    const state = await this.getInstanceState();
    if (state.status !== 'Running') {
      await this.startInstance();
    }
  }

  private async getInstanceState(): Promise<any> {
    if (!this.instanceName) {
      throw new Error("No instance name available");
    }

    const response = await this.axiosInstance.get(`/1.0/instances/${this.instanceName}/state`, {
      params: { project: this.project }
    });

    return response.data.metadata;
  }

  private async waitForState(targetState: string, timeoutMs: number = 60000): Promise<void> {
    const startTime = Date.now();

    while (Date.now() - startTime < timeoutMs) {
      try {
        const state = await this.getInstanceState();
        if (state.status === targetState) {
          return;
        }
      } catch (error) {
        // If we can't get state, continue trying
        console.warn(`Error getting instance state: ${error}`);
      }
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    throw new Error(`Timeout waiting for instance to reach state: ${targetState}`);
  }

  private async waitForContainerReady(timeoutMs: number = 180000): Promise<void> {
    const startTime = Date.now();

    console.log(`Waiting for instance ${this.instanceName} to reach Running state...`);
    await this.waitForState('Running', 60000);
    console.log(`Instance ${this.instanceName} is now running`);

    // Wait additional time for NixOS systemd to fully initialize
    while (Date.now() - startTime < timeoutMs) {
      try {
        // Test multiple essential commands to ensure NixOS container is fully ready
        const testCommands = [
          // Test if systemd is running (NixOS specific)
          {
            command: ['/run/current-system/sw/bin/test', '-f', '/run/systemd/system'],
            description: 'systemd check'
          },
          // Test basic shell functionality
          {
            command: ['/run/current-system/sw/bin/bash', '-c', 'echo ready'],
            description: 'bash shell'
          },
          // Test core utilities are available
          {
            command: ['/run/current-system/sw/bin/ls', '/tmp'],
            description: 'coreutils'
          }
        ];

        let allTestsPassed = true;
        for (const test of testCommands) {
          try {
            const execConfig = {
              command: test.command,
              environment: {
                'PATH': '/run/current-system/sw/bin:/run/current-system/sw/sbin:/usr/bin:/bin'
              },
              'wait-for-websocket': false,
              width: 80,
              height: 24,
              user: 0,
              group: 0,
              cwd: '/'
            };

            const response = await this.axiosInstance.post(`/1.0/instances/${this.instanceName}/exec`, execConfig, {
              params: { project: this.project }
            });

            const operationId = response.data.operation?.split('/').pop();
            if (operationId) {
              // Wait for operation to complete to verify it actually works
              await this.waitForOperation(operationId, 10000);
            }
          } catch (error) {
            console.log(`Container readiness test failed for ${test.description}: ${error}`);
            allTestsPassed = false;
            break;
          }
        }

        if (allTestsPassed) {
          console.log('Container is ready for commands');
          return;
        }
      } catch (error) {
        // Container not ready yet, continue waiting
        console.log(`Container not fully ready yet: ${error}`);
      }

      await new Promise(resolve => setTimeout(resolve, 5000));
    }

    throw new Error('Timeout waiting for container to be ready for command execution');
  }

  async runCommand(
    command: string,
    options?: RunCommandOptions & { background?: false }
  ): Promise<{ exitCode: number; output: string }>;
  async runCommand(
    command: string,
    options?: RunCommandOptions & { background: true }
  ): Promise<{ pid: number }>;
  async runCommand(
    command: string,
    options?: RunCommandOptions & { background?: boolean }
  ): Promise<{ exitCode: number; output: string } | { pid: number }> {
    if (!this.instanceName) {
      throw new Error("Instance not initialized");
    }

    const execConfig = {
      command: ['/run/current-system/sw/bin/bash', '-c', command],
      environment: {
        // Set proper PATH for NixOS
        'PATH': '/run/current-system/sw/bin:/run/current-system/sw/sbin:/usr/bin:/bin',
        ...options?.envs || {}
      },
      'wait-for-websocket': false, // Don't wait for websocket - use operation polling instead
      width: 80,
      height: 24,
      user: 0,
      group: 0,
      cwd: options?.cwd || '/'
    };

    try {
      const response = await this.axiosInstance.post(`/1.0/instances/${this.instanceName}/exec`, execConfig, {
        params: { project: this.project }
      });

      const operationId = response.data.operation?.split('/').pop();

      if (options?.background) {
        // For background commands, we return the operation ID as PID
        return { pid: parseInt(operationId || '0') };
      }

      // For foreground commands, poll the operation until completion
      if (operationId) {
        const result = await this.waitForOperation(operationId, 60000); // 1 minute for command execution
        return {
          exitCode: result.exitCode || 0,
          output: result.output || ''
        };
      } else {
        return {
          exitCode: 0,
          output: 'Command executed successfully'
        };
      }
    } catch (error: any) {
      return {
        exitCode: 1,
        output: error.message || 'Command execution failed'
      };
    }
  }

  private async waitForOperation(operationId: string, timeoutMs: number = 30000): Promise<{ exitCode?: number; output?: string }> {
    const startTime = Date.now();
    let lastStatus = '';

    while (Date.now() - startTime < timeoutMs) {
      try {
        const response = await this.axiosInstance.get(`/1.0/operations/${operationId}`, {
          params: { project: this.project }
        });

        const operation = response.data.metadata;

        // Log status changes
        if (operation.status !== lastStatus) {
          console.log(`Operation ${operationId} status: ${operation.status}`);
          lastStatus = operation.status;
        }

        if (operation.status === 'Success') {
          // Operation completed successfully
          const metadata = operation.metadata;
          console.log(`Operation ${operationId} completed successfully`);
          return {
            exitCode: metadata?.return || 0,
            output: '' // Incus doesn't return output through operations API without websockets
          };
        } else if (operation.status === 'Failure') {
          // Operation failed - provide more specific error information
          const errorMsg = operation.err || 'Operation failed';
          console.error(`Operation ${operationId} failed: ${errorMsg}`);
          
          // Check if it's a command not found error specifically
          if (errorMsg.includes('not found') || errorMsg.includes('No such file')) {
            throw new Error(`Command not found`);
          }
          
          throw new Error(`Operation failed: ${errorMsg}`);
        }

        // Operation still running, wait a bit
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (error: any) {
        console.error(`Error checking operation ${operationId} status:`, error.message);
        
        // If the error is about the operation itself being invalid, don't retry
        if (error.message.includes('404') || error.message.includes('not found')) {
          throw new Error(`Operation ${operationId} not found or expired`);
        }
        
        // For other errors, continue retrying until timeout
        if (Date.now() - startTime >= timeoutMs - 1000) { // Give up 1 second before timeout
          throw new Error(`Failed to check operation status: ${error.message}`);
        }
      }
    }

    throw new Error(`Timeout waiting for operation ${operationId} to complete after ${timeoutMs}ms`);
  }

  id(): string {
    if (!this.instanceName) {
      throw new Error("Instance not initialized");
    }
    return this.instanceName;
  }

  async suspend(): Promise<void> {
    if (!this.instanceName) {
      throw new Error("Instance not initialized");
    }

    const stopConfig = {
      action: 'stop'
    };

    console.log(`Stopping instance ${this.instanceName}...`);
    const response = await this.axiosInstance.put(`/1.0/instances/${this.instanceName}/state`, stopConfig, {
      params: { project: this.project }
    });

    // Extract operation ID from response and wait for completion
    const operationId = response.data.operation?.split('/').pop();
    if (operationId) {
      console.log(`Waiting for stop operation ${operationId} to complete...`);
      await this.waitForOperation(operationId, 120000); // 2 minutes for stop operation
    }

    await this.waitForState('Stopped', 60000);
    console.log(`Instance ${this.instanceName} is now stopped`);
  }

  async resume(): Promise<void> {
    if (!this.instanceName) {
      throw new Error("Instance not initialized");
    }

    await this.startInstance();
  }

  async destroy(): Promise<void> {
    if (!this.instanceName) {
      return;
    }

    try {
      // Stop instance first
      await this.suspend();

      // Delete instance
      await this.axiosInstance.delete(`/1.0/instances/${this.instanceName}`, {
        params: { project: this.project }
      });
    } catch (error) {
      console.warn(`Failed to destroy instance ${this.instanceName}:`, error);
    } finally {
      this.instanceName = null;
    }
  }

  async readFile(path: string, options?: { format: 'text' }): Promise<string>;
  async readFile(path: string, options?: { format: 'bytes' }): Promise<Uint8Array>;
  async readFile(path: string, options?: { format: 'text' | 'bytes' }): Promise<string | Uint8Array> {
    if (!this.instanceName) {
      throw new Error("Instance not initialized");
    }

    try {
      // Try the files API first
      const response = await this.axiosInstance.get(`/1.0/instances/${this.instanceName}/files`, {
        params: {
          path: path,
          project: this.project
        }
      });

      if (options?.format === 'bytes') {
        // Convert response to bytes
        return new TextEncoder().encode(response.data as string);
      }

      return response.data as string;
    } catch (error) {
      // If files API fails, try using command execution as fallback
      try {
        const result = await this.runCommand(`cat "${path}"`, { background: false });
        if ('exitCode' in result && result.exitCode === 0) {
          if (options?.format === 'bytes') {
            return new TextEncoder().encode(result.output);
          }
          return result.output;
        }
        throw new Error(`Command failed with exit code ${result.exitCode}: ${result.output}`);
      } catch (cmdError) {
        throw new Error(`Failed to read file ${path}: ${error}`);
      }
    }
  }

  async writeFile(path: string, content: string | Uint8Array): Promise<void> {
    if (!this.instanceName) {
      throw new Error("Instance not initialized");
    }

    try {
      const contentStr = content instanceof Uint8Array
        ? new TextDecoder().decode(content)
        : content;

      await this.axiosInstance.post(`/1.0/instances/${this.instanceName}/files`, contentStr, {
        params: {
          path: path,
          project: this.project
        },
        headers: {
          'Content-Type': 'application/octet-stream'
        }
      });
    } catch (error) {
      // If files API fails, try using command execution as fallback
      try {
        const contentStr = content instanceof Uint8Array
          ? new TextDecoder().decode(content)
          : content;

        // Escape content for shell - use base64 encoding to avoid shell escape issues
        const base64Content = Buffer.from(contentStr).toString('base64');
        const result = await this.runCommand(`echo "${base64Content}" | base64 -d > "${path}"`, { background: false });

        if ('exitCode' in result && result.exitCode !== 0) {
          throw new Error(`Write command failed: ${result.output}`);
        }
      } catch (cmdError) {
        throw new Error(`Failed to write file ${path}: ${error}`);
      }
    }
  }

  async listFiles(path: string): Promise<FileEntry[]> {
    if (!this.instanceName) {
      throw new Error("Instance not initialized");
    }

    try {
      // Use Incus Files API to list directory contents
      console.log(`[DEBUG] Listing files in path: ${path}`);
      
      const response = await this.axiosInstance.get(`/1.0/instances/${this.instanceName}/files`, {
        params: {
          path: path,
          project: this.project
        }
      });

      console.log(`[DEBUG] listFiles API response:`, {
        status: response.status,
        dataType: typeof response.data,
        metadata: response.data.metadata,
        isMetadataArray: Array.isArray(response.data.metadata)
      });

      const entries: FileEntry[] = [];
      
      // The Incus Files API returns a list of file/directory names
      if (Array.isArray(response.data.metadata)) {
        for (const item of response.data.metadata) {
          if (typeof item === 'string') {
            // For each item, we need to check if it's a file or directory
            // We can do this by making a HEAD request to the file
            try {
              const itemPath = path.endsWith('/') ? `${path}${item}` : `${path}/${item}`;
              console.log(`[DEBUG] Checking item: ${item} at path: ${itemPath}`);
              
              const itemResponse = await this.axiosInstance.head(`/1.0/instances/${this.instanceName}/files`, {
                params: {
                  path: itemPath,
                  project: this.project
                }
              });
              
              console.log(`[DEBUG] HEAD response for ${item}:`, {
                status: itemResponse.status,
                headers: itemResponse.headers,
                allHeaderKeys: Object.keys(itemResponse.headers)
              });
              
              // Check the X-Incus-type header to determine if it's a file or directory
              // Try different case variations as headers can be case-sensitive
              const fileType = itemResponse.headers['x-incus-type'] || 
                              itemResponse.headers['X-Incus-type'] ||
                              itemResponse.headers['X-Incus-Type'];
              
              console.log(`[DEBUG] Detected file type for ${item}: ${fileType} (directory check: ${fileType === 'directory'})`);
              
              entries.push({
                type: fileType === 'directory' ? 'directory' : 'file',
                name: item
              });
            } catch (headError: any) {
              console.log(`[DEBUG] HEAD request failed for ${item}:`, headError.response?.status, headError.message);
              
              // If HEAD request fails, try to make a GET request to see if it's a directory
              // Directories will fail GET requests for file content
              try {
                const itemPath = path.endsWith('/') ? `${path}${item}` : `${path}/${item}`;
                const getResponse = await this.axiosInstance.get(`/1.0/instances/${this.instanceName}/files`, {
                  params: {
                    path: itemPath,
                    project: this.project
                  }
                });
                
                console.log(`[DEBUG] GET request succeeded for ${item}, assuming directory. Response:`, {
                  status: getResponse.status,
                  dataType: typeof getResponse.data,
                  isArray: Array.isArray(getResponse.data?.metadata)
                });
                
                // If GET succeeds, it's a directory (since it returned a listing)
                entries.push({
                  type: 'directory',
                  name: item
                });
              } catch (getError: any) {
                console.log(`[DEBUG] GET request failed for ${item}:`, getError.response?.status, getError.message, '- assuming file');
                
                // If GET fails, it's likely a file
                entries.push({
                  type: 'file',
                  name: item
                });
              }
            }
          }
        }
      }

      console.log(`[DEBUG] Final entries for ${path}:`, entries);
      return entries;
    } catch (error: any) {
      throw new Error(`Failed to list files in ${path}: ${error.message || error}`);
    }
  }

  async moveFile(path: string, newPath: string): Promise<void> {
    if (!this.instanceName) {
      throw new Error("Instance not initialized");
    }

    try {
      const result = await this.runCommand(`mv "${path}" "${newPath}"`, { background: false });
      if ('exitCode' in result && result.exitCode !== 0) {
        throw new Error(`mv command failed: ${result.output || 'Move operation failed'}`);
      }
    } catch (error) {
      throw new Error(`Failed to move file from ${path} to ${newPath}: ${error}`);
    }
  }

  async deleteFile(path: string): Promise<void> {
    if (!this.instanceName) {
      throw new Error("Instance not initialized");
    }

    try {
      await this.axiosInstance.delete(`/1.0/instances/${this.instanceName}/files`, {
        params: {
          path: path,
          project: this.project
        }
      });
    } catch (error: any) {
      throw new Error(`Failed to delete file ${path}: ${error.message || error}`);
    }
  }

  async createDirectory(path: string): Promise<void> {
    if (!this.instanceName) {
      throw new Error("Instance not initialized");
    }

    try {
      const result = await this.runCommand(`mkdir -p "${path}"`, { background: false });
      if ('exitCode' in result && result.exitCode !== 0) {
        throw new Error(`mkdir command failed: ${result.output || 'Directory creation failed'}`);
      }
    } catch (error) {
      throw new Error(`Failed to create directory ${path}: ${error}`);
    }
  }

  async getPreviewUrl(port: number): Promise<string> {
    if (!this.instanceName) {
      throw new Error("Instance not initialized");
    }

    // Get instance IP address
    const state = await this.getInstanceState();
    const networks = state.network;

    if (!networks) {
      throw new Error("No network information available");
    }

    // Find the first available IP address
    for (const [networkName, networkInfo] of Object.entries(networks)) {
      if (networkInfo && typeof networkInfo === 'object' && 'addresses' in networkInfo) {
        const addresses = (networkInfo as any).addresses;
        if (Array.isArray(addresses)) {
          for (const addr of addresses) {
            if (addr.family === 'inet' && addr.scope === 'global') {
              return `http://${addr.address}:${port}`;
            }
          }
        }
      }
    }

    throw new Error("No accessible IP address found for instance");
  }

  async createTerminal(onOutput: (output: string) => void): Promise<Terminal> {
    if (!this.instanceName) {
      throw new Error("Instance not initialized");
    }

    const terminal = new IncusTerminal(this.instanceName, this.axiosInstance, this.project);
    await terminal.init(onOutput);
    return terminal;
  }
}

export class IncusTerminal extends Terminal {
  private instanceName: string;
  private axiosInstance: AxiosInstance;
  private project: string;
  private active: boolean = false;

  constructor(instanceName: string, axiosInstance: AxiosInstance, project: string) {
    super();
    this.instanceName = instanceName;
    this.axiosInstance = axiosInstance;
    this.project = project;
  }

  async init(onOutput: (data: string) => void): Promise<void> {
    // Initialize terminal session
    // This is simplified - in a real implementation you'd need to handle websockets
    // for proper terminal interaction with the /1.0/instances/{name}/console endpoint
    this.active = true;
  }

  async write(data: string): Promise<void> {
    if (!this.active) {
      throw new Error("Terminal is not active");
    }

    // In a real implementation, this would send data to the websocket
    // For now, this is a placeholder
  }

  async resize(cols: number, rows: number): Promise<void> {
    if (!this.active) {
      throw new Error("Terminal is not active");
    }

    // In a real implementation, this would resize the terminal
    // For now, this is a placeholder
  }

  async kill(): Promise<void> {
    this.active = false;
  }
}