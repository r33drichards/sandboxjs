# NetworkLoadBalancerStateBackendHealth

NetworkLoadBalancerStateBackendHealth represents the health of a particular load-balancer backend

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** |  | [optional] [default to undefined]
**ports** | [**Array&lt;NetworkLoadBalancerStateBackendHealthPort&gt;**](NetworkLoadBalancerStateBackendHealthPort.md) |  | [optional] [default to undefined]

## Example

```typescript
import { NetworkLoadBalancerStateBackendHealth } from 'incus-client';

const instance: NetworkLoadBalancerStateBackendHealth = {
    address,
    ports,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
