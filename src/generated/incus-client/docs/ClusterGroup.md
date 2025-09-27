# ClusterGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Cluster group configuration map | [optional] [default to undefined]
**description** | **string** | The description of the cluster group | [optional] [default to undefined]
**members** | **Array&lt;string&gt;** | List of members in this group | [optional] [default to undefined]
**name** | **string** | The new name of the cluster group | [optional] [default to undefined]

## Example

```typescript
import { ClusterGroup } from 'incus-client';

const instance: ClusterGroup = {
    config,
    description,
    members,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
