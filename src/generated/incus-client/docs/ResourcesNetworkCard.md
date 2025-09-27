# ResourcesNetworkCard

ResourcesNetworkCard represents a network card on the system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**driver** | **string** | Kernel driver currently associated with the card | [optional] [default to undefined]
**driver_version** | **string** | Version of the kernel driver | [optional] [default to undefined]
**firmware_version** | **string** | Current firmware version | [optional] [default to undefined]
**numa_node** | **number** | NUMA node the card is a part of | [optional] [default to undefined]
**pci_address** | **string** | PCI address (for PCI cards) | [optional] [default to undefined]
**ports** | [**Array&lt;ResourcesNetworkCardPort&gt;**](ResourcesNetworkCardPort.md) | List of ports on the card | [optional] [default to undefined]
**product** | **string** | Name of the product | [optional] [default to undefined]
**product_id** | **string** | PCI ID of the product | [optional] [default to undefined]
**sriov** | [**ResourcesNetworkCardSRIOV**](ResourcesNetworkCardSRIOV.md) |  | [optional] [default to undefined]
**usb_address** | **string** | USB address (for USB cards) | [optional] [default to undefined]
**vdpa** | [**ResourcesNetworkCardVDPA**](ResourcesNetworkCardVDPA.md) |  | [optional] [default to undefined]
**vendor** | **string** | Name of the vendor | [optional] [default to undefined]
**vendor_id** | **string** | PCI ID of the vendor | [optional] [default to undefined]

## Example

```typescript
import { ResourcesNetworkCard } from 'incus-client';

const instance: ResourcesNetworkCard = {
    driver,
    driver_version,
    firmware_version,
    numa_node,
    pci_address,
    ports,
    product,
    product_id,
    sriov,
    usb_address,
    vdpa,
    vendor,
    vendor_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
