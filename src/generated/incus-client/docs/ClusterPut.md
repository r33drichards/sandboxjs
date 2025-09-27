# ClusterPut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_address** | **string** | The address of the cluster you wish to join | [optional] [default to undefined]
**cluster_certificate** | **string** | The expected certificate (X509 PEM encoded) for the cluster | [optional] [default to undefined]
**cluster_token** | **string** | The cluster join token for the cluster you\&#39;re trying to join | [optional] [default to undefined]
**enabled** | **boolean** | Whether clustering is enabled | [optional] [default to undefined]
**member_config** | [**Array&lt;ClusterMemberConfigKey&gt;**](ClusterMemberConfigKey.md) | List of member configuration keys (used during join) | [optional] [default to undefined]
**server_address** | **string** | The local address to use for cluster communication | [optional] [default to undefined]
**server_name** | **string** | Name of the cluster member answering the request | [optional] [default to undefined]

## Example

```typescript
import { ClusterPut } from 'incus-client';

const instance: ClusterPut = {
    cluster_address,
    cluster_certificate,
    cluster_token,
    enabled,
    member_config,
    server_address,
    server_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
