{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_22
    openjdk17
    python3
    curl
    wget
  ];

  shellHook = ''
    echo "Development environment for Incus provider"
    echo "Node.js version: $(node --version)"
    echo "Java version: $(java -version 2>&1 | head -n1)"
    echo "Available tools: nodejs, java, python3, curl, wget"
  '';
}