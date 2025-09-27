# NetworkPeerPut

NetworkPeerPut represents the modifiable fields of a network peering

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Peer configuration map (refer to doc/network-peers.md) | [optional] [default to undefined]
**description** | **string** | Description of the peer | [optional] [default to undefined]

## Example

```typescript
import { NetworkPeerPut } from 'incus-client';

const instance: NetworkPeerPut = {
    config,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
