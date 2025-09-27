# ResourcesNetwork

ResourcesNetwork represents the network cards available on the system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cards** | [**Array&lt;ResourcesNetworkCard&gt;**](ResourcesNetworkCard.md) | List of network cards | [optional] [default to undefined]
**total** | **number** | Total number of network cards | [optional] [default to undefined]

## Example

```typescript
import { ResourcesNetwork } from 'incus-client';

const instance: ResourcesNetwork = {
    cards,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
