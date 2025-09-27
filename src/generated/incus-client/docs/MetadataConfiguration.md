# MetadataConfiguration

MetadataConfiguration represents a server\'s exposed configuration metadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configs** | **{ [key: string]: { [key: string]: MetadataConfigGroup; }; }** | MetadataConfig repreents metadata about configuration keys | [optional] [default to undefined]

## Example

```typescript
import { MetadataConfiguration } from 'incus-client';

const instance: MetadataConfiguration = {
    configs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
