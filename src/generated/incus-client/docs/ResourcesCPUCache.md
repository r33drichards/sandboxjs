# ResourcesCPUCache

ResourcesCPUCache represents a CPU cache

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | **number** | Cache level (usually a number from 1 to 3) | [optional] [default to undefined]
**size** | **number** | Size of the cache (in bytes) | [optional] [default to undefined]
**type** | **string** | Type of cache (Data, Instruction, Unified, ...) | [optional] [default to undefined]

## Example

```typescript
import { ResourcesCPUCache } from 'incus-client';

const instance: ResourcesCPUCache = {
    level,
    size,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
