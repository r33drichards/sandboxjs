# InstanceStateMemory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**swap_usage** | **number** | SWAP usage in bytes | [optional] [default to undefined]
**swap_usage_peak** | **number** | Peak SWAP usage in bytes | [optional] [default to undefined]
**total** | **number** | Total memory size in bytes | [optional] [default to undefined]
**usage** | **number** | Memory usage in bytes | [optional] [default to undefined]
**usage_peak** | **number** | Peak memory usage in bytes | [optional] [default to undefined]

## Example

```typescript
import { InstanceStateMemory } from 'incus-client';

const instance: InstanceStateMemory = {
    swap_usage,
    swap_usage_peak,
    total,
    usage,
    usage_peak,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
