# StorageBucketKeysPost

StorageBucketKeysPost represents the fields of a new storage pool bucket key

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | **string** | Access key | [optional] [default to undefined]
**description** | **string** | Description of the storage bucket key | [optional] [default to undefined]
**name** | **string** | Key name | [optional] [default to undefined]
**role** | **string** | Whether the key can perform write actions or not. | [optional] [default to undefined]
**secret_key** | **string** | Secret key | [optional] [default to undefined]

## Example

```typescript
import { StorageBucketKeysPost } from 'incus-client';

const instance: StorageBucketKeysPost = {
    access_key,
    description,
    name,
    role,
    secret_key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
