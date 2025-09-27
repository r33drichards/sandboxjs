# StorageVolumeSource

StorageVolumeSource represents the creation source for a new storage volume

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **string** | Certificate (for migration) | [optional] [default to undefined]
**location** | **string** | What cluster member this record was found on | [optional] [default to undefined]
**mode** | **string** | Whether to use pull or push mode (for migration) | [optional] [default to undefined]
**name** | **string** | Source volume name (for copy) | [optional] [default to undefined]
**operation** | **string** | Remote operation URL (for migration) | [optional] [default to undefined]
**pool** | **string** | Source storage pool (for copy) | [optional] [default to undefined]
**project** | **string** | Source project name | [optional] [default to undefined]
**refresh** | **boolean** | Whether existing destination volume should be refreshed | [optional] [default to undefined]
**refresh_exclude_older** | **boolean** | Whether to exclude source snapshots earlier than latest target snapshot | [optional] [default to undefined]
**secrets** | **{ [key: string]: string; }** | Map of migration websockets (for migration) | [optional] [default to undefined]
**type** | **string** | Source type (copy or migration) | [optional] [default to undefined]
**volume_only** | **boolean** | Whether snapshots should be discarded (for migration) | [optional] [default to undefined]

## Example

```typescript
import { StorageVolumeSource } from 'incus-client';

const instance: StorageVolumeSource = {
    certificate,
    location,
    mode,
    name,
    operation,
    pool,
    project,
    refresh,
    refresh_exclude_older,
    secrets,
    type,
    volume_only,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
