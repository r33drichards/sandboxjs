# Incus Sandbox Integration Testing


## Files

- `tests/incus-integration.test.js` - Vitest-based integration tests for Incus sandbox
- `nixos-test.nix` - NixOS test module for full system integration testing
- `flake.nix` - Nix flake with test configurations


## Running Tests


### Full NixOS Integration Test

For a complete isolated test environment:

```bash
nix flake check --show-trace -L
```

This will:
1. Create a NixOS VM with Incus pre-configured
2. Set up container images and networking
3. Build and run the integration tests
4. Clean up resources

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
