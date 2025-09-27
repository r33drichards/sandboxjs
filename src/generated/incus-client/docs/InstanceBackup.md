# InstanceBackup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** | When the backup was created | [optional] [default to undefined]
**expires_at** | **string** | When the backup expires (gets auto-deleted) | [optional] [default to undefined]
**instance_only** | **boolean** | Whether to ignore snapshots | [optional] [default to undefined]
**name** | **string** | Backup name | [optional] [default to undefined]
**optimized_storage** | **boolean** | Whether to use a pool-optimized binary format (instead of plain tarball) | [optional] [default to undefined]

## Example

```typescript
import { InstanceBackup } from 'incus-client';

const instance: InstanceBackup = {
    created_at,
    expires_at,
    instance_only,
    name,
    optimized_storage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
