# InitProfileProjectPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Project** | **string** | Project in which the profile will reside | [optional] [default to undefined]
**config** | **object** | Instance configuration map (refer to doc/instances.md) | [optional] [default to undefined]
**description** | **string** | Description of the profile | [optional] [default to undefined]
**devices** | **{ [key: string]: { [key: string]: string; }; }** | List of devices | [optional] [default to undefined]
**name** | **string** | The name of the new profile | [optional] [default to undefined]

## Example

```typescript
import { InitProfileProjectPost } from 'incus-client';

const instance: InitProfileProjectPost = {
    Project,
    config,
    description,
    devices,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
