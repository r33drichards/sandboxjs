# NetworkStateBond

NetworkStateBond represents bond specific state

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**down_delay** | **number** | Delay on link down (ms) | [optional] [default to undefined]
**lower_devices** | **Array&lt;string&gt;** | List of devices that are part of the bond | [optional] [default to undefined]
**mii_frequency** | **number** | How often to check for link state (ms) | [optional] [default to undefined]
**mii_state** | **string** | Bond link state | [optional] [default to undefined]
**mode** | **string** | Bonding mode | [optional] [default to undefined]
**transmit_policy** | **string** | Transmit balancing policy | [optional] [default to undefined]
**up_delay** | **number** | Delay on link up (ms) | [optional] [default to undefined]

## Example

```typescript
import { NetworkStateBond } from 'incus-client';

const instance: NetworkStateBond = {
    down_delay,
    lower_devices,
    mii_frequency,
    mii_state,
    mode,
    transmit_policy,
    up_delay,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
