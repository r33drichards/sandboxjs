# NetworkAllocationsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**networkAllocationsGet**](#networkallocationsget) | **GET** /1.0/network-allocations | Get the network allocations in use (&#x60;network&#x60;, &#x60;network-forward&#x60; and &#x60;load-balancer&#x60; and &#x60;instance&#x60;)|

# **networkAllocationsGet**
> NetworkAllocationsGet200Response networkAllocationsGet()

Returns a list of network allocations.

### Example

```typescript
import {
    NetworkAllocationsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkAllocationsApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let allProjects: boolean; //Retrieve entities from all projects (optional) (default to undefined)

const { status, data } = await apiInstance.networkAllocationsGet(
    project,
    allProjects
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve entities from all projects | (optional) defaults to undefined|


### Return type

**NetworkAllocationsGet200Response**

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

