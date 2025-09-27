# InstanceSnapshotPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**live** | **boolean** | Whether to perform a live migration (requires migration) | [optional] [default to undefined]
**migration** | **boolean** | Whether this is a migration request | [optional] [default to undefined]
**name** | **string** | New name for the snapshot | [optional] [default to undefined]
**target** | [**InstancePostTarget**](InstancePostTarget.md) |  | [optional] [default to undefined]

## Example

```typescript
import { InstanceSnapshotPost } from 'incus-client';

const instance: InstanceSnapshotPost = {
    live,
    migration,
    name,
    target,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
