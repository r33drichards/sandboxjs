# InstanceStatePut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | State change action (start, stop, restart, freeze, unfreeze) | [optional] [default to undefined]
**force** | **boolean** | Whether to force the action (for stop and restart) | [optional] [default to undefined]
**stateful** | **boolean** | Whether to store the runtime state (for stop) | [optional] [default to undefined]
**timeout** | **number** | How long to wait (in s) before giving up (when force isn\&#39;t set) | [optional] [default to undefined]

## Example

```typescript
import { InstanceStatePut } from 'incus-client';

const instance: InstanceStatePut = {
    action,
    force,
    stateful,
    timeout,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
