# NetworkZone


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Zone configuration map (refer to doc/network-zones.md) | [optional] [default to undefined]
**description** | **string** | Description of the network zone | [optional] [default to undefined]
**name** | **string** | The name of the zone (DNS domain name) | [optional] [default to undefined]
**project** | **string** | Project name | [optional] [default to undefined]
**used_by** | **Array&lt;string&gt;** | List of URLs of objects using this network zone | [optional] [readonly] [default to undefined]

## Example

```typescript
import { NetworkZone } from 'incus-client';

const instance: NetworkZone = {
    config,
    description,
    name,
    project,
    used_by,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
