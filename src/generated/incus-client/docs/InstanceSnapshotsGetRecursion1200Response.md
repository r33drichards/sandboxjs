# InstanceSnapshotsGetRecursion1200Response

Sync response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**Array&lt;InstanceSnapshot&gt;**](InstanceSnapshot.md) | List of instance snapshots | [optional] [default to undefined]
**status** | **string** | Status description | [optional] [default to undefined]
**status_code** | **number** | Status code | [optional] [default to undefined]
**type** | **string** | Response type | [optional] [default to undefined]

## Example

```typescript
import { InstanceSnapshotsGetRecursion1200Response } from 'incus-client';

const instance: InstanceSnapshotsGetRecursion1200Response = {
    metadata,
    status,
    status_code,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
