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
