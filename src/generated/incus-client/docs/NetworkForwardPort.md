# NetworkForwardPort

NetworkForwardPort represents a port specification in a network address forward

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Description of the forward port | [optional] [default to undefined]
**listen_port** | **string** | ListenPort(s) to forward (comma delimited ranges) | [optional] [default to undefined]
**protocol** | **string** | Protocol for port forward (either tcp or udp) | [optional] [default to undefined]
**snat** | **boolean** | SNAT controls whether to apply a matching SNAT rule to new outgoing traffic from the target | [optional] [default to undefined]
**target_address** | **string** | TargetAddress to forward ListenPorts to | [optional] [default to undefined]
**target_port** | **string** | TargetPort(s) to forward ListenPorts to (allows for many-to-one) | [optional] [default to undefined]

## Example

```typescript
import { NetworkForwardPort } from 'incus-client';

const instance: NetworkForwardPort = {
    description,
    listen_port,
    protocol,
    snat,
    target_address,
    target_port,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
