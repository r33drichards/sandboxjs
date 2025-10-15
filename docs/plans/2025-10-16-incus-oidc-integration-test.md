# Incus OIDC Integration Test Implementation Plan

> **For Claude:** Use `${SUPERPOWERS_SKILLS_ROOT}/skills/collaboration/executing-plans/SKILL.md` to implement this plan task-by-task.

**Goal:** Add integration test for Incus authentication via Keycloak OpenID Connect in a NixOS VM test environment.

**Architecture:** Single NixOS VM running both Keycloak (port 8080) and Incus with OIDC configuration. Test obtains OAuth token from Keycloak using client credentials grant, then uses that token to authenticate to Incus API and create a container.

**Tech Stack:** NixOS, Keycloak, Incus, PostgreSQL (for Keycloak), TypeScript/Vitest, Axios

---

## Task 1: Create Keycloak Realm Configuration

**Files:**
- Create: `keycloak-realm-config.json`

**Step 1: Create minimal Keycloak realm export JSON**

Create `keycloak-realm-config.json` in project root with test realm configuration:

```json
{
  "realm": "incus-test",
  "enabled": true,
  "sslRequired": "none",
  "registrationAllowed": false,
  "clients": [
    {
      "clientId": "incus-client",
      "enabled": true,
      "protocol": "openid-connect",
      "publicClient": false,
      "directAccessGrantsEnabled": true,
      "serviceAccountsEnabled": true,
      "clientAuthenticatorType": "client-secret",
      "secret": "test-client-secret-12345",
      "redirectUris": ["*"],
      "webOrigins": ["*"],
      "attributes": {
        "access.token.lifespan": "3600"
      }
    }
  ],
  "users": [
    {
      "username": "testuser",
      "enabled": true,
      "credentials": [
        {
          "type": "password",
          "value": "testpass123",
          "temporary": false
        }
      ]
    }
  ]
}
```

**Step 2: Commit realm configuration**

```bash
git add keycloak-realm-config.json
git commit -m "feat: add Keycloak realm configuration for OIDC testing"
```

---

## Task 2: Update NixOS Test with Keycloak

**Files:**
- Modify: `nixos-test.nix:68-165` (nodes.machine configuration)

**Step 1: Add PostgreSQL service for Keycloak**

In `nixos-test.nix`, add PostgreSQL configuration inside `nodes.machine` after line 79:

```nix
    # PostgreSQL for Keycloak
    services.postgresql = {
      enable = true;
      package = pkgs.postgresql_15;
      ensureDatabases = [ "keycloak" ];
      ensureUsers = [
        {
          name = "keycloak";
          ensureDBOwnership = true;
        }
      ];
      authentication = pkgs.lib.mkOverride 10 ''
        local all all trust
        host all all 127.0.0.1/32 trust
        host all all ::1/128 trust
      '';
    };
```

**Step 2: Add Keycloak service configuration**

After the PostgreSQL configuration, add Keycloak service:

```nix
    # Keycloak service
    services.keycloak = {
      enable = true;
      database = {
        type = "postgresql";
        host = "localhost";
        port = 5432;
        name = "keycloak";
        username = "keycloak";
        passwordFile = pkgs.writeText "keycloak-db-password" "";
      };
      settings = {
        hostname = "localhost";
        http-enabled = true;
        http-host = "0.0.0.0";
        http-port = 8080;
        hostname-strict = false;
        hostname-strict-https = false;
        proxy = "edge";
      };
      initialAdminPassword = "admin123";
    };
```

**Step 3: Add Keycloak realm import**

Create a systemd service to import the realm after Keycloak starts. Add after the Keycloak service configuration:

