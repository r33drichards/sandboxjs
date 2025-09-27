# StorageBucketBackupsPost

StorageBucketBackupsPost represents the fields available for a new storage bucket backup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compression_algorithm** | **string** | What compression algorithm to use | [optional] [default to undefined]
**expires_at** | **string** | When the backup expires (gets auto-deleted) | [optional] [default to undefined]
**name** | **string** | Backup name | [optional] [default to undefined]

## Example

```typescript
import { StorageBucketBackupsPost } from 'incus-client';

const instance: StorageBucketBackupsPost = {
    compression_algorithm,
    expires_at,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
