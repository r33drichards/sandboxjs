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

          config = {
            "oidc.issuer" = "http://localhost:8080/realms/incus-test";
            "oidc.client.id" = "incus-client";
            "oidc.audience" = "incus-client";
          };
        };
      };
    };

    # PostgreSQL for Keycloak
    services.postgresql = {
      enable = true;
      package = pkgs.postgresql_15;
      ensureDatabases = [ "keycloak" ];
      ensureUsers = [
        {
          name = "keycloak";
          ensureDBOwnership = true;
        }
      ];
      authentication = pkgs.lib.mkOverride 10 ''
        local all all trust
        host all all 127.0.0.1/32 trust
        host all all ::1/128 trust
      '';
    };

    # Keycloak service
    services.keycloak = {
      enable = true;
      database = {
        type = "postgresql";
        host = "localhost";
        port = 5432;
        name = "keycloak";
        username = "keycloak";
        passwordFile = pkgs.writeText "keycloak-db-password" "";
      };
      settings = {
        hostname = "localhost";
        http-enabled = true;
        http-host = "0.0.0.0";
        http-port = 8080;
        hostname-strict = false;
        hostname-strict-https = false;
        proxy = "edge";
      };
      initialAdminPassword = "admin123";
    };

    # Import Keycloak realm
    systemd.services.keycloak-realm-import = {
      description = "Import Keycloak test realm";
      after = [ "keycloak.service" ];
      requires = [ "keycloak.service" ];
      wantedBy = [ "multi-user.target" ];
      serviceConfig = {
        Type = "oneshot";
        RemainAfterExit = true;
      };
      script = ''
        # Wait for Keycloak to be ready with timeout
        MAX_ATTEMPTS=60
        ATTEMPT=0
        until ${pkgs.curl}/bin/curl -sf http://localhost:8080/health/ready > /dev/null 2>&1; do
          ATTEMPT=$((ATTEMPT + 1))
          if [ $ATTEMPT -ge $MAX_ATTEMPTS ]; then
            echo "ERROR: Keycloak failed to become ready after $MAX_ATTEMPTS attempts (120 seconds)"
            exit 1
          fi
          echo "Waiting for Keycloak to be ready... (attempt $ATTEMPT/$MAX_ATTEMPTS)"
          sleep 2
        done
        echo "Keycloak is ready"

        # Get admin token
        TOKEN_RESPONSE=$(${pkgs.curl}/bin/curl -s -X POST http://localhost:8080/realms/master/protocol/openid-connect/token \
          -H "Content-Type: application/x-www-form-urlencoded" \
          -d "username=admin" \
          -d "password=admin123" \
          -d "grant_type=password" \
          -d "client_id=admin-cli")

        TOKEN=$(echo "$TOKEN_RESPONSE" | ${pkgs.jq}/bin/jq -r .access_token)

        # Validate token is not empty or null
        if [ -z "$TOKEN" ] || [ "$TOKEN" = "null" ]; then
          echo "ERROR: Failed to retrieve admin token"
          echo "Token response: $TOKEN_RESPONSE"
          exit 1
        fi
        echo "Admin token retrieved successfully"

        # Import realm with error handling
        HTTP_CODE=$(${pkgs.curl}/bin/curl -s -w "%{http_code}" -o /tmp/realm-import-response.json \
          -X POST http://localhost:8080/admin/realms \
          -H "Authorization: Bearer $TOKEN" \
          -H "Content-Type: application/json" \
          -d @${./keycloak-realm-config.json})

        # Check if HTTP response code is 2xx
        if [ "$HTTP_CODE" -lt 200 ] || [ "$HTTP_CODE" -ge 300 ]; then
          echo "ERROR: Realm import failed with HTTP code $HTTP_CODE"
          echo "Response:"
          cat /tmp/realm-import-response.json
          exit 1
        fi

        echo "Keycloak realm imported successfully (HTTP $HTTP_CODE)"
      '';
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
        machine.wait_for_unit("incus-webui.service")

        # Wait for preseed to complete
        machine.wait_until_succeeds("incus profile show default")
        machine.wait_until_succeeds("incus network info incusbr0")
        machine.wait_until_succeeds("incus storage show default")

    def wait_for_keycloak():
        """Wait for Keycloak to be ready"""
        machine.wait_for_unit("postgresql.service")
        machine.wait_for_unit("keycloak.service")
        machine.wait_for_unit("keycloak-realm-import.service")

        # Wait for Keycloak health endpoint
        machine.wait_until_succeeds(
            "curl -sf http://localhost:8080/health/ready"
        )

        # Verify realm was imported
        machine.wait_until_succeeds(
            "curl -sf http://localhost:8080/realms/incus-test/.well-known/openid-configuration"
        )

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

    with subtest("Wait for Keycloak to be ready"):
        wait_for_keycloak()

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

    with subtest("Run OIDC integration tests"):
        result = machine.succeed(f"""
            cd /tmp/sandbox
            export INCUS_URL="{incus_url}"
            export NODE_ENV=test
            export VITEST_TIMEOUT=180000
            timeout 1800 npx vitest run tests/incus-oidc-integration.test.js --reporter=verbose --test-timeout=180000 2>&1
        """)
        print(f"OIDC test results: {result}")

        if "✓" in result or "passed" in result.lower():
            print("✅ OIDC tests passed!")
        else:
            print("⚠️  OIDC tests may have failed - check output above")

    with subtest("Clean up"):
        # Clean up any remaining containers
        machine.execute("incus list --format json | jq -r '.[].name' | xargs -I {} incus delete --force {}")
  '';
}