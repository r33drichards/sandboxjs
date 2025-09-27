# InstanceStateOSInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fqdn** | **string** | FQDN of the instance. | [optional] [default to undefined]
**hostname** | **string** | Hostname of the instance. | [optional] [default to undefined]
**kernel_version** | **string** | Version of the kernel running in the instance. | [optional] [default to undefined]
**os** | **string** | Operating system running in the instance. | [optional] [default to undefined]
**os_version** | **string** | Version of the operating system. | [optional] [default to undefined]

## Example

```typescript
import { InstanceStateOSInfo } from 'incus-client';

const instance: InstanceStateOSInfo = {
    fqdn,
    hostname,
    kernel_version,
    os,
    os_version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
