# Incus Sandbox Integration Testing

This directory contains comprehensive integration tests for the Incus sandbox implementation, including both JavaScript-based tests and NixOS integration tests.

## Files

- `tests/incus-integration.test.js` - Vitest-based integration tests for Incus sandbox
- `nixos-test.nix` - NixOS test module for full system integration testing
- `flake.nix` - Nix flake with test configurations
- `run-nixos-test.sh` - Script to run the full NixOS integration test
- `run-simple-test.sh` - Script to run tests against a local Incus installation

## Test Overview

### JavaScript Integration Tests (`tests/incus-integration.test.js`)

The main integration test suite covers:

- **Basic Operations**: Create, suspend, resume, and destroy sandboxes
- **File Operations**: Read, write, move, delete files and create directories
- **Command Execution**: Run commands inside containers
- **Environment Variables**: Set custom environment variables in containers
- **Connection Management**: Connect to existing sandbox instances
- **Network Configuration**: Get preview URLs for running services

### Key Test Features

- **Environment Awareness**: Tests check for `INCUS_URL` and skip gracefully in CI
- **Proper Cleanup**: Each test cleans up sandbox resources automatically
- **Extended Timeouts**: 60-90 second timeouts account for container lifecycle operations
- **Error Handling**: Graceful handling of expected failures

## Running Tests

### Option 1: Simple Local Test

If you have Incus installed and running locally:

```bash
# Initialize Incus (if not done before)
sudo incus admin init

# Run the simple test
./run-simple-test.sh
```

### Option 2: Full NixOS Integration Test

For a complete isolated test environment:

```bash
# Run the full NixOS test
./run-nixos-test.sh
```

This will:
1. Create a NixOS VM with Incus pre-configured
2. Set up container images and networking
3. Build and run the integration tests
4. Clean up resources

### Option 3: Manual Testing

```bash
# Build the project
npm install
npm run build

# Set environment variables
export INCUS_URL=http://localhost:8443

# Run specific tests
npx vitest run tests/incus-integration.test.js
```

## NixOS Test Environment

The NixOS test creates a complete testing environment with:

- **Incus Configuration**: Incus daemon with default networking and storage
- **Container Images**: Pre-loaded Ubuntu 22.04 container image
- **Node.js Environment**: Node.js 22 with npm for building and running tests
- **Isolated Network**: Dedicated bridge network for container communication

### Test Phases

1. **System Setup**: Wait for all services to be ready
2. **Incus Verification**: Verify Incus daemon is working
3. **Image Setup**: Download and configure container images
4. **Basic Functionality**: Test Incus container lifecycle
5. **Integration Tests**: Run the full sandbox test suite
6. **Cleanup**: Remove all test containers and resources

## Environment Variables

- `INCUS_URL`: Incus API endpoint (default: `http://localhost:8443`)
- `NODE_ENV`: Set to `test` during testing
- `CI`: If set, tests expect Incus to be available

## Timeouts

- Container creation: 60 seconds
- Container operations: 60-90 seconds
- Full test suite: 10 minutes
- NixOS test VM: 15 minutes

## Error Handling

Tests are designed to:
- Skip gracefully when Incus is not available
- Clean up resources even on test failures
- Provide detailed error messages for debugging
- Handle network and timing issues in container environments

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