# ResourcesStorageDisk

ResourcesStorageDisk represents a disk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**block_size** | **number** | Block size | [optional] [default to undefined]
**device** | **string** | Device number | [optional] [default to undefined]
**device_id** | **string** | Device by-id identifier | [optional] [default to undefined]
**device_path** | **string** | Device by-path identifier | [optional] [default to undefined]
**firmware_version** | **string** | Current firmware version | [optional] [default to undefined]
**id** | **string** | ID of the disk (device name) | [optional] [default to undefined]
**model** | **string** | Disk model name | [optional] [default to undefined]
**numa_node** | **number** | NUMA node the disk is a part of | [optional] [default to undefined]
**partitions** | [**Array&lt;ResourcesStorageDiskPartition&gt;**](ResourcesStorageDiskPartition.md) | List of partitions | [optional] [default to undefined]
**pci_address** | **string** | PCI address | [optional] [default to undefined]
**read_only** | **boolean** | Whether the disk is read-only | [optional] [default to undefined]
**removable** | **boolean** | Whether the disk is removable (hot-plug) | [optional] [default to undefined]
**rpm** | **number** | Rotation speed (RPM) | [optional] [default to undefined]
**serial** | **string** | Serial number | [optional] [default to undefined]
**size** | **number** | Total size of the disk (bytes) | [optional] [default to undefined]
**type** | **string** | Storage type | [optional] [default to undefined]
**usb_address** | **string** | USB address | [optional] [default to undefined]
**wwn** | **string** | WWN identifier | [optional] [default to undefined]

## Example

```typescript
import { ResourcesStorageDisk } from 'incus-client';

const instance: ResourcesStorageDisk = {
    block_size,
    device,
    device_id,
    device_path,
    firmware_version,
    id,
    model,
    numa_node,
    partitions,
    pci_address,
    read_only,
    removable,
    rpm,
    serial,
    size,
    type,
    usb_address,
    wwn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
