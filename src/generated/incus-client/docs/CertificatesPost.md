# CertificatesPost

CertificatesPost represents the fields of a new certificate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **string** | The certificate itself, as PEM encoded X509 (or as base64 encoded X509 on POST) | [optional] [default to undefined]
**description** | **string** | Certificate description | [optional] [default to undefined]
**name** | **string** | Name associated with the certificate | [optional] [default to undefined]
**projects** | **Array&lt;string&gt;** | List of allowed projects (applies when restricted) | [optional] [default to undefined]
**restricted** | **boolean** | Whether to limit the certificate to listed projects | [optional] [default to undefined]
**token** | **boolean** | Whether to create a certificate add token | [optional] [default to undefined]
**trust_token** | **string** | Trust token (used to add an untrusted client) | [optional] [default to undefined]
**type** | **string** | Usage type for the certificate | [optional] [default to undefined]

## Example

```typescript
import { CertificatesPost } from 'incus-client';

const instance: CertificatesPost = {
    certificate,
    description,
    name,
    projects,
    restricted,
    token,
    trust_token,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
