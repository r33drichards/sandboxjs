#!/usr/bin/env bash
set -euo pipefail

# Script to run NixOS integration test with TLS certificate authentication

echo "Running NixOS TLS Certificate Authentication Test..."
echo "This test will:"
echo "  1. Create a NixOS VM with Incus configured for HTTPS"
echo "  2. Generate TLS client certificates"
echo "  3. Add certificates to Incus trust store"
echo "  4. Run integration tests using certificate authentication"
echo ""

# Check if nix is available
if ! command -v nix &> /dev/null; then
    echo "Error: nix command not found. Please install Nix first."
    echo "Visit: https://nixos.org/download.html"
    exit 1
fi

# Check for flakes support
if ! nix flake --help &>/dev/null; then
    echo "Error: Nix flakes not enabled."
    echo "Enable flakes by adding to ~/.config/nix/nix.conf:"
    echo "  experimental-features = nix-command flakes"
    exit 1
fi

echo "Building and running TLS certificate authentication test..."
echo "This may take 15-30 minutes on first run (builds NixOS container images)"
echo ""

# Build the test
nix build .#checks.x86_64-linux.incus-tls-cert-auth -L

echo ""
echo "✅ TLS certificate authentication test completed successfully!"
echo ""
echo "The test verified:"
echo "  - Client certificate generation using OpenSSL"
echo "  - Adding certificates to Incus trust store"
echo "  - HTTPS connection with mutual TLS"
echo "  - Running integration tests with certificate authentication"
