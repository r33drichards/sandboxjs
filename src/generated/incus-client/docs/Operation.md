# Operation

Operation represents a background operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_class** | **string** | Type of operation (task, token or websocket) | [optional] [default to undefined]
**created_at** | **string** | Operation creation time | [optional] [default to undefined]
**description** | **string** | Description of the operation | [optional] [default to undefined]
**err** | **string** | Operation error message | [optional] [default to undefined]
**id** | **string** | UUID of the operation | [optional] [default to undefined]
**location** | **string** | What cluster member this record was found on | [optional] [default to undefined]
**may_cancel** | **boolean** | Whether the operation can be canceled | [optional] [default to undefined]
**metadata** | **{ [key: string]: object; }** | Operation specific metadata | [optional] [default to undefined]
**resources** | **{ [key: string]: Array&lt;string&gt;; }** | Affected resources | [optional] [default to undefined]
**status** | **string** | Status name | [optional] [default to undefined]
**status_code** | **number** |  | [optional] [default to undefined]
**updated_at** | **string** | Operation last change | [optional] [default to undefined]

## Example

```typescript
import { Operation } from 'incus-client';

const instance: Operation = {
    _class,
    created_at,
    description,
    err,
    id,
    location,
    may_cancel,
    metadata,
    resources,
    status,
    status_code,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
