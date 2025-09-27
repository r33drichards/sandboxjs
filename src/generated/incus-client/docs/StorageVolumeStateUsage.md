# StorageVolumeStateUsage

StorageVolumeStateUsage represents the disk usage of a volume

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Storage volume size in bytes | [optional] [default to undefined]
**used** | **number** | Used space in bytes | [optional] [default to undefined]

## Example

```typescript
import { StorageVolumeStateUsage } from 'incus-client';

const instance: StorageVolumeStateUsage = {
    total,
    used,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
