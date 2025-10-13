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

  console.log("\n=== Example 3: Authentication using INCUS_URL (Integration Test Pattern) ===");

  // This example shows how to authenticate like the integration tests do
  // The INCUS_URL can include an auth_token parameter for web UI authentication
  try {
    // Method 1: Using INCUS_URL environment variable with auth token
    // Set this before creating the sandbox:
    // export INCUS_URL="http://localhost:8443?auth_token=your_token_here"
    //
    // The IncusSandbox constructor automatically parses INCUS_URL if no options are provided
    if (process.env.INCUS_URL) {
      console.log(`Using INCUS_URL from environment: ${process.env.INCUS_URL}`);

      // When you don't pass any options, it automatically uses INCUS_URL
      const sandbox3a = new IncusSandbox();
      await sandbox3a.init(undefined, { template: "alpine/3.18" });
      console.log(`Created sandbox with env auth: ${sandbox3a.id()}`);

      await sandbox3a.destroy();
      console.log("Sandbox destroyed");
    }

    // Method 2: Programmatically setting the token in connection options
    const connectionOptionsWithToken: IncusConnectionOptions = {
      baseURL: 'http://localhost:8443',
      token: 'your_auth_token_here',  // Auth token from Incus web UI
      project: 'default'
    };

    console.log("\nNote: This example would work if you have a valid auth token");
    console.log("To get an auth token from Incus web UI:");
    console.log("1. Access the Incus web UI (usually at https://localhost:8443)");
    console.log("2. Login with your credentials");
    console.log("3. The auth token is stored in the session cookie");
    console.log("4. Pass it via INCUS_URL or connectionOptions.token");

    // Uncomment to test with actual token:
    // const sandbox3b = new IncusSandbox(connectionOptionsWithToken);
    // await sandbox3b.init(undefined, { template: "alpine/3.18" });
    // console.log(`Created sandbox with token: ${sandbox3b.id()}`);
    // await sandbox3b.destroy();

  } catch (error) {
    console.error("Example 3 failed:", error);
  }

  console.log("\n=== Example 4: TLS Client Certificate Authentication ===");

  // This example shows how to use TLS client certificates for authentication
  // This is the most secure method and recommended for production use
  try {
    // Client certificates are typically stored in ~/.config/incus/ for the CLI
    // For production use, you would generate and manage these certificates
    const connectionOptionsWithCert: IncusConnectionOptions = {
      baseURL: 'https://localhost:8443',
      cert: '/path/to/client.crt',       // Path to client certificate file
      key: '/path/to/client.key',        // Path to client private key file
      serverCert: 'server_fingerprint',  // Optional: server certificate fingerprint
      project: 'default'
    };

    console.log("Note: This example requires valid TLS certificates");
    console.log("To set up client certificate authentication:");
    console.log("1. Generate a client certificate and key (see docs/incus-tls-setup.md)");
    console.log("2. Add the certificate to the Incus server's trust store");
    console.log("3. Use the certificate paths in your connection options");
    console.log("4. See the integration test in tests/incus-tls-auth.test.js for a working example");

    // Uncomment to test with actual certificates:
    // const sandbox4a = new IncusSandbox(connectionOptionsWithCert);
    // await sandbox4a.init(undefined, { template: "alpine/3.18" });
    // console.log(`Created sandbox with TLS cert: ${sandbox4a.id()}`);
    // await sandbox4a.destroy();

  } catch (error) {
    console.error("Example 4 failed:", error);
  }

  console.log("\n=== Example 5: Connecting to existing instance ===");

  try {
    const connectionOptions: IncusConnectionOptions = {
      baseURL: 'https://localhost:8443',
      project: 'default'
    };

    // First, create an instance and get its ID
    const sandbox5 = new IncusSandbox(connectionOptions);
    await sandbox5.init(undefined, { template: "ubuntu/22.04" });
    const instanceId = sandbox5.id();
    console.log(`Created instance: ${instanceId}`);

    // Now connect to the existing instance using its ID
    const sandbox6 = new IncusSandbox(connectionOptions);
    await sandbox6.init(instanceId);
    console.log(`Connected to existing instance: ${sandbox6.id()}`);

    // Both sandbox5 and sandbox6 reference the same instance
    console.log(`Both sandboxes reference same instance: ${sandbox5.id() === sandbox6.id()}`);

    // Clean up (only need to destroy once)
    await sandbox5.destroy();
    console.log("Instance destroyed");
  } catch (error) {
    console.error("Example 5 failed:", error);
  }
}

// Note: This example assumes you have an Incus server running locally
// To run Incus locally, you can install it using:
// - Ubuntu/Debian: sudo snap install incus --classic
// - Other distros: See https://linuxcontainers.org/incus/docs/main/installing/
//
// After installation, initialize Incus with: sudo incus admin init --minimal
//
// Authentication Methods:
//
// 1. Environment Variable (Integration Test Pattern):
//    export INCUS_URL="http://localhost:8443?auth_token=your_token"
//    const sandbox = new IncusSandbox(); // Automatically uses INCUS_URL
//
// 2. Connection Options with Token:
//    const sandbox = new IncusSandbox({
//      baseURL: 'http://localhost:8443',
//      token: 'your_auth_token',
//      project: 'default'
//    });
//
// 3. Client Certificate Authentication (See Example 4):
//    const sandbox = new IncusSandbox({
//      baseURL: 'https://localhost:8443',
//      cert: '/path/to/client.crt',
//      key: '/path/to/client.key',
//      serverCert: 'fingerprint',  // Optional
//      project: 'default'
//    });
//
// The integration tests (in tests/incus-integration.test.js) use method 1:
// - They set INCUS_URL=http://localhost:8443 in the environment
// - This allows tests to connect to a local Incus instance without hardcoded credentials
// - The auth token is optional for local unauthenticated access
if (require.main === module) {
  main().catch(console.error);
}