```nix
    # Import Keycloak realm
    systemd.services.keycloak-realm-import = {
      description = "Import Keycloak test realm";
      after = [ "keycloak.service" ];
      requires = [ "keycloak.service" ];
      wantedBy = [ "multi-user.target" ];
      serviceConfig = {
        Type = "oneshot";
        RemainAfterExit = true;
      };
      script = ''
        # Wait for Keycloak to be ready
        until ${pkgs.curl}/bin/curl -sf http://localhost:8080/health/ready > /dev/null 2>&1; do
          echo "Waiting for Keycloak to be ready..."
          sleep 2
        done

        # Get admin token
        TOKEN=$(${pkgs.curl}/bin/curl -s -X POST http://localhost:8080/realms/master/protocol/openid-connect/token \
          -H "Content-Type: application/x-www-form-urlencoded" \
          -d "username=admin" \
          -d "password=admin123" \
          -d "grant_type=password" \
          -d "client_id=admin-cli" | ${pkgs.jq}/bin/jq -r .access_token)

        # Import realm
        ${pkgs.curl}/bin/curl -X POST http://localhost:8080/admin/realms \
          -H "Authorization: Bearer $TOKEN" \
          -H "Content-Type: application/json" \
          -d @${./keycloak-realm-config.json}

        echo "Keycloak realm imported successfully"
      '';
    };
```

**Step 4: Commit NixOS test updates**

```bash
git add nixos-test.nix
git commit -m "feat: add Keycloak and PostgreSQL to NixOS test"
```

---

## Task 3: Configure Incus OIDC in NixOS Test

**Files:**
- Modify: `nixos-test.nix:82-119` (Incus preseed configuration)

**Step 1: Add OIDC configuration to Incus preseed**

In the `virtualisation.incus.preseed` section, add OIDC configuration. After the existing preseed configuration (around line 118), add:

```nix
          config = {
            "oidc.issuer" = "http://localhost:8080/realms/incus-test";
            "oidc.client.id" = "incus-client";
            "oidc.audience" = "incus-client";
          };
```

The preseed structure should look like:

```nix
        preseed = {
          networks = [ ... ];
          profiles = [ ... ];
          storage_pools = [ ... ];

          config = {
            "oidc.issuer" = "http://localhost:8080/realms/incus-test";
            "oidc.client.id" = "incus-client";
            "oidc.audience" = "incus-client";
          };
        };
```

**Step 2: Commit Incus OIDC configuration**

```bash
git add nixos-test.nix
git commit -m "feat: configure Incus to use Keycloak OIDC"
```

---

## Task 4: Update TypeScript Client for OIDC Authentication

**Files:**
- Modify: `src/providers/incus.ts:4-11` (IncusConnectionOptions interface)
- Modify: `src/providers/incus.ts:46-56` (axios interceptor)

**Step 1: Add oidcToken to connection options**

Update the `IncusConnectionOptions` interface to include OIDC token:

```typescript
export interface IncusConnectionOptions {
  baseURL: string;
  cert?: string;      // Client certificate path
  key?: string;       // Client key path
  serverCert?: string; // Server certificate fingerprint for verification
  project?: string;   // Default project to use
  token?: string;     // Authentication token for web UI
  oidcToken?: string; // OIDC/OAuth2 bearer token
}
```

**Step 2: Update axios interceptor to support OIDC tokens**

Replace the existing token interceptor (lines 48-56) with one that supports both auth methods:

```typescript
    // Add authentication if provided
    if (this.connectionOptions.oidcToken) {
      // OIDC token uses standard OAuth2 Bearer header
      this.axiosInstance.interceptors.request.use((config) => {
        config.headers['Authorization'] = `Bearer ${this.connectionOptions.oidcToken}`;
        return config;
      });
    } else if (this.connectionOptions.token) {
      // Legacy web UI token uses cookie
      this.axiosInstance.interceptors.request.use((config) => {
        config.headers['Cookie'] = `auth_token=${this.connectionOptions.token}`;
        return config;
      });
    }
```

**Step 3: Commit TypeScript client changes**

```bash
git add src/providers/incus.ts
git commit -m "feat: add OIDC bearer token authentication to Incus client"
```

---

