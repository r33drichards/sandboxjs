# StorageVolumeBackupsPost

StorageVolumeBackupsPost represents the fields available for a new volume backup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compression_algorithm** | **string** | What compression algorithm to use | [optional] [default to undefined]
**expires_at** | **string** | When the backup expires (gets auto-deleted) | [optional] [default to undefined]
**name** | **string** | Backup name | [optional] [default to undefined]
**optimized_storage** | **boolean** | Whether to use a pool-optimized binary format (instead of plain tarball) | [optional] [default to undefined]
**target** | [**BackupTarget**](BackupTarget.md) |  | [optional] [default to undefined]
**volume_only** | **boolean** | Whether to ignore snapshots | [optional] [default to undefined]

## Example

```typescript
import { StorageVolumeBackupsPost } from 'incus-client';

const instance: StorageVolumeBackupsPost = {
    compression_algorithm,
    expires_at,
    name,
    optimized_storage,
    target,
    volume_only,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
