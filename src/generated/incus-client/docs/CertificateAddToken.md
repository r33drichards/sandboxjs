# CertificateAddToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | **Array&lt;string&gt;** | The addresses of the server | [optional] [default to undefined]
**client_name** | **string** | The name of the new client | [optional] [default to undefined]
**expires_at** | **string** | The token\&#39;s expiry date. | [optional] [default to undefined]
**fingerprint** | **string** | The fingerprint of the network certificate | [optional] [default to undefined]
**secret** | **string** | The random join secret | [optional] [default to undefined]

## Example

```typescript
import { CertificateAddToken } from 'incus-client';

const instance: CertificateAddToken = {
    addresses,
    client_name,
    expires_at,
    fingerprint,
    secret,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
