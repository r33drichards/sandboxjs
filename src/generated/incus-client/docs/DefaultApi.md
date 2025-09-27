# DefaultApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**metadataConfigurationGet**](#metadataconfigurationget) | **GET** /1.0/metadata/configuration | Get the metadata configuration|

# **metadataConfigurationGet**
> MetadataConfigurationGet200Response metadataConfigurationGet()

Returns the generated metadata configuration in YAML format.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.metadataConfigurationGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**MetadataConfigurationGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | API endpoints |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

