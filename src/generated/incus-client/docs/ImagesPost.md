# ImagesPost

ImagesPost represents the fields available for a new image

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aliases** | [**Array&lt;ImageAlias&gt;**](ImageAlias.md) | Aliases to add to the image | [optional] [default to undefined]
**auto_update** | **boolean** | Whether the image should auto-update when a new build is available | [optional] [default to undefined]
**compression_algorithm** | **string** | Compression algorithm to use when turning an instance into an image | [optional] [default to undefined]
**expires_at** | **string** | When the image becomes obsolete | [optional] [default to undefined]
**filename** | **string** | Original filename of the image | [optional] [default to undefined]
**format** | **string** | Type of image format | [optional] [default to undefined]
**profiles** | **Array&lt;string&gt;** | List of profiles to use when creating from this image (if none provided by user) | [optional] [default to undefined]
**properties** | **{ [key: string]: string; }** | Descriptive properties | [optional] [default to undefined]
**_public** | **boolean** | Whether the image is available to unauthenticated users | [optional] [default to undefined]
**source** | [**ImagesPostSource**](ImagesPostSource.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ImagesPost } from 'incus-client';

const instance: ImagesPost = {
    aliases,
    auto_update,
    compression_algorithm,
    expires_at,
    filename,
    format,
    profiles,
    properties,
    _public,
    source,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
