# InstanceStateNetworkAddress

InstanceStateNetworkAddress represents a network address as part of the network section of an instance\'s state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | IP address | [optional] [default to undefined]
**family** | **string** | Network family (inet or inet6) | [optional] [default to undefined]
**netmask** | **string** | Network mask | [optional] [default to undefined]
**scope** | **string** | Address scope (local, link or global) | [optional] [default to undefined]

## Example

```typescript
import { InstanceStateNetworkAddress } from 'incus-client';

const instance: InstanceStateNetworkAddress = {
    address,
    family,
    netmask,
    scope,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
