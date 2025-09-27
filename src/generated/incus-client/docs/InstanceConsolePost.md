# InstanceConsolePost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**force** | **boolean** | Forces a connection to the console | [optional] [default to undefined]
**height** | **number** | Console height in rows (console type only) | [optional] [default to undefined]
**type** | **string** | Type of console to attach to (console or vga) | [optional] [default to undefined]
**width** | **number** | Console width in columns (console type only) | [optional] [default to undefined]

## Example

```typescript
import { InstanceConsolePost } from 'incus-client';

const instance: InstanceConsolePost = {
    force,
    height,
    type,
    width,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
