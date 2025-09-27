# ClusterMemberConfigKey

The Value field is empty when getting clustering information with GET 1.0/cluster, and should be filled by the joining server when performing a PUT 1.0/cluster join request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | A human friendly description key | [optional] [default to undefined]
**entity** | **string** | The kind of configuration key (network, storage-pool, ...) | [optional] [default to undefined]
**key** | **string** | The name of the key | [optional] [default to undefined]
**name** | **string** | The name of the object requiring this key | [optional] [default to undefined]
**value** | **string** | The value on the answering cluster member | [optional] [default to undefined]

## Example

```typescript
import { ClusterMemberConfigKey } from 'incus-client';

const instance: ClusterMemberConfigKey = {
    description,
    entity,
    key,
    name,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
