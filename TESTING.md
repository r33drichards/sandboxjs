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

The client certificate authentication test runs automatically as part of the NixOS integration test suite. The NixOS test environment:

1. Automatically generates a client certificate and key
2. Adds the certificate to Incus trust store
3. Exports environment variables for the test:
   - `INCUS_BASE_URL=https://localhost:8443`
   - `INCUS_CLIENT_CERT=/tmp/incus-test-certs/client.crt`
   - `INCUS_CLIENT_KEY=/tmp/incus-test-certs/client.key`
   - `INCUS_PROJECT=default`

The test will:
1. Create a sandbox using client certificate authentication
2. Verify the sandbox was created successfully
3. Run a basic command to test functionality
4. Clean up by destroying the sandbox

To run the test manually with a local Incus server:

```bash
# Generate client certificate and key
openssl req -x509 -newkey rsa:4096 -keyout client.key -out client.crt -days 365 -nodes -subj "/CN=test-client"

# Add the client certificate to Incus
incus config trust add-certificate client.crt

# Run the test
export INCUS_BASE_URL=https://localhost:8443
export INCUS_CLIENT_CERT=./client.crt
export INCUS_CLIENT_KEY=./client.key
export INCUS_PROJECT=default

npm test -- --test-name-pattern="client certificate auth"
```
