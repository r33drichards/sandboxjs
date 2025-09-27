import { Sandbox } from '../dist/index.js';
import { describe, test, afterEach, expect, beforeAll } from 'vitest';

describe('Incus Sandbox Integration Tests', () => {
  let sandbox;

  beforeAll(() => {
    // Skip tests if INCUS_URL is not set (for CI environments without Incus)
    if (!process.env.INCUS_URL && !process.env.CI) {
      console.warn('INCUS_URL not set, skipping Incus integration tests. Set INCUS_URL to run these tests.');
    }
  });

  afterEach(async () => {
    if (sandbox) {
      try {
        await sandbox.destroy();
      } catch (error) {
        console.warn('Failed to destroy sandbox during cleanup:', error.message);
      }
      sandbox = undefined;
    }
  });

  test('create incus sandbox with default template', async () => {
    // Skip if no Incus URL is configured
    if (!process.env.INCUS_URL && !process.env.CI) {
      return;
    }

    sandbox = await Sandbox.create('incus');

    expect(sandbox).toBeDefined();
    expect(sandbox.id()).toBeDefined();
    expect(typeof sandbox.id()).toBe('string');
    expect(sandbox.id()).toMatch(/^sandbox-\d+-[a-z0-9]+$/);
  }, 120000); // Increase timeout for NixOS container creation

  test('create incus sandbox with custom template', async () => {
    if (!process.env.INCUS_URL && !process.env.CI) {
      return;
    }

    sandbox = await Sandbox.create('incus', {
      template: 'nixos/container'
    });

    expect(sandbox).toBeDefined();
    expect(sandbox.id()).toBeDefined();
  }, 120000);

  test('run basic command in incus sandbox', async () => {
    if (!process.env.INCUS_URL && !process.env.CI) {
      return;
    }

    sandbox = await Sandbox.create('incus');

    const result = await sandbox.runCommand('echo "Hello from Incus"');

    // Note: The current implementation returns a placeholder message
    // This test will need to be updated when websocket implementation is complete
    expect(result).toBeDefined();
    expect(result.exitCode).toBeDefined();
  }, 120000);

  test('suspend and resume incus sandbox', async () => {
    if (!process.env.INCUS_URL && !process.env.CI) {
      return;
    }

    sandbox = await Sandbox.create('incus');

    // Test suspend
    await expect(sandbox.suspend()).resolves.not.toThrow();

    // Test resume
    await expect(sandbox.resume()).resolves.not.toThrow();
  }, 180000);

  test('file operations in incus sandbox', async () => {
    if (!process.env.INCUS_URL && !process.env.CI) {
      return;
    }

    sandbox = await Sandbox.create('incus');

    const testContent = 'Hello from Incus sandbox!';
    const testFile = '/tmp/incus-test.txt';

    // Write file
    await sandbox.writeFile(testFile, testContent);

    // Read file
    const readContent = await sandbox.readFile(testFile);
    expect(readContent).toBe(testContent);

    // List files to verify it exists
    const files = await sandbox.listFiles('/tmp');
    expect(files.some(file => file.name === 'incus-test.txt')).toBe(true);

    // Delete file
    await sandbox.deleteFile(testFile);

    // Verify deletion
    const filesAfterDelete = await sandbox.listFiles('/tmp');
    expect(filesAfterDelete.some(file => file.name === 'incus-test.txt')).toBe(false);
  }, 120000);

  test('create directory in incus sandbox', async () => {
    if (!process.env.INCUS_URL && !process.env.CI) {
      return;
    }

    sandbox = await Sandbox.create('incus');

    const testDir = '/tmp/incus-test-dir';

    await sandbox.createDirectory(testDir);

    const files = await sandbox.listFiles('/tmp');
    expect(files.some(file => file.name === 'incus-test-dir' && file.type === 'directory')).toBe(true);
  }, 120000);

  test('move file in incus sandbox', async () => {
    if (!process.env.INCUS_URL && !process.env.CI) {
      return;
    }

    sandbox = await Sandbox.create('incus');

    const originalPath = '/tmp/incus-move-test.txt';
    const newPath = '/tmp/incus-moved.txt';
    const testContent = 'File to move';

    await sandbox.writeFile(originalPath, testContent);
    await sandbox.moveFile(originalPath, newPath);

    // Verify original file is gone
    const tmpFiles = await sandbox.listFiles('/tmp');
    expect(tmpFiles.some(file => file.name === 'incus-move-test.txt')).toBe(false);
    expect(tmpFiles.some(file => file.name === 'incus-moved.txt')).toBe(true);

    // Verify content is preserved
    const movedContent = await sandbox.readFile(newPath);
    expect(movedContent).toBe(testContent);
  }, 120000);

  test('create incus sandbox with environment variables', async () => {
    if (!process.env.INCUS_URL && !process.env.CI) {
      return;
    }

    const customEnvs = {
      INCUS_TEST_VAR: 'incus_test_value',
      NODE_ENV: 'incus_testing'
    };

    sandbox = await Sandbox.create('incus', {
      envs: customEnvs
    });

    expect(sandbox).toBeDefined();
    expect(sandbox.id()).toBeDefined();

    // Note: Environment variable verification would require proper command execution
    // This is a placeholder until websocket implementation is complete
  }, 120000);

  test('destroy incus sandbox', async () => {
    if (!process.env.INCUS_URL && !process.env.CI) {
      return;
    }

    sandbox = await Sandbox.create('incus');
    const sandboxId = sandbox.id();
    expect(sandboxId).toBeDefined();

    await sandbox.destroy();

    // After destroy, the instance name should be null
    expect(() => sandbox.id()).toThrow();
    sandbox = undefined;
  }, 120000);

  test('connect to existing incus sandbox', async () => {
    if (!process.env.INCUS_URL && !process.env.CI) {
      return;
    }

    // Create initial sandbox
    const sandbox1 = await Sandbox.create('incus');
    const sandboxId = sandbox1.id();

    // Write a test file
    await sandbox1.writeFile('/tmp/connection-test.txt', 'Connection test');

    // Connect to the same sandbox with a new instance
    const sandbox2 = await Sandbox.connect('incus', sandboxId);
    expect(sandbox2.id()).toBe(sandboxId);

    // Verify we can access the file from the connected instance
    const content = await sandbox2.readFile('/tmp/connection-test.txt');
    expect(content).toBe('Connection test');

    // Cleanup both instances
    await sandbox1.destroy();
    sandbox = undefined; // Prevent afterEach cleanup since we already destroyed
  }, 180000);

  test('get preview URL for incus sandbox', async () => {
    if (!process.env.INCUS_URL && !process.env.CI) {
      return;
    }

    sandbox = await Sandbox.create('incus');

    // This might throw if the instance doesn't have network configuration yet
    // So we wrap it in a try-catch for this test
    try {
      const previewUrl = await sandbox.getPreviewUrl(8080);
      expect(previewUrl).toMatch(/^http:\/\/\d+\.\d+\.\d+\.\d+:8080$/);
    } catch (error) {
      // It's acceptable if network info isn't available immediately
      expect(error.message).toContain('No accessible IP address found');
    }
  }, 120000);
});