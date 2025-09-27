#!/usr/bin/env bash
set -euo pipefail

# Script to run a simple Incus integration test without full NixOS test framework

echo "Running simple Incus integration test..."

# Check if Incus is available
if ! command -v incus &> /dev/null; then
    echo "Error: incus command not found. Please install Incus first."
    exit 1
fi

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "Error: node command not found. Please install Node.js first."
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "Error: npm command not found. Please install npm first."
    exit 1
fi

# Build the project
echo "Building the project..."
npm install
npm run build

# Set environment variable for Incus
export INCUS_URL="http://localhost:8443"

# Check if Incus is running
if ! incus info &>/dev/null; then
    echo "Error: Incus is not running or not accessible. Please start Incus daemon first."
    echo "Hint: Try running 'sudo incus admin init' to initialize Incus"
    exit 1
fi

# Ensure we have a default image
echo "Setting up Ubuntu 22.04 image..."
if ! incus image list | grep -q "ubuntu/22.04"; then
    incus image copy images:ubuntu/22.04 local: --alias ubuntu/22.04
fi

echo "Running Incus integration tests..."
npx vitest run tests/incus-integration.test.js --reporter=verbose

echo "✅ Test completed!"