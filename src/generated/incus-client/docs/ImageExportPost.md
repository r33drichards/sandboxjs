# ImageExportPost

ImageExportPost represents the fields required to export an image

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aliases** | [**Array&lt;ImageAlias&gt;**](ImageAlias.md) | List of aliases to set on the image | [optional] [default to undefined]
**certificate** | **string** | Remote server certificate | [optional] [default to undefined]
**profiles** | **Array&lt;string&gt;** | List of profiles to use | [optional] [default to undefined]
**project** | **string** | Project name | [optional] [default to undefined]
**secret** | **string** | Image receive secret | [optional] [default to undefined]
**target** | **string** | Target server URL | [optional] [default to undefined]

## Example

```typescript
import { ImageExportPost } from 'incus-client';

const instance: ImageExportPost = {
    aliases,
    certificate,
    profiles,
    project,
    secret,
    target,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
