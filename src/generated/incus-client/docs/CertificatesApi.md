# CertificatesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**certificateDelete**](#certificatedelete) | **DELETE** /1.0/certificates/{fingerprint} | Delete the trusted certificate|
|[**certificateGet**](#certificateget) | **GET** /1.0/certificates/{fingerprint} | Get the trusted certificate|
|[**certificatePatch**](#certificatepatch) | **PATCH** /1.0/certificates/{fingerprint} | Partially update the trusted certificate|
|[**certificatePut**](#certificateput) | **PUT** /1.0/certificates/{fingerprint} | Update the trusted certificate|
|[**certificatesGet**](#certificatesget) | **GET** /1.0/certificates | Get the trusted certificates|
|[**certificatesGetRecursion1**](#certificatesgetrecursion1) | **GET** /1.0/certificates?recursion&#x3D;1 | Get the trusted certificates|
|[**certificatesPost**](#certificatespost) | **POST** /1.0/certificates | Add a trusted certificate|
|[**certificatesPostUntrusted**](#certificatespostuntrusted) | **POST** /1.0/certificates?public | Add a trusted certificate|

# **certificateDelete**
> ServerPut200Response certificateDelete()

Removes the certificate from the trust store.

### Example

```typescript
import {
    CertificatesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new CertificatesApi(configuration);

const { status, data } = await apiInstance.certificateDelete();
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

# **certificateGet**
> CertificateGet200Response certificateGet()

Gets a specific certificate entry from the trust store.

### Example

```typescript
import {
    CertificatesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new CertificatesApi(configuration);

const { status, data } = await apiInstance.certificateGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CertificateGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Certificate |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificatePatch**
> ServerPut200Response certificatePatch(certificate)

Updates a subset of the certificate configuration.

### Example

```typescript
import {
    CertificatesApi,
    Configuration,
    CertificatePut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new CertificatesApi(configuration);

let certificate: CertificatePut; //Certificate configuration

const { status, data } = await apiInstance.certificatePatch(
    certificate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **certificate** | **CertificatePut**| Certificate configuration | |


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

# **certificatePut**
> ServerPut200Response certificatePut(certificate)

Updates the entire certificate configuration.

### Example

```typescript
import {
    CertificatesApi,
    Configuration,
    CertificatePut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new CertificatesApi(configuration);

let certificate: CertificatePut; //Certificate configuration

const { status, data } = await apiInstance.certificatePut(
    certificate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **certificate** | **CertificatePut**| Certificate configuration | |


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

# **certificatesGet**
> CertificatesGet200Response certificatesGet()

Returns a list of trusted certificates (URLs).

### Example

```typescript
import {
    CertificatesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new CertificatesApi(configuration);

let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.certificatesGet(
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**CertificatesGet200Response**

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

# **certificatesGetRecursion1**
> CertificatesGetRecursion1200Response certificatesGetRecursion1()

Returns a list of trusted certificates (structs).

### Example

```typescript
import {
    CertificatesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new CertificatesApi(configuration);

let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.certificatesGetRecursion1(
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**CertificatesGetRecursion1200Response**

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

# **certificatesPost**
> ServerPut200Response certificatesPost(certificate)

Adds a certificate to the trust store. In this mode, the `token` property is always ignored.

### Example

```typescript
import {
    CertificatesApi,
    Configuration,
    CertificatesPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new CertificatesApi(configuration);

let certificate: CertificatesPost; //Certificate

const { status, data } = await apiInstance.certificatesPost(
    certificate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **certificate** | **CertificatesPost**| Certificate | |


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

# **certificatesPostUntrusted**
> ServerPut200Response certificatesPostUntrusted(certificate)

Adds a certificate to the trust store as an untrusted user. In this mode, the `token` property must be set to the correct value.  The `certificate` field can be omitted in which case the TLS client certificate in use for the connection will be retrieved and added to the trust store.  The `?public` part of the URL isn\'t required, it\'s simply used to separate the two behaviors of this endpoint.

### Example

```typescript
import {
    CertificatesApi,
    Configuration,
    CertificatesPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new CertificatesApi(configuration);

let certificate: CertificatesPost; //Certificate

const { status, data } = await apiInstance.certificatesPostUntrusted(
    certificate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **certificate** | **CertificatesPost**| Certificate | |


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

