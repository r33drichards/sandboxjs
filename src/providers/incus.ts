import axios, { AxiosInstance } from 'axios';
import { Sandbox, Terminal, FileEntry, CreateSandboxOptions, RunCommandOptions } from "../sandbox.js";

export interface IncusConnectionOptions {
  baseURL: string;
  cert?: string;      // Client certificate path
  key?: string;       // Client key path
  serverCert?: string; // Server certificate fingerprint for verification
  project?: string;   // Default project to use
}

export class IncusSandbox extends Sandbox {
  private instanceName: string | null = null;
  private project: string;
  private connectionOptions: IncusConnectionOptions;
  private axiosInstance: AxiosInstance;

  constructor(options?: IncusConnectionOptions) {
    super();

    this.connectionOptions = options || { baseURL: 'http://localhost:8443' };
    this.project = this.connectionOptions.project || 'default';

    // Create axios instance with base configuration
    this.axiosInstance = axios.create({
      baseURL: this.connectionOptions.baseURL,
      timeout: 30000,
      // Add TLS configuration if provided
      // httpsAgent: ... (would be configured based on cert/key options)
    });
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

    await this.axiosInstance.post('/1.0/instances', instanceConfig, {
      params: { project: this.project }
    });

    this.instanceName = instanceName;
    await this.startInstance();
  }

  private async startInstance(): Promise<void> {
    if (!this.instanceName) {
      throw new Error("No instance name available");
    }

    const startConfig = {
      action: 'start'
    };

    await this.axiosInstance.put(`/1.0/instances/${this.instanceName}/state`, startConfig, {
      params: { project: this.project }
    });

    // Wait for instance to be running
    await this.waitForState('Running');
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

  private async waitForState(targetState: string, timeoutMs: number = 30000): Promise<void> {
    const startTime = Date.now();

    while (Date.now() - startTime < timeoutMs) {
      const state = await this.getInstanceState();
      if (state.status === targetState) {
        return;
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    throw new Error(`Timeout waiting for instance to reach state: ${targetState}`);
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
      command: ['/bin/bash', '-c', command],
      environment: options?.envs || {},
      'wait-for-websocket': !options?.background,
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

      if (options?.background) {
        // For background commands, we return the operation ID as PID
        return { pid: parseInt(response.data.operation?.split('/').pop() || '0') };
      }

      // For foreground commands, this is simplified
      // In a real implementation you'd need to handle websockets
      // and properly wait for command completion
      return {
        exitCode: 0, // This would be determined from the actual execution
        output: 'Command executed (websocket handling not implemented)'
      };
    } catch (error: any) {
      return {
        exitCode: 1,
        output: error.message || 'Command execution failed'
      };
    }
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

    await this.axiosInstance.put(`/1.0/instances/${this.instanceName}/state`, stopConfig, {
      params: { project: this.project }
    });

    await this.waitForState('Stopped');
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
      throw new Error(`Failed to read file ${path}: ${error}`);
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
      throw new Error(`Failed to write file ${path}: ${error}`);
    }
  }

  async listFiles(path: string): Promise<FileEntry[]> {
    if (!this.instanceName) {
      throw new Error("Instance not initialized");
    }

    try {
      // Use exec to run ls command as a workaround since file API might not support listing
      const result = await this.runCommand(`ls -la "${path}"`, { background: false });

      if ('exitCode' in result && result.exitCode !== 0) {
        throw new Error(`ls command failed: ${result.output}`);
      }

      // Parse ls output (simplified - in reality you'd want more robust parsing)
      const lines = result.output.split('\n').slice(1); // Skip total line
      const entries: FileEntry[] = [];

      for (const line of lines) {
        if (line.trim()) {
          const parts = line.split(/\s+/);
          if (parts.length >= 9) {
            const isDirectory = parts[0].startsWith('d');
            const name = parts.slice(8).join(' ');
            if (name !== '.' && name !== '..') {
              entries.push({
                type: isDirectory ? 'directory' : 'file',
                name: name
              });
            }
          }
        }
      }

      return entries;
    } catch (error) {
      throw new Error(`Failed to list files in ${path}: ${error}`);
    }
  }

  async moveFile(path: string, newPath: string): Promise<void> {
    if (!this.instanceName) {
      throw new Error("Instance not initialized");
    }

    try {
      const result = await this.runCommand(`mv "${path}" "${newPath}"`, { background: false });
      if ('exitCode' in result && result.exitCode !== 0) {
        throw new Error(`mv command failed: ${result.output}`);
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
      const result = await this.runCommand(`rm -rf "${path}"`, { background: false });
      if ('exitCode' in result && result.exitCode !== 0) {
        throw new Error(`rm command failed: ${result.output}`);
      }
    } catch (error) {
      throw new Error(`Failed to delete file ${path}: ${error}`);
    }
  }

  async createDirectory(path: string): Promise<void> {
    if (!this.instanceName) {
      throw new Error("Instance not initialized");
    }

    try {
      const result = await this.runCommand(`mkdir -p "${path}"`, { background: false });
      if ('exitCode' in result && result.exitCode !== 0) {
        throw new Error(`mkdir command failed: ${result.output}`);
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