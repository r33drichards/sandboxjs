# ResourcesNetworkCardSRIOV

ResourcesNetworkCardSRIOV represents the SRIOV configuration of the network card

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_vfs** | **number** | Number of VFs currently configured | [optional] [default to undefined]
**maximum_vfs** | **number** | Maximum number of supported VFs | [optional] [default to undefined]
**vfs** | [**Array&lt;ResourcesNetworkCard&gt;**](ResourcesNetworkCard.md) | List of VFs (as additional Network devices) | [optional] [default to undefined]

## Example

```typescript
import { ResourcesNetworkCardSRIOV } from 'incus-client';

const instance: ResourcesNetworkCardSRIOV = {
    current_vfs,
    maximum_vfs,
    vfs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
