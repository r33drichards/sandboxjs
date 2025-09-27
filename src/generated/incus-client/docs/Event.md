# Event

Event represents an event entry (over websocket)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **string** | Originating cluster member | [optional] [default to undefined]
**metadata** | **object** | JSON encoded metadata (see EventLogging, EventLifecycle or Operation) | [optional] [default to undefined]
**project** | **string** | Project the event belongs to. | [optional] [default to undefined]
**timestamp** | **string** | Time at which the event was sent | [optional] [default to undefined]
**type** | **string** | Event type (one of operation, logging or lifecycle) | [optional] [default to undefined]

## Example

```typescript
import { Event } from 'incus-client';

const instance: Event = {
    location,
    metadata,
    project,
    timestamp,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
