# ResourcesUSBDevice

ResourcesUSBDevice represents a USB device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bus_address** | **number** | USB address (bus) | [optional] [default to undefined]
**device_address** | **number** | USB address (device) | [optional] [default to undefined]
**interfaces** | [**Array&lt;ResourcesUSBDeviceInterface&gt;**](ResourcesUSBDeviceInterface.md) | List of USB interfaces | [optional] [default to undefined]
**product** | **string** | Name of the product | [optional] [default to undefined]
**product_id** | **string** | USB ID of the product | [optional] [default to undefined]
**serial** | **string** | USB serial number | [optional] [default to undefined]
**speed** | **number** | Transfer speed (Mbit/s) | [optional] [default to undefined]
**vendor** | **string** | Name of the vendor | [optional] [default to undefined]
**vendor_id** | **string** | USB ID of the vendor | [optional] [default to undefined]

## Example

```typescript
import { ResourcesUSBDevice } from 'incus-client';

const instance: ResourcesUSBDevice = {
    bus_address,
    device_address,
    interfaces,
    product,
    product_id,
    serial,
    speed,
    vendor,
    vendor_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
