# ResourcesStoragePool

ResourcesStoragePool represents the resources available to a given storage pool

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inodes** | [**ResourcesStoragePoolInodes**](ResourcesStoragePoolInodes.md) |  | [optional] [default to undefined]
**space** | [**ResourcesStoragePoolSpace**](ResourcesStoragePoolSpace.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ResourcesStoragePool } from 'incus-client';

const instance: ResourcesStoragePool = {
    inodes,
    space,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
