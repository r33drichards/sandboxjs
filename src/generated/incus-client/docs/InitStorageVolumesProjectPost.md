# InitStorageVolumesProjectPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pool** | **string** | Storage pool in which the volume will reside | [optional] [default to undefined]
**Project** | **string** | Project in which the volume will reside | [optional] [default to undefined]
**config** | **object** | Storage volume configuration map (refer to doc/storage.md) | [optional] [default to undefined]
**content_type** | **string** | Volume content type (filesystem or block) | [optional] [default to undefined]
**description** | **string** | Description of the storage volume | [optional] [default to undefined]
**name** | **string** | Volume name | [optional] [default to undefined]
**restore** | **string** | Name of a snapshot to restore | [optional] [default to undefined]
**source** | [**StorageVolumeSource**](StorageVolumeSource.md) |  | [optional] [default to undefined]
**type** | **string** | Volume type (container, custom, image or virtual-machine) | [optional] [default to undefined]

## Example

```typescript
import { InitStorageVolumesProjectPost } from 'incus-client';

const instance: InitStorageVolumesProjectPost = {
    Pool,
    Project,
    config,
    content_type,
    description,
    name,
    restore,
    source,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
