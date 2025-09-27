# InstanceSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **string** | Image alias name (for image source) | [optional] [default to undefined]
**allow_inconsistent** | **boolean** | Whether to ignore errors when copying (e.g. for volatile files) | [optional] [default to undefined]
**base_image** | **string** | Base image fingerprint (for faster migration) | [optional] [default to undefined]
**certificate** | **string** | Certificate (for remote images or migration) | [optional] [default to undefined]
**fingerprint** | **string** | Image fingerprint (for image source) | [optional] [default to undefined]
**instance_only** | **boolean** | Whether the copy should skip the snapshots (for copy) | [optional] [default to undefined]
**live** | **boolean** | Whether this is a live migration (for migration) | [optional] [default to undefined]
**mode** | **string** | Whether to use pull or push mode (for migration) | [optional] [default to undefined]
**operation** | **string** | Remote operation URL (for migration) | [optional] [default to undefined]
**project** | **string** | Source project name (for copy and local image) | [optional] [default to undefined]
**properties** | **{ [key: string]: string; }** | Image filters (for image source) | [optional] [default to undefined]
**protocol** | **string** | Protocol name (for remote image) | [optional] [default to undefined]
**refresh** | **boolean** | Whether this is refreshing an existing instance (for migration and copy) | [optional] [default to undefined]
**refresh_exclude_older** | **boolean** | Whether to exclude source snapshots earlier than latest target snapshot | [optional] [default to undefined]
**secret** | **string** | Remote server secret (for remote private images) | [optional] [default to undefined]
**secrets** | **{ [key: string]: string; }** | Map of migration websockets (for migration) | [optional] [default to undefined]
**server** | **string** | Remote server URL (for remote images) | [optional] [default to undefined]
**source** | **string** | Existing instance name or snapshot (for copy) | [optional] [default to undefined]
**type** | **string** | Source type | [optional] [default to undefined]

## Example

```typescript
import { InstanceSource } from 'incus-client';

const instance: InstanceSource = {
    alias,
    allow_inconsistent,
    base_image,
    certificate,
    fingerprint,
    instance_only,
    live,
    mode,
    operation,
    project,
    properties,
    protocol,
    refresh,
    refresh_exclude_older,
    secret,
    secrets,
    server,
    source,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
