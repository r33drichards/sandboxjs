# InstanceFull


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **string** | Architecture name | [optional] [default to undefined]
**backups** | [**Array&lt;InstanceBackup&gt;**](InstanceBackup.md) | List of backups. | [optional] [default to undefined]
**config** | **object** | Instance configuration (see doc/instances.md) | [optional] [default to undefined]
**created_at** | **string** | Instance creation timestamp | [optional] [default to undefined]
**description** | **string** | Instance description | [optional] [default to undefined]
**devices** | **{ [key: string]: { [key: string]: string; }; }** | Instance devices (see doc/instances.md) | [optional] [default to undefined]
**ephemeral** | **boolean** | Whether the instance is ephemeral (deleted on shutdown) | [optional] [default to undefined]
**expanded_config** | **object** | Expanded configuration (all profiles and local config merged) | [optional] [default to undefined]
**expanded_devices** | **{ [key: string]: { [key: string]: string; }; }** | Expanded devices (all profiles and local devices merged) | [optional] [default to undefined]
**last_used_at** | **string** | Last start timestamp | [optional] [default to undefined]
**location** | **string** | What cluster member this instance is located on | [optional] [default to undefined]
**name** | **string** | Instance name | [optional] [default to undefined]
**profiles** | **Array&lt;string&gt;** | List of profiles applied to the instance | [optional] [default to undefined]
**project** | **string** | Instance project name | [optional] [default to undefined]
**restore** | **string** | If set, instance will be restored to the provided snapshot name | [optional] [default to undefined]
**snapshots** | [**Array&lt;InstanceSnapshot&gt;**](InstanceSnapshot.md) | List of snapshots. | [optional] [default to undefined]
**state** | [**InstanceState**](InstanceState.md) |  | [optional] [default to undefined]
**stateful** | **boolean** | Whether the instance currently has saved state on disk | [optional] [default to undefined]
**status** | **string** | Instance status (see instance_state) | [optional] [default to undefined]
**status_code** | **number** |  | [optional] [default to undefined]
**type** | **string** | The type of instance (container or virtual-machine) | [optional] [default to undefined]

## Example

```typescript
import { InstanceFull } from 'incus-client';

const instance: InstanceFull = {
    architecture,
    backups,
    config,
    created_at,
    description,
    devices,
    ephemeral,
    expanded_config,
    expanded_devices,
    last_used_at,
    location,
    name,
    profiles,
    project,
    restore,
    snapshots,
    state,
    stateful,
    status,
    status_code,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
