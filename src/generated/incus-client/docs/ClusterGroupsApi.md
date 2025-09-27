# ClusterGroupsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**clusterGroupDelete**](#clustergroupdelete) | **DELETE** /1.0/cluster/groups/{name} | Delete the cluster group.|
|[**clusterGroupGet**](#clustergroupget) | **GET** /1.0/cluster/groups/{name} | Get the cluster group|
|[**clusterGroupPatch**](#clustergrouppatch) | **PATCH** /1.0/cluster/groups/{name} | Update the cluster group|
|[**clusterGroupPost**](#clustergrouppost) | **POST** /1.0/cluster/groups/{name} | Rename the cluster group|
|[**clusterGroupPut**](#clustergroupput) | **PUT** /1.0/cluster/groups/{name} | Update the cluster group|
|[**clusterGroupsGet**](#clustergroupsget) | **GET** /1.0/cluster/groups | Get the cluster groups|
|[**clusterGroupsGetRecursion1**](#clustergroupsgetrecursion1) | **GET** /1.0/cluster/groups?recursion&#x3D;1 | Get the cluster groups|

# **clusterGroupDelete**
> ServerPut200Response clusterGroupDelete()

Removes the cluster group.

### Example

```typescript
import {
    ClusterGroupsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ClusterGroupsApi(configuration);

const { status, data } = await apiInstance.clusterGroupDelete();
```

### Parameters
This endpoint does not have any parameters.


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

# **clusterGroupGet**
> ClusterGroupGet200Response clusterGroupGet()

Gets a specific cluster group.

### Example

```typescript
import {
    ClusterGroupsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ClusterGroupsApi(configuration);

const { status, data } = await apiInstance.clusterGroupGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ClusterGroupGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Cluster group |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusterGroupPatch**
> ServerPut200Response clusterGroupPatch(clusterGroup)

Updates the cluster group configuration.

### Example

```typescript
import {
    ClusterGroupsApi,
    Configuration,
    ClusterGroupPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ClusterGroupsApi(configuration);

let clusterGroup: ClusterGroupPut; //cluster group configuration

const { status, data } = await apiInstance.clusterGroupPatch(
    clusterGroup
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterGroup** | **ClusterGroupPut**| cluster group configuration | |


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

# **clusterGroupPost**
> ServerPut200Response clusterGroupPost(name)

Renames an existing cluster group.

### Example

```typescript
import {
    ClusterGroupsApi,
    Configuration,
    ClusterGroupPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ClusterGroupsApi(configuration);

let name: ClusterGroupPost; //Cluster group rename request

const { status, data } = await apiInstance.clusterGroupPost(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | **ClusterGroupPost**| Cluster group rename request | |


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

# **clusterGroupPut**
> ServerPut200Response clusterGroupPut(clusterGroup)

Updates the entire cluster group configuration.

### Example

```typescript
import {
    ClusterGroupsApi,
    Configuration,
    ClusterGroupPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ClusterGroupsApi(configuration);

let clusterGroup: ClusterGroupPut; //cluster group configuration

const { status, data } = await apiInstance.clusterGroupPut(
    clusterGroup
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterGroup** | **ClusterGroupPut**| cluster group configuration | |


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

# **clusterGroupsGet**
> ClusterGroupsGet200Response clusterGroupsGet()

Returns a list of cluster groups (URLs).

### Example

```typescript
import {
    ClusterGroupsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ClusterGroupsApi(configuration);

const { status, data } = await apiInstance.clusterGroupsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ClusterGroupsGet200Response**

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

# **clusterGroupsGetRecursion1**
> ClusterGroupsGetRecursion1200Response clusterGroupsGetRecursion1()

Returns a list of cluster groups (structs).

### Example

```typescript
import {
    ClusterGroupsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ClusterGroupsApi(configuration);

const { status, data } = await apiInstance.clusterGroupsGetRecursion1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ClusterGroupsGetRecursion1200Response**

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

