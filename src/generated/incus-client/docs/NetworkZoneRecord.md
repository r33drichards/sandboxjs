# NetworkZoneRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Advanced configuration for the record | [optional] [default to undefined]
**description** | **string** | Description of the record | [optional] [default to undefined]
**entries** | [**Array&lt;NetworkZoneRecordEntry&gt;**](NetworkZoneRecordEntry.md) | Entries in the record | [optional] [default to undefined]
**name** | **string** | The name of the record | [optional] [default to undefined]

## Example

```typescript
import { NetworkZoneRecord } from 'incus-client';

const instance: NetworkZoneRecord = {
    config,
    description,
    entries,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
