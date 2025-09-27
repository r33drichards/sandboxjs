# NetworkZoneRecordsPost

NetworkZoneRecordsPost represents the fields of a new network zone record

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Advanced configuration for the record | [optional] [default to undefined]
**description** | **string** | Description of the record | [optional] [default to undefined]
**entries** | [**Array&lt;NetworkZoneRecordEntry&gt;**](NetworkZoneRecordEntry.md) | Entries in the record | [optional] [default to undefined]
**name** | **string** | The record name in the zone | [optional] [default to undefined]

## Example

```typescript
import { NetworkZoneRecordsPost } from 'incus-client';

const instance: NetworkZoneRecordsPost = {
    config,
    description,
    entries,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
