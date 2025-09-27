# NetworkLoadBalancerState

NetworkLoadBalancerState is used for showing current state of a load balancer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_health** | [**{ [key: string]: NetworkLoadBalancerStateBackendHealth; }**](NetworkLoadBalancerStateBackendHealth.md) |  | [optional] [default to undefined]

## Example

```typescript
import { NetworkLoadBalancerState } from 'incus-client';

const instance: NetworkLoadBalancerState = {
    backend_health,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
