# NetworkForwardPut

NetworkForwardPut represents the modifiable fields of a network address forward

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Forward configuration map (refer to doc/network-forwards.md) | [optional] [default to undefined]
**description** | **string** | Description of the forward listen IP | [optional] [default to undefined]
**ports** | [**Array&lt;NetworkForwardPort&gt;**](NetworkForwardPort.md) | Port forwards (optional) | [optional] [default to undefined]

## Example

```typescript
import { NetworkForwardPut } from 'incus-client';

const instance: NetworkForwardPut = {
    config,
    description,
    ports,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
