# ResourcesMemory

ResourcesMemory represents the memory resources available on the system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hugepages_size** | **number** | Size of memory huge pages (bytes) | [optional] [default to undefined]
**hugepages_total** | **number** | Total of memory huge pages (bytes) | [optional] [default to undefined]
**hugepages_used** | **number** | Used memory huge pages (bytes) | [optional] [default to undefined]
**nodes** | [**Array&lt;ResourcesMemoryNode&gt;**](ResourcesMemoryNode.md) | List of NUMA memory nodes | [optional] [default to undefined]
**total** | **number** | Total system memory (bytes) | [optional] [default to undefined]
**used** | **number** | Used system memory (bytes) | [optional] [default to undefined]

## Example

```typescript
import { ResourcesMemory } from 'incus-client';

const instance: ResourcesMemory = {
    hugepages_size,
    hugepages_total,
    hugepages_used,
    nodes,
    total,
    used,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
