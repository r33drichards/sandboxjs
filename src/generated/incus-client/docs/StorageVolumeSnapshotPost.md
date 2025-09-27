# StorageVolumeSnapshotPost

StorageVolumeSnapshotPost represents the fields required to rename/move a storage volume snapshot

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migration** | **boolean** | Initiate volume snapshot migration | [optional] [default to undefined]
**name** | **string** | New snapshot name | [optional] [default to undefined]
**target** | [**StorageVolumePostTarget**](StorageVolumePostTarget.md) |  | [optional] [default to undefined]

## Example

```typescript
import { StorageVolumeSnapshotPost } from 'incus-client';

const instance: StorageVolumeSnapshotPost = {
    migration,
    name,
    target,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
