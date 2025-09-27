# ImageMetadataTemplate

ImageMetadataTemplate represents a template entry in image metadata (used in image tarball)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_only** | **boolean** | Whether to trigger only if the file is missing | [optional] [default to undefined]
**gid** | **string** | The file owner gid. | [optional] [default to undefined]
**mode** | **string** | The file permissions. | [optional] [default to undefined]
**properties** | **{ [key: string]: string; }** | Key/value properties to pass to the template | [optional] [default to undefined]
**template** | **string** | The template itself as a valid pongo2 template | [optional] [default to undefined]
**uid** | **string** | The file owner uid. | [optional] [default to undefined]
**when** | **Array&lt;string&gt;** | When to trigger the template (create, copy or start) | [optional] [default to undefined]

## Example

```typescript
import { ImageMetadataTemplate } from 'incus-client';

const instance: ImageMetadataTemplate = {
    create_only,
    gid,
    mode,
    properties,
    template,
    uid,
    when,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
