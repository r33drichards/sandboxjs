# NetworkState

NetworkState represents the network state

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**Array&lt;NetworkStateAddress&gt;**](NetworkStateAddress.md) | List of addresses | [optional] [default to undefined]
**bond** | [**NetworkStateBond**](NetworkStateBond.md) |  | [optional] [default to undefined]
**bridge** | [**NetworkStateBridge**](NetworkStateBridge.md) |  | [optional] [default to undefined]
**counters** | [**NetworkStateCounters**](NetworkStateCounters.md) |  | [optional] [default to undefined]
**hwaddr** | **string** | MAC address | [optional] [default to undefined]
**mtu** | **number** | MTU | [optional] [default to undefined]
**ovn** | [**NetworkStateOVN**](NetworkStateOVN.md) |  | [optional] [default to undefined]
**state** | **string** | Link state | [optional] [default to undefined]
**type** | **string** | Interface type | [optional] [default to undefined]
**vlan** | [**NetworkStateVLAN**](NetworkStateVLAN.md) |  | [optional] [default to undefined]

## Example

```typescript
import { NetworkState } from 'incus-client';

const instance: NetworkState = {
    addresses,
    bond,
    bridge,
    counters,
    hwaddr,
    mtu,
    ovn,
    state,
    type,
    vlan,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
