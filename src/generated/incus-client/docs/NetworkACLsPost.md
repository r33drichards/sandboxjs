# NetworkACLsPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | ACL configuration map (refer to doc/network-acls.md) | [optional] [default to undefined]
**description** | **string** | Description of the ACL | [optional] [default to undefined]
**egress** | [**Array&lt;NetworkACLRule&gt;**](NetworkACLRule.md) | List of egress rules (order independent) | [optional] [default to undefined]
**ingress** | [**Array&lt;NetworkACLRule&gt;**](NetworkACLRule.md) | List of ingress rules (order independent) | [optional] [default to undefined]
**name** | **string** | The new name for the ACL | [optional] [default to undefined]

## Example

```typescript
import { NetworkACLsPost } from 'incus-client';

const instance: NetworkACLsPost = {
    config,
    description,
    egress,
    ingress,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
