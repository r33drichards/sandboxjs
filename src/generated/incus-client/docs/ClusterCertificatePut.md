# ClusterCertificatePut

ClusterCertificatePut represents the certificate and key pair for all cluster members

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_certificate** | **string** | The new certificate (X509 PEM encoded) for the cluster | [optional] [default to undefined]
**cluster_certificate_key** | **string** | The new certificate key (X509 PEM encoded) for the cluster | [optional] [default to undefined]

## Example

```typescript
import { ClusterCertificatePut } from 'incus-client';

const instance: ClusterCertificatePut = {
    cluster_certificate,
    cluster_certificate_key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
