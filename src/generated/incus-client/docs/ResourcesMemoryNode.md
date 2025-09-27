# ResourcesMemoryNode

ResourcesMemoryNode represents the node-specific memory resources available on the system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hugepages_total** | **number** | Total of memory huge pages (bytes) | [optional] [default to undefined]
**hugepages_used** | **number** | Used memory huge pages (bytes) | [optional] [default to undefined]
**numa_node** | **number** | NUMA node identifier | [optional] [default to undefined]
**total** | **number** | Total system memory (bytes) | [optional] [default to undefined]
**used** | **number** | Used system memory (bytes) | [optional] [default to undefined]

## Example

```typescript
import { ResourcesMemoryNode } from 'incus-client';

const instance: ResourcesMemoryNode = {
    hugepages_total,
    hugepages_used,
    numa_node,
    total,
    used,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
