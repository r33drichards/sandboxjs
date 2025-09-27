# ResourcesGPU

ResourcesGPU represents the GPU resources available on the system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cards** | [**Array&lt;ResourcesGPUCard&gt;**](ResourcesGPUCard.md) | List of GPUs | [optional] [default to undefined]
**total** | **number** | Total number of GPUs | [optional] [default to undefined]

## Example

```typescript
import { ResourcesGPU } from 'incus-client';

const instance: ResourcesGPU = {
    cards,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
