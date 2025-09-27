# NetworkStateBridge

NetworkStateBridge represents bridge specific state

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forward_delay** | **number** | Delay on port join (ms) | [optional] [default to undefined]
**id** | **string** | Bridge ID | [optional] [default to undefined]
**stp** | **boolean** | Whether STP is enabled | [optional] [default to undefined]
**upper_devices** | **Array&lt;string&gt;** | List of devices that are in the bridge | [optional] [default to undefined]
**vlan_default** | **number** | Default VLAN ID | [optional] [default to undefined]
**vlan_filtering** | **boolean** | Whether VLAN filtering is enabled | [optional] [default to undefined]

## Example

```typescript
import { NetworkStateBridge } from 'incus-client';

const instance: NetworkStateBridge = {
    forward_delay,
    id,
    stp,
    upper_devices,
    vlan_default,
    vlan_filtering,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
