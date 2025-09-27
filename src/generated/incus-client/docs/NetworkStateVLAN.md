# NetworkStateVLAN

NetworkStateVLAN represents VLAN specific state

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lower_device** | **string** | Parent device | [optional] [default to undefined]
**vid** | **number** | VLAN ID | [optional] [default to undefined]

## Example

```typescript
import { NetworkStateVLAN } from 'incus-client';

const instance: NetworkStateVLAN = {
    lower_device,
    vid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
