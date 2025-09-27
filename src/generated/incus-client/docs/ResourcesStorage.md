# ResourcesStorage

ResourcesStorage represents the local storage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disks** | [**Array&lt;ResourcesStorageDisk&gt;**](ResourcesStorageDisk.md) | List of disks | [optional] [default to undefined]
**total** | **number** | Total number of partitions | [optional] [default to undefined]

## Example

```typescript
import { ResourcesStorage } from 'incus-client';

const instance: ResourcesStorage = {
    disks,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
