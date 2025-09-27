# NetworkAddressSet

Refer to doc/howto/network_address_sets.md for details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | **Array&lt;string&gt;** | List of addresses in the set | [optional] [default to undefined]
**config** | **object** | Address set configuration map (refer to doc/network-address-sets.md) | [optional] [default to undefined]
**description** | **string** | Description of the address set | [optional] [default to undefined]
**name** | **string** | The new name of the address set | [optional] [default to undefined]
**project** | **string** | Project name | [optional] [default to undefined]
**used_by** | **Array&lt;string&gt;** | List of URLs of objects using this profile | [optional] [readonly] [default to undefined]

## Example

```typescript
import { NetworkAddressSet } from 'incus-client';

const instance: NetworkAddressSet = {
    addresses,
    config,
    description,
    name,
    project,
    used_by,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
