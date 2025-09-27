# ResourcesPCI

ResourcesPCI represents the PCI devices available on the system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | [**Array&lt;ResourcesPCIDevice&gt;**](ResourcesPCIDevice.md) | List of PCI devices | [optional] [default to undefined]
**total** | **number** | Total number of PCI devices | [optional] [default to undefined]

## Example

```typescript
import { ResourcesPCI } from 'incus-client';

const instance: ResourcesPCI = {
    devices,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
