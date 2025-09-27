# ServerEnvironment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | **Array&lt;string&gt;** | List of addresses the server is listening on | [optional] [default to undefined]
**architectures** | **Array&lt;string&gt;** | List of architectures supported by the server | [optional] [default to undefined]
**certificate** | **string** | Server certificate as PEM encoded X509 | [optional] [default to undefined]
**certificate_fingerprint** | **string** | Server certificate fingerprint as SHA256 | [optional] [default to undefined]
**driver** | **string** | List of supported instance drivers (separate by \&quot; | \&quot;) | [optional] [default to undefined]
**driver_version** | **string** | List of supported instance driver versions (separate by \&quot; | \&quot;) | [optional] [default to undefined]
**firewall** | **string** | Current firewall driver | [optional] [default to undefined]
**kernel** | **string** | OS kernel name | [optional] [default to undefined]
**kernel_architecture** | **string** | OS kernel architecture | [optional] [default to undefined]
**kernel_features** | **{ [key: string]: string; }** | Map of kernel features that were tested on startup | [optional] [default to undefined]
**kernel_version** | **string** | Kernel version | [optional] [default to undefined]
**lxc_features** | **{ [key: string]: string; }** | Map of LXC features that were tested on startup | [optional] [default to undefined]
**os_name** | **string** | Name of the operating system (Linux distribution) | [optional] [default to undefined]
**os_version** | **string** | Version of the operating system (Linux distribution) | [optional] [default to undefined]
**project** | **string** | Current project name | [optional] [default to undefined]
**server** | **string** | Server implementation name | [optional] [default to undefined]
**server_clustered** | **boolean** | Whether the server is part of a cluster | [optional] [default to undefined]
**server_event_mode** | **string** | Mode that the event distribution subsystem is operating in on this server. Either \&quot;full-mesh\&quot;, \&quot;hub-server\&quot; or \&quot;hub-client\&quot;. | [optional] [default to undefined]
**server_name** | **string** | Server hostname | [optional] [default to undefined]
**server_pid** | **number** | PID of the daemon | [optional] [default to undefined]
**server_version** | **string** | Server version | [optional] [default to undefined]
**storage** | **string** | List of active storage drivers (separate by \&quot; | \&quot;) | [optional] [default to undefined]
**storage_supported_drivers** | [**Array&lt;ServerStorageDriverInfo&gt;**](ServerStorageDriverInfo.md) | List of supported storage drivers | [optional] [default to undefined]
**storage_version** | **string** | List of active storage driver versions (separate by \&quot; | \&quot;) | [optional] [default to undefined]

## Example

```typescript
import { ServerEnvironment } from 'incus-client';

const instance: ServerEnvironment = {
    addresses,
    architectures,
    certificate,
    certificate_fingerprint,
    driver,
    driver_version,
    firewall,
    kernel,
    kernel_architecture,
    kernel_features,
    kernel_version,
    lxc_features,
    os_name,
    os_version,
    project,
    server,
    server_clustered,
    server_event_mode,
    server_name,
    server_pid,
    server_version,
    storage,
    storage_supported_drivers,
    storage_version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
