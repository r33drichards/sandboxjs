# ClusterMemberSysInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buffered_ram** | **number** |  | [optional] [default to undefined]
**free_ram** | **number** |  | [optional] [default to undefined]
**free_swap** | **number** |  | [optional] [default to undefined]
**load_averages** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**processes** | **number** |  | [optional] [default to undefined]
**shared_ram** | **number** |  | [optional] [default to undefined]
**total_ram** | **number** |  | [optional] [default to undefined]
**total_swap** | **number** |  | [optional] [default to undefined]
**uptime** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { ClusterMemberSysInfo } from 'incus-client';

const instance: ClusterMemberSysInfo = {
    buffered_ram,
    free_ram,
    free_swap,
    load_averages,
    processes,
    shared_ram,
    total_ram,
    total_swap,
    uptime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
