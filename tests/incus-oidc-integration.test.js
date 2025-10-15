import { describe, test, beforeAll, afterEach, expect } from 'vitest';
import { IncusSandbox } from '../dist/providers/incus.js';
import { getKeycloakToken } from './helpers/keycloak-auth.js';

describe('Incus OIDC Authentication Integration Tests', () => {
  let sandbox;
  let oidcToken;

  beforeAll(async () => {
    // Skip if no Incus URL configured
    if (!process.env.INCUS_URL && !process.env.CI) {
      console.warn('INCUS_URL not set, skipping OIDC integration tests');
      return;
    }

    // Obtain OIDC token from Keycloak
    try {
      oidcToken = await getKeycloakToken(
        'http://localhost:8080',
        'incus-test',
        'incus-client',
        'test-client-secret-12345'
      );
      console.log('Successfully obtained OIDC token from Keycloak');
    } catch (error) {
      console.error('Failed to obtain OIDC token:', error.message);
      throw error;
    }
  }, 30000);

  afterEach(async () => {
    if (sandbox) {
      try {
        await sandbox.destroy();
      } catch (error) {
        console.warn('Failed to destroy sandbox during cleanup:', error.message);
      }
      sandbox = undefined;
    }
  }, 180000);

  test('authenticate to Incus with OIDC token and create container', async () => {
    if (!process.env.INCUS_URL && !process.env.CI) {
      return;
    }

    // Parse Incus URL
    const urlParts = new URL(process.env.INCUS_URL);
    const baseURL = `${urlParts.protocol}//${urlParts.host}`;

    // Create sandbox with OIDC authentication
    sandbox = new IncusSandbox({
      baseURL,
      oidcToken,
      project: 'default'
    });

    // Initialize sandbox (create container)
    await sandbox.init();

    // Verify sandbox was created
    expect(sandbox.id()).toBeDefined();
    expect(typeof sandbox.id()).toBe('string');
    expect(sandbox.id()).toMatch(/^sandbox-\d+-[a-z0-9]+$/);

    // Verify we can run commands (proves authentication worked)
    const result = await sandbox.runCommand('echo "OIDC auth successful"');
    expect(result).toBeDefined();
    expect(result.exitCode).toBe(0);
  }, 300000);

  test('OIDC authentication fails with invalid token', async () => {
    if (!process.env.INCUS_URL && !process.env.CI) {
      return;
    }

    const urlParts = new URL(process.env.INCUS_URL);
    const baseURL = `${urlParts.protocol}//${urlParts.host}`;

    // Create sandbox with invalid OIDC token
    const invalidSandbox = new IncusSandbox({
      baseURL,
      oidcToken: 'invalid-token-12345',
      project: 'default'
    });

    // Attempt to create container should fail with auth error
    await expect(invalidSandbox.init()).rejects.toThrow();
  }, 60000);
});
