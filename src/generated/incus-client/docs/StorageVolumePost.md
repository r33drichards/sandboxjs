# StorageVolumePost

StorageVolumePost represents the fields required to rename a storage pool volume

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migration** | **boolean** | Initiate volume migration | [optional] [default to undefined]
**name** | **string** | New volume name | [optional] [default to undefined]
**pool** | **string** | New storage pool | [optional] [default to undefined]
**project** | **string** | New project name | [optional] [default to undefined]
**source** | [**StorageVolumeSource**](StorageVolumeSource.md) |  | [optional] [default to undefined]
**target** | [**StorageVolumePostTarget**](StorageVolumePostTarget.md) |  | [optional] [default to undefined]
**volume_only** | **boolean** | Whether snapshots should be discarded (migration only) | [optional] [default to undefined]

## Example

```typescript
import { StorageVolumePost } from 'incus-client';

const instance: StorageVolumePost = {
    migration,
    name,
    pool,
    project,
    source,
    target,
    volume_only,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
