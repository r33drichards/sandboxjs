# StorageVolumePut

StorageVolumePut represents the modifiable fields of a storage volume

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Storage volume configuration map (refer to doc/storage.md) | [optional] [default to undefined]
**description** | **string** | Description of the storage volume | [optional] [default to undefined]
**restore** | **string** | Name of a snapshot to restore | [optional] [default to undefined]

## Example

```typescript
import { StorageVolumePut } from 'incus-client';

const instance: StorageVolumePut = {
    config,
    description,
    restore,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
