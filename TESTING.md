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


### Client Certificate Authentication Test

To test client certificate authentication with Incus:

1. Generate client certificates:
```bash
# Generate client certificate and key
openssl req -x509 -newkey rsa:4096 -keyout client.key -out client.crt -days 365 -nodes -subj "/CN=test-client"

# Add the client certificate to Incus
incus config trust add-certificate client.crt
```

2. Run the test with environment variables:
```bash
export INCUS_BASE_URL=https://localhost:8443
export INCUS_CLIENT_CERT=/path/to/client.crt
export INCUS_CLIENT_KEY=/path/to/client.key
export INCUS_PROJECT=default

npm test -- --test-name-pattern="client certificate auth"
```

The test will:
1. Create a sandbox using client certificate authentication
2. Verify the sandbox was created successfully
3. Run a basic command to test functionality
4. Clean up by destroying the sandbox
