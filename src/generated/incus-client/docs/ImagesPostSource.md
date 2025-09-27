# ImagesPostSource

ImagesPostSource represents the source of a new image

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **string** | Source alias to download from | [optional] [default to undefined]
**certificate** | **string** | Source server certificate (if not trusted by system CA) | [optional] [default to undefined]
**fingerprint** | **string** | Source image fingerprint (for type \&quot;image\&quot;) | [optional] [default to undefined]
**image_type** | **string** | Type of image (container or virtual-machine) | [optional] [default to undefined]
**mode** | **string** | Transfer mode (push or pull) | [optional] [default to undefined]
**name** | **string** | Instance name (for type \&quot;instance\&quot; or \&quot;snapshot\&quot;) | [optional] [default to undefined]
**project** | **string** | Source project name | [optional] [default to undefined]
**protocol** | **string** | Source server protocol | [optional] [default to undefined]
**secret** | **string** | Source image server secret token (when downloading private images) | [optional] [default to undefined]
**server** | **string** | URL of the source server | [optional] [default to undefined]
**type** | **string** | Type of image source (instance, snapshot, image or url) | [optional] [default to undefined]
**url** | **string** | Source URL (for type \&quot;url\&quot;) | [optional] [default to undefined]

## Example

```typescript
import { ImagesPostSource } from 'incus-client';

const instance: ImagesPostSource = {
    alias,
    certificate,
    fingerprint,
    image_type,
    mode,
    name,
    project,
    protocol,
    secret,
    server,
    type,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
