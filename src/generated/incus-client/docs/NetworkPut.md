# NetworkPut

NetworkPut represents the modifiable fields of a network

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Network configuration map (refer to doc/networks.md) | [optional] [default to undefined]
**description** | **string** | Description of the profile | [optional] [default to undefined]

## Example

```typescript
import { NetworkPut } from 'incus-client';

const instance: NetworkPut = {
    config,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
