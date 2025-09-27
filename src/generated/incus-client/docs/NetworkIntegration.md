# NetworkIntegration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Integration configuration map (refer to doc/network-integrations.md) | [optional] [default to undefined]
**description** | **string** | Description of the network integration | [optional] [default to undefined]
**name** | **string** | The name of the integration | [optional] [default to undefined]
**type** | **string** | The type of integration | [optional] [default to undefined]
**used_by** | **Array&lt;string&gt;** | List of URLs of objects using this network integration | [optional] [readonly] [default to undefined]

## Example

```typescript
import { NetworkIntegration } from 'incus-client';

const instance: NetworkIntegration = {
    config,
    description,
    name,
    type,
    used_by,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
