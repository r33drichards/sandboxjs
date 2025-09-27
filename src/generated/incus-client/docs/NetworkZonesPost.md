# NetworkZonesPost

NetworkZonesPost represents the fields of a new network zone

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Zone configuration map (refer to doc/network-zones.md) | [optional] [default to undefined]
**description** | **string** | Description of the network zone | [optional] [default to undefined]
**name** | **string** | The name of the zone (DNS domain name) | [optional] [default to undefined]

## Example

```typescript
import { NetworkZonesPost } from 'incus-client';

const instance: NetworkZonesPost = {
    config,
    description,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
