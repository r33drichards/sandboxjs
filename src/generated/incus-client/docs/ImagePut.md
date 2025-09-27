# ImagePut

ImagePut represents the modifiable fields of an image

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_update** | **boolean** | Whether the image should auto-update when a new build is available | [optional] [default to undefined]
**expires_at** | **string** | When the image becomes obsolete | [optional] [default to undefined]
**profiles** | **Array&lt;string&gt;** | List of profiles to use when creating from this image (if none provided by user) | [optional] [default to undefined]
**properties** | **{ [key: string]: string; }** | Descriptive properties | [optional] [default to undefined]
**_public** | **boolean** | Whether the image is available to unauthenticated users | [optional] [default to undefined]

## Example

```typescript
import { ImagePut } from 'incus-client';

const instance: ImagePut = {
    auto_update,
    expires_at,
    profiles,
    properties,
    _public,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
