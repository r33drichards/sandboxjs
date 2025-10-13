# Incus TLS Client Certificate Authentication Setup

This guide explains how to set up TLS client certificate authentication with Incus for secure, production-ready deployments.

## Overview

Incus supports multiple authentication methods:

1. **No Authentication** - Local Unix socket access (default)
2. **Token-based Authentication** - Web UI session tokens
3. **TLS Client Certificate Authentication** - Mutual TLS (recommended for production)

TLS client certificates provide the most secure authentication method and are recommended for:
- Production environments
- Remote server access
- Automated systems and CI/CD pipelines
- Multi-user environments

## Prerequisites

- Incus installed and running
- OpenSSL or similar tool for certificate generation
- Network access to the Incus server (typically port 8443)

## TLS Protocol Requirements

- **Minimum TLS Version**: TLS 1.3 (TLS 1.2 possible with `INCUS_INSECURE_TLS` but not recommended)
- **Cipher Requirements**: Perfect forward secrecy, strong elliptic curve ciphers
- **Signature Requirements**: SHA-2 signatures only
- **Recommended Key Sizes**:
  - RSA: 4096-bit minimum
  - ECDSA: 384-bit (preferred)

## Step 1: Expose Incus to the Network

By default, Incus only listens on a local Unix socket. To enable network access:

```bash
# Configure Incus to listen on all interfaces on port 8443
sudo incus config set core.https_address :8443

# Or bind to a specific IP address
sudo incus config set core.https_address 192.168.1.100:8443

# Verify the configuration
sudo incus config get core.https_address
```

## Step 2: Generate Client Certificates

### Option 1: Using OpenSSL (Manual)

```bash
# Create a directory for certificates
mkdir -p ~/.config/incus-client-certs
cd ~/.config/incus-client-certs

# Generate a private key (ECDSA 384-bit - recommended)
openssl ecparam -name secp384r1 -genkey -noout -out client.key

# Or generate RSA 4096-bit key
# openssl genrsa -out client.key 4096

# Generate a certificate signing request (CSR)
openssl req -new -key client.key -out client.csr \
  -subj "/CN=your-client-name/O=your-organization"

# Self-sign the certificate (valid for 10 years)
openssl x509 -req -days 3650 -in client.csr -signkey client.key -out client.crt

# Clean up the CSR
rm client.csr

# Set appropriate permissions
chmod 600 client.key
chmod 644 client.crt
```

### Option 2: Using the Incus CLI (Automatic)

The Incus CLI automatically generates certificates when you add a remote:

```bash
# The certificate is stored in ~/.config/incus/
ls ~/.config/incus/

# You'll see:
# - client.crt (your client certificate)
# - client.key (your private key)
# - servercerts/ (trusted server certificates)
```

## Step 3: Add Certificate to Incus Trust Store

Once you have a client certificate, you need to add it to the Incus server's trust store.

### Method 1: Using a Trust Token (Recommended)

On the Incus server:

```bash
# Generate a trust token (expires in 1 hour by default)
sudo incus config trust add my-client

# This will output something like:
# Please provide client certificate: <paste here or press enter to generate>
```

The command will display a token. On your client machine:

```bash
# Add the remote using the token
incus remote add my-incus-server <IP_ADDRESS> --token=<TOKEN>
```

This automatically adds your client certificate to the server's trust store.

### Method 2: Manually Add Certificate

On the Incus server, add the client certificate directly:

```bash
# Add certificate from file
sudo incus config trust add-certificate /path/to/client.crt

# Or add with a specific name and project
sudo incus config trust add-certificate /path/to/client.crt \
  --name "my-client" \
  --projects "default,production"
```

### Method 3: Using the API

You can also add certificates programmatically via the REST API:

```bash
# Get the certificate content
CERT_CONTENT=$(cat ~/.config/incus-client-certs/client.crt)

# Add via API (requires existing authentication)
curl -k -X POST https://localhost:8443/1.0/certificates \
  -H "Content-Type: application/json" \
  -d '{
    "type": "client",
    "certificate": "'"$CERT_CONTENT"'",
    "name": "my-client"
  }'
```

## Step 4: Verify Certificate Setup

Check that your certificate is trusted:

```bash
# List all trusted certificates
sudo incus config trust list

# Output shows:
# +-------------+------------------+---------------------+
# |    NAME     |   FINGERPRINT    |    ADDED AT         |
# +-------------+------------------+---------------------+
# | my-client   | abc123def456...  | 2025-01-15 10:30:00 |
# +-------------+------------------+---------------------+
```

Get your certificate fingerprint:

```bash
# For verification
openssl x509 -in ~/.config/incus-client-certs/client.crt -fingerprint -noout
```

## Step 5: Use Certificates in Your Application

### TypeScript/JavaScript Example

