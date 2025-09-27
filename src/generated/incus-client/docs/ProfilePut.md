# ProfilePut

ProfilePut represents the modifiable fields of a profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Instance configuration map (refer to doc/instances.md) | [optional] [default to undefined]
**description** | **string** | Description of the profile | [optional] [default to undefined]
**devices** | **{ [key: string]: { [key: string]: string; }; }** | List of devices | [optional] [default to undefined]

## Example

```typescript
import { ProfilePut } from 'incus-client';

const instance: ProfilePut = {
    config,
    description,
    devices,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
