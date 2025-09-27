# InstanceSnapshotsPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_at** | **string** | When the snapshot expires (gets auto-deleted) | [optional] [default to undefined]
**name** | **string** | Snapshot name | [optional] [default to undefined]
**stateful** | **boolean** | Whether the snapshot should include runtime state | [optional] [default to undefined]

## Example

```typescript
import { InstanceSnapshotsPost } from 'incus-client';

const instance: InstanceSnapshotsPost = {
    expires_at,
    name,
    stateful,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
