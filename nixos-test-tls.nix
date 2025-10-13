{ pkgs, lib, sandboxPackage, ... }:

let
  # Copy test files and other necessary source files
  testFiles = pkgs.stdenv.mkDerivation {
    name = "sandbox-test-files";
    src = ./.;

    installPhase = ''
      mkdir -p $out
      cp -r tests $out/
      cp -r src $out/
      cp vitest.config.js $out/ || echo "No vitest config found"
      cp tsconfig.json $out/
      cp -r docs $out/ || echo "No docs found"
    '';
  };

  # Generate NixOS container images for offline use
  releases = import (pkgs.path + "/nixos/release.nix") {
    configuration = {
      # Building documentation makes the test unnecessarily take a longer time:
      documentation.enable = lib.mkForce false;

      boot.initrd.systemd.enable = false;

      # Essential packages for container functionality
      environment.systemPackages = with pkgs; [
        coreutils     # ls, mkdir, mv, rm, cat, echo, etc.
        util-linux    # various system utilities
        bash          # ensure bash is available
        gawk          # awk for text processing
        gnugrep       # grep command
        gnused        # sed command
        findutils     # find, xargs
        procps        # ps, top, etc.
        which         # which command
        file          # file type detection
        curl          # network utilities
        gnutar        # tar command
        gzip          # compression
      ];

      # Ensure proper PATH is set for all users
      environment.extraInit = ''
        export PATH="/run/current-system/sw/bin:/run/current-system/sw/sbin:$PATH"
      '';

      # Configure shell environment
      programs.bash.enable = true;

      # Ensure systemd is properly configured
      systemd.settings.Manager.DefaultTimeoutStopSec = "30s";
    };
  };

  nixosContainerImage = {
    metadata = releases.incusContainerMeta.${pkgs.stdenv.hostPlatform.system} + "/tarball/nixos-image-lxc-*-${pkgs.stdenv.hostPlatform.system}.tar.xz";
    rootfs = releases.incusContainerImage.${pkgs.stdenv.hostPlatform.system} + "/nixos-lxc-image-${pkgs.stdenv.hostPlatform.system}.squashfs";
  };

