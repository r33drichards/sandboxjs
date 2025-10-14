# Incus Sandbox Integration Testing

This directory contains comprehensive integration tests for the Incus sandbox implementation, including both JavaScript-based tests and NixOS integration tests.

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


## Development

To add new tests:

1. Add test cases to `tests/incus-integration.test.js`
2. Follow the existing patterns for cleanup and error handling
3. Use appropriate timeouts for container operations
4. Test both success and failure scenarios

To modify the NixOS test environment:

1. Edit `nixos-test.nix` to change VM configuration
2. Update the `testScript` for new test scenarios
3. Rebuild with `nix flake check`