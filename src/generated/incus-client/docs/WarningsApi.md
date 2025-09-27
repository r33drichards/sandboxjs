# WarningsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**warningDelete**](#warningdelete) | **DELETE** /1.0/warnings/{uuid} | Delete the warning|
|[**warningGet**](#warningget) | **GET** /1.0/warnings/{uuid} | Get the warning|
|[**warningPatch**](#warningpatch) | **PATCH** /1.0/warnings/{uuid} | Partially update the warning|
|[**warningPut**](#warningput) | **PUT** /1.0/warnings/{uuid} | Update the warning|
|[**warningsGet**](#warningsget) | **GET** /1.0/warnings | List the warnings|
|[**warningsGetRecursion1**](#warningsgetrecursion1) | **GET** /1.0/warnings?recursion&#x3D;1 | Get the warnings|

# **warningDelete**
> ServerPut200Response warningDelete()

Removes the warning.

### Example

```typescript
import {
    WarningsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new WarningsApi(configuration);

const { status, data } = await apiInstance.warningDelete();
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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warningGet**
> WarningGet200Response warningGet()

Gets a specific warning.

### Example

```typescript
import {
    WarningsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new WarningsApi(configuration);

const { status, data } = await apiInstance.warningGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**WarningGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Warning |  -  |
|**404** | Not found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warningPatch**
> ServerPut200Response warningPatch(warning)

Updates a subset of the warning status.

### Example

```typescript
import {
    WarningsApi,
    Configuration,
    WarningPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new WarningsApi(configuration);

let warning: WarningPut; //Warning status

const { status, data } = await apiInstance.warningPatch(
    warning
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **warning** | **WarningPut**| Warning status | |


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

# **warningPut**
> ServerPut200Response warningPut(warning)

Updates the warning status.

### Example

```typescript
import {
    WarningsApi,
    Configuration,
    WarningPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new WarningsApi(configuration);

let warning: WarningPut; //Warning status

const { status, data } = await apiInstance.warningPut(
    warning
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **warning** | **WarningPut**| Warning status | |


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

# **warningsGet**
> WarningsGet200Response warningsGet()

Returns a list of warnings.

### Example

```typescript
import {
    WarningsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new WarningsApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.warningsGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**WarningsGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Sync response |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warningsGetRecursion1**
> WarningsGetRecursion1200Response warningsGetRecursion1()

Returns a list of warnings (structs).

### Example

```typescript
import {
    WarningsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new WarningsApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.warningsGetRecursion1(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**WarningsGetRecursion1200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API endpoints |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

