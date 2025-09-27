# Profile

Profile represents a profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Instance configuration map (refer to doc/instances.md) | [optional] [default to undefined]
**description** | **string** | Description of the profile | [optional] [default to undefined]
**devices** | **{ [key: string]: { [key: string]: string; }; }** | List of devices | [optional] [default to undefined]
**name** | **string** | The profile name | [optional] [readonly] [default to undefined]
**project** | **string** | Project name | [optional] [default to undefined]
**used_by** | **Array&lt;string&gt;** | List of URLs of objects using this profile | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Profile } from 'incus-client';

const instance: Profile = {
    config,
    description,
    devices,
    name,
    project,
    used_by,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
