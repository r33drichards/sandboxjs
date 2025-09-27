# ResourcesStorageDiskPartition

ResourcesStorageDiskPartition represents a partition on a disk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | **string** | Device number | [optional] [default to undefined]
**id** | **string** | ID of the partition (device name) | [optional] [default to undefined]
**partition** | **number** | Partition number | [optional] [default to undefined]
**read_only** | **boolean** | Whether the partition is read-only | [optional] [default to undefined]
**size** | **number** | Size of the partition (bytes) | [optional] [default to undefined]

## Example

```typescript
import { ResourcesStorageDiskPartition } from 'incus-client';

const instance: ResourcesStorageDiskPartition = {
    device,
    id,
    partition,
    read_only,
    size,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
