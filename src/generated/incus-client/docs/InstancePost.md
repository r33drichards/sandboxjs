# InstancePost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | **object** | Instance configuration file. | [optional] [default to undefined]
**Devices** | **{ [key: string]: { [key: string]: string; }; }** | Instance devices. | [optional] [default to undefined]
**Profiles** | **Array&lt;string&gt;** | List of profiles applied to the instance. | [optional] [default to undefined]
**allow_inconsistent** | **boolean** | AllowInconsistent allow inconsistent copies when migrating. | [optional] [default to undefined]
**instance_only** | **boolean** | Whether snapshots should be discarded (migration only) | [optional] [default to undefined]
**live** | **boolean** | Whether to perform a live migration (migration only) | [optional] [default to undefined]
**migration** | **boolean** | Whether the instance is being migrated to another server | [optional] [default to undefined]
**name** | **string** | New name for the instance | [optional] [default to undefined]
**pool** | **string** | Target pool for local cross-pool move | [optional] [default to undefined]
**project** | **string** | Target project for local cross-project move | [optional] [default to undefined]
**target** | [**InstancePostTarget**](InstancePostTarget.md) |  | [optional] [default to undefined]

## Example

```typescript
import { InstancePost } from 'incus-client';

const instance: InstancePost = {
    Config,
    Devices,
    Profiles,
    allow_inconsistent,
    instance_only,
    live,
    migration,
    name,
    pool,
    project,
    target,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
