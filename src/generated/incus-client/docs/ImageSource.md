# ImageSource

ImageSource represents the source of an image

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **string** | Source alias to download from | [optional] [default to undefined]
**certificate** | **string** | Source server certificate (if not trusted by system CA) | [optional] [default to undefined]
**image_type** | **string** | Type of image (container or virtual-machine) | [optional] [default to undefined]
**protocol** | **string** | Source server protocol | [optional] [default to undefined]
**server** | **string** | URL of the source server | [optional] [default to undefined]

## Example

```typescript
import { ImageSource } from 'incus-client';

const instance: ImageSource = {
    alias,
    certificate,
    image_type,
    protocol,
    server,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
