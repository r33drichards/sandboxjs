# ProjectStateResource

ProjectStateResource represents the state of a particular resource in a project

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Limit** | **number** | Limit for the resource (-1 if none) | [optional] [default to undefined]
**Usage** | **number** | Current usage for the resource | [optional] [default to undefined]

## Example

```typescript
import { ProjectStateResource } from 'incus-client';

const instance: ProjectStateResource = {
    Limit,
    Usage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
