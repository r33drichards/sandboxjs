#!/usr/bin/env node
import { Sandbox } from './dist/index.js';

async function testIncusBasic() {
  console.log('Testing Incus sandbox creation...');

  try {
    // Skip if INCUS_URL is not set
    if (!process.env.INCUS_URL) {
      console.log('INCUS_URL not set - this would normally skip the test');
      console.log('Set INCUS_URL=http://localhost:8443 to run against a real Incus instance');
      return;
    }

    const sandbox = await Sandbox.create('incus');
    console.log('✓ Sandbox created:', sandbox.id());

    // Test basic command execution
    console.log('Testing command execution...');
    const result = await sandbox.runCommand('echo "Hello from Incus"');
    console.log('✓ Command result:', result);

    // Clean up
    await sandbox.destroy();
    console.log('✓ Sandbox destroyed successfully');

  } catch (error) {
    console.error('✗ Test failed:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

testIncusBasic();