# StoragePoolsPost

StoragePoolsPost represents the fields of a new storage pool

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Storage pool configuration map (refer to doc/storage.md) | [optional] [default to undefined]
**description** | **string** | Description of the storage pool | [optional] [default to undefined]
**driver** | **string** | Storage pool driver (btrfs, ceph, cephfs, cephobject, dir, lvm, lvmcluster or zfs) | [optional] [default to undefined]
**name** | **string** | Storage pool name | [optional] [default to undefined]

## Example

```typescript
import { StoragePoolsPost } from 'incus-client';

const instance: StoragePoolsPost = {
    config,
    description,
    driver,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
