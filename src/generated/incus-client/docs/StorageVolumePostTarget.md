# StorageVolumePostTarget

StorageVolumePostTarget represents the migration target host and operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **string** | The certificate of the migration target | [optional] [default to undefined]
**operation** | **string** | Remote operation URL (for migration) | [optional] [default to undefined]
**secrets** | **{ [key: string]: string; }** | Migration websockets credentials | [optional] [default to undefined]

## Example

```typescript
import { StorageVolumePostTarget } from 'incus-client';

const instance: StorageVolumePostTarget = {
    certificate,
    operation,
    secrets,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
