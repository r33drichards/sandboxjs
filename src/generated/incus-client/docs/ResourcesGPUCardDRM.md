# ResourcesGPUCardDRM

ResourcesGPUCardDRM represents the Linux DRM configuration of the GPU

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_device** | **string** | Card device number | [optional] [default to undefined]
**card_name** | **string** | Card device name | [optional] [default to undefined]
**control_device** | **string** | Control device number | [optional] [default to undefined]
**control_name** | **string** | Control device name | [optional] [default to undefined]
**id** | **number** | DRM card ID | [optional] [default to undefined]
**render_device** | **string** | Render device number | [optional] [default to undefined]
**render_name** | **string** | Render device name | [optional] [default to undefined]

## Example

```typescript
import { ResourcesGPUCardDRM } from 'incus-client';

const instance: ResourcesGPUCardDRM = {
    card_device,
    card_name,
    control_device,
    control_name,
    id,
    render_device,
    render_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
