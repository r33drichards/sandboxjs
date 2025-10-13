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

        # Build the sandbox package
        sandbox-package = pkgs.buildNpmPackage {
          pname = "gitwit-sandbox";
          version = "1.0.3";

          src = ./.;

          npmDepsHash = "sha256-iZdppZilvG6mlMPS0AioIbNzpaJj00+ewZDjZgVhfoA=";

          # Build script
          buildPhase = ''
            runHook preBuild
            npm run build
            runHook postBuild
          '';

          # Install the built package
          installPhase = ''
            runHook preInstall
            mkdir -p $out
            cp -r dist $out/
            cp -r node_modules $out/
            cp package.json $out/
            runHook postInstall
          '';

          meta = with pkgs.lib; {
            description = "A unified interface for Linux-based cloud sandbox providers";
            license = licenses.mit;
          };
        };
      in
      {
        packages.default = sandbox-package;

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

        checks.incus-integration = import ./nixos-test.nix {
          inherit pkgs;
          lib = pkgs.lib;
          sandboxPackage = sandbox-package;
        };

        checks.incus-tls-cert-auth = import ./nixos-test-tls.nix {
          inherit pkgs;
          lib = pkgs.lib;
          sandboxPackage = sandbox-package;
        };

        apps.test-incus-integration = {
          type = "app";
          program = "${self.checks.${system}.incus-integration}/bin/nixos-test-driver";
        };

        apps.test-incus-tls-auth = {
          type = "app";
          program = "${self.checks.${system}.incus-tls-cert-auth}/bin/nixos-test-driver";
        };
      }
    );
}
