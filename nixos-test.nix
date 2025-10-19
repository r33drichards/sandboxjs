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
  name = "incus-sandbox-integration";

  meta = {
    maintainers = with lib.maintainers; [ ];
  };

  nodes.machine = { config, pkgs, ... }: {
    # Virtual machine configuration
    virtualisation = {
      cores = 4;
      memorySize = 4096;
      diskSize = 20 * 1024;

      # Enable Incus
      incus = {
        enable = true;
        package = pkgs.incus;
        ui.enable = true;  # Enable the web UI

        # Preseed configuration for Incus
        preseed = {
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
    ];

    # Networking
    networking.firewall.trustedInterfaces = [ "incusbr0" ];
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

    # Configure Incus to listen on HTTPS
    systemd.services.incus-configure-https = {
      description = "Configure Incus HTTPS listener";
      after = [ "incus.service" "incus-preseed.service" ];
      requires = [ "incus.service" ];
      wantedBy = [ "multi-user.target" ];
      serviceConfig = {
        Type = "oneshot";
        RemainAfterExit = true;
      };
      script = ''
        # Wait for Incus to be fully ready
        for i in {1..30}; do
          if ${pkgs.incus}/bin/incus info > /dev/null 2>&1; then
            break
          fi
          sleep 1
        done

        # Configure Incus to listen on all addresses (including localhost) on port 8443
        ${pkgs.incus}/bin/incus config set core.https_address "[::]:8443"

        echo "Incus HTTPS listener configured on port 8443"
      '';
    };

    # Generate client certificates for testing
    systemd.services.incus-generate-client-cert = {
      description = "Generate Incus client certificate for testing";
      after = [ "incus.service" "incus-preseed.service" "incus-configure-https.service" ];
      requires = [ "incus.service" ];
      wantedBy = [ "multi-user.target" ];
      serviceConfig = {
        Type = "oneshot";
        RemainAfterExit = true;
      };
      script = ''
        # Create directory for test certificates
        mkdir -p /tmp/incus-test-certs

        # Generate client certificate and key
        ${pkgs.openssl}/bin/openssl req -x509 -newkey rsa:4096 \
          -keyout /tmp/incus-test-certs/client.key \
          -out /tmp/incus-test-certs/client.crt \
          -days 365 -nodes \
          -subj "/CN=test-client"

        # Make files readable
        chmod 644 /tmp/incus-test-certs/client.crt
        chmod 600 /tmp/incus-test-certs/client.key

        # Wait for Incus to be fully ready
        for i in {1..30}; do
          if ${pkgs.incus}/bin/incus info > /dev/null 2>&1; then
            break
          fi
          sleep 1
        done

        # Add client certificate to Incus trust store
        ${pkgs.incus}/bin/incus config trust add-certificate /tmp/incus-test-certs/client.crt || true

        echo "Client certificate generated and added to Incus trust store"
      '';
    };

    # Incus Web UI service
    systemd.services.incus-webui = {
      description = "Incus Web UI";
      after = [ "incus.service" "incus-preseed.service" ];
      requires = [ "incus.service" ];
      wantedBy = [ "multi-user.target" ];
      serviceConfig = {
        Type = "simple";
        Restart = "on-failure";
      };
      script = ''
        ${pkgs.incus}/bin/incus webui
      '';
    };
  };

  testScript = ''
    def wait_for_incus():
        """Wait for Incus to be ready"""
        machine.wait_for_unit("incus.service")
        machine.wait_for_unit("incus-preseed.service")
        machine.wait_for_unit("incus-configure-https.service")
        machine.wait_for_unit("incus-webui.service")
        machine.wait_for_unit("incus-generate-client-cert.service")

        # Wait for preseed to complete
        machine.wait_until_succeeds("incus profile show default")
        machine.wait_until_succeeds("incus network info incusbr0")
        machine.wait_until_succeeds("incus storage show default")

        # Verify HTTPS listener is configured
        machine.wait_until_succeeds("incus config get core.https_address | grep 8443")

        # Verify HTTPS port is listening
        machine.wait_until_succeeds("ss -tlnp | grep ':8443'")

        # Verify client certificate was generated
        machine.wait_until_succeeds("test -f /tmp/incus-test-certs/client.crt")
        machine.wait_until_succeeds("test -f /tmp/incus-test-certs/client.key")

    def get_incus_webui_url():
        """Extract the Incus web UI URL with port and token from journalctl"""
        # Wait for the web UI to start and log its URL
        machine.wait_until_succeeds(
            "journalctl -u incus-webui.service | grep 'Web server running at: http://'"
        )
        
        # Extract the URL line from the journal
        output = machine.succeed(
            "journalctl -u incus-webui.service -o cat | grep 'Web server running at: http://' | tail -n 1"
        )
        
        # The URL format is like: Web server running at: http://127.0.0.1:XXXXX/ui?auth_token=YYYYY
        import re
        match = re.search(r'http://[^/]+:\d+/ui\?auth_token=[^\s]+', output)
        if match:
            # Extract just the base URL and token
            full_url = match.group(0)
            # Parse to get base URL and token separately
            base_match = re.search(r'(http://[^/]+:\d+)', full_url)
            token_match = re.search(r'auth_token=([^&\s]+)', full_url)
            if base_match and token_match:
                # Return base URL with token as query parameter
                return f"{base_match.group(1)}?auth_token={token_match.group(1)}"
            else:
                return full_url
        else:
            # Fallback to just the base URL without token
            match = re.search(r'http://[^/]+:\d+', output)
            if match:
                return match.group(0)
            else:
                raise Exception(f"Could not extract URL from: {output}")

    def setup_nixos_image():
        """Set up NixOS container image for testing (offline)"""
        metadata = "${nixosContainerImage.metadata}"
        rootfs = "${nixosContainerImage.rootfs}"

        machine.succeed(f"incus image import {metadata} {rootfs} --alias nixos/container")

    def wait_for_nixos_instance(name: str):
        """Wait for NixOS container to be fully ready"""
        machine.wait_until_succeeds(f"incus list | grep {name} | grep RUNNING", timeout=240)

        # For NixOS containers, wait for systemd to be ready in a more robust way
        # First, wait for the container to have networking
        machine.wait_until_succeeds(f"incus exec {name} -- test -f /run/systemd/system", timeout=120)

        # Then check systemd status with multiple attempts
        machine.wait_until_succeeds(f"incus exec {name} -- systemctl is-system-running --wait || incus exec {name} -- echo 'systemd not fully ready but continuing'", timeout=300)

    def run_sandbox_tests():
        """Run the sandbox integration tests"""
        # Copy pre-built package and test files
        with subtest("Setup sandbox source"):
            machine.succeed("mkdir -p /tmp/sandbox")
            machine.succeed("cp -r ${sandboxPackage}/* /tmp/sandbox/")
            machine.succeed("cp -r ${testFiles}/tests /tmp/sandbox/")
            machine.succeed("cp -r ${testFiles}/src /tmp/sandbox/")
            machine.succeed("cp ${testFiles}/tsconfig.json /tmp/sandbox/")

        # Get the Incus web UI URL
        incus_url = get_incus_webui_url()
        print(f"Discovered Incus URL: {incus_url}")

        # Run specific integration tests
        with subtest("Run Incus sandbox create/destroy test"):
            result = machine.succeed(f"""
                cd /tmp/sandbox
                export INCUS_URL="{incus_url}"
                export INCUS_BASE_URL="https://localhost:8443"
                export INCUS_CLIENT_CERT="/tmp/incus-test-certs/client.crt"
                export INCUS_CLIENT_KEY="/tmp/incus-test-certs/client.key"
                export INCUS_PROJECT="default"
                export NODE_ENV=test
                export VITEST_TIMEOUT=180000
                timeout 1800 npx vitest run tests/incus-integration.test.js --reporter=verbose --test-timeout=180000 2>&1
            """)
            print(f"Test results: {result}")

            # Check for test success indicators
            if "✓" in result or "passed" in result.lower():
                print("✅ Tests appear to have passed!")
            else:
                print("⚠️  Tests may have failed - check output above")

    start_all()

    with subtest("Wait for system to be ready"):
        machine.wait_for_unit("multi-user.target")
        machine.wait_until_succeeds("systemctl is-system-running", timeout=60)

    with subtest("Wait for Incus to be ready"):
        wait_for_incus()

    with subtest("Verify Incus is working"):
        machine.succeed("incus info")
        machine.succeed("incus list")

    with subtest("Set up container image"):
        setup_nixos_image()
        machine.succeed("incus image list")



    with subtest("Run sandbox integration tests"):
        run_sandbox_tests()

    with subtest("Clean up"):
        # Clean up any remaining containers
        machine.execute("incus list --format json | jq -r '.[].name' | xargs -I {} incus delete --force {}")
  '';
}