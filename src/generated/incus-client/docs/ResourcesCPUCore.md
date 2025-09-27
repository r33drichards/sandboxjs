# ResourcesCPUCore

ResourcesCPUCore represents a CPU core on the system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**core** | **number** | Core identifier within the socket | [optional] [default to undefined]
**die** | **number** | What die the CPU is a part of (for chiplet designs) | [optional] [default to undefined]
**flags** | **Array&lt;string&gt;** | List of CPU flags | [optional] [default to undefined]
**frequency** | **number** | Current frequency | [optional] [default to undefined]
**threads** | [**Array&lt;ResourcesCPUThread&gt;**](ResourcesCPUThread.md) | List of threads | [optional] [default to undefined]

## Example

```typescript
import { ResourcesCPUCore } from 'incus-client';

const instance: ResourcesCPUCore = {
    core,
    die,
    flags,
    frequency,
    threads,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
