# ProjectState

ProjectState represents the current running state of a project

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resources** | [**{ [key: string]: ProjectStateResource; }**](ProjectStateResource.md) | Allocated and used resources | [optional] [readonly] [default to undefined]

## Example

```typescript
import { ProjectState } from 'incus-client';

const instance: ProjectState = {
    resources,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
