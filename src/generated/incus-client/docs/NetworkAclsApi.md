# NetworkAclsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**networkAclDelete**](#networkacldelete) | **DELETE** /1.0/network-acls/{name} | Delete the network ACL|
|[**networkAclGet**](#networkaclget) | **GET** /1.0/network-acls/{name} | Get the network ACL|
|[**networkAclLogGet**](#networkacllogget) | **GET** /1.0/network-acls/{name}/log | Get the network ACL log|
|[**networkAclPatch**](#networkaclpatch) | **PATCH** /1.0/network-acls/{name} | Partially update the network ACL|
|[**networkAclPost**](#networkaclpost) | **POST** /1.0/network-acls/{name} | Rename the network ACL|
|[**networkAclPut**](#networkaclput) | **PUT** /1.0/network-acls/{name} | Update the network ACL|
|[**networkAclsGet**](#networkaclsget) | **GET** /1.0/network-acls | Get the network ACLs|
|[**networkAclsGetRecursion1**](#networkaclsgetrecursion1) | **GET** /1.0/network-acls?recursion&#x3D;1 | Get the network ACLs|
|[**networkAclsPost**](#networkaclspost) | **POST** /1.0/network-acls | Add a network ACL|

# **networkAclDelete**
> ServerPut200Response networkAclDelete()

Removes the network ACL.

### Example

```typescript
import {
    NetworkAclsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkAclsApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkAclDelete(
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

# **networkAclGet**
> NetworkAclGet200Response networkAclGet()

Gets a specific network ACL.

### Example

```typescript
import {
    NetworkAclsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkAclsApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkAclGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**NetworkAclGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ACL |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **networkAclLogGet**
> networkAclLogGet()

Gets a specific network ACL log entries.

### Example

```typescript
import {
    NetworkAclsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkAclsApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkAclLogGet(
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
|**200** | Raw log file |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **networkAclPatch**
> ServerPut200Response networkAclPatch(acl)

Updates a subset of the network ACL configuration.

### Example

```typescript
import {
    NetworkAclsApi,
    Configuration,
    NetworkACLPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkAclsApi(configuration);

let acl: NetworkACLPut; //ACL configuration
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkAclPatch(
    acl,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acl** | **NetworkACLPut**| ACL configuration | |
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

# **networkAclPost**
> ServerPut200Response networkAclPost(acl)

Renames an existing network ACL.

### Example

```typescript
import {
    NetworkAclsApi,
    Configuration,
    NetworkACLPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkAclsApi(configuration);

let acl: NetworkACLPost; //ACL rename request
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkAclPost(
    acl,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acl** | **NetworkACLPost**| ACL rename request | |
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

# **networkAclPut**
> ServerPut200Response networkAclPut(acl)

Updates the entire network ACL configuration.

### Example

```typescript
import {
    NetworkAclsApi,
    Configuration,
    NetworkACLPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkAclsApi(configuration);

let acl: NetworkACLPut; //ACL configuration
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkAclPut(
    acl,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acl** | **NetworkACLPut**| ACL configuration | |
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

# **networkAclsGet**
> NetworkAclsGet200Response networkAclsGet()

Returns a list of network ACLs (URLs).

### Example

```typescript
import {
    NetworkAclsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkAclsApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let allProjects: boolean; //Retrieve network ACLs from all projects (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.networkAclsGet(
    project,
    allProjects,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve network ACLs from all projects | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**NetworkAclsGet200Response**

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

# **networkAclsGetRecursion1**
> NetworkAclsGetRecursion1200Response networkAclsGetRecursion1()

Returns a list of network ACLs (structs).

### Example

```typescript
import {
    NetworkAclsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkAclsApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let allProjects: boolean; //Retrieve network ACLs from all projects (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.networkAclsGetRecursion1(
    project,
    allProjects,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve network ACLs from all projects | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**NetworkAclsGetRecursion1200Response**

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

# **networkAclsPost**
> ServerPut200Response networkAclsPost(acl)

Creates a new network ACL.

### Example

```typescript
import {
    NetworkAclsApi,
    Configuration,
    NetworkACLsPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkAclsApi(configuration);

let acl: NetworkACLsPost; //ACL
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkAclsPost(
    acl,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acl** | **NetworkACLsPost**| ACL | |
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

