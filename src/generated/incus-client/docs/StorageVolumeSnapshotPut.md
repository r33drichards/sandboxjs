# StorageVolumeSnapshotPut

StorageVolumeSnapshotPut represents the modifiable fields of a storage volume

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Description of the storage volume | [optional] [default to undefined]
**expires_at** | **string** | When the snapshot expires (gets auto-deleted) | [optional] [default to undefined]

## Example

```typescript
import { StorageVolumeSnapshotPut } from 'incus-client';

const instance: StorageVolumeSnapshotPut = {
    description,
    expires_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
