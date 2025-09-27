# ResourcesGPUCard

ResourcesGPUCard represents a GPU card on the system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**driver** | **string** | Kernel driver currently associated with the GPU | [optional] [default to undefined]
**driver_version** | **string** | Version of the kernel driver | [optional] [default to undefined]
**drm** | [**ResourcesGPUCardDRM**](ResourcesGPUCardDRM.md) |  | [optional] [default to undefined]
**mdev** | [**{ [key: string]: ResourcesGPUCardMdev; }**](ResourcesGPUCardMdev.md) | Map of available mediated device profiles | [optional] [default to undefined]
**numa_node** | **number** | NUMA node the GPU is a part of | [optional] [default to undefined]
**nvidia** | [**ResourcesGPUCardNvidia**](ResourcesGPUCardNvidia.md) |  | [optional] [default to undefined]
**pci_address** | **string** | PCI address | [optional] [default to undefined]
**product** | **string** | Name of the product | [optional] [default to undefined]
**product_id** | **string** | PCI ID of the product | [optional] [default to undefined]
**sriov** | [**ResourcesGPUCardSRIOV**](ResourcesGPUCardSRIOV.md) |  | [optional] [default to undefined]
**usb_address** | **string** | USB address (for USB cards) | [optional] [default to undefined]
**vendor** | **string** | Name of the vendor | [optional] [default to undefined]
**vendor_id** | **string** | PCI ID of the vendor | [optional] [default to undefined]

## Example

```typescript
import { ResourcesGPUCard } from 'incus-client';

const instance: ResourcesGPUCard = {
    driver,
    driver_version,
    drm,
    mdev,
    numa_node,
    nvidia,
    pci_address,
    product,
    product_id,
    sriov,
    usb_address,
    vendor,
    vendor_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
