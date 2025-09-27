# AccessEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identifier** | **string** | Certificate fingerprint | [optional] [default to undefined]
**provider** | **string** | Which authorization method the certificate uses | [optional] [default to undefined]
**role** | **string** | The role associated with the certificate | [optional] [default to undefined]

## Example

```typescript
import { AccessEntry } from 'incus-client';

const instance: AccessEntry = {
    identifier,
    provider,
    role,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
