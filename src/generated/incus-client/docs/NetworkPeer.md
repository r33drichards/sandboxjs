# NetworkPeer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Peer configuration map (refer to doc/network-peers.md) | [optional] [default to undefined]
**description** | **string** | Description of the peer | [optional] [default to undefined]
**name** | **string** | Name of the peer | [optional] [readonly] [default to undefined]
**status** | **string** | The state of the peering | [optional] [readonly] [default to undefined]
**target_integration** | **string** | Name of the target integration | [optional] [default to undefined]
**target_network** | **string** | Name of the target network | [optional] [readonly] [default to undefined]
**target_project** | **string** | Name of the target project | [optional] [readonly] [default to undefined]
**type** | **string** | Type of peer | [optional] [default to undefined]
**used_by** | **Array&lt;string&gt;** | List of URLs of objects using this network peering | [optional] [readonly] [default to undefined]

## Example

```typescript
import { NetworkPeer } from 'incus-client';

const instance: NetworkPeer = {
    config,
    description,
    name,
    status,
    target_integration,
    target_network,
    target_project,
    type,
    used_by,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
