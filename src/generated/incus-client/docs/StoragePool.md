# StoragePool


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Storage pool configuration map (refer to doc/storage.md) | [optional] [default to undefined]
**description** | **string** | Description of the storage pool | [optional] [default to undefined]
**driver** | **string** | Storage pool driver (btrfs, ceph, cephfs, cephobject, dir, lvm, lvmcluster or zfs) | [optional] [default to undefined]
**locations** | **Array&lt;string&gt;** | Cluster members on which the storage pool has been defined | [optional] [readonly] [default to undefined]
**name** | **string** | Storage pool name | [optional] [default to undefined]
**status** | **string** | Pool status (Pending, Created, Errored or Unknown) | [optional] [readonly] [default to undefined]
**used_by** | **Array&lt;string&gt;** | List of URLs of objects using this storage pool | [optional] [default to undefined]

## Example

```typescript
import { StoragePool } from 'incus-client';

const instance: StoragePool = {
    config,
    description,
    driver,
    locations,
    name,
    status,
    used_by,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
