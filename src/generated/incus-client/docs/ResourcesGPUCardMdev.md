# ResourcesGPUCardMdev

ResourcesGPUCardMdev represents the mediated devices configuration of the GPU

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | **string** | The mechanism used by this device | [optional] [default to undefined]
**available** | **number** | Number of available devices of this profile | [optional] [default to undefined]
**description** | **string** | Profile description | [optional] [default to undefined]
**devices** | **Array&lt;string&gt;** | List of active devices (UUIDs) | [optional] [default to undefined]
**name** | **string** | Profile name | [optional] [default to undefined]

## Example

```typescript
import { ResourcesGPUCardMdev } from 'incus-client';

const instance: ResourcesGPUCardMdev = {
    api,
    available,
    description,
    devices,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