```typescript
import { IncusSandbox, IncusConnectionOptions } from './index.js';
import path from 'path';
import os from 'os';

const connectionOptions: IncusConnectionOptions = {
  baseURL: 'https://your-incus-server:8443',
  cert: path.join(os.homedir(), '.config/incus-client-certs/client.crt'),
  key: path.join(os.homedir(), '.config/incus-client-certs/client.key'),
  // Optional: verify server certificate fingerprint
  serverCert: 'abc123def456...',
  project: 'default'
};

const sandbox = new IncusSandbox(connectionOptions);
await sandbox.init(undefined, { template: "ubuntu/22.04" });

console.log(`Sandbox created: ${sandbox.id()}`);
```

### Environment Variable Pattern

You can also use environment variables for configuration:

```bash
export INCUS_URL="https://your-server:8443"
export INCUS_CLIENT_CERT="$HOME/.config/incus-client-certs/client.crt"
export INCUS_CLIENT_KEY="$HOME/.config/incus-client-certs/client.key"
```

Then in your code:

```typescript
const options: IncusConnectionOptions = {
  baseURL: process.env.INCUS_URL || 'https://localhost:8443',
  cert: process.env.INCUS_CLIENT_CERT,
  key: process.env.INCUS_CLIENT_KEY,
  project: 'default'
};
```

## Certificate Management

### Viewing Trusted Certificates

```bash
# List all trusted certificates
sudo incus config trust list

# Show certificate details
sudo incus config trust show <fingerprint>
```

### Revoking Access

```bash
# Remove a certificate from the trust store
sudo incus config trust remove <fingerprint>

# Or by name
sudo incus config trust remove <name>
```

### Certificate Rotation

To rotate certificates:

1. Generate a new client certificate (Step 2)
2. Add the new certificate to the trust store (Step 3)
3. Update your application to use the new certificate
4. Test the new certificate works
5. Remove the old certificate from the trust store

```bash
# Test with new certificate before removing old one
incus remote add test-new <server> --certificate /path/to/new-client.crt

# If successful, remove old certificate
sudo incus config trust remove <old-fingerprint>
```

## Troubleshooting

### Common Issues

**1. Certificate not trusted**
```
Error: Certificate not trusted by server
```

Solution: Ensure the certificate has been added to the server's trust store using one of the methods in Step 3.

**2. TLS handshake failed**
```
Error: TLS handshake failed
```

Solution: Check that:
- The Incus server is using HTTPS (not HTTP)
- Your certificate meets the TLS requirements
- The server certificate is valid

**3. Permission denied**
```
Error: EACCES: permission denied, open '/path/to/client.key'
```

Solution: Ensure the key file has proper permissions:
```bash
chmod 600 /path/to/client.key
```

**4. Connection refused**
```
Error: connect ECONNREFUSED
```

Solution: Verify that:
- Incus is listening on the network (`incus config get core.https_address`)
- Firewall allows connections to port 8443
- You're using the correct server address

### Debug Mode

Enable debug logging:

```typescript
// Add debugging to axios requests
import axios from 'axios';

axios.interceptors.request.use(request => {
  console.log('Starting Request', JSON.stringify(request, null, 2));
  return request;
});

axios.interceptors.response.use(response => {
  console.log('Response:', JSON.stringify(response, null, 2));
  return response;
});
```

### Verify Server Configuration

```bash
# Check if server is listening
sudo incus config get core.https_address

# Check server certificate
openssl s_client -connect localhost:8443 -showcerts

# Test server connectivity
curl -k https://localhost:8443/1.0
```

## Security Best Practices

1. **Use Strong Keys**: Prefer ECDSA 384-bit or RSA 4096-bit
2. **Protect Private Keys**: Store keys with mode 600, never commit to version control
3. **Use Certificate Expiration**: Set reasonable expiration periods (1-2 years)
4. **Implement Certificate Rotation**: Plan for regular certificate updates
5. **Monitor Trust Store**: Regularly audit trusted certificates
6. **Use TLS 1.3**: Never downgrade to TLS 1.2 in production
7. **Verify Server Certificates**: Use the `serverCert` option to verify server identity
8. **Separate Environments**: Use different certificates for dev/staging/production
9. **Audit Access**: Monitor certificate usage and revoke unused certificates
10. **Backup Certificates**: Keep secure backups of your certificate infrastructure

## Additional Resources

- [Incus Authentication Documentation](https://linuxcontainers.org/incus/docs/main/authentication/)
- [Incus Remote Access Guide](https://linuxcontainers.org/incus/docs/main/howto/server_expose/)
- [OpenSSL Documentation](https://www.openssl.org/docs/)
- [TLS 1.3 Specification](https://datatracker.ietf.org/doc/html/rfc8446)

## See Also

- `src/examples/incus.ts` - Example code showing all authentication methods
- `tests/incus-tls-auth.test.js` - Integration tests for TLS authentication
- `TESTING.md` - Guide for running integration tests
