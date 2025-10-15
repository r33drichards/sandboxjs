import { IncusSandbox, IncusConnectionOptions, Sandbox } from "../index.js";

async function main() {
  // Example 1: Using the factory method (requires Incus provider to be registered)
  console.log("=== Example 1: Using Sandbox.create() ===");

  try {
    const sandbox1 = await Sandbox.create("incus", {
      template: "ubuntu/22.04",
      envs: {
        "DEBIAN_FRONTEND": "noninteractive",
        "CUSTOM_VAR": "hello-world"
      }
    });

    console.log(`Created sandbox with ID: ${sandbox1.id()}`);

    // Run a simple command
    const result = await sandbox1.runCommand("echo 'Hello from Incus!'", { background: false });
    if ('output' in result) {
      console.log(`Command output: ${result.output}`);
    }

    // Clean up
    await sandbox1.destroy();
    console.log("Sandbox destroyed");
  } catch (error) {
    console.error("Example 1 failed:", error);
  }

  console.log("\n=== Example 2: Using direct IncusSandbox constructor ===");

  // Example 2: Using the IncusSandbox class directly with custom connection options
  try {
    const connectionOptions: IncusConnectionOptions = {
      baseURL: 'https://localhost:8443',  // Default Incus API endpoint
      project: 'default',
      // cert: '/path/to/client.crt',     // Optional client certificate
      // key: '/path/to/client.key',      // Optional client key
      // serverCert: 'fingerprint',       // Optional server certificate fingerprint
    };

    const sandbox2 = new IncusSandbox(connectionOptions);

    await sandbox2.init(undefined, {
      template: "alpine/3.18",
      envs: {
        "LANG": "en_US.UTF-8"
      }
    });

    console.log(`Created Alpine sandbox with ID: ${sandbox2.id()}`);

    // Test file operations
    await sandbox2.writeFile('/tmp/test.txt', 'Hello from Incus provider!');
    const content = await sandbox2.readFile('/tmp/test.txt', { format: 'text' });
    console.log(`File content: ${content}`);

    // Test directory operations
    await sandbox2.createDirectory('/tmp/testdir');
    const files = await sandbox2.listFiles('/tmp');
    console.log(`Files in /tmp: ${files.map(f => f.name).join(', ')}`);

    // Suspend and resume
    console.log("Suspending sandbox...");
    await sandbox2.suspend();

    console.log("Resuming sandbox...");
    await sandbox2.resume();

    // Clean up
    await sandbox2.destroy();
    console.log("Sandbox destroyed");
  } catch (error) {
    console.error("Example 2 failed:", error);
  }

  console.log("\n=== Example 3: Connecting to existing instance ===");

  try {
    const connectionOptions: IncusConnectionOptions = {
      baseURL: 'https://localhost:8443',
      project: 'default'
    };

    // First, create an instance and get its ID
    const sandbox3 = new IncusSandbox(connectionOptions);
    await sandbox3.init(undefined, { template: "ubuntu/22.04" });
    const instanceId = sandbox3.id();
    console.log(`Created instance: ${instanceId}`);

    // Now connect to the existing instance using its ID
    const sandbox4 = new IncusSandbox(connectionOptions);
    await sandbox4.init(instanceId);
    console.log(`Connected to existing instance: ${sandbox4.id()}`);

    // Both sandbox3 and sandbox4 reference the same instance
    console.log(`Both sandboxes reference same instance: ${sandbox3.id() === sandbox4.id()}`);

    // Clean up (only need to destroy once)
    await sandbox3.destroy();
    console.log("Instance destroyed");
  } catch (error) {
    console.error("Example 3 failed:", error);
  }
}

// Note: This example assumes you have an Incus server running locally
// To run Incus locally, you can install it using:
// - Ubuntu/Debian: sudo snap install incus --classic
// - Other distros: See https://linuxcontainers.org/incus/docs/main/installing/
//
// After installation, initialize Incus with: sudo incus admin init --minimal
if (require.main === module) {
  main().catch(console.error);
}