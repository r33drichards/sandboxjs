# Project

Project represents a project

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Project configuration map (refer to doc/projects.md) | [optional] [default to undefined]
**description** | **string** | Description of the project | [optional] [default to undefined]
**name** | **string** | The project name | [optional] [readonly] [default to undefined]
**used_by** | **Array&lt;string&gt;** | List of URLs of objects using this project | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Project } from 'incus-client';

const instance: Project = {
    config,
    description,
    name,
    used_by,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
