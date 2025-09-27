# StorageVolumeBackup

StorageVolumeBackup represents a volume backup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** | When the backup was created | [optional] [default to undefined]
**expires_at** | **string** | When the backup expires (gets auto-deleted) | [optional] [default to undefined]
**name** | **string** | Backup name | [optional] [default to undefined]
**optimized_storage** | **boolean** | Whether to use a pool-optimized binary format (instead of plain tarball) | [optional] [default to undefined]
**volume_only** | **boolean** | Whether to ignore snapshots | [optional] [default to undefined]

## Example

```typescript
import { StorageVolumeBackup } from 'incus-client';

const instance: StorageVolumeBackup = {
    created_at,
    expires_at,
    name,
    optimized_storage,
    volume_only,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
