# Image

Image represents an image

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aliases** | [**Array&lt;ImageAlias&gt;**](ImageAlias.md) | List of aliases | [optional] [default to undefined]
**architecture** | **string** | Architecture | [optional] [default to undefined]
**auto_update** | **boolean** | Whether the image should auto-update when a new build is available | [optional] [default to undefined]
**cached** | **boolean** | Whether the image is an automatically cached remote image | [optional] [default to undefined]
**created_at** | **string** | When the image was originally created | [optional] [default to undefined]
**expires_at** | **string** | When the image becomes obsolete | [optional] [default to undefined]
**filename** | **string** | Original filename | [optional] [default to undefined]
**fingerprint** | **string** | Full SHA-256 fingerprint | [optional] [default to undefined]
**last_used_at** | **string** | Last time the image was used | [optional] [default to undefined]
**profiles** | **Array&lt;string&gt;** | List of profiles to use when creating from this image (if none provided by user) | [optional] [default to undefined]
**project** | **string** | Project name | [optional] [default to undefined]
**properties** | **{ [key: string]: string; }** | Descriptive properties | [optional] [default to undefined]
**_public** | **boolean** | Whether the image is available to unauthenticated users | [optional] [default to undefined]
**size** | **number** | Size of the image in bytes | [optional] [default to undefined]
**type** | **string** | Type of image (container or virtual-machine) | [optional] [default to undefined]
**update_source** | [**ImageSource**](ImageSource.md) |  | [optional] [default to undefined]
**uploaded_at** | **string** | When the image was added to this server | [optional] [default to undefined]

## Example

```typescript
import { Image } from 'incus-client';

const instance: Image = {
    aliases,
    architecture,
    auto_update,
    cached,
    created_at,
    expires_at,
    filename,
    fingerprint,
    last_used_at,
    profiles,
    project,
    properties,
    _public,
    size,
    type,
    update_source,
    uploaded_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
