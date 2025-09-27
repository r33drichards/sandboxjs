# InitLocalPreseed


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificates** | [**Array&lt;CertificatesPost&gt;**](CertificatesPost.md) | Certificates to add | [optional] [default to undefined]
**cluster_groups** | [**Array&lt;ClusterGroupsPost&gt;**](ClusterGroupsPost.md) | Cluster groups to add  API extension: init_preseed_cluster_groups. | [optional] [default to undefined]
**config** | **object** | Server configuration map (refer to doc/server.md) | [optional] [default to undefined]
**networks** | [**Array&lt;InitNetworksProjectPost&gt;**](InitNetworksProjectPost.md) | Networks by project to add | [optional] [default to undefined]
**profiles** | [**Array&lt;InitProfileProjectPost&gt;**](InitProfileProjectPost.md) | Profiles to add | [optional] [default to undefined]
**projects** | [**Array&lt;ProjectsPost&gt;**](ProjectsPost.md) | Projects to add | [optional] [default to undefined]
**storage_pools** | [**Array&lt;StoragePoolsPost&gt;**](StoragePoolsPost.md) | Storage Pools to add | [optional] [default to undefined]
**storage_volumes** | [**Array&lt;InitStorageVolumesProjectPost&gt;**](InitStorageVolumesProjectPost.md) | Storage Volumes to add | [optional] [default to undefined]

## Example

```typescript
import { InitLocalPreseed } from 'incus-client';

const instance: InitLocalPreseed = {
    certificates,
    cluster_groups,
    config,
    networks,
    profiles,
    projects,
    storage_pools,
    storage_volumes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
