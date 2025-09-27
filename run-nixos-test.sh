#!/usr/bin/env bash
set -euo pipefail

# Script to run the NixOS Incus integration test

echo "Starting NixOS Incus integration test..."

# Check if nix flakes are enabled
if ! nix flake --help &>/dev/null; then
    echo "Error: Nix flakes are not enabled. Please enable them in your nix configuration."
    exit 1
fi

# Build and run the test
echo "Building and running the test..."
nix flake check --show-trace

echo "Running the interactive test driver..."
nix run .#test-incus-integration

echo "Test completed!"