# NetworkIntegrationsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**networkIntegrationDelete**](#networkintegrationdelete) | **DELETE** /1.0/network-integrations/{integration} | Delete the network integration|
|[**networkIntegrationGet**](#networkintegrationget) | **GET** /1.0/network-integrations/{integration} | Get the network integration|
|[**networkIntegrationPatch**](#networkintegrationpatch) | **PATCH** /1.0/network-integrations/{integration} | Partially update the network integration|
|[**networkIntegrationPost**](#networkintegrationpost) | **POST** /1.0/network-integrations/{integration} | Rename the network integration|
|[**networkIntegrationPut**](#networkintegrationput) | **PUT** /1.0/network-integrations/{integration} | Update the network integration|
|[**networkIntegrationsGet**](#networkintegrationsget) | **GET** /1.0/network-integrations | Get the network integrations|
|[**networkIntegrationsGetRecursion1**](#networkintegrationsgetrecursion1) | **GET** /1.0/network-integrations?recursion&#x3D;1 | Get the network integrations|
|[**networkIntegrationsPost**](#networkintegrationspost) | **POST** /1.0/network-integrations | Add a network integration|

# **networkIntegrationDelete**
> ServerPut200Response networkIntegrationDelete()

Removes the network integration.

### Example

```typescript
import {
    NetworkIntegrationsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkIntegrationsApi(configuration);

const { status, data } = await apiInstance.networkIntegrationDelete();
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

# **networkIntegrationGet**
> NetworkIntegrationGet200Response networkIntegrationGet()

Gets a specific network integration.

### Example

```typescript
import {
    NetworkIntegrationsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkIntegrationsApi(configuration);

const { status, data } = await apiInstance.networkIntegrationGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**NetworkIntegrationGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | integration |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **networkIntegrationPatch**
> ServerPut200Response networkIntegrationPatch(integration)

Updates a subset of the network integration configuration.

### Example

```typescript
import {
    NetworkIntegrationsApi,
    Configuration,
    NetworkIntegrationPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkIntegrationsApi(configuration);

let integration: NetworkIntegrationPut; //integration configuration

const { status, data } = await apiInstance.networkIntegrationPatch(
    integration
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integration** | **NetworkIntegrationPut**| integration configuration | |


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

# **networkIntegrationPost**
> ServerPut200Response networkIntegrationPost(integration)

Renames the network integration.

### Example

```typescript
import {
    NetworkIntegrationsApi,
    Configuration,
    NetworkIntegrationPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkIntegrationsApi(configuration);

let integration: NetworkIntegrationPost; //integration configuration

const { status, data } = await apiInstance.networkIntegrationPost(
    integration
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integration** | **NetworkIntegrationPost**| integration configuration | |


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

# **networkIntegrationPut**
> ServerPut200Response networkIntegrationPut(integration)

Updates the entire network integration configuration.

### Example

```typescript
import {
    NetworkIntegrationsApi,
    Configuration,
    NetworkIntegrationPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkIntegrationsApi(configuration);

let integration: NetworkIntegrationPut; //integration configuration

const { status, data } = await apiInstance.networkIntegrationPut(
    integration
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integration** | **NetworkIntegrationPut**| integration configuration | |


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

# **networkIntegrationsGet**
> NetworkIntegrationsGet200Response networkIntegrationsGet()

Returns a list of network integrations (URLs).

### Example

```typescript
import {
    NetworkIntegrationsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkIntegrationsApi(configuration);

let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.networkIntegrationsGet(
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**NetworkIntegrationsGet200Response**

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

# **networkIntegrationsGetRecursion1**
> NetworkIntegrationsGetRecursion1200Response networkIntegrationsGetRecursion1()

Returns a list of network integrations (structs).

### Example

```typescript
import {
    NetworkIntegrationsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkIntegrationsApi(configuration);

let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.networkIntegrationsGetRecursion1(
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**NetworkIntegrationsGetRecursion1200Response**

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

# **networkIntegrationsPost**
> ServerPut200Response networkIntegrationsPost(integration)

Creates a new network integration.

### Example

```typescript
import {
    NetworkIntegrationsApi,
    Configuration,
    NetworkIntegrationsPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkIntegrationsApi(configuration);

let integration: NetworkIntegrationsPost; //integration

const { status, data } = await apiInstance.networkIntegrationsPost(
    integration
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integration** | **NetworkIntegrationsPost**| integration | |


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

