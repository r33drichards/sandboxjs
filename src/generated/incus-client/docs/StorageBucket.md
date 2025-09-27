# StorageBucket

StorageBucket represents the fields of a storage pool bucket

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Storage bucket configuration map | [optional] [default to undefined]
**description** | **string** | Description of the storage bucket | [optional] [default to undefined]
**location** | **string** | What cluster member this record was found on | [optional] [default to undefined]
**name** | **string** | Bucket name | [optional] [default to undefined]
**project** | **string** | Project name | [optional] [default to undefined]
**s3_url** | **string** | Bucket S3 URL | [optional] [default to undefined]

## Example

```typescript
import { StorageBucket } from 'incus-client';

const instance: StorageBucket = {
    config,
    description,
    location,
    name,
    project,
    s3_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
