# StorageBucketsPost

StorageBucketsPost represents the fields of a new storage pool bucket

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Storage bucket configuration map | [optional] [default to undefined]
**description** | **string** | Description of the storage bucket | [optional] [default to undefined]
**name** | **string** | Bucket name | [optional] [default to undefined]

## Example

```typescript
import { StorageBucketsPost } from 'incus-client';

const instance: StorageBucketsPost = {
    config,
    description,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
