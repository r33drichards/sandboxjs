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

    def setup_ubuntu_image():
        """Set up Ubuntu container image for testing"""
        machine.succeed("incus image copy images:ubuntu/22.04 local: --alias ubuntu/22.04")

    def run_sandbox_tests():
        """Run the sandbox integration tests"""
        # Copy pre-built package and test files
        with subtest("Setup sandbox source"):
            machine.succeed("mkdir -p /tmp/sandbox")
            machine.succeed("cp -r ${sandboxPackage}/* /tmp/sandbox/")
            machine.succeed("cp -r ${testFiles}/tests /tmp/sandbox/")
            machine.succeed("cp -r ${testFiles}/src /tmp/sandbox/")
            machine.succeed("cp ${testFiles}/tsconfig.json /tmp/sandbox/")

        # Run specific integration tests
        with subtest("Run Incus sandbox create/destroy test"):
            result = machine.succeed("""
                cd /tmp/sandbox
                export INCUS_URL=http://localhost:8443
                export NODE_ENV=test
                timeout 600 npx vitest run tests/incus-integration.test.js --reporter=verbose 2>&1
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
        setup_ubuntu_image()
        machine.succeed("incus image list")

    with subtest("Test basic Incus functionality"):
        # Create a test container to verify Incus is working
        machine.succeed("incus launch ubuntu/22.04 test-container")
        machine.wait_until_succeeds("incus list | grep test-container | grep RUNNING", timeout=60)
        machine.succeed("incus exec test-container -- echo 'Hello from container'")
        machine.succeed("incus delete --force test-container")

    with subtest("Run sandbox integration tests"):
        run_sandbox_tests()

    with subtest("Clean up"):
        # Clean up any remaining containers
        machine.execute("incus list --format json | jq -r '.[].name' | xargs -I {} incus delete --force {}")
  '';
}