# Cluster


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Whether clustering is enabled | [optional] [default to undefined]
**member_config** | [**Array&lt;ClusterMemberConfigKey&gt;**](ClusterMemberConfigKey.md) | List of member configuration keys (used during join) | [optional] [default to undefined]
**server_name** | **string** | Name of the cluster member answering the request | [optional] [default to undefined]

## Example

```typescript
import { Cluster } from 'incus-client';

const instance: Cluster = {
    enabled,
    member_config,
    server_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
