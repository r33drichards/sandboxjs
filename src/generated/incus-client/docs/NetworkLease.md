# NetworkLease

NetworkLease represents a DHCP lease

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | The IP address | [optional] [default to undefined]
**hostname** | **string** | The hostname associated with the record | [optional] [default to undefined]
**hwaddr** | **string** | The MAC address | [optional] [default to undefined]
**location** | **string** | What cluster member this record was found on | [optional] [default to undefined]
**type** | **string** | The type of record (static or dynamic) | [optional] [default to undefined]

## Example

```typescript
import { NetworkLease } from 'incus-client';

const instance: NetworkLease = {
    address,
    hostname,
    hwaddr,
    location,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
