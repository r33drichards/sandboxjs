## incus-client@1.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install incus-client@1.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CertificatesApi* | [**certificateDelete**](docs/CertificatesApi.md#certificatedelete) | **DELETE** /1.0/certificates/{fingerprint} | Delete the trusted certificate
*CertificatesApi* | [**certificateGet**](docs/CertificatesApi.md#certificateget) | **GET** /1.0/certificates/{fingerprint} | Get the trusted certificate
*CertificatesApi* | [**certificatePatch**](docs/CertificatesApi.md#certificatepatch) | **PATCH** /1.0/certificates/{fingerprint} | Partially update the trusted certificate
*CertificatesApi* | [**certificatePut**](docs/CertificatesApi.md#certificateput) | **PUT** /1.0/certificates/{fingerprint} | Update the trusted certificate
*CertificatesApi* | [**certificatesGet**](docs/CertificatesApi.md#certificatesget) | **GET** /1.0/certificates | Get the trusted certificates
*CertificatesApi* | [**certificatesGetRecursion1**](docs/CertificatesApi.md#certificatesgetrecursion1) | **GET** /1.0/certificates?recursion&#x3D;1 | Get the trusted certificates
*CertificatesApi* | [**certificatesPost**](docs/CertificatesApi.md#certificatespost) | **POST** /1.0/certificates | Add a trusted certificate
*CertificatesApi* | [**certificatesPostUntrusted**](docs/CertificatesApi.md#certificatespostuntrusted) | **POST** /1.0/certificates?public | Add a trusted certificate
*ClusterApi* | [**clusterGet**](docs/ClusterApi.md#clusterget) | **GET** /1.0/cluster | Get the cluster configuration
*ClusterApi* | [**clusterGroupsPost**](docs/ClusterApi.md#clustergroupspost) | **POST** /1.0/cluster/groups | Create a cluster group.
*ClusterApi* | [**clusterMemberDelete**](docs/ClusterApi.md#clustermemberdelete) | **DELETE** /1.0/cluster/members/{name} | Delete the cluster member
*ClusterApi* | [**clusterMemberGet**](docs/ClusterApi.md#clustermemberget) | **GET** /1.0/cluster/members/{name} | Get the cluster member
*ClusterApi* | [**clusterMemberPatch**](docs/ClusterApi.md#clustermemberpatch) | **PATCH** /1.0/cluster/members/{name} | Partially update the cluster member
*ClusterApi* | [**clusterMemberPost**](docs/ClusterApi.md#clustermemberpost) | **POST** /1.0/cluster/members/{name} | Rename the cluster member
*ClusterApi* | [**clusterMemberPut**](docs/ClusterApi.md#clustermemberput) | **PUT** /1.0/cluster/members/{name} | Update the cluster member
*ClusterApi* | [**clusterMemberStateGet**](docs/ClusterApi.md#clustermemberstateget) | **GET** /1.0/cluster/members/{name}/state | Get state of the cluster member
*ClusterApi* | [**clusterMemberStatePost**](docs/ClusterApi.md#clustermemberstatepost) | **POST** /1.0/cluster/members/{name}/state | Evacuate or restore a cluster member
*ClusterApi* | [**clusterMembersGet**](docs/ClusterApi.md#clustermembersget) | **GET** /1.0/cluster/members | Get the cluster members
*ClusterApi* | [**clusterMembersGetRecursion1**](docs/ClusterApi.md#clustermembersgetrecursion1) | **GET** /1.0/cluster/members?recursion&#x3D;1 | Get the cluster members
*ClusterApi* | [**clusterMembersPost**](docs/ClusterApi.md#clustermemberspost) | **POST** /1.0/cluster/members | Request a join token
*ClusterApi* | [**clusterPut**](docs/ClusterApi.md#clusterput) | **PUT** /1.0/cluster | Update the cluster configuration
*ClusterApi* | [**clusteringUpdateCert**](docs/ClusterApi.md#clusteringupdatecert) | **PUT** /1.0/cluster/certificate | Update the certificate for the cluster
*ClusterGroupsApi* | [**clusterGroupDelete**](docs/ClusterGroupsApi.md#clustergroupdelete) | **DELETE** /1.0/cluster/groups/{name} | Delete the cluster group.
*ClusterGroupsApi* | [**clusterGroupGet**](docs/ClusterGroupsApi.md#clustergroupget) | **GET** /1.0/cluster/groups/{name} | Get the cluster group
*ClusterGroupsApi* | [**clusterGroupPatch**](docs/ClusterGroupsApi.md#clustergrouppatch) | **PATCH** /1.0/cluster/groups/{name} | Update the cluster group
*ClusterGroupsApi* | [**clusterGroupPost**](docs/ClusterGroupsApi.md#clustergrouppost) | **POST** /1.0/cluster/groups/{name} | Rename the cluster group
*ClusterGroupsApi* | [**clusterGroupPut**](docs/ClusterGroupsApi.md#clustergroupput) | **PUT** /1.0/cluster/groups/{name} | Update the cluster group
*ClusterGroupsApi* | [**clusterGroupsGet**](docs/ClusterGroupsApi.md#clustergroupsget) | **GET** /1.0/cluster/groups | Get the cluster groups
*ClusterGroupsApi* | [**clusterGroupsGetRecursion1**](docs/ClusterGroupsApi.md#clustergroupsgetrecursion1) | **GET** /1.0/cluster/groups?recursion&#x3D;1 | Get the cluster groups
*DefaultApi* | [**metadataConfigurationGet**](docs/DefaultApi.md#metadataconfigurationget) | **GET** /1.0/metadata/configuration | Get the metadata configuration
*ImagesApi* | [**imageAliasDelete**](docs/ImagesApi.md#imagealiasdelete) | **DELETE** /1.0/images/aliases/{name} | Delete the image alias
*ImagesApi* | [**imageAliasGet**](docs/ImagesApi.md#imagealiasget) | **GET** /1.0/images/aliases/{name} | Get the image alias
*ImagesApi* | [**imageAliasGetUntrusted**](docs/ImagesApi.md#imagealiasgetuntrusted) | **GET** /1.0/images/aliases/{name}?public | Get the public image alias
*ImagesApi* | [**imageDelete**](docs/ImagesApi.md#imagedelete) | **DELETE** /1.0/images/{fingerprint} | Delete the image
*ImagesApi* | [**imageExportGet**](docs/ImagesApi.md#imageexportget) | **GET** /1.0/images/{fingerprint}/export | Get the raw image file(s)
*ImagesApi* | [**imageExportGetUntrusted**](docs/ImagesApi.md#imageexportgetuntrusted) | **GET** /1.0/images/{fingerprint}/export?public | Get the raw image file(s)
*ImagesApi* | [**imageGet**](docs/ImagesApi.md#imageget) | **GET** /1.0/images/{fingerprint} | Get the image
*ImagesApi* | [**imageGetUntrusted**](docs/ImagesApi.md#imagegetuntrusted) | **GET** /1.0/images/{fingerprint}?public | Get the public image
*ImagesApi* | [**imagePatch**](docs/ImagesApi.md#imagepatch) | **PATCH** /1.0/images/{fingerprint} | Partially update the image
*ImagesApi* | [**imagePut**](docs/ImagesApi.md#imageput) | **PUT** /1.0/images/{fingerprint} | Update the image
*ImagesApi* | [**imagesAliasPatch**](docs/ImagesApi.md#imagesaliaspatch) | **PATCH** /1.0/images/aliases/{name} | Partially update the image alias
*ImagesApi* | [**imagesAliasPost**](docs/ImagesApi.md#imagesaliaspost) | **POST** /1.0/images/aliases/{name} | Rename the image alias
*ImagesApi* | [**imagesAliasesGet**](docs/ImagesApi.md#imagesaliasesget) | **GET** /1.0/images/aliases | Get the image aliases
*ImagesApi* | [**imagesAliasesGetRecursion1**](docs/ImagesApi.md#imagesaliasesgetrecursion1) | **GET** /1.0/images/aliases?recursion&#x3D;1 | Get the image aliases
*ImagesApi* | [**imagesAliasesPost**](docs/ImagesApi.md#imagesaliasespost) | **POST** /1.0/images/aliases | Add an image alias
*ImagesApi* | [**imagesAliasesPut**](docs/ImagesApi.md#imagesaliasesput) | **PUT** /1.0/images/aliases/{name} | Update the image alias
*ImagesApi* | [**imagesExportPost**](docs/ImagesApi.md#imagesexportpost) | **POST** /1.0/images/{fingerprint}/export | Make the server push the image to a remote server
*ImagesApi* | [**imagesGet**](docs/ImagesApi.md#imagesget) | **GET** /1.0/images | Get the images
*ImagesApi* | [**imagesGetRecursion1**](docs/ImagesApi.md#imagesgetrecursion1) | **GET** /1.0/images?recursion&#x3D;1 | Get the images
*ImagesApi* | [**imagesGetRecursion1Untrusted**](docs/ImagesApi.md#imagesgetrecursion1untrusted) | **GET** /1.0/images?public&amp;recursion&#x3D;1 | Get the public images
*ImagesApi* | [**imagesGetUntrusted**](docs/ImagesApi.md#imagesgetuntrusted) | **GET** /1.0/images?public | Get the public images
*ImagesApi* | [**imagesPost**](docs/ImagesApi.md#imagespost) | **POST** /1.0/images | Add an image
*ImagesApi* | [**imagesPostUntrusted**](docs/ImagesApi.md#imagespostuntrusted) | **POST** /1.0/images?public | Add an image
*ImagesApi* | [**imagesRefreshPost**](docs/ImagesApi.md#imagesrefreshpost) | **POST** /1.0/images/{fingerprint}/refresh | Refresh an image
*ImagesApi* | [**imagesSecretPost**](docs/ImagesApi.md#imagessecretpost) | **POST** /1.0/images/{fingerprint}/secret | Generate secret for retrieval of the image by an untrusted client
*InstancesApi* | [**instanceAccess**](docs/InstancesApi.md#instanceaccess) | **GET** /1.0/instances/{name}/access | Get who has access to an instance
*InstancesApi* | [**instanceBackupDelete**](docs/InstancesApi.md#instancebackupdelete) | **DELETE** /1.0/instances/{name}/backups/{backup} | Delete a backup
*InstancesApi* | [**instanceBackupExport**](docs/InstancesApi.md#instancebackupexport) | **GET** /1.0/instances/{name}/backups/{backup}/export | Get the raw backup file(s)
*InstancesApi* | [**instanceBackupGet**](docs/InstancesApi.md#instancebackupget) | **GET** /1.0/instances/{name}/backups/{backup} | Get the backup
*InstancesApi* | [**instanceBackupPost**](docs/InstancesApi.md#instancebackuppost) | **POST** /1.0/instances/{name}/backups/{backup} | Rename a backup
*InstancesApi* | [**instanceBackupsGet**](docs/InstancesApi.md#instancebackupsget) | **GET** /1.0/instances/{name}/backups | Get the backups
*InstancesApi* | [**instanceBackupsGetRecursion1**](docs/InstancesApi.md#instancebackupsgetrecursion1) | **GET** /1.0/instances/{name}/backups?recursion&#x3D;1 | Get the backups
*InstancesApi* | [**instanceBackupsPost**](docs/InstancesApi.md#instancebackupspost) | **POST** /1.0/instances/{name}/backups | Create a backup
*InstancesApi* | [**instanceConsoleDelete**](docs/InstancesApi.md#instanceconsoledelete) | **DELETE** /1.0/instances/{name}/console | Clear the console log
*InstancesApi* | [**instanceConsoleGet**](docs/InstancesApi.md#instanceconsoleget) | **GET** /1.0/instances/{name}/console | Get console output
*InstancesApi* | [**instanceConsolePost**](docs/InstancesApi.md#instanceconsolepost) | **POST** /1.0/instances/{name}/console | Connect to console
*InstancesApi* | [**instanceDebugMemoryGet**](docs/InstancesApi.md#instancedebugmemoryget) | **GET** /1.0/instances/{name}/debug/memory | Get memory debug information of an instance
*InstancesApi* | [**instanceDelete**](docs/InstancesApi.md#instancedelete) | **DELETE** /1.0/instances/{name} | Delete an instance
*InstancesApi* | [**instanceExecOutputDelete**](docs/InstancesApi.md#instanceexecoutputdelete) | **DELETE** /1.0/instances/{name}/logs/exec-output/{filename} | Delete the exec record-output file
*InstancesApi* | [**instanceExecOutputGet**](docs/InstancesApi.md#instanceexecoutputget) | **GET** /1.0/instances/{name}/logs/exec-output/{filename} | Get the exec-output log file
*InstancesApi* | [**instanceExecOutputsGet**](docs/InstancesApi.md#instanceexecoutputsget) | **GET** /1.0/instances/{name}/logs/exec-output | Get the exec record-output files
*InstancesApi* | [**instanceExecPost**](docs/InstancesApi.md#instanceexecpost) | **POST** /1.0/instances/{name}/exec | Run a command
*InstancesApi* | [**instanceFilesDelete**](docs/InstancesApi.md#instancefilesdelete) | **DELETE** /1.0/instances/{name}/files | Delete a file
*InstancesApi* | [**instanceFilesGet**](docs/InstancesApi.md#instancefilesget) | **GET** /1.0/instances/{name}/files | Get a file
*InstancesApi* | [**instanceFilesHead**](docs/InstancesApi.md#instancefileshead) | **HEAD** /1.0/instances/{name}/files | Get metadata for a file
*InstancesApi* | [**instanceFilesPost**](docs/InstancesApi.md#instancefilespost) | **POST** /1.0/instances/{name}/files | Create or replace a file
*InstancesApi* | [**instanceGet**](docs/InstancesApi.md#instanceget) | **GET** /1.0/instances/{name} | Get the instance
*InstancesApi* | [**instanceGetRecursion1**](docs/InstancesApi.md#instancegetrecursion1) | **GET** /1.0/instances/{name}?recursion&#x3D;1 | Get the instance
*InstancesApi* | [**instanceLogDelete**](docs/InstancesApi.md#instancelogdelete) | **DELETE** /1.0/instances/{name}/logs/{filename} | Delete the log file
*InstancesApi* | [**instanceLogGet**](docs/InstancesApi.md#instancelogget) | **GET** /1.0/instances/{name}/logs/{filename} | Get the log file
*InstancesApi* | [**instanceLogsGet**](docs/InstancesApi.md#instancelogsget) | **GET** /1.0/instances/{name}/logs | Get the log files
*InstancesApi* | [**instanceMetadataGet**](docs/InstancesApi.md#instancemetadataget) | **GET** /1.0/instances/{name}/metadata | Get the instance image metadata
*InstancesApi* | [**instanceMetadataPatch**](docs/InstancesApi.md#instancemetadatapatch) | **PATCH** /1.0/instances/{name}/metadata | Partially update the image metadata
*InstancesApi* | [**instanceMetadataPut**](docs/InstancesApi.md#instancemetadataput) | **PUT** /1.0/instances/{name}/metadata | Update the image metadata
*InstancesApi* | [**instanceMetadataTemplatesDelete**](docs/InstancesApi.md#instancemetadatatemplatesdelete) | **DELETE** /1.0/instances/{name}/metadata/templates | Delete a template file
*InstancesApi* | [**instanceMetadataTemplatesGet**](docs/InstancesApi.md#instancemetadatatemplatesget) | **GET** /1.0/instances/{name}/metadata/templates | Get the template file names or a specific
*InstancesApi* | [**instanceMetadataTemplatesPost**](docs/InstancesApi.md#instancemetadatatemplatespost) | **POST** /1.0/instances/{name}/metadata/templates | Create or replace a template file
*InstancesApi* | [**instancePatch**](docs/InstancesApi.md#instancepatch) | **PATCH** /1.0/instances/{name} | Partially update the instance
*InstancesApi* | [**instancePost**](docs/InstancesApi.md#instancepost) | **POST** /1.0/instances/{name} | Rename or move/migrate an instance
*InstancesApi* | [**instancePut**](docs/InstancesApi.md#instanceput) | **PUT** /1.0/instances/{name} | Update the instance
*InstancesApi* | [**instanceRebuildPost**](docs/InstancesApi.md#instancerebuildpost) | **POST** /1.0/instances/{name}/rebuild | Rebuild an instance
*InstancesApi* | [**instanceSftp**](docs/InstancesApi.md#instancesftp) | **GET** /1.0/instances/{name}/sftp | Get the instance SFTP connection
*InstancesApi* | [**instanceSnapshotDelete**](docs/InstancesApi.md#instancesnapshotdelete) | **DELETE** /1.0/instances/{name}/snapshots/{snapshot} | Delete a snapshot
*InstancesApi* | [**instanceSnapshotGet**](docs/InstancesApi.md#instancesnapshotget) | **GET** /1.0/instances/{name}/snapshots/{snapshot} | Get the snapshot
*InstancesApi* | [**instanceSnapshotPatch**](docs/InstancesApi.md#instancesnapshotpatch) | **PATCH** /1.0/instances/{name}/snapshots/{snapshot} | Partially update snapshot
*InstancesApi* | [**instanceSnapshotPost**](docs/InstancesApi.md#instancesnapshotpost) | **POST** /1.0/instances/{name}/snapshots/{snapshot} | Rename or move/migrate a snapshot
*InstancesApi* | [**instanceSnapshotPut**](docs/InstancesApi.md#instancesnapshotput) | **PUT** /1.0/instances/{name}/snapshots/{snapshot} | Update snapshot
*InstancesApi* | [**instanceSnapshotsGet**](docs/InstancesApi.md#instancesnapshotsget) | **GET** /1.0/instances/{name}/snapshots | Get the snapshots
*InstancesApi* | [**instanceSnapshotsGetRecursion1**](docs/InstancesApi.md#instancesnapshotsgetrecursion1) | **GET** /1.0/instances/{name}/snapshots?recursion&#x3D;1 | Get the snapshots
*InstancesApi* | [**instanceSnapshotsPost**](docs/InstancesApi.md#instancesnapshotspost) | **POST** /1.0/instances/{name}/snapshots | Create a snapshot
*InstancesApi* | [**instanceStateGet**](docs/InstancesApi.md#instancestateget) | **GET** /1.0/instances/{name}/state | Get the runtime state
*InstancesApi* | [**instanceStatePut**](docs/InstancesApi.md#instancestateput) | **PUT** /1.0/instances/{name}/state | Change the state
*InstancesApi* | [**instancesGet**](docs/InstancesApi.md#instancesget) | **GET** /1.0/instances | Get the instances
*InstancesApi* | [**instancesGetRecursion1**](docs/InstancesApi.md#instancesgetrecursion1) | **GET** /1.0/instances?recursion&#x3D;1 | Get the instances
*InstancesApi* | [**instancesGetRecursion2**](docs/InstancesApi.md#instancesgetrecursion2) | **GET** /1.0/instances?recursion&#x3D;2 | Get the instances
*InstancesApi* | [**instancesPost**](docs/InstancesApi.md#instancespost) | **POST** /1.0/instances | Create a new instance
*InstancesApi* | [**instancesPut**](docs/InstancesApi.md#instancesput) | **PUT** /1.0/instances | Bulk instance state update
*MetricsApi* | [**metricsGet**](docs/MetricsApi.md#metricsget) | **GET** /1.0/metrics | Get metrics
*NetworkAclsApi* | [**networkAclDelete**](docs/NetworkAclsApi.md#networkacldelete) | **DELETE** /1.0/network-acls/{name} | Delete the network ACL
*NetworkAclsApi* | [**networkAclGet**](docs/NetworkAclsApi.md#networkaclget) | **GET** /1.0/network-acls/{name} | Get the network ACL
*NetworkAclsApi* | [**networkAclLogGet**](docs/NetworkAclsApi.md#networkacllogget) | **GET** /1.0/network-acls/{name}/log | Get the network ACL log
*NetworkAclsApi* | [**networkAclPatch**](docs/NetworkAclsApi.md#networkaclpatch) | **PATCH** /1.0/network-acls/{name} | Partially update the network ACL
*NetworkAclsApi* | [**networkAclPost**](docs/NetworkAclsApi.md#networkaclpost) | **POST** /1.0/network-acls/{name} | Rename the network ACL
*NetworkAclsApi* | [**networkAclPut**](docs/NetworkAclsApi.md#networkaclput) | **PUT** /1.0/network-acls/{name} | Update the network ACL
*NetworkAclsApi* | [**networkAclsGet**](docs/NetworkAclsApi.md#networkaclsget) | **GET** /1.0/network-acls | Get the network ACLs
*NetworkAclsApi* | [**networkAclsGetRecursion1**](docs/NetworkAclsApi.md#networkaclsgetrecursion1) | **GET** /1.0/network-acls?recursion&#x3D;1 | Get the network ACLs
*NetworkAclsApi* | [**networkAclsPost**](docs/NetworkAclsApi.md#networkaclspost) | **POST** /1.0/network-acls | Add a network ACL
*NetworkAddressSetsApi* | [**networkAddressSetDelete**](docs/NetworkAddressSetsApi.md#networkaddresssetdelete) | **DELETE** /1.0/network-address-sets/{name} | Delete the network address set
*NetworkAddressSetsApi* | [**networkAddressSetGet**](docs/NetworkAddressSetsApi.md#networkaddresssetget) | **GET** /1.0/network-address-sets/{name} | Get the network address set
*NetworkAddressSetsApi* | [**networkAddressSetPatch**](docs/NetworkAddressSetsApi.md#networkaddresssetpatch) | **PATCH** /1.0/network-address-sets/{name} | Partially update the network address set
*NetworkAddressSetsApi* | [**networkAddressSetPost**](docs/NetworkAddressSetsApi.md#networkaddresssetpost) | **POST** /1.0/network-address-sets/{name} | Rename the network address set
*NetworkAddressSetsApi* | [**networkAddressSetPut**](docs/NetworkAddressSetsApi.md#networkaddresssetput) | **PUT** /1.0/network-address-sets/{name} | Update the network address set
*NetworkAddressSetsApi* | [**networkAddressSetsGet**](docs/NetworkAddressSetsApi.md#networkaddresssetsget) | **GET** /1.0/network-address-sets | Get the network address sets
*NetworkAddressSetsApi* | [**networkAddressSetsGetRecursion1**](docs/NetworkAddressSetsApi.md#networkaddresssetsgetrecursion1) | **GET** /1.0/network-address-sets?recursion&#x3D;1 | Get the network address sets
*NetworkAddressSetsApi* | [**networkAddressSetsPost**](docs/NetworkAddressSetsApi.md#networkaddresssetspost) | **POST** /1.0/network-address-sets | Add a network address set
*NetworkAllocationsApi* | [**networkAllocationsGet**](docs/NetworkAllocationsApi.md#networkallocationsget) | **GET** /1.0/network-allocations | Get the network allocations in use (&#x60;network&#x60;, &#x60;network-forward&#x60; and &#x60;load-balancer&#x60; and &#x60;instance&#x60;)
*NetworkForwardsApi* | [**networkForwardDelete**](docs/NetworkForwardsApi.md#networkforwarddelete) | **DELETE** /1.0/networks/{networkName}/forwards/{listenAddress} | Delete the network address forward
*NetworkForwardsApi* | [**networkForwardGet**](docs/NetworkForwardsApi.md#networkforwardget) | **GET** /1.0/networks/{networkName}/forwards/{listenAddress} | Get the network address forward
*NetworkForwardsApi* | [**networkForwardGetRecursion1**](docs/NetworkForwardsApi.md#networkforwardgetrecursion1) | **GET** /1.0/networks/{networkName}/forwards?recursion&#x3D;1 | Get the network address forwards
*NetworkForwardsApi* | [**networkForwardPatch**](docs/NetworkForwardsApi.md#networkforwardpatch) | **PATCH** /1.0/networks/{networkName}/forwards/{listenAddress} | Partially update the network address forward
*NetworkForwardsApi* | [**networkForwardPut**](docs/NetworkForwardsApi.md#networkforwardput) | **PUT** /1.0/networks/{networkName}/forwards/{listenAddress} | Update the network address forward
*NetworkForwardsApi* | [**networkForwardsGet**](docs/NetworkForwardsApi.md#networkforwardsget) | **GET** /1.0/networks/{networkName}/forwards | Get the network address forwards
*NetworkForwardsApi* | [**networkForwardsPost**](docs/NetworkForwardsApi.md#networkforwardspost) | **POST** /1.0/networks/{networkName}/forwards | Add a network address forward
*NetworkIntegrationsApi* | [**networkIntegrationDelete**](docs/NetworkIntegrationsApi.md#networkintegrationdelete) | **DELETE** /1.0/network-integrations/{integration} | Delete the network integration
*NetworkIntegrationsApi* | [**networkIntegrationGet**](docs/NetworkIntegrationsApi.md#networkintegrationget) | **GET** /1.0/network-integrations/{integration} | Get the network integration
*NetworkIntegrationsApi* | [**networkIntegrationPatch**](docs/NetworkIntegrationsApi.md#networkintegrationpatch) | **PATCH** /1.0/network-integrations/{integration} | Partially update the network integration
*NetworkIntegrationsApi* | [**networkIntegrationPost**](docs/NetworkIntegrationsApi.md#networkintegrationpost) | **POST** /1.0/network-integrations/{integration} | Rename the network integration
*NetworkIntegrationsApi* | [**networkIntegrationPut**](docs/NetworkIntegrationsApi.md#networkintegrationput) | **PUT** /1.0/network-integrations/{integration} | Update the network integration
*NetworkIntegrationsApi* | [**networkIntegrationsGet**](docs/NetworkIntegrationsApi.md#networkintegrationsget) | **GET** /1.0/network-integrations | Get the network integrations
*NetworkIntegrationsApi* | [**networkIntegrationsGetRecursion1**](docs/NetworkIntegrationsApi.md#networkintegrationsgetrecursion1) | **GET** /1.0/network-integrations?recursion&#x3D;1 | Get the network integrations
*NetworkIntegrationsApi* | [**networkIntegrationsPost**](docs/NetworkIntegrationsApi.md#networkintegrationspost) | **POST** /1.0/network-integrations | Add a network integration
*NetworkLoadBalancersApi* | [**networkLoadBalancerDelete**](docs/NetworkLoadBalancersApi.md#networkloadbalancerdelete) | **DELETE** /1.0/networks/{networkName}/load-balancers/{listenAddress} | Delete the network address load balancer
*NetworkLoadBalancersApi* | [**networkLoadBalancerGet**](docs/NetworkLoadBalancersApi.md#networkloadbalancerget) | **GET** /1.0/networks/{networkName}/load-balancers/{listenAddress} | Get the network address load balancer
*NetworkLoadBalancersApi* | [**networkLoadBalancerGetRecursion1**](docs/NetworkLoadBalancersApi.md#networkloadbalancergetrecursion1) | **GET** /1.0/networks/{networkName}/load-balancers?recursion&#x3D;1 | Get the network address load balancers
*NetworkLoadBalancersApi* | [**networkLoadBalancerPatch**](docs/NetworkLoadBalancersApi.md#networkloadbalancerpatch) | **PATCH** /1.0/networks/{networkName}/load-balancers/{listenAddress} | Partially update the network address load balancer
*NetworkLoadBalancersApi* | [**networkLoadBalancerPut**](docs/NetworkLoadBalancersApi.md#networkloadbalancerput) | **PUT** /1.0/networks/{networkName}/load-balancers/{listenAddress} | Update the network address load balancer
*NetworkLoadBalancersApi* | [**networkLoadBalancerStateGet**](docs/NetworkLoadBalancersApi.md#networkloadbalancerstateget) | **GET** /1.0/networks/{networkName}/load-balancers/{listenAddress}/state | Get the network address load balancer state
*NetworkLoadBalancersApi* | [**networkLoadBalancersGet**](docs/NetworkLoadBalancersApi.md#networkloadbalancersget) | **GET** /1.0/networks/{networkName}/load-balancers | Get the network address of load balancers
*NetworkLoadBalancersApi* | [**networkLoadBalancersPost**](docs/NetworkLoadBalancersApi.md#networkloadbalancerspost) | **POST** /1.0/networks/{networkName}/load-balancers | Add a network load balancer
*NetworkPeersApi* | [**networkPeerDelete**](docs/NetworkPeersApi.md#networkpeerdelete) | **DELETE** /1.0/networks/{networkName}/peers/{peerName} | Delete the network peer
*NetworkPeersApi* | [**networkPeerGet**](docs/NetworkPeersApi.md#networkpeerget) | **GET** /1.0/networks/{networkName}/peers/{peerName} | Get the network peer
*NetworkPeersApi* | [**networkPeerGetRecursion1**](docs/NetworkPeersApi.md#networkpeergetrecursion1) | **GET** /1.0/networks/{networkName}/peers?recursion&#x3D;1 | Get the network peers
*NetworkPeersApi* | [**networkPeerPatch**](docs/NetworkPeersApi.md#networkpeerpatch) | **PATCH** /1.0/networks/{networkName}/peers/{peerName} | Partially update the network peer
*NetworkPeersApi* | [**networkPeerPut**](docs/NetworkPeersApi.md#networkpeerput) | **PUT** /1.0/networks/{networkName}/peers/{peerName} | Update the network peer
*NetworkPeersApi* | [**networkPeersGet**](docs/NetworkPeersApi.md#networkpeersget) | **GET** /1.0/networks/{networkName}/peers | Get the network peers
*NetworkPeersApi* | [**networkPeersPost**](docs/NetworkPeersApi.md#networkpeerspost) | **POST** /1.0/networks/{networkName}/peers | Add a network peer
*NetworkZonesApi* | [**networkZoneDelete**](docs/NetworkZonesApi.md#networkzonedelete) | **DELETE** /1.0/network-zones/{zone} | Delete the network zone
*NetworkZonesApi* | [**networkZoneGet**](docs/NetworkZonesApi.md#networkzoneget) | **GET** /1.0/network-zones/{zone} | Get the network zone
*NetworkZonesApi* | [**networkZonePatch**](docs/NetworkZonesApi.md#networkzonepatch) | **PATCH** /1.0/network-zones/{zone} | Partially update the network zone
*NetworkZonesApi* | [**networkZonePut**](docs/NetworkZonesApi.md#networkzoneput) | **PUT** /1.0/network-zones/{zone} | Update the network zone
*NetworkZonesApi* | [**networkZoneRecordDelete**](docs/NetworkZonesApi.md#networkzonerecorddelete) | **DELETE** /1.0/network-zones/{zone}/records/{name} | Delete the network zone record
*NetworkZonesApi* | [**networkZoneRecordGet**](docs/NetworkZonesApi.md#networkzonerecordget) | **GET** /1.0/network-zones/{zone}/records/{name} | Get the network zone record
*NetworkZonesApi* | [**networkZoneRecordPatch**](docs/NetworkZonesApi.md#networkzonerecordpatch) | **PATCH** /1.0/network-zones/{zone}/records/{name} | Partially update the network zone record
*NetworkZonesApi* | [**networkZoneRecordPut**](docs/NetworkZonesApi.md#networkzonerecordput) | **PUT** /1.0/network-zones/{zone}/records/{name} | Update the network zone record
*NetworkZonesApi* | [**networkZoneRecordsGet**](docs/NetworkZonesApi.md#networkzonerecordsget) | **GET** /1.0/network-zones/{zone}/records | Get the network zone records
*NetworkZonesApi* | [**networkZoneRecordsGetRecursion1**](docs/NetworkZonesApi.md#networkzonerecordsgetrecursion1) | **GET** /1.0/network-zones/{zone}/records?recursion&#x3D;1 | Get the network zone records
*NetworkZonesApi* | [**networkZoneRecordsPost**](docs/NetworkZonesApi.md#networkzonerecordspost) | **POST** /1.0/network-zones/{zone}/records | Add a network zone record
*NetworkZonesApi* | [**networkZonesGet**](docs/NetworkZonesApi.md#networkzonesget) | **GET** /1.0/network-zones | Get the network zones
*NetworkZonesApi* | [**networkZonesGetRecursion1**](docs/NetworkZonesApi.md#networkzonesgetrecursion1) | **GET** /1.0/network-zones?recursion&#x3D;1 | Get the network zones
*NetworkZonesApi* | [**networkZonesPost**](docs/NetworkZonesApi.md#networkzonespost) | **POST** /1.0/network-zones | Add a network zone
*NetworksApi* | [**networkDelete**](docs/NetworksApi.md#networkdelete) | **DELETE** /1.0/networks/{name} | Delete the network
*NetworksApi* | [**networkGet**](docs/NetworksApi.md#networkget) | **GET** /1.0/networks/{name} | Get the network
*NetworksApi* | [**networkPatch**](docs/NetworksApi.md#networkpatch) | **PATCH** /1.0/networks/{name} | Partially update the network
*NetworksApi* | [**networkPost**](docs/NetworksApi.md#networkpost) | **POST** /1.0/networks/{name} | Rename the network
*NetworksApi* | [**networkPut**](docs/NetworksApi.md#networkput) | **PUT** /1.0/networks/{name} | Update the network
*NetworksApi* | [**networksGet**](docs/NetworksApi.md#networksget) | **GET** /1.0/networks | Get the networks
*NetworksApi* | [**networksGetRecursion1**](docs/NetworksApi.md#networksgetrecursion1) | **GET** /1.0/networks?recursion&#x3D;1 | Get the networks
*NetworksApi* | [**networksLeasesGet**](docs/NetworksApi.md#networksleasesget) | **GET** /1.0/networks/{name}/leases | Get the DHCP leases
*NetworksApi* | [**networksPost**](docs/NetworksApi.md#networkspost) | **POST** /1.0/networks | Add a network
*NetworksApi* | [**networksStateGet**](docs/NetworksApi.md#networksstateget) | **GET** /1.0/networks/{name}/state | Get the network state
*OperationsApi* | [**operationDelete**](docs/OperationsApi.md#operationdelete) | **DELETE** /1.0/operations/{id} | Cancel the operation
*OperationsApi* | [**operationGet**](docs/OperationsApi.md#operationget) | **GET** /1.0/operations/{id} | Get the operation state
*OperationsApi* | [**operationWaitGet**](docs/OperationsApi.md#operationwaitget) | **GET** /1.0/operations/{id}/wait | Wait for the operation
*OperationsApi* | [**operationWaitGetUntrusted**](docs/OperationsApi.md#operationwaitgetuntrusted) | **GET** /1.0/operations/{id}/wait?public | Wait for the operation
*OperationsApi* | [**operationWebsocketGet**](docs/OperationsApi.md#operationwebsocketget) | **GET** /1.0/operations/{id}/websocket | Get the websocket stream
*OperationsApi* | [**operationWebsocketGetUntrusted**](docs/OperationsApi.md#operationwebsocketgetuntrusted) | **GET** /1.0/operations/{id}/websocket?public | Get the websocket stream
*OperationsApi* | [**operationsGet**](docs/OperationsApi.md#operationsget) | **GET** /1.0/operations | Get the operations
*OperationsApi* | [**operationsGetRecursion1**](docs/OperationsApi.md#operationsgetrecursion1) | **GET** /1.0/operations?recursion&#x3D;1 | Get the operations
*ProfilesApi* | [**profileDelete**](docs/ProfilesApi.md#profiledelete) | **DELETE** /1.0/profiles/{name} | Delete the profile
*ProfilesApi* | [**profileGet**](docs/ProfilesApi.md#profileget) | **GET** /1.0/profiles/{name} | Get the profile
*ProfilesApi* | [**profilePatch**](docs/ProfilesApi.md#profilepatch) | **PATCH** /1.0/profiles/{name} | Partially update the profile
*ProfilesApi* | [**profilePost**](docs/ProfilesApi.md#profilepost) | **POST** /1.0/profiles/{name} | Rename the profile
*ProfilesApi* | [**profilePut**](docs/ProfilesApi.md#profileput) | **PUT** /1.0/profiles/{name} | Update the profile
*ProfilesApi* | [**profilesGet**](docs/ProfilesApi.md#profilesget) | **GET** /1.0/profiles | Get the profiles
*ProfilesApi* | [**profilesGetRecursion1**](docs/ProfilesApi.md#profilesgetrecursion1) | **GET** /1.0/profiles?recursion&#x3D;1 | Get the profiles
*ProfilesApi* | [**profilesPost**](docs/ProfilesApi.md#profilespost) | **POST** /1.0/profiles | Add a profile
*ProjectsApi* | [**projectAccess**](docs/ProjectsApi.md#projectaccess) | **GET** /1.0/projects/{name}/access | Get who has access to a project
*ProjectsApi* | [**projectDelete**](docs/ProjectsApi.md#projectdelete) | **DELETE** /1.0/projects/{name} | Delete the project
*ProjectsApi* | [**projectGet**](docs/ProjectsApi.md#projectget) | **GET** /1.0/projects/{name} | Get the project
*ProjectsApi* | [**projectPatch**](docs/ProjectsApi.md#projectpatch) | **PATCH** /1.0/projects/{name} | Partially update the project
*ProjectsApi* | [**projectPost**](docs/ProjectsApi.md#projectpost) | **POST** /1.0/projects/{name} | Rename the project
*ProjectsApi* | [**projectPut**](docs/ProjectsApi.md#projectput) | **PUT** /1.0/projects/{name} | Update the project
*ProjectsApi* | [**projectStateGet**](docs/ProjectsApi.md#projectstateget) | **GET** /1.0/projects/{name}/state | Get the project state
*ProjectsApi* | [**projectsGet**](docs/ProjectsApi.md#projectsget) | **GET** /1.0/projects | Get the projects
*ProjectsApi* | [**projectsGetRecursion1**](docs/ProjectsApi.md#projectsgetrecursion1) | **GET** /1.0/projects?recursion&#x3D;1 | Get the projects
*ProjectsApi* | [**projectsPost**](docs/ProjectsApi.md#projectspost) | **POST** /1.0/projects | Add a project
*ServerApi* | [**apiGet**](docs/ServerApi.md#apiget) | **GET** / | Get the supported API endpoints
*ServerApi* | [**eventsGet**](docs/ServerApi.md#eventsget) | **GET** /1.0/events | Get the event stream
*ServerApi* | [**resourcesGet**](docs/ServerApi.md#resourcesget) | **GET** /1.0/resources | Get system resources information
*ServerApi* | [**serverGet**](docs/ServerApi.md#serverget) | **GET** /1.0 | Get the server environment and configuration
*ServerApi* | [**serverGetUntrusted**](docs/ServerApi.md#servergetuntrusted) | **GET** /1.0?public | Get the server environment
*ServerApi* | [**serverPatch**](docs/ServerApi.md#serverpatch) | **PATCH** /1.0 | Partially update the server configuration
*ServerApi* | [**serverPut**](docs/ServerApi.md#serverput) | **PUT** /1.0 | Update the server configuration
*StorageApi* | [**storagePoolBucketDelete**](docs/StorageApi.md#storagepoolbucketdelete) | **DELETE** /1.0/storage-pools/{name}/buckets/{bucketName} | Delete the storage bucket
*StorageApi* | [**storagePoolBucketGet**](docs/StorageApi.md#storagepoolbucketget) | **GET** /1.0/storage-pools/{poolName}/buckets/{bucketName} | Get the storage pool bucket
*StorageApi* | [**storagePoolBucketKeyDelete**](docs/StorageApi.md#storagepoolbucketkeydelete) | **DELETE** /1.0/storage-pools/{name}/buckets/{bucketName}/keys/{keyName} | Delete the storage bucket key
*StorageApi* | [**storagePoolBucketKeyGet**](docs/StorageApi.md#storagepoolbucketkeyget) | **GET** /1.0/storage-pools/{poolName}/buckets/{bucketName}/keys/{keyName} | Get the storage pool bucket key
*StorageApi* | [**storagePoolBucketKeyPost**](docs/StorageApi.md#storagepoolbucketkeypost) | **POST** /1.0/storage-pools/{poolName}/buckets/{bucketName}/keys | Add a storage pool bucket key.
*StorageApi* | [**storagePoolBucketKeyPut**](docs/StorageApi.md#storagepoolbucketkeyput) | **PUT** /1.0/storage-pools/{name}/buckets/{bucketName}/keys/{keyName} | Update the storage bucket key
*StorageApi* | [**storagePoolBucketKeysGet**](docs/StorageApi.md#storagepoolbucketkeysget) | **GET** /1.0/storage-pools/{poolName}/buckets/{bucketName}/keys | Get the storage pool bucket keys
*StorageApi* | [**storagePoolBucketKeysGetRecursion1**](docs/StorageApi.md#storagepoolbucketkeysgetrecursion1) | **GET** /1.0/storage-pools/{poolName}/buckets/{bucketName}/keys?recursion&#x3D;1 | Get the storage pool bucket keys
*StorageApi* | [**storagePoolBucketPatch**](docs/StorageApi.md#storagepoolbucketpatch) | **PATCH** /1.0/storage-pools/{name}/buckets/{bucketName} | Partially update the storage bucket.
*StorageApi* | [**storagePoolBucketPost**](docs/StorageApi.md#storagepoolbucketpost) | **POST** /1.0/storage-pools/{poolName}/buckets | Add a storage pool bucket.
*StorageApi* | [**storagePoolBucketPut**](docs/StorageApi.md#storagepoolbucketput) | **PUT** /1.0/storage-pools/{name}/buckets/{bucketName} | Update the storage bucket
*StorageApi* | [**storagePoolBucketsBackupDelete**](docs/StorageApi.md#storagepoolbucketsbackupdelete) | **DELETE** /1.0/storage-pools/{poolName}/buckets/{bucketName}/backups/{backupName} | Delete a storage bucket backup
*StorageApi* | [**storagePoolBucketsBackupExportGet**](docs/StorageApi.md#storagepoolbucketsbackupexportget) | **GET** /1.0/storage-pools/{poolName}/buckets/{bucketName}/backups/{backupName}/export | Get the raw backup file
*StorageApi* | [**storagePoolBucketsBackupGet**](docs/StorageApi.md#storagepoolbucketsbackupget) | **GET** /1.0/storage-pools/{poolName}/buckets/{bucketName}/backups/{backupName} | Get the storage bucket backup
*StorageApi* | [**storagePoolBucketsBackupPost**](docs/StorageApi.md#storagepoolbucketsbackuppost) | **POST** /1.0/storage-pools/{poolName}/buckets/{bucketName}/backups/{backupName} | Rename a storage bucket backup
*StorageApi* | [**storagePoolBucketsBackupsGet**](docs/StorageApi.md#storagepoolbucketsbackupsget) | **GET** /1.0/storage-pools/{poolName}/buckets/{bucketName}/backups | Get the storage bucket backups
*StorageApi* | [**storagePoolBucketsBackupsGetRecursion1**](docs/StorageApi.md#storagepoolbucketsbackupsgetrecursion1) | **GET** /1.0/storage-pools/{poolName}/buckets/{bucketName}/backups?recursion&#x3D;1 | Get the storage bucket backups
*StorageApi* | [**storagePoolBucketsBackupsPost**](docs/StorageApi.md#storagepoolbucketsbackupspost) | **POST** /1.0/storage-pools/{poolName}/buckets/{bucketName}/backups | Create a storage bucket backup
*StorageApi* | [**storagePoolBucketsGet**](docs/StorageApi.md#storagepoolbucketsget) | **GET** /1.0/storage-pools/{poolName}/buckets | Get the storage pool buckets
*StorageApi* | [**storagePoolBucketsGetRecursion1**](docs/StorageApi.md#storagepoolbucketsgetrecursion1) | **GET** /1.0/storage-pools/{poolName}/buckets?recursion&#x3D;1 | Get the storage pool buckets
*StorageApi* | [**storagePoolGet**](docs/StorageApi.md#storagepoolget) | **GET** /1.0/storage-pools/{poolName} | Get the storage pool
*StorageApi* | [**storagePoolPatch**](docs/StorageApi.md#storagepoolpatch) | **PATCH** /1.0/storage-pools/{poolName} | Partially update the storage pool
*StorageApi* | [**storagePoolPut**](docs/StorageApi.md#storagepoolput) | **PUT** /1.0/storage-pools/{poolName} | Update the storage pool
*StorageApi* | [**storagePoolResources**](docs/StorageApi.md#storagepoolresources) | **GET** /1.0/storage-pools/{name}/resources | Get storage pool resources information
*StorageApi* | [**storagePoolVolumeTypeDelete**](docs/StorageApi.md#storagepoolvolumetypedelete) | **DELETE** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName} | Delete the storage volume
*StorageApi* | [**storagePoolVolumeTypeGet**](docs/StorageApi.md#storagepoolvolumetypeget) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName} | Get the storage volume
*StorageApi* | [**storagePoolVolumeTypePatch**](docs/StorageApi.md#storagepoolvolumetypepatch) | **PATCH** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName} | Partially update the storage volume
*StorageApi* | [**storagePoolVolumeTypePost**](docs/StorageApi.md#storagepoolvolumetypepost) | **POST** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName} | Rename or move/migrate a storage volume
*StorageApi* | [**storagePoolVolumeTypePut**](docs/StorageApi.md#storagepoolvolumetypeput) | **PUT** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName} | Update the storage volume
*StorageApi* | [**storagePoolVolumeTypeSftpGet**](docs/StorageApi.md#storagepoolvolumetypesftpget) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/sftp | Get the storage volume SFTP connection
*StorageApi* | [**storagePoolVolumeTypeStateGet**](docs/StorageApi.md#storagepoolvolumetypestateget) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/state | Get the storage volume state
*StorageApi* | [**storagePoolVolumesGet**](docs/StorageApi.md#storagepoolvolumesget) | **GET** /1.0/storage-pools/{poolName}/volumes | Get the storage volumes
*StorageApi* | [**storagePoolVolumesGetRecursion1**](docs/StorageApi.md#storagepoolvolumesgetrecursion1) | **GET** /1.0/storage-pools/{poolName}/volumes?recursion&#x3D;1 | Get the storage volumes
*StorageApi* | [**storagePoolVolumesPost**](docs/StorageApi.md#storagepoolvolumespost) | **POST** /1.0/storage-pools/{poolName}/volumes | Add a storage volume
*StorageApi* | [**storagePoolVolumesTypeBackupDelete**](docs/StorageApi.md#storagepoolvolumestypebackupdelete) | **DELETE** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/backups/{backupName} | Delete a storage volume backup
*StorageApi* | [**storagePoolVolumesTypeBackupExportGet**](docs/StorageApi.md#storagepoolvolumestypebackupexportget) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/backups/{backupName}/export | Get the raw backup file
*StorageApi* | [**storagePoolVolumesTypeBackupGet**](docs/StorageApi.md#storagepoolvolumestypebackupget) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/backups/{backupName} | Get the storage volume backup
*StorageApi* | [**storagePoolVolumesTypeBackupPost**](docs/StorageApi.md#storagepoolvolumestypebackuppost) | **POST** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/backups/{backupName} | Rename a storage volume backup
*StorageApi* | [**storagePoolVolumesTypeBackupsGet**](docs/StorageApi.md#storagepoolvolumestypebackupsget) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/backups | Get the storage volume backups
*StorageApi* | [**storagePoolVolumesTypeBackupsGetRecursion1**](docs/StorageApi.md#storagepoolvolumestypebackupsgetrecursion1) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/backups?recursion&#x3D;1 | Get the storage volume backups
*StorageApi* | [**storagePoolVolumesTypeBackupsPost**](docs/StorageApi.md#storagepoolvolumestypebackupspost) | **POST** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/backups | Create a storage volume backup
*StorageApi* | [**storagePoolVolumesTypeGet**](docs/StorageApi.md#storagepoolvolumestypeget) | **GET** /1.0/storage-pools/{poolName}/volumes/{type} | Get the storage volumes
*StorageApi* | [**storagePoolVolumesTypeGetRecursion1**](docs/StorageApi.md#storagepoolvolumestypegetrecursion1) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}?recursion&#x3D;1 | Get the storage volumes
*StorageApi* | [**storagePoolVolumesTypePost**](docs/StorageApi.md#storagepoolvolumestypepost) | **POST** /1.0/storage-pools/{poolName}/volumes/{type} | Add a storage volume
*StorageApi* | [**storagePoolVolumesTypeSnapshotDelete**](docs/StorageApi.md#storagepoolvolumestypesnapshotdelete) | **DELETE** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/snapshots/{snapshotName} | Delete a storage volume snapshot
*StorageApi* | [**storagePoolVolumesTypeSnapshotGet**](docs/StorageApi.md#storagepoolvolumestypesnapshotget) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/snapshots/{snapshotName} | Get the storage volume snapshot
*StorageApi* | [**storagePoolVolumesTypeSnapshotPatch**](docs/StorageApi.md#storagepoolvolumestypesnapshotpatch) | **PATCH** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/snapshots/{snapshotName} | Partially update the storage volume snapshot
*StorageApi* | [**storagePoolVolumesTypeSnapshotPost**](docs/StorageApi.md#storagepoolvolumestypesnapshotpost) | **POST** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/snapshots/{snapshotName} | Rename a storage volume snapshot
*StorageApi* | [**storagePoolVolumesTypeSnapshotPut**](docs/StorageApi.md#storagepoolvolumestypesnapshotput) | **PUT** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/snapshots/{snapshotName} | Update the storage volume snapshot
*StorageApi* | [**storagePoolVolumesTypeSnapshotsGet**](docs/StorageApi.md#storagepoolvolumestypesnapshotsget) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/snapshots | Get the storage volume snapshots
*StorageApi* | [**storagePoolVolumesTypeSnapshotsGetRecursion1**](docs/StorageApi.md#storagepoolvolumestypesnapshotsgetrecursion1) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/snapshots?recursion&#x3D;1 | Get the storage volume snapshots
*StorageApi* | [**storagePoolVolumesTypeSnapshotsPost**](docs/StorageApi.md#storagepoolvolumestypesnapshotspost) | **POST** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/snapshots | Create a storage volume snapshot
*StorageApi* | [**storagePoolsDelete**](docs/StorageApi.md#storagepoolsdelete) | **DELETE** /1.0/storage-pools/{poolName} | Delete the storage pool
*StorageApi* | [**storagePoolsGet**](docs/StorageApi.md#storagepoolsget) | **GET** /1.0/storage-pools | Get the storage pools
*StorageApi* | [**storagePoolsGetRecursion1**](docs/StorageApi.md#storagepoolsgetrecursion1) | **GET** /1.0/storage-pools?recursion&#x3D;1 | Get the storage pools
*StorageApi* | [**storagePoolsPost**](docs/StorageApi.md#storagepoolspost) | **POST** /1.0/storage-pools | Add a storage pool
*WarningsApi* | [**warningDelete**](docs/WarningsApi.md#warningdelete) | **DELETE** /1.0/warnings/{uuid} | Delete the warning
*WarningsApi* | [**warningGet**](docs/WarningsApi.md#warningget) | **GET** /1.0/warnings/{uuid} | Get the warning
*WarningsApi* | [**warningPatch**](docs/WarningsApi.md#warningpatch) | **PATCH** /1.0/warnings/{uuid} | Partially update the warning
*WarningsApi* | [**warningPut**](docs/WarningsApi.md#warningput) | **PUT** /1.0/warnings/{uuid} | Update the warning
*WarningsApi* | [**warningsGet**](docs/WarningsApi.md#warningsget) | **GET** /1.0/warnings | List the warnings
*WarningsApi* | [**warningsGetRecursion1**](docs/WarningsApi.md#warningsgetrecursion1) | **GET** /1.0/warnings?recursion&#x3D;1 | Get the warnings


### Documentation For Models

 - [AccessEntry](docs/AccessEntry.md)
 - [ApiGet200Response](docs/ApiGet200Response.md)
 - [BackupTarget](docs/BackupTarget.md)
 - [Certificate](docs/Certificate.md)
 - [CertificateAddToken](docs/CertificateAddToken.md)
 - [CertificateGet200Response](docs/CertificateGet200Response.md)
 - [CertificatePut](docs/CertificatePut.md)
 - [CertificatesGet200Response](docs/CertificatesGet200Response.md)
 - [CertificatesGetRecursion1200Response](docs/CertificatesGetRecursion1200Response.md)
 - [CertificatesPost](docs/CertificatesPost.md)
 - [Cluster](docs/Cluster.md)
 - [ClusterCertificatePut](docs/ClusterCertificatePut.md)
 - [ClusterGet200Response](docs/ClusterGet200Response.md)
 - [ClusterGroup](docs/ClusterGroup.md)
 - [ClusterGroupGet200Response](docs/ClusterGroupGet200Response.md)
 - [ClusterGroupPost](docs/ClusterGroupPost.md)
 - [ClusterGroupPut](docs/ClusterGroupPut.md)
 - [ClusterGroupsGet200Response](docs/ClusterGroupsGet200Response.md)
 - [ClusterGroupsGetRecursion1200Response](docs/ClusterGroupsGetRecursion1200Response.md)
 - [ClusterGroupsPost](docs/ClusterGroupsPost.md)
 - [ClusterMember](docs/ClusterMember.md)
 - [ClusterMemberConfigKey](docs/ClusterMemberConfigKey.md)
 - [ClusterMemberGet200Response](docs/ClusterMemberGet200Response.md)
 - [ClusterMemberJoinToken](docs/ClusterMemberJoinToken.md)
 - [ClusterMemberPost](docs/ClusterMemberPost.md)
 - [ClusterMemberPut](docs/ClusterMemberPut.md)
 - [ClusterMemberState](docs/ClusterMemberState.md)
 - [ClusterMemberStateGet200Response](docs/ClusterMemberStateGet200Response.md)
 - [ClusterMemberStatePost](docs/ClusterMemberStatePost.md)
 - [ClusterMemberSysInfo](docs/ClusterMemberSysInfo.md)
 - [ClusterMembersGet200Response](docs/ClusterMembersGet200Response.md)
 - [ClusterMembersGetRecursion1200Response](docs/ClusterMembersGetRecursion1200Response.md)
 - [ClusterMembersPost](docs/ClusterMembersPost.md)
 - [ClusterMembersPost202Response](docs/ClusterMembersPost202Response.md)
 - [ClusterPut](docs/ClusterPut.md)
 - [Event](docs/Event.md)
 - [Image](docs/Image.md)
 - [ImageAlias](docs/ImageAlias.md)
 - [ImageAliasGet200Response](docs/ImageAliasGet200Response.md)
 - [ImageAliasesEntry](docs/ImageAliasesEntry.md)
 - [ImageAliasesEntryPost](docs/ImageAliasesEntryPost.md)
 - [ImageAliasesEntryPut](docs/ImageAliasesEntryPut.md)
 - [ImageAliasesPost](docs/ImageAliasesPost.md)
 - [ImageExportPost](docs/ImageExportPost.md)
 - [ImageGet200Response](docs/ImageGet200Response.md)
 - [ImageMetadata](docs/ImageMetadata.md)
 - [ImageMetadataTemplate](docs/ImageMetadataTemplate.md)
 - [ImagePut](docs/ImagePut.md)
 - [ImageSource](docs/ImageSource.md)
 - [ImagesAliasesGet200Response](docs/ImagesAliasesGet200Response.md)
 - [ImagesAliasesGetRecursion1200Response](docs/ImagesAliasesGetRecursion1200Response.md)
 - [ImagesGet200Response](docs/ImagesGet200Response.md)
 - [ImagesGetRecursion1Untrusted200Response](docs/ImagesGetRecursion1Untrusted200Response.md)
 - [ImagesPost](docs/ImagesPost.md)
 - [ImagesPostSource](docs/ImagesPostSource.md)
 - [InitClusterPreseed](docs/InitClusterPreseed.md)
 - [InitLocalPreseed](docs/InitLocalPreseed.md)
 - [InitNetworksProjectPost](docs/InitNetworksProjectPost.md)
 - [InitPreseed](docs/InitPreseed.md)
 - [InitProfileProjectPost](docs/InitProfileProjectPost.md)
 - [InitStorageVolumesProjectPost](docs/InitStorageVolumesProjectPost.md)
 - [Instance](docs/Instance.md)
 - [InstanceAccess200Response](docs/InstanceAccess200Response.md)
 - [InstanceBackup](docs/InstanceBackup.md)
 - [InstanceBackupGet200Response](docs/InstanceBackupGet200Response.md)
 - [InstanceBackupPost](docs/InstanceBackupPost.md)
 - [InstanceBackupsGet200Response](docs/InstanceBackupsGet200Response.md)
 - [InstanceBackupsGetRecursion1200Response](docs/InstanceBackupsGetRecursion1200Response.md)
 - [InstanceBackupsPost](docs/InstanceBackupsPost.md)
 - [InstanceConsoleGet404Response](docs/InstanceConsoleGet404Response.md)
 - [InstanceConsolePost](docs/InstanceConsolePost.md)
 - [InstanceExecOutputsGet200Response](docs/InstanceExecOutputsGet200Response.md)
 - [InstanceExecPost](docs/InstanceExecPost.md)
 - [InstanceFull](docs/InstanceFull.md)
 - [InstanceGet200Response](docs/InstanceGet200Response.md)
 - [InstanceLogsGet200Response](docs/InstanceLogsGet200Response.md)
 - [InstanceMetadataGet200Response](docs/InstanceMetadataGet200Response.md)
 - [InstancePost](docs/InstancePost.md)
 - [InstancePostTarget](docs/InstancePostTarget.md)
 - [InstancePut](docs/InstancePut.md)
 - [InstanceRebuildPost](docs/InstanceRebuildPost.md)
 - [InstanceSnapshot](docs/InstanceSnapshot.md)
 - [InstanceSnapshotGet200Response](docs/InstanceSnapshotGet200Response.md)
 - [InstanceSnapshotPost](docs/InstanceSnapshotPost.md)
 - [InstanceSnapshotPut](docs/InstanceSnapshotPut.md)
 - [InstanceSnapshotsGet200Response](docs/InstanceSnapshotsGet200Response.md)
 - [InstanceSnapshotsGetRecursion1200Response](docs/InstanceSnapshotsGetRecursion1200Response.md)
 - [InstanceSnapshotsPost](docs/InstanceSnapshotsPost.md)
 - [InstanceSource](docs/InstanceSource.md)
 - [InstanceState](docs/InstanceState.md)
 - [InstanceStateCPU](docs/InstanceStateCPU.md)
 - [InstanceStateDisk](docs/InstanceStateDisk.md)
 - [InstanceStateGet200Response](docs/InstanceStateGet200Response.md)
 - [InstanceStateMemory](docs/InstanceStateMemory.md)
 - [InstanceStateNetwork](docs/InstanceStateNetwork.md)
 - [InstanceStateNetworkAddress](docs/InstanceStateNetworkAddress.md)
 - [InstanceStateNetworkCounters](docs/InstanceStateNetworkCounters.md)
 - [InstanceStateOSInfo](docs/InstanceStateOSInfo.md)
 - [InstanceStatePut](docs/InstanceStatePut.md)
 - [InstancesGet200Response](docs/InstancesGet200Response.md)
 - [InstancesGetRecursion1200Response](docs/InstancesGetRecursion1200Response.md)
 - [InstancesGetRecursion2200Response](docs/InstancesGetRecursion2200Response.md)
 - [InstancesPost](docs/InstancesPost.md)
 - [InstancesPut](docs/InstancesPut.md)
 - [MetadataConfigGroup](docs/MetadataConfigGroup.md)
 - [MetadataConfigKey](docs/MetadataConfigKey.md)
 - [MetadataConfiguration](docs/MetadataConfiguration.md)
 - [MetadataConfigurationGet200Response](docs/MetadataConfigurationGet200Response.md)
 - [Network](docs/Network.md)
 - [NetworkACL](docs/NetworkACL.md)
 - [NetworkACLPost](docs/NetworkACLPost.md)
 - [NetworkACLPut](docs/NetworkACLPut.md)
 - [NetworkACLRule](docs/NetworkACLRule.md)
 - [NetworkACLsPost](docs/NetworkACLsPost.md)
 - [NetworkAclGet200Response](docs/NetworkAclGet200Response.md)
 - [NetworkAclsGet200Response](docs/NetworkAclsGet200Response.md)
 - [NetworkAclsGetRecursion1200Response](docs/NetworkAclsGetRecursion1200Response.md)
 - [NetworkAddressSet](docs/NetworkAddressSet.md)
 - [NetworkAddressSetGet200Response](docs/NetworkAddressSetGet200Response.md)
 - [NetworkAddressSetPost](docs/NetworkAddressSetPost.md)
 - [NetworkAddressSetPut](docs/NetworkAddressSetPut.md)
 - [NetworkAddressSetsGet200Response](docs/NetworkAddressSetsGet200Response.md)
 - [NetworkAddressSetsGetRecursion1200Response](docs/NetworkAddressSetsGetRecursion1200Response.md)
 - [NetworkAddressSetsPost](docs/NetworkAddressSetsPost.md)
 - [NetworkAllocations](docs/NetworkAllocations.md)
 - [NetworkAllocationsGet200Response](docs/NetworkAllocationsGet200Response.md)
 - [NetworkForward](docs/NetworkForward.md)
 - [NetworkForwardGet200Response](docs/NetworkForwardGet200Response.md)
 - [NetworkForwardGetRecursion1200Response](docs/NetworkForwardGetRecursion1200Response.md)
 - [NetworkForwardPort](docs/NetworkForwardPort.md)
 - [NetworkForwardPut](docs/NetworkForwardPut.md)
 - [NetworkForwardsGet200Response](docs/NetworkForwardsGet200Response.md)
 - [NetworkForwardsPost](docs/NetworkForwardsPost.md)
 - [NetworkGet200Response](docs/NetworkGet200Response.md)
 - [NetworkIntegration](docs/NetworkIntegration.md)
 - [NetworkIntegrationGet200Response](docs/NetworkIntegrationGet200Response.md)
 - [NetworkIntegrationPost](docs/NetworkIntegrationPost.md)
 - [NetworkIntegrationPut](docs/NetworkIntegrationPut.md)
 - [NetworkIntegrationsGet200Response](docs/NetworkIntegrationsGet200Response.md)
 - [NetworkIntegrationsGetRecursion1200Response](docs/NetworkIntegrationsGetRecursion1200Response.md)
 - [NetworkIntegrationsPost](docs/NetworkIntegrationsPost.md)
 - [NetworkLease](docs/NetworkLease.md)
 - [NetworkLoadBalancer](docs/NetworkLoadBalancer.md)
 - [NetworkLoadBalancerBackend](docs/NetworkLoadBalancerBackend.md)
 - [NetworkLoadBalancerGet200Response](docs/NetworkLoadBalancerGet200Response.md)
 - [NetworkLoadBalancerGetRecursion1200Response](docs/NetworkLoadBalancerGetRecursion1200Response.md)
 - [NetworkLoadBalancerPort](docs/NetworkLoadBalancerPort.md)
 - [NetworkLoadBalancerPut](docs/NetworkLoadBalancerPut.md)
 - [NetworkLoadBalancerState](docs/NetworkLoadBalancerState.md)
 - [NetworkLoadBalancerStateBackendHealth](docs/NetworkLoadBalancerStateBackendHealth.md)
 - [NetworkLoadBalancerStateBackendHealthPort](docs/NetworkLoadBalancerStateBackendHealthPort.md)
 - [NetworkLoadBalancerStateGet200Response](docs/NetworkLoadBalancerStateGet200Response.md)
 - [NetworkLoadBalancersGet200Response](docs/NetworkLoadBalancersGet200Response.md)
 - [NetworkLoadBalancersPost](docs/NetworkLoadBalancersPost.md)
 - [NetworkPeer](docs/NetworkPeer.md)
 - [NetworkPeerGet200Response](docs/NetworkPeerGet200Response.md)
 - [NetworkPeerGetRecursion1200Response](docs/NetworkPeerGetRecursion1200Response.md)
 - [NetworkPeerPut](docs/NetworkPeerPut.md)
 - [NetworkPeersGet200Response](docs/NetworkPeersGet200Response.md)
 - [NetworkPeersPost](docs/NetworkPeersPost.md)
 - [NetworkPost](docs/NetworkPost.md)
 - [NetworkPut](docs/NetworkPut.md)
 - [NetworkState](docs/NetworkState.md)
 - [NetworkStateAddress](docs/NetworkStateAddress.md)
 - [NetworkStateBond](docs/NetworkStateBond.md)
 - [NetworkStateBridge](docs/NetworkStateBridge.md)
 - [NetworkStateCounters](docs/NetworkStateCounters.md)
 - [NetworkStateOVN](docs/NetworkStateOVN.md)
 - [NetworkStateVLAN](docs/NetworkStateVLAN.md)
 - [NetworkZone](docs/NetworkZone.md)
 - [NetworkZoneGet200Response](docs/NetworkZoneGet200Response.md)
 - [NetworkZonePut](docs/NetworkZonePut.md)
 - [NetworkZoneRecord](docs/NetworkZoneRecord.md)
 - [NetworkZoneRecordEntry](docs/NetworkZoneRecordEntry.md)
 - [NetworkZoneRecordGet200Response](docs/NetworkZoneRecordGet200Response.md)
 - [NetworkZoneRecordPut](docs/NetworkZoneRecordPut.md)
 - [NetworkZoneRecordsGet200Response](docs/NetworkZoneRecordsGet200Response.md)
 - [NetworkZoneRecordsGetRecursion1200Response](docs/NetworkZoneRecordsGetRecursion1200Response.md)
 - [NetworkZoneRecordsPost](docs/NetworkZoneRecordsPost.md)
 - [NetworkZonesGet200Response](docs/NetworkZonesGet200Response.md)
 - [NetworkZonesGetRecursion1200Response](docs/NetworkZonesGetRecursion1200Response.md)
 - [NetworkZonesPost](docs/NetworkZonesPost.md)
 - [NetworksGet200Response](docs/NetworksGet200Response.md)
 - [NetworksGetRecursion1200Response](docs/NetworksGetRecursion1200Response.md)
 - [NetworksLeasesGet200Response](docs/NetworksLeasesGet200Response.md)
 - [NetworksPost](docs/NetworksPost.md)
 - [NetworksStateGet200Response](docs/NetworksStateGet200Response.md)
 - [Operation](docs/Operation.md)
 - [OperationGet200Response](docs/OperationGet200Response.md)
 - [OperationsGet200Response](docs/OperationsGet200Response.md)
 - [OperationsGetRecursion1200Response](docs/OperationsGetRecursion1200Response.md)
 - [Profile](docs/Profile.md)
 - [ProfileGet200Response](docs/ProfileGet200Response.md)
 - [ProfilePost](docs/ProfilePost.md)
 - [ProfilePut](docs/ProfilePut.md)
 - [ProfilesGet200Response](docs/ProfilesGet200Response.md)
 - [ProfilesGetRecursion1200Response](docs/ProfilesGetRecursion1200Response.md)
 - [ProfilesPost](docs/ProfilesPost.md)
 - [Project](docs/Project.md)
 - [ProjectGet200Response](docs/ProjectGet200Response.md)
 - [ProjectPost](docs/ProjectPost.md)
 - [ProjectPut](docs/ProjectPut.md)
 - [ProjectState](docs/ProjectState.md)
 - [ProjectStateGet200Response](docs/ProjectStateGet200Response.md)
 - [ProjectStateResource](docs/ProjectStateResource.md)
 - [ProjectsGet200Response](docs/ProjectsGet200Response.md)
 - [ProjectsGetRecursion1200Response](docs/ProjectsGetRecursion1200Response.md)
 - [ProjectsPost](docs/ProjectsPost.md)
 - [Resources](docs/Resources.md)
 - [ResourcesCPU](docs/ResourcesCPU.md)
 - [ResourcesCPUAddressSizes](docs/ResourcesCPUAddressSizes.md)
 - [ResourcesCPUCache](docs/ResourcesCPUCache.md)
 - [ResourcesCPUCore](docs/ResourcesCPUCore.md)
 - [ResourcesCPUSocket](docs/ResourcesCPUSocket.md)
 - [ResourcesCPUThread](docs/ResourcesCPUThread.md)
 - [ResourcesGPU](docs/ResourcesGPU.md)
 - [ResourcesGPUCard](docs/ResourcesGPUCard.md)
 - [ResourcesGPUCardDRM](docs/ResourcesGPUCardDRM.md)
 - [ResourcesGPUCardMdev](docs/ResourcesGPUCardMdev.md)
 - [ResourcesGPUCardNvidia](docs/ResourcesGPUCardNvidia.md)
 - [ResourcesGPUCardSRIOV](docs/ResourcesGPUCardSRIOV.md)
 - [ResourcesGet200Response](docs/ResourcesGet200Response.md)
 - [ResourcesLoad](docs/ResourcesLoad.md)
 - [ResourcesMemory](docs/ResourcesMemory.md)
 - [ResourcesMemoryNode](docs/ResourcesMemoryNode.md)
 - [ResourcesNetwork](docs/ResourcesNetwork.md)
 - [ResourcesNetworkCard](docs/ResourcesNetworkCard.md)
 - [ResourcesNetworkCardPort](docs/ResourcesNetworkCardPort.md)
 - [ResourcesNetworkCardPortInfiniband](docs/ResourcesNetworkCardPortInfiniband.md)
 - [ResourcesNetworkCardSRIOV](docs/ResourcesNetworkCardSRIOV.md)
 - [ResourcesNetworkCardVDPA](docs/ResourcesNetworkCardVDPA.md)
 - [ResourcesPCI](docs/ResourcesPCI.md)
 - [ResourcesPCIDevice](docs/ResourcesPCIDevice.md)
 - [ResourcesPCIVPD](docs/ResourcesPCIVPD.md)
 - [ResourcesStorage](docs/ResourcesStorage.md)
 - [ResourcesStorageDisk](docs/ResourcesStorageDisk.md)
 - [ResourcesStorageDiskPartition](docs/ResourcesStorageDiskPartition.md)
 - [ResourcesStoragePool](docs/ResourcesStoragePool.md)
 - [ResourcesStoragePoolInodes](docs/ResourcesStoragePoolInodes.md)
 - [ResourcesStoragePoolSpace](docs/ResourcesStoragePoolSpace.md)
 - [ResourcesSystem](docs/ResourcesSystem.md)
 - [ResourcesSystemChassis](docs/ResourcesSystemChassis.md)
 - [ResourcesSystemFirmware](docs/ResourcesSystemFirmware.md)
 - [ResourcesSystemMotherboard](docs/ResourcesSystemMotherboard.md)
 - [ResourcesUSB](docs/ResourcesUSB.md)
 - [ResourcesUSBDevice](docs/ResourcesUSBDevice.md)
 - [ResourcesUSBDeviceInterface](docs/ResourcesUSBDeviceInterface.md)
 - [Server](docs/Server.md)
 - [ServerEnvironment](docs/ServerEnvironment.md)
 - [ServerGet200Response](docs/ServerGet200Response.md)
 - [ServerGet500Response](docs/ServerGet500Response.md)
 - [ServerGetUntrusted200Response](docs/ServerGetUntrusted200Response.md)
 - [ServerPut](docs/ServerPut.md)
 - [ServerPut200Response](docs/ServerPut200Response.md)
 - [ServerPut400Response](docs/ServerPut400Response.md)
 - [ServerPut403Response](docs/ServerPut403Response.md)
 - [ServerPut412Response](docs/ServerPut412Response.md)
 - [ServerStorageDriverInfo](docs/ServerStorageDriverInfo.md)
 - [ServerUntrusted](docs/ServerUntrusted.md)
 - [StorageBucket](docs/StorageBucket.md)
 - [StorageBucketBackup](docs/StorageBucketBackup.md)
 - [StorageBucketBackupPost](docs/StorageBucketBackupPost.md)
 - [StorageBucketBackupsPost](docs/StorageBucketBackupsPost.md)
 - [StorageBucketKey](docs/StorageBucketKey.md)
 - [StorageBucketKeyPut](docs/StorageBucketKeyPut.md)
 - [StorageBucketKeysPost](docs/StorageBucketKeysPost.md)
 - [StorageBucketPut](docs/StorageBucketPut.md)
 - [StorageBucketsPost](docs/StorageBucketsPost.md)
 - [StoragePool](docs/StoragePool.md)
 - [StoragePoolBucketGet200Response](docs/StoragePoolBucketGet200Response.md)
 - [StoragePoolBucketKeyGet200Response](docs/StoragePoolBucketKeyGet200Response.md)
 - [StoragePoolBucketKeysGet200Response](docs/StoragePoolBucketKeysGet200Response.md)
 - [StoragePoolBucketKeysGetRecursion1200Response](docs/StoragePoolBucketKeysGetRecursion1200Response.md)
 - [StoragePoolBucketsBackupGet200Response](docs/StoragePoolBucketsBackupGet200Response.md)
 - [StoragePoolBucketsBackupsGet200Response](docs/StoragePoolBucketsBackupsGet200Response.md)
 - [StoragePoolBucketsBackupsGetRecursion1200Response](docs/StoragePoolBucketsBackupsGetRecursion1200Response.md)
 - [StoragePoolBucketsGet200Response](docs/StoragePoolBucketsGet200Response.md)
 - [StoragePoolBucketsGetRecursion1200Response](docs/StoragePoolBucketsGetRecursion1200Response.md)
 - [StoragePoolGet200Response](docs/StoragePoolGet200Response.md)
 - [StoragePoolPut](docs/StoragePoolPut.md)
 - [StoragePoolResources200Response](docs/StoragePoolResources200Response.md)
 - [StoragePoolState](docs/StoragePoolState.md)
 - [StoragePoolVolumeTypeGet200Response](docs/StoragePoolVolumeTypeGet200Response.md)
 - [StoragePoolVolumeTypeStateGet200Response](docs/StoragePoolVolumeTypeStateGet200Response.md)
 - [StoragePoolVolumesGet200Response](docs/StoragePoolVolumesGet200Response.md)
 - [StoragePoolVolumesTypeBackupGet200Response](docs/StoragePoolVolumesTypeBackupGet200Response.md)
 - [StoragePoolVolumesTypeBackupsGet200Response](docs/StoragePoolVolumesTypeBackupsGet200Response.md)
 - [StoragePoolVolumesTypeBackupsGetRecursion1200Response](docs/StoragePoolVolumesTypeBackupsGetRecursion1200Response.md)
 - [StoragePoolVolumesTypeGet200Response](docs/StoragePoolVolumesTypeGet200Response.md)
 - [StoragePoolVolumesTypeGetRecursion1200Response](docs/StoragePoolVolumesTypeGetRecursion1200Response.md)
 - [StoragePoolVolumesTypeSnapshotGet200Response](docs/StoragePoolVolumesTypeSnapshotGet200Response.md)
 - [StoragePoolVolumesTypeSnapshotsGet200Response](docs/StoragePoolVolumesTypeSnapshotsGet200Response.md)
 - [StoragePoolVolumesTypeSnapshotsGetRecursion1200Response](docs/StoragePoolVolumesTypeSnapshotsGetRecursion1200Response.md)
 - [StoragePoolsGet200Response](docs/StoragePoolsGet200Response.md)
 - [StoragePoolsGetRecursion1200Response](docs/StoragePoolsGetRecursion1200Response.md)
 - [StoragePoolsPost](docs/StoragePoolsPost.md)
 - [StorageVolume](docs/StorageVolume.md)
 - [StorageVolumeBackup](docs/StorageVolumeBackup.md)
 - [StorageVolumeBackupPost](docs/StorageVolumeBackupPost.md)
 - [StorageVolumeBackupsPost](docs/StorageVolumeBackupsPost.md)
 - [StorageVolumePost](docs/StorageVolumePost.md)
 - [StorageVolumePostTarget](docs/StorageVolumePostTarget.md)
 - [StorageVolumePut](docs/StorageVolumePut.md)
 - [StorageVolumeSnapshot](docs/StorageVolumeSnapshot.md)
 - [StorageVolumeSnapshotPost](docs/StorageVolumeSnapshotPost.md)
 - [StorageVolumeSnapshotPut](docs/StorageVolumeSnapshotPut.md)
 - [StorageVolumeSnapshotsPost](docs/StorageVolumeSnapshotsPost.md)
 - [StorageVolumeSource](docs/StorageVolumeSource.md)
 - [StorageVolumeState](docs/StorageVolumeState.md)
 - [StorageVolumeStateUsage](docs/StorageVolumeStateUsage.md)
 - [StorageVolumesPost](docs/StorageVolumesPost.md)
 - [Warning](docs/Warning.md)
 - [WarningGet200Response](docs/WarningGet200Response.md)
 - [WarningPut](docs/WarningPut.md)
 - [WarningsGet200Response](docs/WarningsGet200Response.md)
 - [WarningsGetRecursion1200Response](docs/WarningsGetRecursion1200Response.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization

Endpoints do not require authorization.

