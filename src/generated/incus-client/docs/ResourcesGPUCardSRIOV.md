# ResourcesGPUCardSRIOV

ResourcesGPUCardSRIOV represents the SRIOV configuration of the GPU

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_vfs** | **number** | Number of VFs currently configured | [optional] [default to undefined]
**maximum_vfs** | **number** | Maximum number of supported VFs | [optional] [default to undefined]
**vfs** | [**Array&lt;ResourcesGPUCard&gt;**](ResourcesGPUCard.md) | List of VFs (as additional GPU devices) | [optional] [default to undefined]

## Example

```typescript
import { ResourcesGPUCardSRIOV } from 'incus-client';

const instance: ResourcesGPUCardSRIOV = {
    current_vfs,
    maximum_vfs,
    vfs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
