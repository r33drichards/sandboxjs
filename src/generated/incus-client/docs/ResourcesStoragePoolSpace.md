# ResourcesStoragePoolSpace

ResourcesStoragePoolSpace represents the space available to a given storage pool

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Total disk space (bytes) | [optional] [default to undefined]
**used** | **number** | Used disk space (bytes) | [optional] [default to undefined]

## Example

```typescript
import { ResourcesStoragePoolSpace } from 'incus-client';

const instance: ResourcesStoragePoolSpace = {
    total,
    used,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
