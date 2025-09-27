# NetworkStateAddress

NetworkStateAddress represents a network address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | IP address | [optional] [default to undefined]
**family** | **string** | Address family | [optional] [default to undefined]
**netmask** | **string** | IP netmask (CIDR) | [optional] [default to undefined]
**scope** | **string** | Address scope | [optional] [default to undefined]

## Example

```typescript
import { NetworkStateAddress } from 'incus-client';

const instance: NetworkStateAddress = {
    address,
    family,
    netmask,
    scope,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
