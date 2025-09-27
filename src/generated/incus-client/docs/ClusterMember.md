# ClusterMember


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **string** | The primary architecture of the cluster member | [optional] [default to undefined]
**config** | **object** | Additional configuration information | [optional] [default to undefined]
**database** | **boolean** | Whether the cluster member is a database server | [optional] [default to undefined]
**description** | **string** | Cluster member description | [optional] [default to undefined]
**failure_domain** | **string** | Name of the failure domain for this cluster member | [optional] [default to undefined]
**groups** | **Array&lt;string&gt;** | List of cluster groups this member belongs to | [optional] [default to undefined]
**message** | **string** | Additional status information | [optional] [default to undefined]
**roles** | **Array&lt;string&gt;** | List of roles held by this cluster member | [optional] [default to undefined]
**server_name** | **string** | Name of the cluster member | [optional] [default to undefined]
**status** | **string** | Current status | [optional] [default to undefined]
**url** | **string** | URL at which the cluster member can be reached | [optional] [default to undefined]

## Example

```typescript
import { ClusterMember } from 'incus-client';

const instance: ClusterMember = {
    architecture,
    config,
    database,
    description,
    failure_domain,
    groups,
    message,
    roles,
    server_name,
    status,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