in pkgs.testers.nixosTest {
  name = "incus-tls-cert-auth";

  meta = {
    maintainers = with lib.maintainers; [ ];
  };

  nodes.machine = { config, pkgs, ... }: {
    # Virtual machine configuration
    virtualisation = {
      cores = 4;
      memorySize = 4096;
      diskSize = 20 * 1024;

      # Enable Incus with HTTPS
      incus = {
        enable = true;
        package = pkgs.incus;

        # Preseed configuration for Incus with network exposure
        preseed = {
          config = {
            # Enable HTTPS on all interfaces
            "core.https_address" = ":8443";
          };

          networks = [
            {
              name = "incusbr0";
              type = "bridge";
              config = {
                "ipv4.address" = "10.0.10.1/24";
                "ipv4.nat" = "true";
              };
            }
          ];

          profiles = [
            {
              name = "default";
              devices = {
                eth0 = {
                  name = "eth0";
                  network = "incusbr0";
                  type = "nic";
                };
                root = {
                  path = "/";
                  pool = "default";
                  size = "10GiB";
                  type = "disk";
                };
              };
            }
          ];

          storage_pools = [
            {
              name = "default";
              driver = "dir";
            }
          ];
        };
      };
    };

    # System packages
    environment.systemPackages = with pkgs; [
      nodejs_22
      npm-check-updates
      curl
      wget
      jq
      incus
      openssl  # For certificate generation
    ];

    # Networking
    networking.firewall.trustedInterfaces = [ "incusbr0" ];
    networking.firewall.allowedTCPPorts = [ 8443 ];
    networking.hostId = "12345678";
    networking.nftables.enable = true;

    # Enable necessary services
    services.resolved.enable = true;

    # Create a test user
    users.users.testuser = {
      isNormalUser = true;
      extraGroups = [ "incus" ];
      shell = pkgs.bash;
    };

    # System configuration
    system.stateVersion = "24.05";
  };

  testScript = ''
    def wait_for_incus():
        """Wait for Incus to be ready"""
        machine.wait_for_unit("incus.service")
        machine.wait_for_unit("incus-preseed.service")

        # Wait for preseed to complete
        machine.wait_until_succeeds("incus profile show default")
        machine.wait_until_succeeds("incus network info incusbr0")
        machine.wait_until_succeeds("incus storage show default")

        # Wait for HTTPS to be available
        machine.wait_until_succeeds("incus config get core.https_address | grep 8443")

    def generate_client_certificate():
        """Generate a client certificate and add it to Incus trust store"""
        with subtest("Generate client TLS certificate"):
            # Create directory for certificates
            machine.succeed("mkdir -p /root/incus-certs")

            # Generate ECDSA key (recommended)
            machine.succeed("""
                openssl ecparam -name secp384r1 -genkey -noout -out /root/incus-certs/client.key
            """)

            # Generate self-signed certificate
            machine.succeed("""
                openssl req -new -x509 -key /root/incus-certs/client.key \
                    -out /root/incus-certs/client.crt -days 365 \
                    -subj "/CN=test-client/O=nixos-test"
            """)

            # Set proper permissions
            machine.succeed("chmod 600 /root/incus-certs/client.key")
            machine.succeed("chmod 644 /root/incus-certs/client.crt")

            # Verify certificate was created
            machine.succeed("test -f /root/incus-certs/client.crt")
            machine.succeed("test -f /root/incus-certs/client.key")

            # Display certificate info for debugging
            cert_info = machine.succeed("openssl x509 -in /root/incus-certs/client.crt -noout -text")
            print(f"Generated certificate info:\n{cert_info}")

        with subtest("Add certificate to Incus trust store"):
            # Add the certificate to Incus trust store
            machine.succeed("""
                incus config trust add-certificate /root/incus-certs/client.crt \
                    --name test-client --projects default
            """)

            # Verify certificate was added
            result = machine.succeed("incus config trust list --format json")
            print(f"Trust store contents: {result}")

            # Verify the certificate is in the trust list
            machine.succeed("incus config trust list | grep test-client")

    def setup_nixos_image():
        """Set up NixOS container image for testing (offline)"""
        metadata = "${nixosContainerImage.metadata}"
        rootfs = "${nixosContainerImage.rootfs}"

        machine.succeed(f"incus image import {metadata} {rootfs} --alias nixos/container")

    def run_tls_cert_tests():
        """Run the TLS certificate authentication tests"""
        with subtest("Setup sandbox source"):
            machine.succeed("mkdir -p /tmp/sandbox")
            machine.succeed("cp -r ${sandboxPackage}/* /tmp/sandbox/")
            machine.succeed("cp -r ${testFiles}/tests /tmp/sandbox/")
            machine.succeed("cp -r ${testFiles}/src /tmp/sandbox/")
            machine.succeed("cp ${testFiles}/tsconfig.json /tmp/sandbox/")

        with subtest("Set environment variables for TLS cert test"):
            # Use HTTPS URL without auth token
            incus_url = "https://localhost:8443"
            print(f"Testing with Incus URL: {incus_url}")

        with subtest("Run TLS certificate authentication tests"):
            # Run the TLS auth tests with certificate paths
            result = machine.succeed(f"""
                cd /tmp/sandbox
                export INCUS_URL="https://localhost:8443"
                export INCUS_CLIENT_CERT="/root/incus-certs/client.crt"
                export INCUS_CLIENT_KEY="/root/incus-certs/client.key"
                export NODE_ENV=test
                export VITEST_TIMEOUT=180000
                export NODE_TLS_REJECT_UNAUTHORIZED=0
                timeout 1800 npx vitest run tests/incus-tls-auth.test.js --reporter=verbose --test-timeout=180000 2>&1
            """)
            print(f"TLS test results: {result}")

            # Check for test success indicators
            if "✓" in result or "passed" in result.lower():
                print("✅ TLS certificate tests passed!")
            else:
                print("⚠️  TLS tests may have failed - check output above")

    def verify_tls_connection():
        """Verify that TLS connection works with the generated certificate"""
        with subtest("Test HTTPS connection to Incus"):
            # Try to connect using curl with the client certificate
            machine.succeed("""
                curl -k --cert /root/incus-certs/client.crt \
                     --key /root/incus-certs/client.key \
                     https://localhost:8443/1.0
            """)

    start_all()

    with subtest("Wait for system to be ready"):
        machine.wait_for_unit("multi-user.target")
        machine.wait_until_succeeds("systemctl is-system-running", timeout=60)

    with subtest("Wait for Incus to be ready"):
        wait_for_incus()

    with subtest("Verify Incus is working"):
        machine.succeed("incus info")
        machine.succeed("incus list")

    with subtest("Generate and configure TLS certificates"):
        generate_client_certificate()

    with subtest("Verify TLS connection works"):
        verify_tls_connection()

    with subtest("Set up container image"):
        setup_nixos_image()
        machine.succeed("incus image list")

    with subtest("Run TLS authentication integration tests"):
        run_tls_cert_tests()

    with subtest("Clean up"):
        # Clean up any remaining containers
        machine.execute("incus list --format json | jq -r '.[].name' | xargs -I {} incus delete --force {}")

        # Remove certificates
        machine.execute("rm -rf /root/incus-certs")
  '';
}
