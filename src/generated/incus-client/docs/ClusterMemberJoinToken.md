# ClusterMemberJoinToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | **Array&lt;string&gt;** | The addresses of existing online cluster members | [optional] [default to undefined]
**expires_at** | **string** | The token\&#39;s expiry date. | [optional] [default to undefined]
**fingerprint** | **string** | The fingerprint of the network certificate | [optional] [default to undefined]
**secret** | **string** | The random join secret. | [optional] [default to undefined]
**server_name** | **string** | The name of the new cluster member | [optional] [default to undefined]

## Example

```typescript
import { ClusterMemberJoinToken } from 'incus-client';

const instance: ClusterMemberJoinToken = {
    addresses,
    expires_at,
    fingerprint,
    secret,
    server_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
