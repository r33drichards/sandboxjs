# ServerStorageDriverInfo

ServerStorageDriverInfo represents the read-only info about a storage driver

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the driver | [optional] [default to undefined]
**Remote** | **boolean** | Whether the driver has remote volumes | [optional] [default to undefined]
**Version** | **string** | Version of the driver | [optional] [default to undefined]

## Example

```typescript
import { ServerStorageDriverInfo } from 'incus-client';

const instance: ServerStorageDriverInfo = {
    Name,
    Remote,
    Version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
