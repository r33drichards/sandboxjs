# InstanceStateCPU


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocated_time** | **number** | CPU time available per second, in nanoseconds | [optional] [default to undefined]
**usage** | **number** | CPU usage in nanoseconds | [optional] [default to undefined]

## Example

```typescript
import { InstanceStateCPU } from 'incus-client';

const instance: InstanceStateCPU = {
    allocated_time,
    usage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
