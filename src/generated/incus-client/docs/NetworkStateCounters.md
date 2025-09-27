# NetworkStateCounters

NetworkStateCounters represents packet counters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_received** | **number** | Number of bytes received | [optional] [default to undefined]
**bytes_sent** | **number** | Number of bytes sent | [optional] [default to undefined]
**packets_received** | **number** | Number of packets received | [optional] [default to undefined]
**packets_sent** | **number** | Number of packets sent | [optional] [default to undefined]

## Example

```typescript
import { NetworkStateCounters } from 'incus-client';

const instance: NetworkStateCounters = {
    bytes_received,
    bytes_sent,
    packets_received,
    packets_sent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
