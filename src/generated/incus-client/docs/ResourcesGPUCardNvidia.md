# ResourcesGPUCardNvidia

ResourcesGPUCardNvidia represents additional information for NVIDIA GPUs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **string** | Architecture (generation) | [optional] [default to undefined]
**brand** | **string** | Brand name | [optional] [default to undefined]
**card_device** | **string** | Card device number | [optional] [default to undefined]
**card_name** | **string** | Card device name | [optional] [default to undefined]
**cuda_version** | **string** | Version of the CUDA API | [optional] [default to undefined]
**model** | **string** | Model name | [optional] [default to undefined]
**nvrm_version** | **string** | Version of the NVRM (usually driver version) | [optional] [default to undefined]
**uuid** | **string** | GPU UUID | [optional] [default to undefined]

## Example

```typescript
import { ResourcesGPUCardNvidia } from 'incus-client';

const instance: ResourcesGPUCardNvidia = {
    architecture,
    brand,
    card_device,
    card_name,
    cuda_version,
    model,
    nvrm_version,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
