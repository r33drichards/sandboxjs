# InstanceStateNetworkCounters

InstanceStateNetworkCounters represents packet counters as part of the network section of an instance\'s state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_received** | **number** | Number of bytes received | [optional] [default to undefined]
**bytes_sent** | **number** | Number of bytes sent | [optional] [default to undefined]
**errors_received** | **number** | Number of errors received | [optional] [default to undefined]
**errors_sent** | **number** | Number of errors sent | [optional] [default to undefined]
**packets_dropped_inbound** | **number** | Number of inbound packets dropped | [optional] [default to undefined]
**packets_dropped_outbound** | **number** | Number of outbound packets dropped | [optional] [default to undefined]
**packets_received** | **number** | Number of packets received | [optional] [default to undefined]
**packets_sent** | **number** | Number of packets sent | [optional] [default to undefined]

## Example

```typescript
import { InstanceStateNetworkCounters } from 'incus-client';

const instance: InstanceStateNetworkCounters = {
    bytes_received,
    bytes_sent,
    errors_received,
    errors_sent,
    packets_dropped_inbound,
    packets_dropped_outbound,
    packets_received,
    packets_sent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
