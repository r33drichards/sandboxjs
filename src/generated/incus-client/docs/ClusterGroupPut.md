# ClusterGroupPut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Cluster group configuration map | [optional] [default to undefined]
**description** | **string** | The description of the cluster group | [optional] [default to undefined]
**members** | **Array&lt;string&gt;** | List of members in this group | [optional] [default to undefined]

## Example

```typescript
import { ClusterGroupPut } from 'incus-client';

const instance: ClusterGroupPut = {
    config,
    description,
    members,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
