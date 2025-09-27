# NetworkLoadBalancersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**networkLoadBalancerDelete**](#networkloadbalancerdelete) | **DELETE** /1.0/networks/{networkName}/load-balancers/{listenAddress} | Delete the network address load balancer|
|[**networkLoadBalancerGet**](#networkloadbalancerget) | **GET** /1.0/networks/{networkName}/load-balancers/{listenAddress} | Get the network address load balancer|
|[**networkLoadBalancerGetRecursion1**](#networkloadbalancergetrecursion1) | **GET** /1.0/networks/{networkName}/load-balancers?recursion&#x3D;1 | Get the network address load balancers|
|[**networkLoadBalancerPatch**](#networkloadbalancerpatch) | **PATCH** /1.0/networks/{networkName}/load-balancers/{listenAddress} | Partially update the network address load balancer|
|[**networkLoadBalancerPut**](#networkloadbalancerput) | **PUT** /1.0/networks/{networkName}/load-balancers/{listenAddress} | Update the network address load balancer|
|[**networkLoadBalancerStateGet**](#networkloadbalancerstateget) | **GET** /1.0/networks/{networkName}/load-balancers/{listenAddress}/state | Get the network address load balancer state|
|[**networkLoadBalancersGet**](#networkloadbalancersget) | **GET** /1.0/networks/{networkName}/load-balancers | Get the network address of load balancers|
|[**networkLoadBalancersPost**](#networkloadbalancerspost) | **POST** /1.0/networks/{networkName}/load-balancers | Add a network load balancer|

# **networkLoadBalancerDelete**
> ServerPut200Response networkLoadBalancerDelete()

Removes the network address load balancer.

### Example

```typescript
import {
    NetworkLoadBalancersApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkLoadBalancersApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkLoadBalancerDelete(
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

# **networkLoadBalancerGet**
> NetworkLoadBalancerGet200Response networkLoadBalancerGet()

Gets a specific network address load balancer.

### Example

```typescript
import {
    NetworkLoadBalancersApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkLoadBalancersApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkLoadBalancerGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**NetworkLoadBalancerGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Load Balancer |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **networkLoadBalancerGetRecursion1**
> NetworkLoadBalancerGetRecursion1200Response networkLoadBalancerGetRecursion1()

Returns a list of network address load balancers (structs).

### Example

```typescript
import {
    NetworkLoadBalancersApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkLoadBalancersApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.networkLoadBalancerGetRecursion1(
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

**NetworkLoadBalancerGetRecursion1200Response**

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

# **networkLoadBalancerPatch**
> ServerPut200Response networkLoadBalancerPatch(loadBalancer)

Updates a subset of the network address load balancer configuration.

### Example

```typescript
import {
    NetworkLoadBalancersApi,
    Configuration,
    NetworkLoadBalancerPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkLoadBalancersApi(configuration);

let loadBalancer: NetworkLoadBalancerPut; //Address load balancer configuration
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkLoadBalancerPatch(
    loadBalancer,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loadBalancer** | **NetworkLoadBalancerPut**| Address load balancer configuration | |
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

# **networkLoadBalancerPut**
> ServerPut200Response networkLoadBalancerPut(loadBalancer)

Updates the entire network address load balancer configuration.

### Example

```typescript
import {
    NetworkLoadBalancersApi,
    Configuration,
    NetworkLoadBalancerPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkLoadBalancersApi(configuration);

let loadBalancer: NetworkLoadBalancerPut; //Address load balancer configuration
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkLoadBalancerPut(
    loadBalancer,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loadBalancer** | **NetworkLoadBalancerPut**| Address load balancer configuration | |
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

# **networkLoadBalancerStateGet**
> NetworkLoadBalancerStateGet200Response networkLoadBalancerStateGet()

Get the current state of a specific network address load balancer.

### Example

```typescript
import {
    NetworkLoadBalancersApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkLoadBalancersApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkLoadBalancerStateGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**NetworkLoadBalancerStateGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Load Balancer state |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **networkLoadBalancersGet**
> NetworkLoadBalancersGet200Response networkLoadBalancersGet()

Returns a list of network address load balancers (URLs).

### Example

```typescript
import {
    NetworkLoadBalancersApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkLoadBalancersApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.networkLoadBalancersGet(
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

**NetworkLoadBalancersGet200Response**

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

# **networkLoadBalancersPost**
> ServerPut200Response networkLoadBalancersPost(loadBalancer)

Creates a new network load balancer.

### Example

```typescript
import {
    NetworkLoadBalancersApi,
    Configuration,
    NetworkLoadBalancersPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkLoadBalancersApi(configuration);

let loadBalancer: NetworkLoadBalancersPost; //Load Balancer
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkLoadBalancersPost(
    loadBalancer,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loadBalancer** | **NetworkLoadBalancersPost**| Load Balancer | |
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

