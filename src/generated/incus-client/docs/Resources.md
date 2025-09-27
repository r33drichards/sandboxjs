# Resources

Resources represents the system hardware resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu** | [**ResourcesCPU**](ResourcesCPU.md) |  | [optional] [default to undefined]
**gpu** | [**ResourcesGPU**](ResourcesGPU.md) |  | [optional] [default to undefined]
**load** | [**ResourcesLoad**](ResourcesLoad.md) |  | [optional] [default to undefined]
**memory** | [**ResourcesMemory**](ResourcesMemory.md) |  | [optional] [default to undefined]
**network** | [**ResourcesNetwork**](ResourcesNetwork.md) |  | [optional] [default to undefined]
**pci** | [**ResourcesPCI**](ResourcesPCI.md) |  | [optional] [default to undefined]
**storage** | [**ResourcesStorage**](ResourcesStorage.md) |  | [optional] [default to undefined]
**system** | [**ResourcesSystem**](ResourcesSystem.md) |  | [optional] [default to undefined]
**usb** | [**ResourcesUSB**](ResourcesUSB.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Resources } from 'incus-client';

const instance: Resources = {
    cpu,
    gpu,
    load,
    memory,
    network,
    pci,
    storage,
    system,
    usb,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
