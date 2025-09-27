# ResourcesSystem

ResourcesSystem represents the system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chassis** | [**ResourcesSystemChassis**](ResourcesSystemChassis.md) |  | [optional] [default to undefined]
**family** | **string** | System family | [optional] [default to undefined]
**firmware** | [**ResourcesSystemFirmware**](ResourcesSystemFirmware.md) |  | [optional] [default to undefined]
**motherboard** | [**ResourcesSystemMotherboard**](ResourcesSystemMotherboard.md) |  | [optional] [default to undefined]
**product** | **string** | System model | [optional] [default to undefined]
**serial** | **string** | System serial number | [optional] [default to undefined]
**sku** | **string** | System nanufacturer SKU LENOVO_MT_20HR_BU_Think_FM_ThinkPad X1 Carbon 5th | [optional] [default to undefined]
**type** | **string** | System type (unknown, physical, virtual-machine, container, ...) | [optional] [default to undefined]
**uuid** | **string** | System UUID | [optional] [default to undefined]
**vendor** | **string** | System vendor | [optional] [default to undefined]
**version** | **string** | System version | [optional] [default to undefined]

## Example

```typescript
import { ResourcesSystem } from 'incus-client';

const instance: ResourcesSystem = {
    chassis,
    family,
    firmware,
    motherboard,
    product,
    serial,
    sku,
    type,
    uuid,
    vendor,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
