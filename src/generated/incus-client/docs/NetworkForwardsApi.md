# NetworkForwardsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**networkForwardDelete**](#networkforwarddelete) | **DELETE** /1.0/networks/{networkName}/forwards/{listenAddress} | Delete the network address forward|
|[**networkForwardGet**](#networkforwardget) | **GET** /1.0/networks/{networkName}/forwards/{listenAddress} | Get the network address forward|
|[**networkForwardGetRecursion1**](#networkforwardgetrecursion1) | **GET** /1.0/networks/{networkName}/forwards?recursion&#x3D;1 | Get the network address forwards|
|[**networkForwardPatch**](#networkforwardpatch) | **PATCH** /1.0/networks/{networkName}/forwards/{listenAddress} | Partially update the network address forward|
|[**networkForwardPut**](#networkforwardput) | **PUT** /1.0/networks/{networkName}/forwards/{listenAddress} | Update the network address forward|
|[**networkForwardsGet**](#networkforwardsget) | **GET** /1.0/networks/{networkName}/forwards | Get the network address forwards|
|[**networkForwardsPost**](#networkforwardspost) | **POST** /1.0/networks/{networkName}/forwards | Add a network address forward|

# **networkForwardDelete**
> ServerPut200Response networkForwardDelete()

Removes the network address forward.

### Example

```typescript
import {
    NetworkForwardsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkForwardsApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkForwardDelete(
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

# **networkForwardGet**
> NetworkForwardGet200Response networkForwardGet()

Gets a specific network address forward.

### Example

```typescript
import {
    NetworkForwardsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkForwardsApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkForwardGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**NetworkForwardGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Address forward |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **networkForwardGetRecursion1**
> NetworkForwardGetRecursion1200Response networkForwardGetRecursion1()

Returns a list of network address forwards (structs).

### Example

```typescript
import {
    NetworkForwardsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkForwardsApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.networkForwardGetRecursion1(
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

**NetworkForwardGetRecursion1200Response**

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

# **networkForwardPatch**
> ServerPut200Response networkForwardPatch(forward)

Updates a subset of the network address forward configuration.

### Example

```typescript
import {
    NetworkForwardsApi,
    Configuration,
    NetworkForwardPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkForwardsApi(configuration);

let forward: NetworkForwardPut; //Address forward configuration
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkForwardPatch(
    forward,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **forward** | **NetworkForwardPut**| Address forward configuration | |
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

# **networkForwardPut**
> ServerPut200Response networkForwardPut(forward)

Updates the entire network address forward configuration.

### Example

```typescript
import {
    NetworkForwardsApi,
    Configuration,
    NetworkForwardPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkForwardsApi(configuration);

let forward: NetworkForwardPut; //Address forward configuration
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkForwardPut(
    forward,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **forward** | **NetworkForwardPut**| Address forward configuration | |
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

# **networkForwardsGet**
> NetworkForwardsGet200Response networkForwardsGet()

Returns a list of network address forwards (URLs).

### Example

```typescript
import {
    NetworkForwardsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkForwardsApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.networkForwardsGet(
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

**NetworkForwardsGet200Response**

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

# **networkForwardsPost**
> ServerPut200Response networkForwardsPost(forward)

Creates a new network address forward.

### Example

```typescript
import {
    NetworkForwardsApi,
    Configuration,
    NetworkForwardsPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkForwardsApi(configuration);

let forward: NetworkForwardsPost; //Forward
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkForwardsPost(
    forward,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **forward** | **NetworkForwardsPost**| Forward | |
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

