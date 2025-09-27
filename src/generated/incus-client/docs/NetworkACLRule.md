# NetworkACLRule

Refer to doc/network-acls.md for details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | Action to perform on rule match | [optional] [default to undefined]
**description** | **string** | Description of the rule | [optional] [default to undefined]
**destination** | **string** | Destination address | [optional] [default to undefined]
**destination_port** | **string** | Destination port | [optional] [default to undefined]
**icmp_code** | **string** | ICMP message code (for ICMP protocol) | [optional] [default to undefined]
**icmp_type** | **string** | Type of ICMP message (for ICMP protocol) | [optional] [default to undefined]
**protocol** | **string** | Protocol | [optional] [default to undefined]
**source** | **string** | Source address | [optional] [default to undefined]
**source_port** | **string** | Source port | [optional] [default to undefined]
**state** | **string** | State of the rule | [optional] [default to undefined]

## Example

```typescript
import { NetworkACLRule } from 'incus-client';

const instance: NetworkACLRule = {
    action,
    description,
    destination,
    destination_port,
    icmp_code,
    icmp_type,
    protocol,
    source,
    source_port,
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
