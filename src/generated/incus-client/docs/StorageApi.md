# StorageApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**storagePoolBucketDelete**](#storagepoolbucketdelete) | **DELETE** /1.0/storage-pools/{name}/buckets/{bucketName} | Delete the storage bucket|
|[**storagePoolBucketGet**](#storagepoolbucketget) | **GET** /1.0/storage-pools/{poolName}/buckets/{bucketName} | Get the storage pool bucket|
|[**storagePoolBucketKeyDelete**](#storagepoolbucketkeydelete) | **DELETE** /1.0/storage-pools/{name}/buckets/{bucketName}/keys/{keyName} | Delete the storage bucket key|
|[**storagePoolBucketKeyGet**](#storagepoolbucketkeyget) | **GET** /1.0/storage-pools/{poolName}/buckets/{bucketName}/keys/{keyName} | Get the storage pool bucket key|
|[**storagePoolBucketKeyPost**](#storagepoolbucketkeypost) | **POST** /1.0/storage-pools/{poolName}/buckets/{bucketName}/keys | Add a storage pool bucket key.|
|[**storagePoolBucketKeyPut**](#storagepoolbucketkeyput) | **PUT** /1.0/storage-pools/{name}/buckets/{bucketName}/keys/{keyName} | Update the storage bucket key|
|[**storagePoolBucketKeysGet**](#storagepoolbucketkeysget) | **GET** /1.0/storage-pools/{poolName}/buckets/{bucketName}/keys | Get the storage pool bucket keys|
|[**storagePoolBucketKeysGetRecursion1**](#storagepoolbucketkeysgetrecursion1) | **GET** /1.0/storage-pools/{poolName}/buckets/{bucketName}/keys?recursion&#x3D;1 | Get the storage pool bucket keys|
|[**storagePoolBucketPatch**](#storagepoolbucketpatch) | **PATCH** /1.0/storage-pools/{name}/buckets/{bucketName} | Partially update the storage bucket.|
|[**storagePoolBucketPost**](#storagepoolbucketpost) | **POST** /1.0/storage-pools/{poolName}/buckets | Add a storage pool bucket.|
|[**storagePoolBucketPut**](#storagepoolbucketput) | **PUT** /1.0/storage-pools/{name}/buckets/{bucketName} | Update the storage bucket|
|[**storagePoolBucketsBackupDelete**](#storagepoolbucketsbackupdelete) | **DELETE** /1.0/storage-pools/{poolName}/buckets/{bucketName}/backups/{backupName} | Delete a storage bucket backup|
|[**storagePoolBucketsBackupExportGet**](#storagepoolbucketsbackupexportget) | **GET** /1.0/storage-pools/{poolName}/buckets/{bucketName}/backups/{backupName}/export | Get the raw backup file|
|[**storagePoolBucketsBackupGet**](#storagepoolbucketsbackupget) | **GET** /1.0/storage-pools/{poolName}/buckets/{bucketName}/backups/{backupName} | Get the storage bucket backup|
|[**storagePoolBucketsBackupPost**](#storagepoolbucketsbackuppost) | **POST** /1.0/storage-pools/{poolName}/buckets/{bucketName}/backups/{backupName} | Rename a storage bucket backup|
|[**storagePoolBucketsBackupsGet**](#storagepoolbucketsbackupsget) | **GET** /1.0/storage-pools/{poolName}/buckets/{bucketName}/backups | Get the storage bucket backups|
|[**storagePoolBucketsBackupsGetRecursion1**](#storagepoolbucketsbackupsgetrecursion1) | **GET** /1.0/storage-pools/{poolName}/buckets/{bucketName}/backups?recursion&#x3D;1 | Get the storage bucket backups|
|[**storagePoolBucketsBackupsPost**](#storagepoolbucketsbackupspost) | **POST** /1.0/storage-pools/{poolName}/buckets/{bucketName}/backups | Create a storage bucket backup|
|[**storagePoolBucketsGet**](#storagepoolbucketsget) | **GET** /1.0/storage-pools/{poolName}/buckets | Get the storage pool buckets|
|[**storagePoolBucketsGetRecursion1**](#storagepoolbucketsgetrecursion1) | **GET** /1.0/storage-pools/{poolName}/buckets?recursion&#x3D;1 | Get the storage pool buckets|
|[**storagePoolGet**](#storagepoolget) | **GET** /1.0/storage-pools/{poolName} | Get the storage pool|
|[**storagePoolPatch**](#storagepoolpatch) | **PATCH** /1.0/storage-pools/{poolName} | Partially update the storage pool|
|[**storagePoolPut**](#storagepoolput) | **PUT** /1.0/storage-pools/{poolName} | Update the storage pool|
|[**storagePoolResources**](#storagepoolresources) | **GET** /1.0/storage-pools/{name}/resources | Get storage pool resources information|
|[**storagePoolVolumeTypeDelete**](#storagepoolvolumetypedelete) | **DELETE** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName} | Delete the storage volume|
|[**storagePoolVolumeTypeGet**](#storagepoolvolumetypeget) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName} | Get the storage volume|
|[**storagePoolVolumeTypePatch**](#storagepoolvolumetypepatch) | **PATCH** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName} | Partially update the storage volume|
|[**storagePoolVolumeTypePost**](#storagepoolvolumetypepost) | **POST** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName} | Rename or move/migrate a storage volume|
|[**storagePoolVolumeTypePut**](#storagepoolvolumetypeput) | **PUT** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName} | Update the storage volume|
|[**storagePoolVolumeTypeSftpGet**](#storagepoolvolumetypesftpget) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/sftp | Get the storage volume SFTP connection|
|[**storagePoolVolumeTypeStateGet**](#storagepoolvolumetypestateget) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/state | Get the storage volume state|
|[**storagePoolVolumesGet**](#storagepoolvolumesget) | **GET** /1.0/storage-pools/{poolName}/volumes | Get the storage volumes|
|[**storagePoolVolumesGetRecursion1**](#storagepoolvolumesgetrecursion1) | **GET** /1.0/storage-pools/{poolName}/volumes?recursion&#x3D;1 | Get the storage volumes|
|[**storagePoolVolumesPost**](#storagepoolvolumespost) | **POST** /1.0/storage-pools/{poolName}/volumes | Add a storage volume|
|[**storagePoolVolumesTypeBackupDelete**](#storagepoolvolumestypebackupdelete) | **DELETE** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/backups/{backupName} | Delete a storage volume backup|
|[**storagePoolVolumesTypeBackupExportGet**](#storagepoolvolumestypebackupexportget) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/backups/{backupName}/export | Get the raw backup file|
|[**storagePoolVolumesTypeBackupGet**](#storagepoolvolumestypebackupget) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/backups/{backupName} | Get the storage volume backup|
|[**storagePoolVolumesTypeBackupPost**](#storagepoolvolumestypebackuppost) | **POST** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/backups/{backupName} | Rename a storage volume backup|
|[**storagePoolVolumesTypeBackupsGet**](#storagepoolvolumestypebackupsget) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/backups | Get the storage volume backups|
|[**storagePoolVolumesTypeBackupsGetRecursion1**](#storagepoolvolumestypebackupsgetrecursion1) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/backups?recursion&#x3D;1 | Get the storage volume backups|
|[**storagePoolVolumesTypeBackupsPost**](#storagepoolvolumestypebackupspost) | **POST** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/backups | Create a storage volume backup|
|[**storagePoolVolumesTypeGet**](#storagepoolvolumestypeget) | **GET** /1.0/storage-pools/{poolName}/volumes/{type} | Get the storage volumes|
|[**storagePoolVolumesTypeGetRecursion1**](#storagepoolvolumestypegetrecursion1) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}?recursion&#x3D;1 | Get the storage volumes|
|[**storagePoolVolumesTypePost**](#storagepoolvolumestypepost) | **POST** /1.0/storage-pools/{poolName}/volumes/{type} | Add a storage volume|
|[**storagePoolVolumesTypeSnapshotDelete**](#storagepoolvolumestypesnapshotdelete) | **DELETE** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/snapshots/{snapshotName} | Delete a storage volume snapshot|
|[**storagePoolVolumesTypeSnapshotGet**](#storagepoolvolumestypesnapshotget) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/snapshots/{snapshotName} | Get the storage volume snapshot|
|[**storagePoolVolumesTypeSnapshotPatch**](#storagepoolvolumestypesnapshotpatch) | **PATCH** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/snapshots/{snapshotName} | Partially update the storage volume snapshot|
|[**storagePoolVolumesTypeSnapshotPost**](#storagepoolvolumestypesnapshotpost) | **POST** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/snapshots/{snapshotName} | Rename a storage volume snapshot|
|[**storagePoolVolumesTypeSnapshotPut**](#storagepoolvolumestypesnapshotput) | **PUT** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/snapshots/{snapshotName} | Update the storage volume snapshot|
|[**storagePoolVolumesTypeSnapshotsGet**](#storagepoolvolumestypesnapshotsget) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/snapshots | Get the storage volume snapshots|
|[**storagePoolVolumesTypeSnapshotsGetRecursion1**](#storagepoolvolumestypesnapshotsgetrecursion1) | **GET** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/snapshots?recursion&#x3D;1 | Get the storage volume snapshots|
|[**storagePoolVolumesTypeSnapshotsPost**](#storagepoolvolumestypesnapshotspost) | **POST** /1.0/storage-pools/{poolName}/volumes/{type}/{volumeName}/snapshots | Create a storage volume snapshot|
|[**storagePoolsDelete**](#storagepoolsdelete) | **DELETE** /1.0/storage-pools/{poolName} | Delete the storage pool|
|[**storagePoolsGet**](#storagepoolsget) | **GET** /1.0/storage-pools | Get the storage pools|
|[**storagePoolsGetRecursion1**](#storagepoolsgetrecursion1) | **GET** /1.0/storage-pools?recursion&#x3D;1 | Get the storage pools|
|[**storagePoolsPost**](#storagepoolspost) | **POST** /1.0/storage-pools | Add a storage pool|

# **storagePoolBucketDelete**
> ServerPut200Response storagePoolBucketDelete()

Removes the storage bucket.

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolBucketDelete(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ServerPut200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empty sync response |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolBucketGet**
> StoragePoolBucketGet200Response storagePoolBucketGet()

Gets a specific storage pool bucket.

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolBucketGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**StoragePoolBucketGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Storage pool bucket |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolBucketKeyDelete**
> ServerPut200Response storagePoolBucketKeyDelete()

Removes the storage bucket key.

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolBucketKeyDelete(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ServerPut200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empty sync response |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolBucketKeyGet**
> StoragePoolBucketKeyGet200Response storagePoolBucketKeyGet()

Gets a specific storage pool bucket key.

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolBucketKeyGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**StoragePoolBucketKeyGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Storage pool bucket key |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolBucketKeyPost**
> storagePoolBucketKeyPost(bucket)

Creates a new storage pool bucket key.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    StorageBucketKeysPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let bucket: StorageBucketKeysPost; //Bucket
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolBucketKeyPost(
    bucket,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bucket** | **StorageBucketKeysPost**| Bucket | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolBucketKeyPut**
> ServerPut200Response storagePoolBucketKeyPut(storageBucket)

Updates the entire storage bucket key configuration.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    StorageBucketKeyPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let storageBucket: StorageBucketKeyPut; //Storage bucket key configuration
let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolBucketKeyPut(
    storageBucket,
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storageBucket** | **StorageBucketKeyPut**| Storage bucket key configuration | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ServerPut200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empty sync response |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**412** | Precondition Failed |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolBucketKeysGet**
> StoragePoolBucketKeysGet200Response storagePoolBucketKeysGet()

Returns a list of storage pool bucket keys (URLs).

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolBucketKeysGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**StoragePoolBucketKeysGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API endpoints |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolBucketKeysGetRecursion1**
> StoragePoolBucketKeysGetRecursion1200Response storagePoolBucketKeysGetRecursion1()

Returns a list of storage pool bucket keys (structs).

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolBucketKeysGetRecursion1(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**StoragePoolBucketKeysGetRecursion1200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API endpoints |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolBucketPatch**
> ServerPut200Response storagePoolBucketPatch(storageBucket)

Updates a subset of the storage bucket configuration.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    StorageBucketPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let storageBucket: StorageBucketPut; //Storage bucket configuration
let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolBucketPatch(
    storageBucket,
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storageBucket** | **StorageBucketPut**| Storage bucket configuration | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ServerPut200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empty sync response |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**412** | Precondition Failed |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolBucketPost**
> storagePoolBucketPost(bucket)

Creates a new storage pool bucket.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    StorageBucketsPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let bucket: StorageBucketsPost; //Bucket
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolBucketPost(
    bucket,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bucket** | **StorageBucketsPost**| Bucket | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolBucketPut**
> ServerPut200Response storagePoolBucketPut(storageBucket)

Updates the entire storage bucket configuration.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    StorageBucketPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let storageBucket: StorageBucketPut; //Storage bucket configuration
let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolBucketPut(
    storageBucket,
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storageBucket** | **StorageBucketPut**| Storage bucket configuration | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ServerPut200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empty sync response |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**412** | Precondition Failed |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolBucketsBackupDelete**
> ClusterMembersPost202Response storagePoolBucketsBackupDelete()

Deletes a new storage bucket backup.

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolBucketsBackupDelete(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ClusterMembersPost202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Operation |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolBucketsBackupExportGet**
> storagePoolBucketsBackupExportGet()

Download the raw backup file from the server.

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolBucketsBackupExportGet(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Raw backup data |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolBucketsBackupGet**
> StoragePoolBucketsBackupGet200Response storagePoolBucketsBackupGet()

Gets a specific storage bucket backup.

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolBucketsBackupGet(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**StoragePoolBucketsBackupGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Storage bucket backup |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolBucketsBackupPost**
> ClusterMembersPost202Response storagePoolBucketsBackupPost(bucketRename)

Renames a storage bucket backup.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    StorageBucketBackupPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let bucketRename: StorageBucketBackupPost; //Storage bucket backup
let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolBucketsBackupPost(
    bucketRename,
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bucketRename** | **StorageBucketBackupPost**| Storage bucket backup | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ClusterMembersPost202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Operation |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolBucketsBackupsGet**
> StoragePoolBucketsBackupsGet200Response storagePoolBucketsBackupsGet()

Returns a list of storage bucket backups (URLs).

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolBucketsBackupsGet(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**StoragePoolBucketsBackupsGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API endpoints |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolBucketsBackupsGetRecursion1**
> StoragePoolBucketsBackupsGetRecursion1200Response storagePoolBucketsBackupsGetRecursion1()

Returns a list of storage bucket backups (structs).

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolBucketsBackupsGetRecursion1(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**StoragePoolBucketsBackupsGetRecursion1200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API endpoints |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolBucketsBackupsPost**
> ClusterMembersPost202Response storagePoolBucketsBackupsPost(bucket)

Creates a new storage bucket backup.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    StorageBucketBackupsPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let bucket: StorageBucketBackupsPost; //Storage bucket backup
let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolBucketsBackupsPost(
    bucket,
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bucket** | **StorageBucketBackupsPost**| Storage bucket backup | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ClusterMembersPost202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Operation |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolBucketsGet**
> StoragePoolBucketsGet200Response storagePoolBucketsGet()

Returns a list of storage pool buckets (URLs).

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let allProjects: boolean; //Retrieve storage pool buckets from all projects (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolBucketsGet(
    project,
    allProjects,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve storage pool buckets from all projects | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**StoragePoolBucketsGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API endpoints |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolBucketsGetRecursion1**
> StoragePoolBucketsGetRecursion1200Response storagePoolBucketsGetRecursion1()

Returns a list of storage pool buckets (structs).

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let allProjects: boolean; //Retrieve storage pool buckets from all projects (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolBucketsGetRecursion1(
    project,
    allProjects,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve storage pool buckets from all projects | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**StoragePoolBucketsGetRecursion1200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API endpoints |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolGet**
> StoragePoolGet200Response storagePoolGet()

Gets a specific storage pool.

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolGet(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**StoragePoolGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Storage pool |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolPatch**
> ServerPut200Response storagePoolPatch(storagePool)

Updates a subset of the storage pool configuration.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    StoragePoolPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let storagePool: StoragePoolPut; //Storage pool configuration
let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolPatch(
    storagePool,
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storagePool** | **StoragePoolPut**| Storage pool configuration | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ServerPut200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empty sync response |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**412** | Precondition Failed |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolPut**
> ServerPut200Response storagePoolPut(storagePool)

Updates the entire storage pool configuration.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    StoragePoolPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let storagePool: StoragePoolPut; //Storage pool configuration
let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolPut(
    storagePool,
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storagePool** | **StoragePoolPut**| Storage pool configuration | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ServerPut200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empty sync response |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**412** | Precondition Failed |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolResources**
> StoragePoolResources200Response storagePoolResources()

Gets the usage information for the storage pool.

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolResources(
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**StoragePoolResources200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Hardware resources |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumeTypeDelete**
> ServerPut200Response storagePoolVolumeTypeDelete()

Removes the storage volume.

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumeTypeDelete(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ServerPut200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empty sync response |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumeTypeGet**
> StoragePoolVolumeTypeGet200Response storagePoolVolumeTypeGet()

Gets a specific storage volume.

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumeTypeGet(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**StoragePoolVolumeTypeGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Storage volume |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumeTypePatch**
> ServerPut200Response storagePoolVolumeTypePatch(storageVolume)

Updates a subset of the storage volume configuration.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    StorageVolumePut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let storageVolume: StorageVolumePut; //Storage volume configuration
let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumeTypePatch(
    storageVolume,
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storageVolume** | **StorageVolumePut**| Storage volume configuration | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ServerPut200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empty sync response |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**412** | Precondition Failed |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumeTypePost**
> ClusterMembersPost202Response storagePoolVolumeTypePost()

Renames, moves a storage volume between pools or migrates an instance to another server.  The returned operation metadata will vary based on what\'s requested. For rename or move within the same server, this is a simple background operation with progress data. For migration, in the push case, this will similarly be a background operation with progress data, for the pull case, it will be a websocket operation with a number of secrets to be passed to the target server.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    StorageVolumePost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)
let migration: StorageVolumePost; //Migration request (optional)

const { status, data } = await apiInstance.storagePoolVolumeTypePost(
    project,
    target,
    migration
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **migration** | **StorageVolumePost**| Migration request | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ClusterMembersPost202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Operation |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumeTypePut**
> ServerPut200Response storagePoolVolumeTypePut(storageVolume)

Updates the entire storage volume configuration.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    StorageVolumePut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let storageVolume: StorageVolumePut; //Storage volume configuration
let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumeTypePut(
    storageVolume,
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storageVolume** | **StorageVolumePut**| Storage volume configuration | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ServerPut200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empty sync response |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**412** | Precondition Failed |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumeTypeSftpGet**
> storagePoolVolumeTypeSftpGet()

Upgrades the request to an SFTP connection of the storage volume\'s filesystem.

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

const { status, data } = await apiInstance.storagePoolVolumeTypeSftpGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**101** | Switching protocols to SFTP |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumeTypeStateGet**
> StoragePoolVolumeTypeStateGet200Response storagePoolVolumeTypeStateGet()

Gets a specific storage volume state (usage data).

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumeTypeStateGet(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**StoragePoolVolumeTypeStateGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Storage pool |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumesGet**
> StoragePoolVolumesGet200Response storagePoolVolumesGet()

Returns a list of storage volumes (URLs).

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumesGet(
    project,
    target,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**StoragePoolVolumesGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API endpoints |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumesGetRecursion1**
> StoragePoolVolumesTypeGetRecursion1200Response storagePoolVolumesGetRecursion1()

Returns a list of storage volumes (structs).

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumesGetRecursion1(
    project,
    target,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**StoragePoolVolumesTypeGetRecursion1200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API endpoints |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumesPost**
> ServerPut200Response storagePoolVolumesPost(volume)

Creates a new storage volume. Will return an empty sync response on simple volume creation but an operation on copy or migration.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    StorageVolumesPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let volume: StorageVolumesPost; //Storage volume
let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumesPost(
    volume,
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **volume** | **StorageVolumesPost**| Storage volume | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ServerPut200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empty sync response |  -  |
|**202** | Operation |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumesTypeBackupDelete**
> ClusterMembersPost202Response storagePoolVolumesTypeBackupDelete()

Deletes a new storage volume backup.

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumesTypeBackupDelete(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ClusterMembersPost202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Operation |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumesTypeBackupExportGet**
> storagePoolVolumesTypeBackupExportGet()

Download the raw backup file from the server.

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumesTypeBackupExportGet(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Raw backup data |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumesTypeBackupGet**
> StoragePoolVolumesTypeBackupGet200Response storagePoolVolumesTypeBackupGet()

Gets a specific storage volume backup.

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumesTypeBackupGet(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**StoragePoolVolumesTypeBackupGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Storage volume backup |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumesTypeBackupPost**
> ClusterMembersPost202Response storagePoolVolumesTypeBackupPost(volumeRename)

Renames a storage volume backup.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    StorageVolumeSnapshotPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let volumeRename: StorageVolumeSnapshotPost; //Storage volume backup
let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumesTypeBackupPost(
    volumeRename,
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **volumeRename** | **StorageVolumeSnapshotPost**| Storage volume backup | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ClusterMembersPost202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Operation |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumesTypeBackupsGet**
> StoragePoolVolumesTypeBackupsGet200Response storagePoolVolumesTypeBackupsGet()

Returns a list of storage volume backups (URLs).

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumesTypeBackupsGet(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**StoragePoolVolumesTypeBackupsGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API endpoints |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumesTypeBackupsGetRecursion1**
> StoragePoolVolumesTypeBackupsGetRecursion1200Response storagePoolVolumesTypeBackupsGetRecursion1()

Returns a list of storage volume backups (structs).

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumesTypeBackupsGetRecursion1(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**StoragePoolVolumesTypeBackupsGetRecursion1200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API endpoints |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumesTypeBackupsPost**
> ClusterMembersPost202Response storagePoolVolumesTypeBackupsPost(volume)

Creates a new storage volume backup.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    StorageVolumeBackupsPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let volume: StorageVolumeBackupsPost; //Storage volume backup
let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumesTypeBackupsPost(
    volume,
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **volume** | **StorageVolumeBackupsPost**| Storage volume backup | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ClusterMembersPost202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Operation |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumesTypeGet**
> StoragePoolVolumesTypeGet200Response storagePoolVolumesTypeGet()

Returns a list of storage volumes (URLs) (type specific endpoint).

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumesTypeGet(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**StoragePoolVolumesTypeGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API endpoints |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumesTypeGetRecursion1**
> StoragePoolVolumesTypeGetRecursion1200Response storagePoolVolumesTypeGetRecursion1()

Returns a list of storage volumes (structs) (type specific endpoint).

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumesTypeGetRecursion1(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**StoragePoolVolumesTypeGetRecursion1200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API endpoints |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumesTypePost**
> ServerPut200Response storagePoolVolumesTypePost(volume)

Creates a new storage volume (type specific endpoint). Will return an empty sync response on simple volume creation but an operation on copy or migration.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    StorageVolumesPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let volume: StorageVolumesPost; //Storage volume
let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumesTypePost(
    volume,
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **volume** | **StorageVolumesPost**| Storage volume | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ServerPut200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empty sync response |  -  |
|**202** | Operation |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumesTypeSnapshotDelete**
> ClusterMembersPost202Response storagePoolVolumesTypeSnapshotDelete()

Deletes a new storage volume snapshot.

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumesTypeSnapshotDelete(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ClusterMembersPost202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Operation |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumesTypeSnapshotGet**
> StoragePoolVolumesTypeSnapshotGet200Response storagePoolVolumesTypeSnapshotGet()

Gets a specific storage volume snapshot.

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumesTypeSnapshotGet(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**StoragePoolVolumesTypeSnapshotGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Storage volume snapshot |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumesTypeSnapshotPatch**
> ServerPut200Response storagePoolVolumesTypeSnapshotPatch(storageVolumeSnapshot)

Updates a subset of the storage volume snapshot configuration.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    StorageVolumeSnapshotPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let storageVolumeSnapshot: StorageVolumeSnapshotPut; //Storage volume snapshot configuration
let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumesTypeSnapshotPatch(
    storageVolumeSnapshot,
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storageVolumeSnapshot** | **StorageVolumeSnapshotPut**| Storage volume snapshot configuration | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ServerPut200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empty sync response |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**412** | Precondition Failed |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumesTypeSnapshotPost**
> ClusterMembersPost202Response storagePoolVolumesTypeSnapshotPost(volumeRename)

Renames a storage volume snapshot.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    StorageVolumeSnapshotPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let volumeRename: StorageVolumeSnapshotPost; //Storage volume snapshot
let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumesTypeSnapshotPost(
    volumeRename,
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **volumeRename** | **StorageVolumeSnapshotPost**| Storage volume snapshot | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ClusterMembersPost202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Operation |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumesTypeSnapshotPut**
> ServerPut200Response storagePoolVolumesTypeSnapshotPut(storageVolumeSnapshot)

Updates the entire storage volume snapshot configuration.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    StorageVolumeSnapshotPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let storageVolumeSnapshot: StorageVolumeSnapshotPut; //Storage volume snapshot configuration
let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumesTypeSnapshotPut(
    storageVolumeSnapshot,
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storageVolumeSnapshot** | **StorageVolumeSnapshotPut**| Storage volume snapshot configuration | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ServerPut200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empty sync response |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**412** | Precondition Failed |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumesTypeSnapshotsGet**
> StoragePoolVolumesTypeSnapshotsGet200Response storagePoolVolumesTypeSnapshotsGet()

Returns a list of storage volume snapshots (URLs).

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumesTypeSnapshotsGet(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**StoragePoolVolumesTypeSnapshotsGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API endpoints |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumesTypeSnapshotsGetRecursion1**
> StoragePoolVolumesTypeSnapshotsGetRecursion1200Response storagePoolVolumesTypeSnapshotsGetRecursion1()

Returns a list of storage volume snapshots (structs).

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumesTypeSnapshotsGetRecursion1(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**StoragePoolVolumesTypeSnapshotsGetRecursion1200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API endpoints |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolVolumesTypeSnapshotsPost**
> ClusterMembersPost202Response storagePoolVolumesTypeSnapshotsPost(volume)

Creates a new storage volume snapshot.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    StorageVolumeSnapshotsPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let volume: StorageVolumeSnapshotsPost; //Storage volume snapshot
let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolVolumesTypeSnapshotsPost(
    volume,
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **volume** | **StorageVolumeSnapshotsPost**| Storage volume snapshot | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ClusterMembersPost202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Operation |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolsDelete**
> ServerPut200Response storagePoolsDelete()

Removes the storage pool.

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolsDelete(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**ServerPut200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empty sync response |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolsGet**
> StoragePoolsGet200Response storagePoolsGet()

Returns a list of storage pools (URLs).

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolsGet(
    project,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**StoragePoolsGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API endpoints |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolsGetRecursion1**
> StoragePoolsGetRecursion1200Response storagePoolsGetRecursion1()

Returns a list of storage pools (structs).

### Example

```typescript
import {
    StorageApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolsGetRecursion1(
    project,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**StoragePoolsGetRecursion1200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API endpoints |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storagePoolsPost**
> ServerPut200Response storagePoolsPost(storage)

Creates a new storage pool. When clustered, storage pools require individual POST for each cluster member prior to a global POST.

### Example

```typescript
import {
    StorageApi,
    Configuration,
    StoragePoolsPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let storage: StoragePoolsPost; //Storage pool
let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.storagePoolsPost(
    storage,
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storage** | **StoragePoolsPost**| Storage pool | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ServerPut200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empty sync response |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

