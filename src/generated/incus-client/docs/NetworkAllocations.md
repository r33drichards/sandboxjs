# NetworkAllocations

NetworkAllocations used for displaying network addresses used by a consuming entity e.g, instance, network forward, load-balancer, network...

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | **string** | The network address of the allocation (in CIDR format) | [optional] [default to undefined]
**hwaddr** | **string** | Hwaddr is the MAC address of the entity consuming the network address | [optional] [default to undefined]
**nat** | **boolean** | Whether the entity comes from a network that performs egress source NAT | [optional] [default to undefined]
**type** | **string** | Type of the entity consuming the network address | [optional] [default to undefined]
**used_by** | **string** | Name of the entity consuming the network address | [optional] [default to undefined]

## Example

```typescript
import { NetworkAllocations } from 'incus-client';

const instance: NetworkAllocations = {
    addresses,
    hwaddr,
    nat,
    type,
    used_by,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
