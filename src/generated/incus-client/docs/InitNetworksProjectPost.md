# InitNetworksProjectPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Project** | **string** | Project in which the network will reside | [optional] [default to undefined]
**config** | **object** | Network configuration map (refer to doc/networks.md) | [optional] [default to undefined]
**description** | **string** | Description of the profile | [optional] [default to undefined]
**name** | **string** | The name of the new network | [optional] [default to undefined]
**type** | **string** | The network type (refer to doc/networks.md) | [optional] [default to undefined]

## Example

```typescript
import { InitNetworksProjectPost } from 'incus-client';

const instance: InitNetworksProjectPost = {
    Project,
    config,
    description,
    name,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
