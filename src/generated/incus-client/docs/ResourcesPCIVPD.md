# ResourcesPCIVPD

ResourcesPCIVPD represents VPD entries for a device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | **{ [key: string]: string; }** | Vendor provided key/value pairs. | [optional] [default to undefined]
**product_name** | **string** | Hardware provided product name. | [optional] [default to undefined]

## Example

```typescript
import { ResourcesPCIVPD } from 'incus-client';

const instance: ResourcesPCIVPD = {
    entries,
    product_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
