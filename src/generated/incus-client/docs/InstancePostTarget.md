# InstancePostTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **string** | The certificate of the migration target | [optional] [default to undefined]
**operation** | **string** | The operation URL on the remote target | [optional] [default to undefined]
**secrets** | **{ [key: string]: string; }** | Migration websockets credentials | [optional] [default to undefined]

## Example

```typescript
import { InstancePostTarget } from 'incus-client';

const instance: InstancePostTarget = {
    certificate,
    operation,
    secrets,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
