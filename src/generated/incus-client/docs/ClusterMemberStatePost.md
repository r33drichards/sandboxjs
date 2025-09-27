# ClusterMemberStatePost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | The action to be performed. Valid actions are \&quot;evacuate\&quot; and \&quot;restore\&quot;. | [optional] [default to undefined]
**mode** | **string** | Override the configured evacuation mode. | [optional] [default to undefined]

## Example

```typescript
import { ClusterMemberStatePost } from 'incus-client';

const instance: ClusterMemberStatePost = {
    action,
    mode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
