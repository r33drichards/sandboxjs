# NetworkLoadBalancer

NetworkLoadBalancer used for displaying a network load balancer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backends** | [**Array&lt;NetworkLoadBalancerBackend&gt;**](NetworkLoadBalancerBackend.md) | Backends (optional) | [optional] [default to undefined]
**config** | **object** | Load balancer configuration map (refer to doc/network-load-balancers.md) | [optional] [default to undefined]
**description** | **string** | Description of the load balancer listen IP | [optional] [default to undefined]
**listen_address** | **string** | The listen address of the load balancer | [optional] [default to undefined]
**location** | **string** | What cluster member this record was found on | [optional] [default to undefined]
**ports** | [**Array&lt;NetworkLoadBalancerPort&gt;**](NetworkLoadBalancerPort.md) | Port forwards (optional) | [optional] [default to undefined]

## Example

```typescript
import { NetworkLoadBalancer } from 'incus-client';

const instance: NetworkLoadBalancer = {
    backends,
    config,
    description,
    listen_address,
    location,
    ports,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
