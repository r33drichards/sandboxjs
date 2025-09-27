# ResourcesUSB

ResourcesUSB represents the USB devices available on the system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | [**Array&lt;ResourcesUSBDevice&gt;**](ResourcesUSBDevice.md) | List of USB devices | [optional] [default to undefined]
**total** | **number** | Total number of USB devices | [optional] [default to undefined]

## Example

```typescript
import { ResourcesUSB } from 'incus-client';

const instance: ResourcesUSB = {
    devices,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
