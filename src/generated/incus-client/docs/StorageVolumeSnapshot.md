# StorageVolumeSnapshot

StorageVolumeSnapshot represents a storage volume snapshot

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Storage volume configuration map (refer to doc/storage.md) | [optional] [default to undefined]
**content_type** | **string** | The content type (filesystem or block) | [optional] [default to undefined]
**created_at** | **string** | Volume snapshot creation timestamp | [optional] [default to undefined]
**description** | **string** | Description of the storage volume | [optional] [default to undefined]
**expires_at** | **string** | When the snapshot expires (gets auto-deleted) | [optional] [default to undefined]
**name** | **string** | Snapshot name | [optional] [default to undefined]

## Example

```typescript
import { StorageVolumeSnapshot } from 'incus-client';

const instance: StorageVolumeSnapshot = {
    config,
    content_type,
    created_at,
    description,
    expires_at,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
