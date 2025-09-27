# StorageVolume


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Storage volume configuration map (refer to doc/storage.md) | [optional] [default to undefined]
**content_type** | **string** | Volume content type (filesystem or block) | [optional] [default to undefined]
**created_at** | **string** | Volume creation timestamp | [optional] [default to undefined]
**description** | **string** | Description of the storage volume | [optional] [default to undefined]
**location** | **string** | What cluster member this record was found on | [optional] [default to undefined]
**name** | **string** | Volume name | [optional] [default to undefined]
**project** | **string** | Project containing the volume. | [optional] [default to undefined]
**restore** | **string** | Name of a snapshot to restore | [optional] [default to undefined]
**type** | **string** | Volume type | [optional] [default to undefined]
**used_by** | **Array&lt;string&gt;** | List of URLs of objects using this storage volume | [optional] [default to undefined]

## Example

```typescript
import { StorageVolume } from 'incus-client';

const instance: StorageVolume = {
    config,
    content_type,
    created_at,
    description,
    location,
    name,
    project,
    restore,
    type,
    used_by,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
