# NetworkZoneRecordEntry

NetworkZoneRecordEntry represents the fields in a record entry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ttl** | **number** | TTL for the entry | [optional] [default to undefined]
**type** | **string** | Type of DNS entry | [optional] [default to undefined]
**value** | **string** | Value for the record | [optional] [default to undefined]

## Example

```typescript
import { NetworkZoneRecordEntry } from 'incus-client';

const instance: NetworkZoneRecordEntry = {
    ttl,
    type,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
