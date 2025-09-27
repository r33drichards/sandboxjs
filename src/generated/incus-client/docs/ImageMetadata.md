# ImageMetadata

ImageMetadata represents image metadata (used in image tarball)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **string** | Architecture name | [optional] [default to undefined]
**creation_date** | **number** | Image creation data (as UNIX epoch) | [optional] [default to undefined]
**expiry_date** | **number** | Image expiry data (as UNIX epoch) | [optional] [default to undefined]
**properties** | **{ [key: string]: string; }** | Descriptive properties | [optional] [default to undefined]
**templates** | [**{ [key: string]: ImageMetadataTemplate; }**](ImageMetadataTemplate.md) | Template for files in the image | [optional] [default to undefined]

## Example

```typescript
import { ImageMetadata } from 'incus-client';

const instance: ImageMetadata = {
    architecture,
    creation_date,
    expiry_date,
    properties,
    templates,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
