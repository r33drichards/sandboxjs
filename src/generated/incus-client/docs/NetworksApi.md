# NetworksApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**networkDelete**](#networkdelete) | **DELETE** /1.0/networks/{name} | Delete the network|
|[**networkGet**](#networkget) | **GET** /1.0/networks/{name} | Get the network|
|[**networkPatch**](#networkpatch) | **PATCH** /1.0/networks/{name} | Partially update the network|
|[**networkPost**](#networkpost) | **POST** /1.0/networks/{name} | Rename the network|
|[**networkPut**](#networkput) | **PUT** /1.0/networks/{name} | Update the network|
|[**networksGet**](#networksget) | **GET** /1.0/networks | Get the networks|
|[**networksGetRecursion1**](#networksgetrecursion1) | **GET** /1.0/networks?recursion&#x3D;1 | Get the networks|
|[**networksLeasesGet**](#networksleasesget) | **GET** /1.0/networks/{name}/leases | Get the DHCP leases|
|[**networksPost**](#networkspost) | **POST** /1.0/networks | Add a network|
|[**networksStateGet**](#networksstateget) | **GET** /1.0/networks/{name}/state | Get the network state|

# **networkDelete**
> ServerPut200Response networkDelete()

Removes the network.

### Example

```typescript
import {
    NetworksApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworksApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkDelete(
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

# **networkGet**
> NetworkGet200Response networkGet()

Gets a specific network.

### Example

```typescript
import {
    NetworksApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworksApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.networkGet(
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

**NetworkGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Network |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **networkPatch**
> ServerPut200Response networkPatch(network)

Updates a subset of the network configuration.

### Example

```typescript
import {
    NetworksApi,
    Configuration,
    NetworkPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworksApi(configuration);

let network: NetworkPut; //Network configuration
let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.networkPatch(
    network,
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **network** | **NetworkPut**| Network configuration | |
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

# **networkPost**
> ServerPut200Response networkPost(network)

Renames an existing network.

### Example

```typescript
import {
    NetworksApi,
    Configuration,
    NetworkPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworksApi(configuration);

let network: NetworkPost; //Network rename request
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkPost(
    network,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **network** | **NetworkPost**| Network rename request | |
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

# **networkPut**
> ServerPut200Response networkPut(network)

Updates the entire network configuration.

### Example

```typescript
import {
    NetworksApi,
    Configuration,
    NetworkPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworksApi(configuration);

let network: NetworkPut; //Network configuration
let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.networkPut(
    network,
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **network** | **NetworkPut**| Network configuration | |
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

# **networksGet**
> NetworksGet200Response networksGet()

Returns a list of networks (URLs).

### Example

```typescript
import {
    NetworksApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworksApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let allProjects: boolean; //Retrieve networks from all projects (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.networksGet(
    project,
    allProjects,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve networks from all projects | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**NetworksGet200Response**

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

# **networksGetRecursion1**
> NetworksGetRecursion1200Response networksGetRecursion1()

Returns a list of networks (structs).

### Example

```typescript
import {
    NetworksApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworksApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let allProjects: boolean; //Retrieve networks from all projects (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.networksGetRecursion1(
    project,
    allProjects,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve networks from all projects | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**NetworksGetRecursion1200Response**

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

# **networksLeasesGet**
> NetworksLeasesGet200Response networksLeasesGet()

Returns a list of DHCP leases for the network.

### Example

```typescript
import {
    NetworksApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworksApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.networksLeasesGet(
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

**NetworksLeasesGet200Response**

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

# **networksPost**
> ServerPut200Response networksPost(network)

Creates a new network. When clustered, most network types require individual POST for each cluster member prior to a global POST.

### Example

```typescript
import {
    NetworksApi,
    Configuration,
    NetworksPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworksApi(configuration);

let network: NetworksPost; //Network
let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.networksPost(
    network,
    project,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **network** | **NetworksPost**| Network | |
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

# **networksStateGet**
> NetworksStateGet200Response networksStateGet()

Returns the current network state information.

### Example

```typescript
import {
    NetworksApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworksApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.networksStateGet(
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

**NetworksStateGet200Response**

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

