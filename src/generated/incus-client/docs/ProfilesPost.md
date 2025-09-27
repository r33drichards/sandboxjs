# ProfilesPost

ProfilesPost represents the fields of a new profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Instance configuration map (refer to doc/instances.md) | [optional] [default to undefined]
**description** | **string** | Description of the profile | [optional] [default to undefined]
**devices** | **{ [key: string]: { [key: string]: string; }; }** | List of devices | [optional] [default to undefined]
**name** | **string** | The name of the new profile | [optional] [default to undefined]

## Example

```typescript
import { ProfilesPost } from 'incus-client';

const instance: ProfilesPost = {
    config,
    description,
    devices,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
