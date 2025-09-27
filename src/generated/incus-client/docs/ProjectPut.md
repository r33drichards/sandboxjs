# ProjectPut

ProjectPut represents the modifiable fields of a project

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Project configuration map (refer to doc/projects.md) | [optional] [default to undefined]
**description** | **string** | Description of the project | [optional] [default to undefined]

## Example

```typescript
import { ProjectPut } from 'incus-client';

const instance: ProjectPut = {
    config,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
