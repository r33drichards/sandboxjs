# MetadataConfigKey

MetadataConfigKey describe a configuration key

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | **string** | Condition specifies the condition that must be met for the option to be taken into account | [optional] [default to undefined]
**defaultdesc** | **string** | DefaultDesc specify default value for configuration | [optional] [default to undefined]
**liveupdate** | **string** | LiveUpdate specifies whether the server must be restarted for the option to be updated | [optional] [default to undefined]
**longdesc** | **string** | LongDesc provides long description for the option | [optional] [default to undefined]
**scope** | **string** | Scope defines if option apply to cluster or to the local server | [optional] [default to undefined]
**shortdesc** | **string** | ShortDesc provides short description for the configuration | [optional] [default to undefined]
**type** | **string** | Type specifies the type of the option | [optional] [default to undefined]

## Example

```typescript
import { MetadataConfigKey } from 'incus-client';

const instance: MetadataConfigKey = {
    condition,
    defaultdesc,
    liveupdate,
    longdesc,
    scope,
    shortdesc,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
