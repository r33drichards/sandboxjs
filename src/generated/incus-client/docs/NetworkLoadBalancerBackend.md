# NetworkLoadBalancerBackend

NetworkLoadBalancerBackend represents a target backend specification in a network load balancer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Description of the load balancer backend | [optional] [default to undefined]
**name** | **string** | Name of the load balancer backend | [optional] [default to undefined]
**target_address** | **string** | TargetAddress to forward ListenPorts to | [optional] [default to undefined]
**target_port** | **string** | TargetPort(s) to forward ListenPorts to (allows for many-to-one) | [optional] [default to undefined]

## Example

```typescript
import { NetworkLoadBalancerBackend } from 'incus-client';

const instance: NetworkLoadBalancerBackend = {
    description,
    name,
    target_address,
    target_port,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
