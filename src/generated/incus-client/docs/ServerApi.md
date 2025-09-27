# ServerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiGet**](#apiget) | **GET** / | Get the supported API endpoints|
|[**eventsGet**](#eventsget) | **GET** /1.0/events | Get the event stream|
|[**resourcesGet**](#resourcesget) | **GET** /1.0/resources | Get system resources information|
|[**serverGet**](#serverget) | **GET** /1.0 | Get the server environment and configuration|
|[**serverGetUntrusted**](#servergetuntrusted) | **GET** /1.0?public | Get the server environment|
|[**serverPatch**](#serverpatch) | **PATCH** /1.0 | Partially update the server configuration|
|[**serverPut**](#serverput) | **PUT** /1.0 | Update the server configuration|

# **apiGet**
> ApiGet200Response apiGet()

Returns a list of supported API versions (URLs).  Internal API endpoints are not reported as those aren\'t versioned and should only be used by the daemon itself.

### Example

```typescript
import {
    ServerApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ServerApi(configuration);

const { status, data } = await apiInstance.apiGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API endpoints |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **eventsGet**
> Event eventsGet()

Connects to the event API using websocket.

### Example

```typescript
import {
    ServerApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ServerApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let type: string; //Event type(s), comma separated (valid types are logging, operation or lifecycle) (optional) (default to undefined)
let allProjects: boolean; //Retrieve instances from all projects (optional) (default to undefined)

const { status, data } = await apiInstance.eventsGet(
    project,
    type,
    allProjects
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **type** | [**string**] | Event type(s), comma separated (valid types are logging, operation or lifecycle) | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve instances from all projects | (optional) defaults to undefined|


### Return type

**Event**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Websocket message (JSON) |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resourcesGet**
> ResourcesGet200Response resourcesGet()

Gets the hardware information profile of the server.

### Example

```typescript
import {
    ServerApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ServerApi(configuration);

let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.resourcesGet(
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|


### Return type

**ResourcesGet200Response**

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

# **serverGet**
> ServerGet200Response serverGet()

Shows the full server environment and configuration.

### Example

```typescript
import {
    ServerApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ServerApi(configuration);

let target: string; //Cluster member name (optional) (default to undefined)
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.serverGet(
    target,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **target** | [**string**] | Cluster member name | (optional) defaults to undefined|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**ServerGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Server environment and configuration |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **serverGetUntrusted**
> ServerGetUntrusted200Response serverGetUntrusted()

Shows a small subset of the server environment and configuration which is required by untrusted clients to reach a server.  The `?public` part of the URL isn\'t required, it\'s simply used to separate the two behaviors of this endpoint.

### Example

```typescript
import {
    ServerApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ServerApi(configuration);

const { status, data } = await apiInstance.serverGetUntrusted();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ServerGetUntrusted200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Server environment and configuration |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **serverPatch**
> ServerPut200Response serverPatch(server)

Updates a subset of the server configuration.

### Example

```typescript
import {
    ServerApi,
    Configuration,
    ServerPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ServerApi(configuration);

let server: ServerPut; //Server configuration
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.serverPatch(
    server,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **server** | **ServerPut**| Server configuration | |
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

# **serverPut**
> ServerPut200Response serverPut(server)

Updates the entire server configuration.

### Example

```typescript
import {
    ServerApi,
    Configuration,
    ServerPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ServerApi(configuration);

let server: ServerPut; //Server configuration
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.serverPut(
    server,
    target
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **server** | **ServerPut**| Server configuration | |
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

