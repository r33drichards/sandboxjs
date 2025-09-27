# ProjectsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**projectAccess**](#projectaccess) | **GET** /1.0/projects/{name}/access | Get who has access to a project|
|[**projectDelete**](#projectdelete) | **DELETE** /1.0/projects/{name} | Delete the project|
|[**projectGet**](#projectget) | **GET** /1.0/projects/{name} | Get the project|
|[**projectPatch**](#projectpatch) | **PATCH** /1.0/projects/{name} | Partially update the project|
|[**projectPost**](#projectpost) | **POST** /1.0/projects/{name} | Rename the project|
|[**projectPut**](#projectput) | **PUT** /1.0/projects/{name} | Update the project|
|[**projectStateGet**](#projectstateget) | **GET** /1.0/projects/{name}/state | Get the project state|
|[**projectsGet**](#projectsget) | **GET** /1.0/projects | Get the projects|
|[**projectsGetRecursion1**](#projectsgetrecursion1) | **GET** /1.0/projects?recursion&#x3D;1 | Get the projects|
|[**projectsPost**](#projectspost) | **POST** /1.0/projects | Add a project|

# **projectAccess**
> InstanceAccess200Response projectAccess()

Gets the access information for the project.

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

const { status, data } = await apiInstance.projectAccess();
```

### Parameters
This endpoint does not have any parameters.


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

# **projectDelete**
> ServerPut200Response projectDelete()

Removes the project.

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let force: boolean; //Delete project and related artifacts (optional) (default to undefined)

const { status, data } = await apiInstance.projectDelete(
    force
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **force** | [**boolean**] | Delete project and related artifacts | (optional) defaults to undefined|


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

# **projectGet**
> ProjectGet200Response projectGet()

Gets a specific project.

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

const { status, data } = await apiInstance.projectGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ProjectGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Project |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectPatch**
> ServerPut200Response projectPatch(project)

Updates a subset of the project configuration.

### Example

```typescript
import {
    ProjectsApi,
    Configuration,
    ProjectPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let project: ProjectPut; //Project configuration

const { status, data } = await apiInstance.projectPatch(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | **ProjectPut**| Project configuration | |


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

# **projectPost**
> ClusterMembersPost202Response projectPost(project)

Renames an existing project.

### Example

```typescript
import {
    ProjectsApi,
    Configuration,
    ProjectPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let project: ProjectPost; //Project rename request

const { status, data } = await apiInstance.projectPost(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | **ProjectPost**| Project rename request | |


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

# **projectPut**
> ServerPut200Response projectPut(project)

Updates the entire project configuration.

### Example

```typescript
import {
    ProjectsApi,
    Configuration,
    ProjectPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let project: ProjectPut; //Project configuration

const { status, data } = await apiInstance.projectPut(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | **ProjectPut**| Project configuration | |


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

# **projectStateGet**
> ProjectStateGet200Response projectStateGet()

Gets a specific project resource consumption information.

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

const { status, data } = await apiInstance.projectStateGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ProjectStateGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Project state |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsGet**
> ProjectsGet200Response projectsGet()

Returns a list of projects (URLs).

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.projectsGet(
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**ProjectsGet200Response**

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

# **projectsGetRecursion1**
> ProjectsGetRecursion1200Response projectsGetRecursion1()

Returns a list of projects (structs).

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.projectsGetRecursion1(
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**ProjectsGetRecursion1200Response**

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

# **projectsPost**
> ServerPut200Response projectsPost(project)

Creates a new project.

### Example

```typescript
import {
    ProjectsApi,
    Configuration,
    ProjectsPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let project: ProjectsPost; //Project

const { status, data } = await apiInstance.projectsPost(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | **ProjectsPost**| Project | |


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

