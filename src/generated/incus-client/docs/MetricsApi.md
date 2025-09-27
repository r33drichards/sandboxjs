# MetricsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**metricsGet**](#metricsget) | **GET** /1.0/metrics | Get metrics|

# **metricsGet**
> string metricsGet()

Gets metrics of instances.

### Example

```typescript
import {
    MetricsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let target: string; //Cluster member name (optional) (default to undefined)

const { status, data } = await apiInstance.metricsGet(
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

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Metrics |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

