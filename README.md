# sandboxjs

[![CI](https://github.com/abdulrehmann231/sandboxjs/actions/workflows/ci.yml/badge.svg)](https://github.com/abdulrehmann231/sandboxjs/actions/workflows/ci.yml)

A unified interface for Linux-based cloud sandbox providers. It can be used to create the building blocks of AI agents that run code or perform other potentially unsafe operations.

## Usage

```js
import { Sandbox } from "@gitwit/sandbox";

// Create a new sandbox
const sandbox = await Sandbox.create("daytona"); // or "codesandbox", "e2b", "modal", or "incus"

// Create a sandbox with custom template
const customSandbox = await Sandbox.create("e2b", { template: "my-template-id" });

// Connect to an existing sandbox
// const sandbox = await Sandbox.connect("daytona", "sandbox_id");

// Run commands and interact with the sandbox
const { output } = await sandbox.runCommand("echo 'hello world'");
console.log(output);
console.log(await sandbox.listFiles("/"));

// Suspend, resume and destroy the sandbox
await sandbox.suspend();
await sandbox.resume();
await sandbox.destroy();
```

## Provider Support

| Provider        | File Persistence | Memory Persistence | Read/Write Files | Recursive Delete | Directory Watch | Preview URLs | Pseudo-terminals | Env Variables | Destroy Sandbox | Build Templates |
| --------------- | ---------------- | ------------------ | ---------------- | ---------------- | --------------- | ------------ | ---------------- | --------------- | --------------- | --------------- |
| **E2B**         | ✅               | ✅                 | ✅               | ✅               | ✅              | ✅           | ✅               | ✅              | ✅              | ✅              |
| **Daytona**     | ✅               | ❌                 | ✅               | ❌               | ❌              | ✅           | ❌               | ✅              | ✅              | ✅              |
| **CodeSandbox** | ✅               | ✅                 | ✅               | ✅               | ✅              | ✅           | ✅               | ❌              | ❌              | 🚧              |
| **Modal**       | ✅               | ❌                 | ✅               | ❌               | ❌              | ✅           | ❌               | ❌              | ✅              | 🚧              |
| **Incus**       | ✅               | ✅                 | ✅               | ✅               | ❌              | ✅           | 🚧               | ✅              | ✅              | ❌              |

## Getting Started

### 1. Set up environment variables

Create a `.env` file in the root directory of the project and add at least one of the following environment variables:

```shell
# Get an E2B API key here: https://e2b.dev/dashboard
E2B_API_KEY=
# Get a Daytona API key here: https://app.daytona.io/dashboard/keys
DAYTONA_API_KEY=
# Get a CodeSandbox API key here: https://codesandbox.io/t
CODESANDBOX_API_KEY=
# Get a Modal API token here: https://modal.com/settings/tokens
MODAL_TOKEN_ID=
MODAL_TOKEN_SECRET=
# Incus connection (optional, defaults to localhost:8443)
INCUS_BASE_URL=https://localhost:8443
INCUS_PROJECT=default
```

### 2. Install dependencies

```
npm install
```

### 3. Build the project

Compiles the TypeScript source files to JavaScript in the `dist/` directory.

```
npm run build
```

### 4. Run the example

After building, run the example script:

```
node dist/example.js
```

### 5. Run tests

To run the test suite:

```
npm test
```

## Methods

### create

```js
// Create default sandbox
const sandbox = await Sandbox.create("daytona"); // or "codesandbox", "e2b", "modal", or "incus"

// Create sandbox with additional parameters
const e2bSandbox = await Sandbox.create("e2b", {
  template: "my-template-id",
  envs: { KEY: "value" }
});
```

### connect

```js
const sandbox = await Sandbox.connect("daytona", "sandbox_id");
```

### runCommand

Execute commands in the sandbox with support for background execution and command options.

```js
// Basic command execution
const { exitCode, output } = await sandbox.runCommand("echo 'hello world'");
console.log(output); // "hello world"
console.log(exitCode); // 0

// Command with options
const result = await sandbox.runCommand("ls -la", {
  cwd: "/tmp",
  envs: { MY_VAR: "value" },
  timeoutMs: 5000
});

// Background command execution
const { pid } = await sandbox.runCommand("sleep 10", { background: true });
console.log(`Background process started with PID: ${pid}`);
```

### suspend

```js
await sandbox.suspend();
```

### resume

```js
await sandbox.resume();
```

### destroy

```js
await sandbox.destroy();
```

### readFile

```js
console.log(await sandbox.readFile("/path/to/file"));
```

### writeFile

```js
await sandbox.writeFile("/path/to/file", "content");
```

### listFiles

```js
console.log(await sandbox.listFiles("/path/to/directory"));
```

### moveFile

```js
await sandbox.moveFile("/path/to/file", "/path/to/new/file");
```

### deleteFile

```js
await sandbox.deleteFile("/path/to/file");
```

### createDirectory

```js
await sandbox.createDirectory("/path/to/directory");
```

### getPreviewUrl

```js
console.log(await sandbox.getPreviewUrl(8080));
```

### createTerminal

```js
const terminal = await sandbox.createTerminal();
```

### Terminal Methods

```js
await terminal.write("echo 'hello world'");
await terminal.resize(80, 24);
await terminal.kill();
```

## Template Building

Build custom templates from your projects in a unified way across all providers.

> **Note:** Your project directory must contain a `Dockerfile` (or `*.Dockerfile` file).

### Build E2B template
```ts
import { buildTemplate } from "@gitwit/sandbox";

await buildTemplate('e2b', './my-project', 'my-template', {
  cpuCount: 2,
  memoryMB: 1024,
  teamId: 'your-team-id'
});

// Use built template
const sandbox = await Sandbox.create('e2b', { template: 'my-template' });
```

### Build Daytona snapshot
```ts
import { buildTemplate } from "@gitwit/sandbox";

await buildTemplate('daytona', './my-project', 'my-snapshot', {
  cpu: 2,
  memory: 4,
  disk: 10
});

// Use built template
const sandbox = await Sandbox.create('daytona', { template: 'my-snapshot' });
```

## Incus Provider

The Incus provider allows you to run sandboxes using [Incus](https://linuxcontainers.org/incus/), a modern, secure system container and virtual machine manager. Incus provides excellent performance and security for containerized workloads.

### Setup

1. **Install Incus** on your system:
   ```bash
   # Ubuntu/Debian
   sudo snap install incus --classic

   # Or from packages (see https://linuxcontainers.org/incus/docs/main/installing/)
   ```

2. **Initialize Incus**:
   ```bash
   sudo incus admin init --minimal
   ```

3. **Add your user to the incus group** (optional, for socket access):
   ```bash
   sudo usermod -a -G incus $USER
   newgrp incus
   ```

### Basic Usage

```js
import { Sandbox } from "@gitwit/sandbox";

// Create an Incus sandbox with default settings
const sandbox = await Sandbox.create("incus", {
  template: "ubuntu/22.04",  // Use Ubuntu 22.04 image
  envs: {
    "DEBIAN_FRONTEND": "noninteractive",
    "MY_CUSTOM_VAR": "hello"
  }
});

const { output } = await sandbox.runCommand("echo $MY_CUSTOM_VAR");
console.log(output); // "hello"
```

### Advanced Usage with Custom Connection

```js
import { IncusSandbox } from "@gitwit/sandbox";

const sandbox = new IncusSandbox({
  baseURL: 'https://your-incus-server:8443',
  project: 'my-project',
  // cert: '/path/to/client.crt',     // Optional: client certificate
  // key: '/path/to/client.key',      // Optional: client key
  // serverCert: 'fingerprint'        // Optional: server cert fingerprint
});

await sandbox.init(undefined, {
  template: "alpine/3.18",
  envs: { "LANG": "en_US.UTF-8" }
});

// Sandbox is now ready to use
console.log(`Created instance: ${sandbox.id()}`);
```

### Available Images

Incus supports a wide variety of Linux distributions and versions. Common templates include:

- `ubuntu/20.04`, `ubuntu/22.04`, `ubuntu/24.04`
- `alpine/3.17`, `alpine/3.18`, `alpine/3.19`
- `debian/11`, `debian/12`
- `fedora/38`, `fedora/39`
- `centos/9-Stream`
- `arch/current`

You can list available images on your Incus server with:
```bash
incus image list images: | head -20  # Remote images
incus image list                      # Local images
```

### Features

- **✅ File Persistence**: Files persist between suspend/resume cycles
- **✅ Memory Persistence**: Container state can be preserved when suspending
- **✅ Read/Write Files**: Full filesystem access within containers
- **✅ Recursive Delete**: Can delete directories and their contents
- **❌ Directory Watch**: File system watching not yet implemented
- **✅ Preview URLs**: Access services running inside containers
- **🚧 Pseudo-terminals**: Interactive terminal support (basic implementation)
- **✅ Environment Variables**: Set custom environment variables
- **✅ Destroy Sandbox**: Complete cleanup of containers
- **❌ Build Templates**: Custom template building not yet implemented

### Notes

- The Incus provider uses direct HTTP API calls to communicate with the Incus daemon
- WebSocket functionality for command execution and terminals is simplified in the current implementation
- For production use, configure proper TLS certificates for secure connections
- Incus provides excellent isolation and security compared to other containerization solutions

## Future Plans

- Add support for watching file system changes
- Add support for running code
