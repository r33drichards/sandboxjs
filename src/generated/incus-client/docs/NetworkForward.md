# NetworkForward


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Forward configuration map (refer to doc/network-forwards.md) | [optional] [default to undefined]
**description** | **string** | Description of the forward listen IP | [optional] [default to undefined]
**listen_address** | **string** | The listen address of the forward | [optional] [default to undefined]
**location** | **string** | What cluster member this record was found on | [optional] [default to undefined]
**ports** | [**Array&lt;NetworkForwardPort&gt;**](NetworkForwardPort.md) | Port forwards (optional) | [optional] [default to undefined]

## Example

```typescript
import { NetworkForward } from 'incus-client';

const instance: NetworkForward = {
    config,
    description,
    listen_address,
    location,
    ports,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
