# ClusterMemberPut

ClusterMemberPut represents the modifiable fields of a cluster member

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Additional configuration information | [optional] [default to undefined]
**description** | **string** | Cluster member description | [optional] [default to undefined]
**failure_domain** | **string** | Name of the failure domain for this cluster member | [optional] [default to undefined]
**groups** | **Array&lt;string&gt;** | List of cluster groups this member belongs to | [optional] [default to undefined]
**roles** | **Array&lt;string&gt;** | List of roles held by this cluster member | [optional] [default to undefined]

## Example

```typescript
import { ClusterMemberPut } from 'incus-client';

const instance: ClusterMemberPut = {
    config,
    description,
    failure_domain,
    groups,
    roles,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
