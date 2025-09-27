# NetworkZonePut

NetworkZonePut represents the modifiable fields of a network zone

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Zone configuration map (refer to doc/network-zones.md) | [optional] [default to undefined]
**description** | **string** | Description of the network zone | [optional] [default to undefined]

## Example

```typescript
import { NetworkZonePut } from 'incus-client';

const instance: NetworkZonePut = {
    config,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
