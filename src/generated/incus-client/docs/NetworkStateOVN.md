# NetworkStateOVN

NetworkStateOVN represents OVN specific state

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chassis** | **string** | OVN network chassis name | [optional] [default to undefined]
**logical_router** | **string** | OVN logical router name | [optional] [default to undefined]
**logical_switch** | **string** | OVN logical switch name | [optional] [default to undefined]
**uplink_ipv4** | **string** | OVN network uplink ipv4 address | [optional] [default to undefined]
**uplink_ipv6** | **string** | OVN network uplink ipv6 address | [optional] [default to undefined]

## Example

```typescript
import { NetworkStateOVN } from 'incus-client';

const instance: NetworkStateOVN = {
    chassis,
    logical_router,
    logical_switch,
    uplink_ipv4,
    uplink_ipv6,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
