{
  description = "Incus provider for sandbox";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    flake-compat = {
      url = "github:edolstra/flake-compat";
      flake = false;
    };
  };

  outputs = { self, nixpkgs, flake-utils, flake-compat }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
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
        };
      }
    );
}