## Task 5: Add OIDC Token Helper Function

**Files:**
- Create: `tests/helpers/keycloak-auth.js`

**Step 1: Create Keycloak authentication helper**

Create `tests/helpers/keycloak-auth.js`:

```javascript
import axios from 'axios';

/**
 * Obtain an access token from Keycloak using client credentials grant
 * @param {string} keycloakUrl - Base URL of Keycloak (e.g., "http://localhost:8080")
 * @param {string} realm - Realm name
 * @param {string} clientId - Client ID
 * @param {string} clientSecret - Client secret
 * @returns {Promise<string>} Access token
 */
export async function getKeycloakToken(keycloakUrl, realm, clientId, clientSecret) {
  const tokenUrl = `${keycloakUrl}/realms/${realm}/protocol/openid-connect/token`;

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', clientId);
  params.append('client_secret', clientSecret);

  try {
    const response = await axios.post(tokenUrl, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    return response.data.access_token;
  } catch (error) {
    throw new Error(`Failed to obtain Keycloak token: ${error.message}`);
  }
}
```

**Step 2: Commit helper function**

```bash
mkdir -p tests/helpers
git add tests/helpers/keycloak-auth.js
git commit -m "feat: add Keycloak token authentication helper"
```

---

## Task 6: Create OIDC Integration Test

**Files:**
- Create: `tests/incus-oidc-integration.test.js`

**Step 1: Write failing OIDC authentication test**

Create `tests/incus-oidc-integration.test.js`:

```javascript
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
```

**Step 2: Run test to verify it fails**

```bash
npm run build
INCUS_URL="http://localhost:8080?auth_token=dummy" npm test tests/incus-oidc-integration.test.js
```

Expected: Test should fail because Keycloak and OIDC are not set up yet

**Step 3: Commit the test**

```bash
git add tests/incus-oidc-integration.test.js
git commit -m "test: add OIDC authentication integration test (failing)"
```

---

## Task 7: Update NixOS Test Script to Run OIDC Tests

**Files:**
- Modify: `nixos-test.nix:167-287` (testScript section)

**Step 1: Add Keycloak wait function to test script**

After the `wait_for_incus()` function (around line 177), add:

```python
    def wait_for_keycloak():
        """Wait for Keycloak to be ready"""
        machine.wait_for_unit("postgresql.service")
        machine.wait_for_unit("keycloak.service")
        machine.wait_for_unit("keycloak-realm-import.service")

        # Wait for Keycloak health endpoint
        machine.wait_until_succeeds(
            "curl -sf http://localhost:8080/health/ready"
        )

        # Verify realm was imported
        machine.wait_until_succeeds(
            "curl -sf http://localhost:8080/realms/incus-test/.well-known/openid-configuration"
        )
```

**Step 2: Update test execution to include Keycloak wait**

In the test execution section (around line 263), add Keycloak wait before Incus:

```python
    start_all()

    with subtest("Wait for system to be ready"):
        machine.wait_for_unit("multi-user.target")
        machine.wait_until_succeeds("systemctl is-system-running", timeout=60)

    with subtest("Wait for Keycloak to be ready"):
        wait_for_keycloak()

    with subtest("Wait for Incus to be ready"):
        wait_for_incus()
```

**Step 3: Add OIDC-specific test execution**

After the existing sandbox tests (around line 282), add:

```python
    with subtest("Run OIDC integration tests"):
        result = machine.succeed(f"""
            cd /tmp/sandbox
            export INCUS_URL="{incus_url}"
            export NODE_ENV=test
            export VITEST_TIMEOUT=180000
            timeout 1800 npx vitest run tests/incus-oidc-integration.test.js --reporter=verbose --test-timeout=180000 2>&1
        """)
        print(f"OIDC test results: {result}")

        if "✓" in result or "passed" in result.lower():
            print("✅ OIDC tests passed!")
        else:
            print("⚠️  OIDC tests may have failed - check output above")
```

