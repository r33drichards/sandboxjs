# BackupTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | **string** | AccessKey is the S3 API access key | [optional] [default to undefined]
**bucket_name** | **string** | BucketName is the name of the S3 bucket. | [optional] [default to undefined]
**path** | **string** | Path is the target path. | [optional] [default to undefined]
**protocol** | **string** | Protocol is the upload protocol. | [optional] [default to undefined]
**secret_key** | **string** | SecretKey is the S3 API access key | [optional] [default to undefined]
**url** | **string** | URL is the HTTPS URL for the backup | [optional] [default to undefined]

## Example

```typescript
import { BackupTarget } from 'incus-client';

const instance: BackupTarget = {
    access_key,
    bucket_name,
    path,
    protocol,
    secret_key,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
