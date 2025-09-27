# StorageVolumeSnapshotsPost

StorageVolumeSnapshotsPost represents the fields available for a new storage volume snapshot

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_at** | **string** | When the snapshot expires (gets auto-deleted) | [optional] [default to undefined]
**name** | **string** | Snapshot name | [optional] [default to undefined]

## Example

```typescript
import { StorageVolumeSnapshotsPost } from 'incus-client';

const instance: StorageVolumeSnapshotsPost = {
    expires_at,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
