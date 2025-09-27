# InstancePut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **string** | Architecture name | [optional] [default to undefined]
**config** | **object** | Instance configuration (see doc/instances.md) | [optional] [default to undefined]
**description** | **string** | Instance description | [optional] [default to undefined]
**devices** | **{ [key: string]: { [key: string]: string; }; }** | Instance devices (see doc/instances.md) | [optional] [default to undefined]
**ephemeral** | **boolean** | Whether the instance is ephemeral (deleted on shutdown) | [optional] [default to undefined]
**profiles** | **Array&lt;string&gt;** | List of profiles applied to the instance | [optional] [default to undefined]
**restore** | **string** | If set, instance will be restored to the provided snapshot name | [optional] [default to undefined]
**stateful** | **boolean** | Whether the instance currently has saved state on disk | [optional] [default to undefined]

## Example

```typescript
import { InstancePut } from 'incus-client';

const instance: InstancePut = {
    architecture,
    config,
    description,
    devices,
    ephemeral,
    profiles,
    restore,
    stateful,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
