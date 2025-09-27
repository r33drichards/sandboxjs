# NetworkAddressSetPut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | **Array&lt;string&gt;** | List of addresses in the set | [optional] [default to undefined]
**config** | **object** | Address set configuration map (refer to doc/network-address-sets.md) | [optional] [default to undefined]
**description** | **string** | Description of the address set | [optional] [default to undefined]

## Example

```typescript
import { NetworkAddressSetPut } from 'incus-client';

const instance: NetworkAddressSetPut = {
    addresses,
    config,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
