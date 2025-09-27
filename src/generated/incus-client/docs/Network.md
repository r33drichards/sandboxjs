# Network

Network represents a network

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Network configuration map (refer to doc/networks.md) | [optional] [default to undefined]
**description** | **string** | Description of the profile | [optional] [default to undefined]
**locations** | **Array&lt;string&gt;** | Cluster members on which the network has been defined | [optional] [readonly] [default to undefined]
**managed** | **boolean** | Whether this is a managed network | [optional] [readonly] [default to undefined]
**name** | **string** | The network name | [optional] [readonly] [default to undefined]
**project** | **string** | Project name | [optional] [default to undefined]
**status** | **string** | The state of the network (for managed network in clusters) | [optional] [readonly] [default to undefined]
**type** | **string** | The network type | [optional] [readonly] [default to undefined]
**used_by** | **Array&lt;string&gt;** | List of URLs of objects using this profile | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Network } from 'incus-client';

const instance: Network = {
    config,
    description,
    locations,
    managed,
    name,
    project,
    status,
    type,
    used_by,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
