# NetworkLoadBalancerPut

NetworkLoadBalancerPut represents the modifiable fields of a network load balancer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backends** | [**Array&lt;NetworkLoadBalancerBackend&gt;**](NetworkLoadBalancerBackend.md) | Backends (optional) | [optional] [default to undefined]
**config** | **object** | Load balancer configuration map (refer to doc/network-load-balancers.md) | [optional] [default to undefined]
**description** | **string** | Description of the load balancer listen IP | [optional] [default to undefined]
**ports** | [**Array&lt;NetworkLoadBalancerPort&gt;**](NetworkLoadBalancerPort.md) | Port forwards (optional) | [optional] [default to undefined]

## Example

```typescript
import { NetworkLoadBalancerPut } from 'incus-client';

const instance: NetworkLoadBalancerPut = {
    backends,
    config,
    description,
    ports,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
