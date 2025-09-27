# ResourcesNetworkCardPortInfiniband

ResourcesNetworkCardPortInfiniband represents the Linux Infiniband configuration for the port

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issm_device** | **string** | ISSM device number | [optional] [default to undefined]
**issm_name** | **string** | ISSM device name | [optional] [default to undefined]
**mad_device** | **string** | MAD device number | [optional] [default to undefined]
**mad_name** | **string** | MAD device name | [optional] [default to undefined]
**verb_device** | **string** | Verb device number | [optional] [default to undefined]
**verb_name** | **string** | Verb device name | [optional] [default to undefined]

## Example

```typescript
import { ResourcesNetworkCardPortInfiniband } from 'incus-client';

const instance: ResourcesNetworkCardPortInfiniband = {
    issm_device,
    issm_name,
    mad_device,
    mad_name,
    verb_device,
    verb_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
