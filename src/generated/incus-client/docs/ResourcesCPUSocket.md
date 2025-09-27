# ResourcesCPUSocket

ResourcesCPUSocket represents a CPU socket on the system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_sizes** | [**ResourcesCPUAddressSizes**](ResourcesCPUAddressSizes.md) |  | [optional] [default to undefined]
**cache** | [**Array&lt;ResourcesCPUCache&gt;**](ResourcesCPUCache.md) | List of CPU caches | [optional] [default to undefined]
**cores** | [**Array&lt;ResourcesCPUCore&gt;**](ResourcesCPUCore.md) | List of CPU cores | [optional] [default to undefined]
**frequency** | **number** | Current CPU frequency (Mhz) | [optional] [default to undefined]
**frequency_minimum** | **number** | Minimum CPU frequency (Mhz) | [optional] [default to undefined]
**frequency_turbo** | **number** | Maximum CPU frequency (Mhz) | [optional] [default to undefined]
**name** | **string** | Product name | [optional] [default to undefined]
**socket** | **number** | Socket number | [optional] [default to undefined]
**vendor** | **string** | Vendor name | [optional] [default to undefined]

## Example

```typescript
import { ResourcesCPUSocket } from 'incus-client';

const instance: ResourcesCPUSocket = {
    address_sizes,
    cache,
    cores,
    frequency,
    frequency_minimum,
    frequency_turbo,
    name,
    socket,
    vendor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
