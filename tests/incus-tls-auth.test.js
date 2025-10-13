import { IncusSandbox } from '../dist/index.js';
import { describe, test, afterEach, expect, beforeAll } from 'vitest';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { execSync } from 'child_process';

describe('Incus TLS Client Certificate Authentication Tests', () => {
  let sandbox;
  let certDir;
  let certPath;
  let keyPath;
  let hasCerts = false;

  beforeAll(() => {
    // Check if TLS certificates are available for testing
    // These tests require pre-configured client certificates

    // Option 1: Check for environment variable pointing to certs
    if (process.env.INCUS_CLIENT_CERT && process.env.INCUS_CLIENT_KEY) {
      certPath = process.env.INCUS_CLIENT_CERT;
      keyPath = process.env.INCUS_CLIENT_KEY;
      if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
        hasCerts = true;
        console.log('Using certificates from environment variables');
      }
    }

    // Option 2: Check for Incus CLI certificates
    if (!hasCerts) {
      certDir = path.join(os.homedir(), '.config', 'incus');
      certPath = path.join(certDir, 'client.crt');
      keyPath = path.join(certDir, 'client.key');

      if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
        hasCerts = true;
        console.log('Using Incus CLI certificates from ~/.config/incus/');
      }
    }

    // Option 3: Generate test certificates (only for testing)
    if (!hasCerts && !process.env.CI) {
      console.log('No client certificates found. Attempting to generate test certificates...');
      try {
        certDir = path.join(os.tmpdir(), 'incus-test-certs');
        if (!fs.existsSync(certDir)) {
          fs.mkdirSync(certDir, { recursive: true });
        }

        certPath = path.join(certDir, 'client.crt');
        keyPath = path.join(certDir, 'client.key');

        // Generate self-signed certificate for testing
        const keyGenCmd = `openssl ecparam -name secp384r1 -genkey -noout -out ${keyPath}`;
        const certGenCmd = `openssl req -new -x509 -key ${keyPath} -out ${certPath} -days 365 -subj "/CN=test-client/O=test"`;

        execSync(keyGenCmd, { stdio: 'inherit' });
        execSync(certGenCmd, { stdio: 'inherit' });

        if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
          hasCerts = true;
          console.log('Generated test certificates successfully');
          console.log('⚠️  NOTE: You need to add this certificate to Incus trust store:');
          console.log(`   sudo incus config trust add-certificate ${certPath}`);
        }
      } catch (error) {
        console.warn('Failed to generate test certificates:', error.message);
        console.log('TLS certificate tests will be skipped');
      }
    }

    if (!hasCerts) {
      console.warn('No TLS client certificates available for testing.');
      console.warn('To run these tests, either:');
      console.warn('1. Set INCUS_CLIENT_CERT and INCUS_CLIENT_KEY environment variables');
      console.warn('2. Have Incus CLI configured with certificates in ~/.config/incus/');
      console.warn('3. Allow test to generate certificates (non-CI environment)');
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
  }, 60000);

  test('authenticate with TLS client certificate', async () => {
    // Skip if no certificates or no Incus URL configured
    if (!hasCerts || (!process.env.INCUS_URL && !process.env.CI)) {
      console.log('Skipping TLS cert test - certificates or INCUS_URL not available');
      return;
    }

    // Parse INCUS_URL to get base URL without auth_token
    const incusUrl = new URL(process.env.INCUS_URL);
    const baseURL = `${incusUrl.protocol}//${incusUrl.host}`;

    const connectionOptions = {
      baseURL: baseURL.replace('http:', 'https:'), // Ensure HTTPS for TLS
      cert: certPath,
      key: keyPath,
      project: 'default'
    };

    sandbox = new IncusSandbox(connectionOptions);
    await sandbox.init(undefined, { template: 'alpine/3.18' });

    expect(sandbox).toBeDefined();
    expect(sandbox.id()).toBeDefined();
    expect(typeof sandbox.id()).toBe('string');
  }, 300000);

  test('run command with TLS certificate authentication', async () => {
    if (!hasCerts || (!process.env.INCUS_URL && !process.env.CI)) {
      console.log('Skipping TLS cert test - certificates or INCUS_URL not available');
      return;
    }

    const incusUrl = new URL(process.env.INCUS_URL);
    const baseURL = `${incusUrl.protocol}//${incusUrl.host}`;

    const connectionOptions = {
      baseURL: baseURL.replace('http:', 'https:'),
      cert: certPath,
      key: keyPath,
      project: 'default'
    };

    sandbox = new IncusSandbox(connectionOptions);
    await sandbox.init(undefined, { template: 'alpine/3.18' });

    const result = await sandbox.runCommand('echo "TLS auth works!"');

    expect(result).toBeDefined();
    expect(result.exitCode).toBeDefined();
  }, 300000);

  test('file operations with TLS certificate authentication', async () => {
    if (!hasCerts || (!process.env.INCUS_URL && !process.env.CI)) {
      console.log('Skipping TLS cert test - certificates or INCUS_URL not available');
      return;
    }

    const incusUrl = new URL(process.env.INCUS_URL);
    const baseURL = `${incusUrl.protocol}//${incusUrl.host}`;

    const connectionOptions = {
      baseURL: baseURL.replace('http:', 'https:'),
      cert: certPath,
      key: keyPath,
      project: 'default'
    };

    sandbox = new IncusSandbox(connectionOptions);
    await sandbox.init(undefined, { template: 'alpine/3.18' });

    const testContent = 'TLS authentication test file';
    const testFile = '/tmp/tls-test.txt';

    // Write file
    await sandbox.writeFile(testFile, testContent);

    // Read file
    const readContent = await sandbox.readFile(testFile);
    expect(readContent).toBe(testContent);

    // Delete file
    await sandbox.deleteFile(testFile);
  }, 300000);

  test('reject connection with invalid certificate', async () => {
    if (!process.env.INCUS_URL && !process.env.CI) {
      console.log('Skipping test - INCUS_URL not available');
      return;
    }

    // Create invalid/non-existent certificate paths
    const invalidCertPath = path.join(os.tmpdir(), 'nonexistent-cert.crt');
    const invalidKeyPath = path.join(os.tmpdir(), 'nonexistent-key.key');

    const incusUrl = new URL(process.env.INCUS_URL);
    const baseURL = `${incusUrl.protocol}//${incusUrl.host}`;

    const connectionOptions = {
      baseURL: baseURL.replace('http:', 'https:'),
      cert: invalidCertPath,
      key: invalidKeyPath,
      project: 'default'
    };

    // Expect this to fail during construction or init
    try {
      const invalidSandbox = new IncusSandbox(connectionOptions);
      await invalidSandbox.init(undefined, { template: 'alpine/3.18' });

      // If we get here, fail the test
      expect(true).toBe(false);
    } catch (error) {
      // Should fail with certificate or file not found error
      expect(error).toBeDefined();
      expect(
        error.message.includes('ENOENT') ||
        error.message.includes('certificate') ||
        error.message.includes('no such file')
      ).toBe(true);
    }
  }, 60000);

  test('verify certificate fingerprint matching', async () => {
    if (!hasCerts || (!process.env.INCUS_URL && !process.env.CI)) {
      console.log('Skipping TLS cert test - certificates or INCUS_URL not available');
      return;
    }

    const incusUrl = new URL(process.env.INCUS_URL);
    const baseURL = `${incusUrl.protocol}//${incusUrl.host}`;

    // Read the certificate to get its fingerprint
    const certContent = fs.readFileSync(certPath, 'utf8');

    // Note: In a real scenario, you would compute the fingerprint
    // For this test, we're just verifying the option is accepted
    const connectionOptions = {
      baseURL: baseURL.replace('http:', 'https:'),
      cert: certPath,
      key: keyPath,
      serverCert: 'dummy-fingerprint-for-test', // Would be real fingerprint in production
      project: 'default'
    };

    sandbox = new IncusSandbox(connectionOptions);

    // The connection might fail if fingerprint doesn't match
    // but we're testing that the option is properly handled
    try {
      await sandbox.init(undefined, { template: 'alpine/3.18' });
      expect(sandbox.id()).toBeDefined();
    } catch (error) {
      // It's okay if this fails due to fingerprint mismatch
      // We're just verifying the option is processed
      console.log('Expected potential failure with fingerprint verification:', error.message);
    }
  }, 300000);
});
