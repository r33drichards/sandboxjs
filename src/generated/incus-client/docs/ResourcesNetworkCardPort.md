# ResourcesNetworkCardPort

ResourcesNetworkCardPort represents a network port on the system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | MAC address | [optional] [default to undefined]
**auto_negotiation** | **boolean** | Whether auto negotiation is used | [optional] [default to undefined]
**id** | **string** | Port identifier (interface name) | [optional] [default to undefined]
**infiniband** | [**ResourcesNetworkCardPortInfiniband**](ResourcesNetworkCardPortInfiniband.md) |  | [optional] [default to undefined]
**link_detected** | **boolean** | Whether a link was detected | [optional] [default to undefined]
**link_duplex** | **string** | Duplex type | [optional] [default to undefined]
**link_speed** | **number** | Current speed (Mbit/s) | [optional] [default to undefined]
**port** | **number** | Port number | [optional] [default to undefined]
**port_type** | **string** | Current port type | [optional] [default to undefined]
**protocol** | **string** | Transport protocol | [optional] [default to undefined]
**supported_modes** | **Array&lt;string&gt;** | List of supported modes | [optional] [default to undefined]
**supported_ports** | **Array&lt;string&gt;** | List of supported port types | [optional] [default to undefined]
**transceiver_type** | **string** | Type of transceiver used | [optional] [default to undefined]

## Example

```typescript
import { ResourcesNetworkCardPort } from 'incus-client';

const instance: ResourcesNetworkCardPort = {
    address,
    auto_negotiation,
    id,
    infiniband,
    link_detected,
    link_duplex,
    link_speed,
    port,
    port_type,
    protocol,
    supported_modes,
    supported_ports,
    transceiver_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
