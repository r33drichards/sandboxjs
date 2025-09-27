# ResourcesPCIDevice

ResourcesPCIDevice represents a PCI device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**driver** | **string** | Kernel driver currently associated with the GPU | [optional] [default to undefined]
**driver_version** | **string** | Version of the kernel driver | [optional] [default to undefined]
**iommu_group** | **number** | IOMMU group number | [optional] [default to undefined]
**numa_node** | **number** | NUMA node the card is a part of | [optional] [default to undefined]
**pci_address** | **string** | PCI address | [optional] [default to undefined]
**product** | **string** | Name of the product | [optional] [default to undefined]
**product_id** | **string** | PCI ID of the product | [optional] [default to undefined]
**vendor** | **string** | Name of the vendor | [optional] [default to undefined]
**vendor_id** | **string** | PCI ID of the vendor | [optional] [default to undefined]
**vpd** | [**ResourcesPCIVPD**](ResourcesPCIVPD.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ResourcesPCIDevice } from 'incus-client';

const instance: ResourcesPCIDevice = {
    driver,
    driver_version,
    iommu_group,
    numa_node,
    pci_address,
    product,
    product_id,
    vendor,
    vendor_id,
    vpd,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
