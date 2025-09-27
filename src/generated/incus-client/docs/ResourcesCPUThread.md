# ResourcesCPUThread

ResourcesCPUThread represents a CPU thread on the system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Thread ID (used for CPU pinning) | [optional] [default to undefined]
**isolated** | **boolean** | Whether the thread has been isolated (outside of normal scheduling) | [optional] [default to undefined]
**numa_node** | **number** | NUMA node the thread is a part of | [optional] [default to undefined]
**online** | **boolean** | Whether the thread is online (enabled) | [optional] [default to undefined]
**thread** | **number** | Thread identifier within the core | [optional] [default to undefined]

## Example

```typescript
import { ResourcesCPUThread } from 'incus-client';

const instance: ResourcesCPUThread = {
    id,
    isolated,
    numa_node,
    online,
    thread,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
