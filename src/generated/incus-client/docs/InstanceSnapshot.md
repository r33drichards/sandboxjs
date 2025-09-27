# InstanceSnapshot


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **string** | Architecture name | [optional] [default to undefined]
**config** | **object** | Instance configuration (see doc/instances.md) | [optional] [default to undefined]
**created_at** | **string** | Instance creation timestamp | [optional] [default to undefined]
**description** | **string** | Instance description | [optional] [default to undefined]
**devices** | **{ [key: string]: { [key: string]: string; }; }** | Instance devices (see doc/instances.md) | [optional] [default to undefined]
**ephemeral** | **boolean** | Whether the instance is ephemeral (deleted on shutdown) | [optional] [default to undefined]
**expanded_config** | **object** | Expanded configuration (all profiles and local config merged) | [optional] [default to undefined]
**expanded_devices** | **{ [key: string]: { [key: string]: string; }; }** | Expanded devices (all profiles and local devices merged) | [optional] [default to undefined]
**expires_at** | **string** | When the snapshot expires (gets auto-deleted) | [optional] [default to undefined]
**last_used_at** | **string** | Last start timestamp | [optional] [default to undefined]
**name** | **string** | Snapshot name | [optional] [default to undefined]
**profiles** | **Array&lt;string&gt;** | List of profiles applied to the instance | [optional] [default to undefined]
**size** | **number** | Size of the snapshot in bytes | [optional] [default to undefined]
**stateful** | **boolean** | Whether the instance currently has saved state on disk | [optional] [default to undefined]

## Example

```typescript
import { InstanceSnapshot } from 'incus-client';

const instance: InstanceSnapshot = {
    architecture,
    config,
    created_at,
    description,
    devices,
    ephemeral,
    expanded_config,
    expanded_devices,
    expires_at,
    last_used_at,
    name,
    profiles,
    size,
    stateful,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
