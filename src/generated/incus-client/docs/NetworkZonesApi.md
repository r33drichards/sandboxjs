# NetworkZonesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**networkZoneDelete**](#networkzonedelete) | **DELETE** /1.0/network-zones/{zone} | Delete the network zone|
|[**networkZoneGet**](#networkzoneget) | **GET** /1.0/network-zones/{zone} | Get the network zone|
|[**networkZonePatch**](#networkzonepatch) | **PATCH** /1.0/network-zones/{zone} | Partially update the network zone|
|[**networkZonePut**](#networkzoneput) | **PUT** /1.0/network-zones/{zone} | Update the network zone|
|[**networkZoneRecordDelete**](#networkzonerecorddelete) | **DELETE** /1.0/network-zones/{zone}/records/{name} | Delete the network zone record|
|[**networkZoneRecordGet**](#networkzonerecordget) | **GET** /1.0/network-zones/{zone}/records/{name} | Get the network zone record|
|[**networkZoneRecordPatch**](#networkzonerecordpatch) | **PATCH** /1.0/network-zones/{zone}/records/{name} | Partially update the network zone record|
|[**networkZoneRecordPut**](#networkzonerecordput) | **PUT** /1.0/network-zones/{zone}/records/{name} | Update the network zone record|
|[**networkZoneRecordsGet**](#networkzonerecordsget) | **GET** /1.0/network-zones/{zone}/records | Get the network zone records|
|[**networkZoneRecordsGetRecursion1**](#networkzonerecordsgetrecursion1) | **GET** /1.0/network-zones/{zone}/records?recursion&#x3D;1 | Get the network zone records|
|[**networkZoneRecordsPost**](#networkzonerecordspost) | **POST** /1.0/network-zones/{zone}/records | Add a network zone record|
|[**networkZonesGet**](#networkzonesget) | **GET** /1.0/network-zones | Get the network zones|
|[**networkZonesGetRecursion1**](#networkzonesgetrecursion1) | **GET** /1.0/network-zones?recursion&#x3D;1 | Get the network zones|
|[**networkZonesPost**](#networkzonespost) | **POST** /1.0/network-zones | Add a network zone|

# **networkZoneDelete**
> ServerPut200Response networkZoneDelete()

Removes the network zone.

### Example

```typescript
import {
    NetworkZonesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkZonesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkZoneDelete(
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

# **networkZoneGet**
> NetworkZoneGet200Response networkZoneGet()

Gets a specific network zone.

### Example

```typescript
import {
    NetworkZonesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkZonesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkZoneGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**NetworkZoneGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | zone |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **networkZonePatch**
> ServerPut200Response networkZonePatch(zone)

Updates a subset of the network zone configuration.

### Example

```typescript
import {
    NetworkZonesApi,
    Configuration,
    NetworkZonePut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkZonesApi(configuration);

let zone: NetworkZonePut; //zone configuration
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkZonePatch(
    zone,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **zone** | **NetworkZonePut**| zone configuration | |
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

# **networkZonePut**
> ServerPut200Response networkZonePut(zone)

Updates the entire network zone configuration.

### Example

```typescript
import {
    NetworkZonesApi,
    Configuration,
    NetworkZonePut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkZonesApi(configuration);

let zone: NetworkZonePut; //zone configuration
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkZonePut(
    zone,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **zone** | **NetworkZonePut**| zone configuration | |
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

# **networkZoneRecordDelete**
> ServerPut200Response networkZoneRecordDelete()

Removes the network zone record.

### Example

```typescript
import {
    NetworkZonesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkZonesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkZoneRecordDelete(
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

# **networkZoneRecordGet**
> NetworkZoneRecordGet200Response networkZoneRecordGet()

Gets a specific network zone record.

### Example

```typescript
import {
    NetworkZonesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkZonesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkZoneRecordGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**NetworkZoneRecordGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | zone |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **networkZoneRecordPatch**
> ServerPut200Response networkZoneRecordPatch(zone)

Updates a subset of the network zone record configuration.

### Example

```typescript
import {
    NetworkZonesApi,
    Configuration,
    NetworkZoneRecordPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkZonesApi(configuration);

let zone: NetworkZoneRecordPut; //zone record configuration
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkZoneRecordPatch(
    zone,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **zone** | **NetworkZoneRecordPut**| zone record configuration | |
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

# **networkZoneRecordPut**
> ServerPut200Response networkZoneRecordPut(zone)

Updates the entire network zone record configuration.

### Example

```typescript
import {
    NetworkZonesApi,
    Configuration,
    NetworkZoneRecordPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkZonesApi(configuration);

let zone: NetworkZoneRecordPut; //zone record configuration
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkZoneRecordPut(
    zone,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **zone** | **NetworkZoneRecordPut**| zone record configuration | |
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

# **networkZoneRecordsGet**
> NetworkZoneRecordsGet200Response networkZoneRecordsGet()

Returns a list of network zone records (URLs).

### Example

```typescript
import {
    NetworkZonesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkZonesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.networkZoneRecordsGet(
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

**NetworkZoneRecordsGet200Response**

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

# **networkZoneRecordsGetRecursion1**
> NetworkZoneRecordsGetRecursion1200Response networkZoneRecordsGetRecursion1()

Returns a list of network zone records (structs).

### Example

```typescript
import {
    NetworkZonesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkZonesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.networkZoneRecordsGetRecursion1(
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

**NetworkZoneRecordsGetRecursion1200Response**

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

# **networkZoneRecordsPost**
> ServerPut200Response networkZoneRecordsPost(zone)

Creates a new network zone record.

### Example

```typescript
import {
    NetworkZonesApi,
    Configuration,
    NetworkZoneRecordsPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkZonesApi(configuration);

let zone: NetworkZoneRecordsPost; //zone
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkZoneRecordsPost(
    zone,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **zone** | **NetworkZoneRecordsPost**| zone | |
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

# **networkZonesGet**
> NetworkZonesGet200Response networkZonesGet()

Returns a list of network zones (URLs).

### Example

```typescript
import {
    NetworkZonesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkZonesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let allProjects: boolean; //Retrieve network zones from all projects (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.networkZonesGet(
    project,
    allProjects,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve network zones from all projects | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**NetworkZonesGet200Response**

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

# **networkZonesGetRecursion1**
> NetworkZonesGetRecursion1200Response networkZonesGetRecursion1()

Returns a list of network zones (structs).

### Example

```typescript
import {
    NetworkZonesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkZonesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let allProjects: boolean; //Retrieve network zones from all projects (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.networkZonesGetRecursion1(
    project,
    allProjects,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve network zones from all projects | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**NetworkZonesGetRecursion1200Response**

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

# **networkZonesPost**
> ServerPut200Response networkZonesPost(zone)

Creates a new network zone.

### Example

```typescript
import {
    NetworkZonesApi,
    Configuration,
    NetworkZonesPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkZonesApi(configuration);

let zone: NetworkZonesPost; //zone
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkZonesPost(
    zone,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **zone** | **NetworkZonesPost**| zone | |
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

