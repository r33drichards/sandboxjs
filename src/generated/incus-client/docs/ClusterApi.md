# ClusterApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**clusterGet**](#clusterget) | **GET** /1.0/cluster | Get the cluster configuration|
|[**clusterGroupsPost**](#clustergroupspost) | **POST** /1.0/cluster/groups | Create a cluster group.|
|[**clusterMemberDelete**](#clustermemberdelete) | **DELETE** /1.0/cluster/members/{name} | Delete the cluster member|
|[**clusterMemberGet**](#clustermemberget) | **GET** /1.0/cluster/members/{name} | Get the cluster member|
|[**clusterMemberPatch**](#clustermemberpatch) | **PATCH** /1.0/cluster/members/{name} | Partially update the cluster member|
|[**clusterMemberPost**](#clustermemberpost) | **POST** /1.0/cluster/members/{name} | Rename the cluster member|
|[**clusterMemberPut**](#clustermemberput) | **PUT** /1.0/cluster/members/{name} | Update the cluster member|
|[**clusterMemberStateGet**](#clustermemberstateget) | **GET** /1.0/cluster/members/{name}/state | Get state of the cluster member|
|[**clusterMemberStatePost**](#clustermemberstatepost) | **POST** /1.0/cluster/members/{name}/state | Evacuate or restore a cluster member|
|[**clusterMembersGet**](#clustermembersget) | **GET** /1.0/cluster/members | Get the cluster members|
|[**clusterMembersGetRecursion1**](#clustermembersgetrecursion1) | **GET** /1.0/cluster/members?recursion&#x3D;1 | Get the cluster members|
|[**clusterMembersPost**](#clustermemberspost) | **POST** /1.0/cluster/members | Request a join token|
|[**clusterPut**](#clusterput) | **PUT** /1.0/cluster | Update the cluster configuration|
|[**clusteringUpdateCert**](#clusteringupdatecert) | **PUT** /1.0/cluster/certificate | Update the certificate for the cluster|

# **clusterGet**
> ClusterGet200Response clusterGet()

Gets the current cluster configuration.

### Example

```typescript
import {
    ClusterApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ClusterApi(configuration);

const { status, data } = await apiInstance.clusterGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ClusterGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Cluster configuration |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusterGroupsPost**
> ServerPut200Response clusterGroupsPost(cluster)

Creates a new cluster group.

### Example

```typescript
import {
    ClusterApi,
    Configuration,
    ClusterGroupsPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ClusterApi(configuration);

let cluster: ClusterGroupsPost; //Cluster group to create

const { status, data } = await apiInstance.clusterGroupsPost(
    cluster
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cluster** | **ClusterGroupsPost**| Cluster group to create | |


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

# **clusterMemberDelete**
> ServerPut200Response clusterMemberDelete()

Removes the member from the cluster.

### Example

```typescript
import {
    ClusterApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ClusterApi(configuration);

const { status, data } = await apiInstance.clusterMemberDelete();
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

# **clusterMemberGet**
> ClusterMemberGet200Response clusterMemberGet()

Gets a specific cluster member.

### Example

```typescript
import {
    ClusterApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ClusterApi(configuration);

const { status, data } = await apiInstance.clusterMemberGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ClusterMemberGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Cluster member |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusterMemberPatch**
> ServerPut200Response clusterMemberPatch(cluster)

Updates a subset of the cluster member configuration.

### Example

```typescript
import {
    ClusterApi,
    Configuration,
    ClusterMemberPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ClusterApi(configuration);

let cluster: ClusterMemberPut; //Cluster member configuration

const { status, data } = await apiInstance.clusterMemberPatch(
    cluster
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cluster** | **ClusterMemberPut**| Cluster member configuration | |


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

# **clusterMemberPost**
> ServerPut200Response clusterMemberPost(cluster)

Renames an existing cluster member.

### Example

```typescript
import {
    ClusterApi,
    Configuration,
    ClusterMemberPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ClusterApi(configuration);

let cluster: ClusterMemberPost; //Cluster member rename request

const { status, data } = await apiInstance.clusterMemberPost(
    cluster
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cluster** | **ClusterMemberPost**| Cluster member rename request | |


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

# **clusterMemberPut**
> ServerPut200Response clusterMemberPut(cluster)

Updates the entire cluster member configuration.

### Example

```typescript
import {
    ClusterApi,
    Configuration,
    ClusterMemberPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ClusterApi(configuration);

let cluster: ClusterMemberPut; //Cluster member configuration

const { status, data } = await apiInstance.clusterMemberPut(
    cluster
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cluster** | **ClusterMemberPut**| Cluster member configuration | |


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

# **clusterMemberStateGet**
> ClusterMemberStateGet200Response clusterMemberStateGet()

Gets state of a specific cluster member.

### Example

```typescript
import {
    ClusterApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ClusterApi(configuration);

const { status, data } = await apiInstance.clusterMemberStateGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ClusterMemberStateGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Cluster member state |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusterMemberStatePost**
> ClusterMembersPost202Response clusterMemberStatePost(cluster)

Evacuates or restores a cluster member.

### Example

```typescript
import {
    ClusterApi,
    Configuration,
    ClusterMemberStatePost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ClusterApi(configuration);

let cluster: ClusterMemberStatePost; //Cluster member state

const { status, data } = await apiInstance.clusterMemberStatePost(
    cluster
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cluster** | **ClusterMemberStatePost**| Cluster member state | |


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

# **clusterMembersGet**
> ClusterMembersGet200Response clusterMembersGet()

Returns a list of cluster members (URLs).

### Example

```typescript
import {
    ClusterApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ClusterApi(configuration);

let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.clusterMembersGet(
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**ClusterMembersGet200Response**

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

# **clusterMembersGetRecursion1**
> ClusterMembersGetRecursion1200Response clusterMembersGetRecursion1()

Returns a list of cluster members (structs).

### Example

```typescript
import {
    ClusterApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ClusterApi(configuration);

let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.clusterMembersGetRecursion1(
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**ClusterMembersGetRecursion1200Response**

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

# **clusterMembersPost**
> ClusterMembersPost202Response clusterMembersPost(cluster)

Requests a join token to add a cluster member.

### Example

```typescript
import {
    ClusterApi,
    Configuration,
    ClusterMembersPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ClusterApi(configuration);

let cluster: ClusterMembersPost; //Cluster member add request

const { status, data } = await apiInstance.clusterMembersPost(
    cluster
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cluster** | **ClusterMembersPost**| Cluster member add request | |


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

# **clusterPut**
> ServerPut200Response clusterPut(cluster)

Updates the entire cluster configuration.

### Example

```typescript
import {
    ClusterApi,
    Configuration,
    ClusterPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ClusterApi(configuration);

let cluster: ClusterPut; //Cluster configuration

const { status, data } = await apiInstance.clusterPut(
    cluster
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cluster** | **ClusterPut**| Cluster configuration | |


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

# **clusteringUpdateCert**
> ServerPut200Response clusteringUpdateCert(cluster)

Replaces existing cluster certificate and reloads each cluster member.

### Example

```typescript
import {
    ClusterApi,
    Configuration,
    ClusterCertificatePut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ClusterApi(configuration);

let cluster: ClusterCertificatePut; //Cluster certificate replace request

const { status, data } = await apiInstance.clusteringUpdateCert(
    cluster
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cluster** | **ClusterCertificatePut**| Cluster certificate replace request | |


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

