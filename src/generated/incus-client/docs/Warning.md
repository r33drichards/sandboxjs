# Warning


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **number** | The number of times this warning occurred | [optional] [default to undefined]
**entity_url** | **string** | The entity affected by this warning | [optional] [default to undefined]
**first_seen_at** | **string** | The first time this warning occurred | [optional] [default to undefined]
**last_message** | **string** | The warning message | [optional] [default to undefined]
**last_seen_at** | **string** | The last time this warning occurred | [optional] [default to undefined]
**location** | **string** | What cluster member this warning occurred on | [optional] [default to undefined]
**project** | **string** | The project the warning occurred in | [optional] [default to undefined]
**severity** | **string** | The severity of this warning | [optional] [default to undefined]
**status** | **string** | Status of the warning (new, acknowledged, or resolved) | [optional] [default to undefined]
**type** | **string** | Type type of warning | [optional] [default to undefined]
**uuid** | **string** | UUID of the warning | [optional] [default to undefined]

## Example

```typescript
import { Warning } from 'incus-client';

const instance: Warning = {
    count,
    entity_url,
    first_seen_at,
    last_message,
    last_seen_at,
    location,
    project,
    severity,
    status,
    type,
    uuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
