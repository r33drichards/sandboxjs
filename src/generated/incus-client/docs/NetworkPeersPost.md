# NetworkPeersPost

NetworkPeersPost represents the fields of a new network peering

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Peer configuration map (refer to doc/network-peers.md) | [optional] [default to undefined]
**description** | **string** | Description of the peer | [optional] [default to undefined]
**name** | **string** | Name of the peer | [optional] [default to undefined]
**target_integration** | **string** | Name of the target integration | [optional] [default to undefined]
**target_network** | **string** | Name of the target network | [optional] [default to undefined]
**target_project** | **string** | Name of the target project | [optional] [default to undefined]
**type** | **string** | Type of peer | [optional] [default to undefined]

## Example

```typescript
import { NetworkPeersPost } from 'incus-client';

const instance: NetworkPeersPost = {
    config,
    description,
    name,
    target_integration,
    target_network,
    target_project,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
