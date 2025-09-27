# ResourcesUSBDeviceInterface

ResourcesUSBDeviceInterface represents a USB device interface

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_class** | **string** | Class of USB interface | [optional] [default to undefined]
**class_id** | **number** | ID of the USB interface class | [optional] [default to undefined]
**driver** | **string** | Kernel driver currently associated with the device | [optional] [default to undefined]
**driver_version** | **string** | Version of the kernel driver | [optional] [default to undefined]
**number** | **number** | Interface number | [optional] [default to undefined]
**subclass** | **string** | Sub class of the interface | [optional] [default to undefined]
**subclass_id** | **number** | ID of the USB interface sub class | [optional] [default to undefined]

## Example

```typescript
import { ResourcesUSBDeviceInterface } from 'incus-client';

const instance: ResourcesUSBDeviceInterface = {
    _class,
    class_id,
    driver,
    driver_version,
    number,
    subclass,
    subclass_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
