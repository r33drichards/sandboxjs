# ClusterMemberState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage_pools** | [**{ [key: string]: StoragePoolState; }**](StoragePoolState.md) |  | [optional] [default to undefined]
**sysinfo** | [**ClusterMemberSysInfo**](ClusterMemberSysInfo.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ClusterMemberState } from 'incus-client';

const instance: ClusterMemberState = {
    storage_pools,
    sysinfo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
