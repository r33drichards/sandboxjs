# InstancesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**instanceAccess**](#instanceaccess) | **GET** /1.0/instances/{name}/access | Get who has access to an instance|
|[**instanceBackupDelete**](#instancebackupdelete) | **DELETE** /1.0/instances/{name}/backups/{backup} | Delete a backup|
|[**instanceBackupExport**](#instancebackupexport) | **GET** /1.0/instances/{name}/backups/{backup}/export | Get the raw backup file(s)|
|[**instanceBackupGet**](#instancebackupget) | **GET** /1.0/instances/{name}/backups/{backup} | Get the backup|
|[**instanceBackupPost**](#instancebackuppost) | **POST** /1.0/instances/{name}/backups/{backup} | Rename a backup|
|[**instanceBackupsGet**](#instancebackupsget) | **GET** /1.0/instances/{name}/backups | Get the backups|
|[**instanceBackupsGetRecursion1**](#instancebackupsgetrecursion1) | **GET** /1.0/instances/{name}/backups?recursion&#x3D;1 | Get the backups|
|[**instanceBackupsPost**](#instancebackupspost) | **POST** /1.0/instances/{name}/backups | Create a backup|
|[**instanceConsoleDelete**](#instanceconsoledelete) | **DELETE** /1.0/instances/{name}/console | Clear the console log|
|[**instanceConsoleGet**](#instanceconsoleget) | **GET** /1.0/instances/{name}/console | Get console output|
|[**instanceConsolePost**](#instanceconsolepost) | **POST** /1.0/instances/{name}/console | Connect to console|
|[**instanceDebugMemoryGet**](#instancedebugmemoryget) | **GET** /1.0/instances/{name}/debug/memory | Get memory debug information of an instance|
|[**instanceDelete**](#instancedelete) | **DELETE** /1.0/instances/{name} | Delete an instance|
|[**instanceExecOutputDelete**](#instanceexecoutputdelete) | **DELETE** /1.0/instances/{name}/logs/exec-output/{filename} | Delete the exec record-output file|
|[**instanceExecOutputGet**](#instanceexecoutputget) | **GET** /1.0/instances/{name}/logs/exec-output/{filename} | Get the exec-output log file|
|[**instanceExecOutputsGet**](#instanceexecoutputsget) | **GET** /1.0/instances/{name}/logs/exec-output | Get the exec record-output files|
|[**instanceExecPost**](#instanceexecpost) | **POST** /1.0/instances/{name}/exec | Run a command|
|[**instanceFilesDelete**](#instancefilesdelete) | **DELETE** /1.0/instances/{name}/files | Delete a file|
|[**instanceFilesGet**](#instancefilesget) | **GET** /1.0/instances/{name}/files | Get a file|
|[**instanceFilesHead**](#instancefileshead) | **HEAD** /1.0/instances/{name}/files | Get metadata for a file|
|[**instanceFilesPost**](#instancefilespost) | **POST** /1.0/instances/{name}/files | Create or replace a file|
|[**instanceGet**](#instanceget) | **GET** /1.0/instances/{name} | Get the instance|
|[**instanceGetRecursion1**](#instancegetrecursion1) | **GET** /1.0/instances/{name}?recursion&#x3D;1 | Get the instance|
|[**instanceLogDelete**](#instancelogdelete) | **DELETE** /1.0/instances/{name}/logs/{filename} | Delete the log file|
|[**instanceLogGet**](#instancelogget) | **GET** /1.0/instances/{name}/logs/{filename} | Get the log file|
|[**instanceLogsGet**](#instancelogsget) | **GET** /1.0/instances/{name}/logs | Get the log files|
|[**instanceMetadataGet**](#instancemetadataget) | **GET** /1.0/instances/{name}/metadata | Get the instance image metadata|
|[**instanceMetadataPatch**](#instancemetadatapatch) | **PATCH** /1.0/instances/{name}/metadata | Partially update the image metadata|
|[**instanceMetadataPut**](#instancemetadataput) | **PUT** /1.0/instances/{name}/metadata | Update the image metadata|
|[**instanceMetadataTemplatesDelete**](#instancemetadatatemplatesdelete) | **DELETE** /1.0/instances/{name}/metadata/templates | Delete a template file|
|[**instanceMetadataTemplatesGet**](#instancemetadatatemplatesget) | **GET** /1.0/instances/{name}/metadata/templates | Get the template file names or a specific|
|[**instanceMetadataTemplatesPost**](#instancemetadatatemplatespost) | **POST** /1.0/instances/{name}/metadata/templates | Create or replace a template file|
|[**instancePatch**](#instancepatch) | **PATCH** /1.0/instances/{name} | Partially update the instance|
|[**instancePost**](#instancepost) | **POST** /1.0/instances/{name} | Rename or move/migrate an instance|
|[**instancePut**](#instanceput) | **PUT** /1.0/instances/{name} | Update the instance|
|[**instanceRebuildPost**](#instancerebuildpost) | **POST** /1.0/instances/{name}/rebuild | Rebuild an instance|
|[**instanceSftp**](#instancesftp) | **GET** /1.0/instances/{name}/sftp | Get the instance SFTP connection|
|[**instanceSnapshotDelete**](#instancesnapshotdelete) | **DELETE** /1.0/instances/{name}/snapshots/{snapshot} | Delete a snapshot|
|[**instanceSnapshotGet**](#instancesnapshotget) | **GET** /1.0/instances/{name}/snapshots/{snapshot} | Get the snapshot|
|[**instanceSnapshotPatch**](#instancesnapshotpatch) | **PATCH** /1.0/instances/{name}/snapshots/{snapshot} | Partially update snapshot|
|[**instanceSnapshotPost**](#instancesnapshotpost) | **POST** /1.0/instances/{name}/snapshots/{snapshot} | Rename or move/migrate a snapshot|
|[**instanceSnapshotPut**](#instancesnapshotput) | **PUT** /1.0/instances/{name}/snapshots/{snapshot} | Update snapshot|
|[**instanceSnapshotsGet**](#instancesnapshotsget) | **GET** /1.0/instances/{name}/snapshots | Get the snapshots|
|[**instanceSnapshotsGetRecursion1**](#instancesnapshotsgetrecursion1) | **GET** /1.0/instances/{name}/snapshots?recursion&#x3D;1 | Get the snapshots|
|[**instanceSnapshotsPost**](#instancesnapshotspost) | **POST** /1.0/instances/{name}/snapshots | Create a snapshot|
|[**instanceStateGet**](#instancestateget) | **GET** /1.0/instances/{name}/state | Get the runtime state|
|[**instanceStatePut**](#instancestateput) | **PUT** /1.0/instances/{name}/state | Change the state|
|[**instancesGet**](#instancesget) | **GET** /1.0/instances | Get the instances|
|[**instancesGetRecursion1**](#instancesgetrecursion1) | **GET** /1.0/instances?recursion&#x3D;1 | Get the instances|
|[**instancesGetRecursion2**](#instancesgetrecursion2) | **GET** /1.0/instances?recursion&#x3D;2 | Get the instances|
|[**instancesPost**](#instancespost) | **POST** /1.0/instances | Create a new instance|
|[**instancesPut**](#instancesput) | **PUT** /1.0/instances | Bulk instance state update|

# **instanceAccess**
> InstanceAccess200Response instanceAccess()

Gets the access information for the instance.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceAccess(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**InstanceAccess200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Access |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceBackupDelete**
> ClusterMembersPost202Response instanceBackupDelete()

Deletes the instance backup.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceBackupDelete(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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

# **instanceBackupExport**
> instanceBackupExport()

Download the raw backup file(s) from the server.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceBackupExport(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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
|**200** | Raw image data |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceBackupGet**
> InstanceBackupGet200Response instanceBackupGet()

Gets a specific instance backup.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceBackupGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**InstanceBackupGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Instance backup |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceBackupPost**
> ClusterMembersPost202Response instanceBackupPost()

Renames an instance backup.

### Example

```typescript
import {
    InstancesApi,
    Configuration,
    InstanceBackupPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let backup: InstanceBackupPost; //Backup rename (optional)

const { status, data } = await apiInstance.instanceBackupPost(
    project,
    backup
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **backup** | **InstanceBackupPost**| Backup rename | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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

# **instanceBackupsGet**
> InstanceBackupsGet200Response instanceBackupsGet()

Returns a list of instance backups (URLs).

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceBackupsGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**InstanceBackupsGet200Response**

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

# **instanceBackupsGetRecursion1**
> InstanceBackupsGetRecursion1200Response instanceBackupsGetRecursion1()

Returns a list of instance backups (structs).

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceBackupsGetRecursion1(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**InstanceBackupsGetRecursion1200Response**

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

# **instanceBackupsPost**
> ClusterMembersPost202Response instanceBackupsPost()

Creates a new backup.

### Example

```typescript
import {
    InstancesApi,
    Configuration,
    InstanceBackupsPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let backup: InstanceBackupsPost; //Backup request (optional)

const { status, data } = await apiInstance.instanceBackupsPost(
    project,
    backup
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **backup** | **InstanceBackupsPost**| Backup request | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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

# **instanceConsoleDelete**
> ServerPut200Response instanceConsoleDelete()

Clears the console log buffer.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceConsoleDelete(
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
|**404** | Not found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceConsoleGet**
> instanceConsoleGet()

Gets the console output for the instance either as text log or as vga screendump.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let type: 'log' | 'vga'; //Console type (optional) (default to 'log')

const { status, data } = await apiInstance.instanceConsoleGet(
    project,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **type** | [**&#39;log&#39; | &#39;vga&#39;**]**Array<&#39;log&#39; &#124; &#39;vga&#39;>** | Console type | (optional) defaults to 'log'|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Console output either as raw console log or as vga screendump in PNG format depending on the &#x60;type&#x60; parameter provided with the request.  |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceConsolePost**
> ClusterMembersPost202Response instanceConsolePost()

Connects to the console of an instance.  The returned operation metadata will contain two websockets, one for data and one for control.

### Example

```typescript
import {
    InstancesApi,
    Configuration,
    InstanceConsolePost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let console: InstanceConsolePost; //Console request (optional)

const { status, data } = await apiInstance.instanceConsolePost(
    project,
    console
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **console** | **InstanceConsolePost**| Console request | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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

# **instanceDebugMemoryGet**
> instanceDebugMemoryGet()

Returns memory debug information of a running instance. Only supported for VMs.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let format: string; //Memory dump format (optional) (default to undefined)

const { status, data } = await apiInstance.instanceDebugMemoryGet(
    project,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **format** | [**string**] | Memory dump format | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceDelete**
> ClusterMembersPost202Response instanceDelete()

Deletes a specific instance.  This also deletes anything owned by the instance such as snapshots and backups.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceDelete(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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

# **instanceExecOutputDelete**
> ServerPut200Response instanceExecOutputDelete()

Removes the exec record-output file.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceExecOutputDelete(
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
|**404** | Not found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceExecOutputGet**
> instanceExecOutputGet()

Gets the exec-output file.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceExecOutputGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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
|**200** | Raw file |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceExecOutputsGet**
> InstanceExecOutputsGet200Response instanceExecOutputsGet()

Returns a list of exec record-output files (URLs).

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceExecOutputsGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**InstanceExecOutputsGet200Response**

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
|**404** | Not found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceExecPost**
> ClusterMembersPost202Response instanceExecPost()

Executes a command inside an instance.  The returned operation metadata will contain either 2 or 4 websockets. In non-interactive mode, you\'ll get one websocket for each of stdin, stdout and stderr. In interactive mode, a single bi-directional websocket is used for stdin and stdout/stderr.  An additional \"control\" socket is always added on top which can be used for out of band communications. This allows sending signals and window sizing information through.

### Example

```typescript
import {
    InstancesApi,
    Configuration,
    InstanceExecPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let exec: InstanceExecPost; //Exec request (optional)

const { status, data } = await apiInstance.instanceExecPost(
    project,
    exec
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **exec** | **InstanceExecPost**| Exec request | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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

# **instanceFilesDelete**
> ServerPut200Response instanceFilesDelete()

Removes the file.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let path: string; //Path to the file (optional) (default to undefined)
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceFilesDelete(
    path,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **path** | [**string**] | Path to the file | (optional) defaults to undefined|
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
|**404** | Not found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceFilesGet**
> instanceFilesGet()

Gets the file content. If it\'s a directory, a json list of files will be returned instead.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let path: string; //Path to the file (optional) (default to undefined)
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceFilesGet(
    path,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **path** | [**string**] | Path to the file | (optional) defaults to undefined|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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
|**200** | Raw file or directory listing |  * X-Incus-modified - Last modified date <br>  * X-Incus-type - Type of file (file, symlink or directory) <br>  * X-Incus-gid - File owner GID <br>  * X-Incus-mode - Mode mask <br>  * X-Incus-uid - File owner UID <br>  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceFilesHead**
> instanceFilesHead()

Gets the file or directory metadata.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let path: string; //Path to the file (optional) (default to undefined)
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceFilesHead(
    path,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **path** | [**string**] | Path to the file | (optional) defaults to undefined|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Raw file or directory listing |  * X-Incus-modified - Last modified date <br>  * X-Incus-type - Type of file (file, symlink or directory) <br>  * X-Incus-gid - File owner GID <br>  * X-Incus-mode - Mode mask <br>  * X-Incus-uid - File owner UID <br>  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceFilesPost**
> ServerPut200Response instanceFilesPost()

Creates a new file in the instance.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let path: string; //Path to the file (optional) (default to undefined)
let project: string; //Project name (optional) (default to undefined)
let xIncusUid: any; //File owner UID (optional) (default to undefined)
let xIncusGid: any; //File owner GID (optional) (default to undefined)
let xIncusMode: any; //File mode (optional) (default to undefined)
let xIncusType: any; //Type of file (file, symlink or directory) (optional) (default to undefined)
let xIncusWrite: any; //Write mode (overwrite or append) (optional) (default to undefined)

const { status, data } = await apiInstance.instanceFilesPost(
    path,
    project,
    xIncusUid,
    xIncusGid,
    xIncusMode,
    xIncusType,
    xIncusWrite
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **path** | [**string**] | Path to the file | (optional) defaults to undefined|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **xIncusUid** | **any** | File owner UID | (optional) defaults to undefined|
| **xIncusGid** | **any** | File owner GID | (optional) defaults to undefined|
| **xIncusMode** | **any** | File mode | (optional) defaults to undefined|
| **xIncusType** | **any** | Type of file (file, symlink or directory) | (optional) defaults to undefined|
| **xIncusWrite** | **any** | Write mode (overwrite or append) | (optional) defaults to undefined|


### Return type

**ServerPut200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empty sync response |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceGet**
> InstanceGet200Response instanceGet()

Gets a specific instance (basic struct).

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**InstanceGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Instance |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceGetRecursion1**
> InstanceGet200Response instanceGetRecursion1()

Gets a specific instance (full struct).  recursion=1 also includes information about state, snapshots and backups.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceGetRecursion1(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**InstanceGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Instance |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceLogDelete**
> ServerPut200Response instanceLogDelete()

Removes the log file.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceLogDelete(
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
|**404** | Not found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceLogGet**
> instanceLogGet()

Gets the log file.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceLogGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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
|**200** | Raw file |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceLogsGet**
> InstanceLogsGet200Response instanceLogsGet()

Returns a list of log files (URLs).

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceLogsGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**InstanceLogsGet200Response**

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
|**404** | Not found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceMetadataGet**
> InstanceMetadataGet200Response instanceMetadataGet()

Gets the image metadata for the instance.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceMetadataGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**InstanceMetadataGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Image metadata |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceMetadataPatch**
> ServerPut200Response instanceMetadataPatch(metadata)

Updates a subset of the instance image metadata.

### Example

```typescript
import {
    InstancesApi,
    Configuration,
    ImageMetadata
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let metadata: ImageMetadata; //Image metadata
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceMetadataPatch(
    metadata,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **metadata** | **ImageMetadata**| Image metadata | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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

# **instanceMetadataPut**
> ServerPut200Response instanceMetadataPut(metadata)

Updates the instance image metadata.

### Example

```typescript
import {
    InstancesApi,
    Configuration,
    ImageMetadata
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let metadata: ImageMetadata; //Image metadata
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceMetadataPut(
    metadata,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **metadata** | **ImageMetadata**| Image metadata | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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

# **instanceMetadataTemplatesDelete**
> ServerPut200Response instanceMetadataTemplatesDelete()

Removes the template file.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let path: string; //Template name (optional) (default to undefined)
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceMetadataTemplatesDelete(
    path,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **path** | [**string**] | Template name | (optional) defaults to undefined|
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
|**404** | Not found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceMetadataTemplatesGet**
> instanceMetadataTemplatesGet()

If no path specified, returns a list of template file names. If a path is specified, returns the file content.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let path: string; //Template name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceMetadataTemplatesGet(
    project,
    path
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **path** | [**string**] | Template name | (optional) defaults to undefined|


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
|**200** | Raw template file or file listing |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceMetadataTemplatesPost**
> ServerPut200Response instanceMetadataTemplatesPost()

Creates a new image template file for the instance.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let path: string; //Template name (optional) (default to undefined)
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceMetadataTemplatesPost(
    path,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **path** | [**string**] | Template name | (optional) defaults to undefined|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**ServerPut200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empty sync response |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instancePatch**
> ServerPut200Response instancePatch()

Updates a subset of the instance configuration

### Example

```typescript
import {
    InstancesApi,
    Configuration,
    InstancePut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let instance: InstancePut; //Update request (optional)

const { status, data } = await apiInstance.instancePatch(
    project,
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **InstancePut**| Update request | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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

# **instancePost**
> ClusterMembersPost202Response instancePost()

Renames, moves an instance between pools or migrates an instance to another server.  The returned operation metadata will vary based on what\'s requested. For rename or move within the same server, this is a simple background operation with progress data. For migration, in the push case, this will similarly be a background operation with progress data, for the pull case, it will be a websocket operation with a number of secrets to be passed to the target server.

### Example

```typescript
import {
    InstancesApi,
    Configuration,
    InstancePost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let migration: InstancePost; //Migration request (optional)

const { status, data } = await apiInstance.instancePost(
    project,
    migration
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **migration** | **InstancePost**| Migration request | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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

# **instancePut**
> ClusterMembersPost202Response instancePut()

Updates the instance configuration or trigger a snapshot restore.

### Example

```typescript
import {
    InstancesApi,
    Configuration,
    InstancePut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let instance: InstancePut; //Update request (optional)

const { status, data } = await apiInstance.instancePut(
    project,
    instance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **InstancePut**| Update request | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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

# **instanceRebuildPost**
> ServerPut200Response instanceRebuildPost(instance)

Rebuild an instance using an alternate image or as empty.

### Example

```typescript
import {
    InstancesApi,
    Configuration,
    InstanceRebuildPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let instance: InstanceRebuildPost; //InstanceRebuild request
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceRebuildPost(
    instance,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **instance** | **InstanceRebuildPost**| InstanceRebuild request | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**ServerPut200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empty sync response |  -  |
|**202** | Operation |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceSftp**
> instanceSftp()

Upgrades the request to an SFTP connection of the instance\'s filesystem.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

const { status, data } = await apiInstance.instanceSftp();
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

# **instanceSnapshotDelete**
> ClusterMembersPost202Response instanceSnapshotDelete()

Deletes the instance snapshot.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceSnapshotDelete(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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

# **instanceSnapshotGet**
> InstanceSnapshotGet200Response instanceSnapshotGet()

Gets a specific instance snapshot.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceSnapshotGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**InstanceSnapshotGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Instance snapshot |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceSnapshotPatch**
> ClusterMembersPost202Response instanceSnapshotPatch()

Updates a subset of the snapshot config.

### Example

```typescript
import {
    InstancesApi,
    Configuration,
    InstanceSnapshotPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let snapshot: InstanceSnapshotPut; //Snapshot update (optional)

const { status, data } = await apiInstance.instanceSnapshotPatch(
    project,
    snapshot
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **snapshot** | **InstanceSnapshotPut**| Snapshot update | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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

# **instanceSnapshotPost**
> ClusterMembersPost202Response instanceSnapshotPost()

Renames or migrates an instance snapshot to another server.  The returned operation metadata will vary based on what\'s requested. For rename or move within the same server, this is a simple background operation with progress data. For migration, in the push case, this will similarly be a background operation with progress data, for the pull case, it will be a websocket operation with a number of secrets to be passed to the target server.

### Example

```typescript
import {
    InstancesApi,
    Configuration,
    InstanceSnapshotPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let snapshot: InstanceSnapshotPost; //Snapshot migration (optional)

const { status, data } = await apiInstance.instanceSnapshotPost(
    project,
    snapshot
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **snapshot** | **InstanceSnapshotPost**| Snapshot migration | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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

# **instanceSnapshotPut**
> ClusterMembersPost202Response instanceSnapshotPut()

Updates the snapshot config.

### Example

```typescript
import {
    InstancesApi,
    Configuration,
    InstanceSnapshotPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let snapshot: InstanceSnapshotPut; //Snapshot update (optional)

const { status, data } = await apiInstance.instanceSnapshotPut(
    project,
    snapshot
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **snapshot** | **InstanceSnapshotPut**| Snapshot update | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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

# **instanceSnapshotsGet**
> InstanceSnapshotsGet200Response instanceSnapshotsGet()

Returns a list of instance snapshots (URLs).

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceSnapshotsGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**InstanceSnapshotsGet200Response**

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

# **instanceSnapshotsGetRecursion1**
> InstanceSnapshotsGetRecursion1200Response instanceSnapshotsGetRecursion1()

Returns a list of instance snapshots (structs).

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceSnapshotsGetRecursion1(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**InstanceSnapshotsGetRecursion1200Response**

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

# **instanceSnapshotsPost**
> ClusterMembersPost202Response instanceSnapshotsPost()

Creates a new snapshot.

### Example

```typescript
import {
    InstancesApi,
    Configuration,
    InstanceSnapshotsPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let snapshot: InstanceSnapshotsPost; //Snapshot request (optional)

const { status, data } = await apiInstance.instanceSnapshotsPost(
    project,
    snapshot
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **snapshot** | **InstanceSnapshotsPost**| Snapshot request | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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

# **instanceStateGet**
> InstanceStateGet200Response instanceStateGet()

Gets the runtime state of the instance.  This is a reasonably expensive call as it causes code to be run inside of the instance to retrieve the resource usage and network information.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.instanceStateGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**InstanceStateGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | State |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instanceStatePut**
> ClusterMembersPost202Response instanceStatePut()

Changes the running state of the instance.

### Example

```typescript
import {
    InstancesApi,
    Configuration,
    InstanceStatePut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let state: InstanceStatePut; //State (optional)

const { status, data } = await apiInstance.instanceStatePut(
    project,
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **state** | **InstanceStatePut**| State | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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

# **instancesGet**
> InstancesGet200Response instancesGet()

Returns a list of instances (URLs).

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)
let allProjects: boolean; //Retrieve instances from all projects (optional) (default to undefined)

const { status, data } = await apiInstance.instancesGet(
    project,
    filter,
    allProjects
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve instances from all projects | (optional) defaults to undefined|


### Return type

**InstancesGet200Response**

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

# **instancesGetRecursion1**
> InstancesGetRecursion1200Response instancesGetRecursion1()

Returns a list of instances (basic structs).

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)
let allProjects: boolean; //Retrieve instances from all projects (optional) (default to undefined)

const { status, data } = await apiInstance.instancesGetRecursion1(
    project,
    filter,
    allProjects
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve instances from all projects | (optional) defaults to undefined|


### Return type

**InstancesGetRecursion1200Response**

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

# **instancesGetRecursion2**
> InstancesGetRecursion2200Response instancesGetRecursion2()

Returns a list of instances (full structs).  The main difference between recursion=1 and recursion=2 is that the latter also includes state and snapshot information allowing for a single API call to return everything needed by most clients.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)
let allProjects: boolean; //Retrieve instances from all projects (optional) (default to undefined)

const { status, data } = await apiInstance.instancesGetRecursion2(
    project,
    filter,
    allProjects
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve instances from all projects | (optional) defaults to undefined|


### Return type

**InstancesGetRecursion2200Response**

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

# **instancesPost**
> ClusterMembersPost202Response instancesPost()

Creates a new instance. Depending on the source, this can create an instance from an existing local image, remote image, existing local instance or snapshot, remote migration stream or backup file.

### Example

```typescript
import {
    InstancesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member (optional) (default to undefined)

const { status, data } = await apiInstance.instancesPost(
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **target** | [**string**] | Cluster member | (optional) defaults to undefined|


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

# **instancesPut**
> ClusterMembersPost202Response instancesPut()

Changes the running state of all instances.

### Example

```typescript
import {
    InstancesApi,
    Configuration,
    InstancesPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new InstancesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let state: InstancesPut; //State (optional)

const { status, data } = await apiInstance.instancesPut(
    project,
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **state** | **InstancesPut**| State | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|


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

