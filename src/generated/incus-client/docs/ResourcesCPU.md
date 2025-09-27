# ResourcesCPU

ResourcesCPU represents the cpu resources available on the system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **string** | Architecture name | [optional] [default to undefined]
**sockets** | [**Array&lt;ResourcesCPUSocket&gt;**](ResourcesCPUSocket.md) | List of CPU sockets | [optional] [default to undefined]
**total** | **number** | Total number of CPU threads (from all sockets and cores) | [optional] [default to undefined]

## Example

```typescript
import { ResourcesCPU } from 'incus-client';

const instance: ResourcesCPU = {
    architecture,
    sockets,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