**Step 4: Commit test script updates**

```bash
git add nixos-test.nix
git commit -m "test: add Keycloak wait and OIDC test execution to NixOS test"
```

---

## Task 8: Update GitHub Actions Workflow

**Files:**
- Modify: `.github/workflows/incus-integration.yml:6-13` (trigger paths)

**Step 1: Add new files to workflow trigger paths**

Update the paths section to include new files:

```yaml
    paths:
      - 'src/providers/incus.ts'
      - 'src/examples/incus.ts'
      - 'tests/incus-integration.test.js'
      - 'tests/incus-oidc-integration.test.js'
      - 'tests/helpers/keycloak-auth.js'
      - 'keycloak-realm-config.json'
      - 'incus-api.yaml'
      - 'nixos-test.nix'
      - 'flake.nix'
      - '.github/workflows/incus-integration.yml'
```

**Step 2: Commit workflow updates**

```bash
git add .github/workflows/incus-integration.yml
git commit -m "ci: add OIDC test files to workflow triggers"
```

---

## Task 9: Update Documentation

**Files:**
- Modify: `TESTING.md:1-27`

**Step 1: Document OIDC testing setup**

Add OIDC testing documentation after the existing content:

```markdown

## OIDC Authentication Testing

The integration test includes Keycloak for testing OpenID Connect authentication.

### Services Involved

- **Keycloak** (port 8080): Identity provider with OIDC support
- **PostgreSQL**: Keycloak's database
- **Incus**: Configured to accept OIDC tokens from Keycloak

### Test Realm Configuration

- **Realm**: `incus-test`
- **Client**: `incus-client` (client credentials flow)
- **Client Secret**: `test-client-secret-12345`
- **Test User**: `testuser` / `testpass123`

### Running OIDC Tests Locally

To test OIDC authentication in the full NixOS environment:

```bash
nix flake check --show-trace -L
```

This will:
1. Start PostgreSQL and Keycloak
2. Import the test realm configuration
3. Start Incus with OIDC configuration
4. Run integration tests including OIDC authentication

### OIDC Token Flow

1. Test obtains access token from Keycloak using client credentials
2. Test passes token to Incus client via `oidcToken` option
3. Incus client sends token as `Authorization: Bearer <token>` header
4. Incus validates token with Keycloak's JWKS endpoint
5. If valid, Incus processes the API request
```

**Step 2: Commit documentation**

```bash
git add TESTING.md
git commit -m "docs: add OIDC authentication testing documentation"
```

---

## Task 10: Verification and Testing

**Files:**
- Test: All modified files

**Step 1: Build the project**

```bash
npm run build
```

Expected: Build succeeds without errors

**Step 2: Run the full NixOS integration test**

```bash
nix flake check --show-trace -L
```

Expected:
- All services start successfully
- Keycloak realm imports
- Incus OIDC configuration succeeds
- OIDC integration tests pass

**Step 3: Verify test output**

Check that the test output shows:
- Keycloak health check passing
- OIDC token obtained successfully
- Container created with OIDC authentication
- Invalid token test fails as expected

**Step 4: Final commit if any fixes needed**

If fixes were needed:
```bash
git add <fixed-files>
git commit -m "fix: address integration test issues"
```

---

## Success Criteria

- [ ] Keycloak starts successfully in NixOS test VM
- [ ] Test realm imports with OIDC client configuration
- [ ] Incus accepts OIDC configuration
- [ ] Test can obtain token from Keycloak
- [ ] Test can authenticate to Incus with OIDC token
- [ ] Container creation works with OIDC auth
- [ ] Invalid token properly rejected
- [ ] All tests pass in CI
- [ ] Documentation updated

## Future Enhancements (Out of Scope)

- Token expiration and refresh flow testing
- Multiple users and role-based access control
- Different OIDC flows (authorization code, device flow)
- Token claim validation testing
- OIDC discovery endpoint verification
- Integration with other identity providers
