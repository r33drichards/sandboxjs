# OperationsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**operationDelete**](#operationdelete) | **DELETE** /1.0/operations/{id} | Cancel the operation|
|[**operationGet**](#operationget) | **GET** /1.0/operations/{id} | Get the operation state|
|[**operationWaitGet**](#operationwaitget) | **GET** /1.0/operations/{id}/wait | Wait for the operation|
|[**operationWaitGetUntrusted**](#operationwaitgetuntrusted) | **GET** /1.0/operations/{id}/wait?public | Wait for the operation|
|[**operationWebsocketGet**](#operationwebsocketget) | **GET** /1.0/operations/{id}/websocket | Get the websocket stream|
|[**operationWebsocketGetUntrusted**](#operationwebsocketgetuntrusted) | **GET** /1.0/operations/{id}/websocket?public | Get the websocket stream|
|[**operationsGet**](#operationsget) | **GET** /1.0/operations | Get the operations|
|[**operationsGetRecursion1**](#operationsgetrecursion1) | **GET** /1.0/operations?recursion&#x3D;1 | Get the operations|

# **operationDelete**
> ServerPut200Response operationDelete()

Cancels the operation if supported.

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

const { status, data } = await apiInstance.operationDelete();
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

# **operationGet**
> OperationGet200Response operationGet()

Gets the operation state.

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

const { status, data } = await apiInstance.operationGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**OperationGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Operation |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationWaitGet**
> OperationGet200Response operationWaitGet()

Waits for the operation to reach a final state (or timeout) and retrieve its final state.

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let timeout: number; //Timeout in seconds (-1 means never) (optional) (default to undefined)

const { status, data } = await apiInstance.operationWaitGet(
    timeout
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timeout** | [**number**] | Timeout in seconds (-1 means never) | (optional) defaults to undefined|


### Return type

**OperationGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Operation |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationWaitGetUntrusted**
> OperationGet200Response operationWaitGetUntrusted()

Waits for the operation to reach a final state (or timeout) and retrieve its final state.  When accessed by an untrusted user, the secret token must be provided.

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let secret: string; //Authentication token (optional) (default to undefined)
let timeout: number; //Timeout in seconds (-1 means never) (optional) (default to undefined)

const { status, data } = await apiInstance.operationWaitGetUntrusted(
    secret,
    timeout
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **secret** | [**string**] | Authentication token | (optional) defaults to undefined|
| **timeout** | [**number**] | Timeout in seconds (-1 means never) | (optional) defaults to undefined|


### Return type

**OperationGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Operation |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationWebsocketGet**
> operationWebsocketGet()

Connects to an associated websocket stream for the operation. This should almost never be done directly by a client, instead it\'s meant for server to server communication with the client only relaying the connection information to the servers.

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let secret: string; //Authentication token (optional) (default to undefined)

const { status, data } = await apiInstance.operationWebsocketGet(
    secret
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **secret** | [**string**] | Authentication token | (optional) defaults to undefined|


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
|**200** | Websocket operation messages (dependent on operation) |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationWebsocketGetUntrusted**
> operationWebsocketGetUntrusted()

Connects to an associated websocket stream for the operation. This should almost never be done directly by a client, instead it\'s meant for server to server communication with the client only relaying the connection information to the servers.  The untrusted endpoint is used by the target server to connect to the source server. Authentication is performed through the secret token.

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let secret: string; //Authentication token (optional) (default to undefined)

const { status, data } = await apiInstance.operationWebsocketGetUntrusted(
    secret
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **secret** | [**string**] | Authentication token | (optional) defaults to undefined|


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
|**200** | Websocket operation messages (dependent on operation) |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsGet**
> OperationsGet200Response operationsGet()

Returns a JSON object of operation type to operation list (URLs).

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let allProjects: boolean; //Retrieve operations from all projects (optional) (default to undefined)

const { status, data } = await apiInstance.operationsGet(
    project,
    allProjects
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve operations from all projects | (optional) defaults to undefined|


### Return type

**OperationsGet200Response**

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

# **operationsGetRecursion1**
> OperationsGetRecursion1200Response operationsGetRecursion1()

Returns a list of operations (structs).

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let allProjects: boolean; //Retrieve operations from all projects (optional) (default to undefined)

const { status, data } = await apiInstance.operationsGetRecursion1(
    project,
    allProjects
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve operations from all projects | (optional) defaults to undefined|


### Return type

**OperationsGetRecursion1200Response**

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

