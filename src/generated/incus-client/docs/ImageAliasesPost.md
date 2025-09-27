# ImageAliasesPost

ImageAliasesPost represents a new image alias

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Alias description | [optional] [default to undefined]
**name** | **string** | Alias name | [optional] [default to undefined]
**target** | **string** | Target fingerprint for the alias | [optional] [default to undefined]
**type** | **string** | Alias type (container or virtual-machine) | [optional] [default to undefined]

## Example

```typescript
import { ImageAliasesPost } from 'incus-client';

const instance: ImageAliasesPost = {
    description,
    name,
    target,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
