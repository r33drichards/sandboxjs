# NetworkLoadBalancerPort

NetworkLoadBalancerPort represents a port specification in a network load balancer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Description of the load balancer port | [optional] [default to undefined]
**listen_port** | **string** | ListenPort(s) of load balancer (comma delimited ranges) | [optional] [default to undefined]
**protocol** | **string** | Protocol for load balancer port (either tcp or udp) | [optional] [default to undefined]
**target_backend** | **Array&lt;string&gt;** | TargetBackend backend names to load balance ListenPorts to | [optional] [default to undefined]

## Example

```typescript
import { NetworkLoadBalancerPort } from 'incus-client';

const instance: NetworkLoadBalancerPort = {
    description,
    listen_port,
    protocol,
    target_backend,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
