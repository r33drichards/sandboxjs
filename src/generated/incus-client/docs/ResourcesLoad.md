# ResourcesLoad

ResourcesLoad represents system load information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Average1Min** | **number** | Load average in the past minute | [optional] [default to undefined]
**Average5Min** | **number** | Load average in the past 5 minutes | [optional] [default to undefined]
**Average10Min** | **number** | Load average in the past 10 minutes | [optional] [default to undefined]
**Processes** | **number** | The number of active processes | [optional] [default to undefined]

## Example

```typescript
import { ResourcesLoad } from 'incus-client';

const instance: ResourcesLoad = {
    Average1Min,
    Average5Min,
    Average10Min,
    Processes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
