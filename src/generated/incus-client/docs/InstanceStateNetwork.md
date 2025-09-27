# InstanceStateNetwork


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**Array&lt;InstanceStateNetworkAddress&gt;**](InstanceStateNetworkAddress.md) | List of IP addresses | [optional] [default to undefined]
**counters** | [**InstanceStateNetworkCounters**](InstanceStateNetworkCounters.md) |  | [optional] [default to undefined]
**host_name** | **string** | Name of the interface on the host | [optional] [default to undefined]
**hwaddr** | **string** | MAC address | [optional] [default to undefined]
**mtu** | **number** | MTU (maximum transmit unit) for the interface | [optional] [default to undefined]
**state** | **string** | Administrative state of the interface (up/down) | [optional] [default to undefined]
**type** | **string** | Type of interface (broadcast, loopback, point-to-point, ...) | [optional] [default to undefined]

## Example

```typescript
import { InstanceStateNetwork } from 'incus-client';

const instance: InstanceStateNetwork = {
    addresses,
    counters,
    host_name,
    hwaddr,
    mtu,
    state,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
