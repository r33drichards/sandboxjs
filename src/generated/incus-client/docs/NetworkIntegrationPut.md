# NetworkIntegrationPut

NetworkIntegrationPut represents the modifiable fields of a network integration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Integration configuration map (refer to doc/network-integrations.md) | [optional] [default to undefined]
**description** | **string** | Description of the network integration | [optional] [default to undefined]

## Example

```typescript
import { NetworkIntegrationPut } from 'incus-client';

const instance: NetworkIntegrationPut = {
    config,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
