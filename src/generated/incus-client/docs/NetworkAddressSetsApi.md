# NetworkAddressSetsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**networkAddressSetDelete**](#networkaddresssetdelete) | **DELETE** /1.0/network-address-sets/{name} | Delete the network address set|
|[**networkAddressSetGet**](#networkaddresssetget) | **GET** /1.0/network-address-sets/{name} | Get the network address set|
|[**networkAddressSetPatch**](#networkaddresssetpatch) | **PATCH** /1.0/network-address-sets/{name} | Partially update the network address set|
|[**networkAddressSetPost**](#networkaddresssetpost) | **POST** /1.0/network-address-sets/{name} | Rename the network address set|
|[**networkAddressSetPut**](#networkaddresssetput) | **PUT** /1.0/network-address-sets/{name} | Update the network address set|
|[**networkAddressSetsGet**](#networkaddresssetsget) | **GET** /1.0/network-address-sets | Get the network address sets|
|[**networkAddressSetsGetRecursion1**](#networkaddresssetsgetrecursion1) | **GET** /1.0/network-address-sets?recursion&#x3D;1 | Get the network address sets|
|[**networkAddressSetsPost**](#networkaddresssetspost) | **POST** /1.0/network-address-sets | Add a network address set|

# **networkAddressSetDelete**
> ServerPut200Response networkAddressSetDelete()

Removes the network address set.

### Example

```typescript
import {
    NetworkAddressSetsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkAddressSetsApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkAddressSetDelete(
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

# **networkAddressSetGet**
> NetworkAddressSetGet200Response networkAddressSetGet()

Gets a specific network address set.

### Example

```typescript
import {
    NetworkAddressSetsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkAddressSetsApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkAddressSetGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**NetworkAddressSetGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | address set |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **networkAddressSetPatch**
> ServerPut200Response networkAddressSetPatch(addressSet)

Updates a subset of the network address set configuration.

### Example

```typescript
import {
    NetworkAddressSetsApi,
    Configuration,
    NetworkAddressSetPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkAddressSetsApi(configuration);

let addressSet: NetworkAddressSetPut; //Address set configuration
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkAddressSetPatch(
    addressSet,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addressSet** | **NetworkAddressSetPut**| Address set configuration | |
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

# **networkAddressSetPost**
> ServerPut200Response networkAddressSetPost(addressSet)

Renames an existing network address set.

### Example

```typescript
import {
    NetworkAddressSetsApi,
    Configuration,
    NetworkAddressSetPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkAddressSetsApi(configuration);

let addressSet: NetworkAddressSetPost; //Address set rename request
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkAddressSetPost(
    addressSet,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addressSet** | **NetworkAddressSetPost**| Address set rename request | |
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

# **networkAddressSetPut**
> ServerPut200Response networkAddressSetPut(addressSet)

Updates the entire network address set configuration.

### Example

```typescript
import {
    NetworkAddressSetsApi,
    Configuration,
    NetworkAddressSetPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkAddressSetsApi(configuration);

let addressSet: NetworkAddressSetPut; //Address set configuration
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkAddressSetPut(
    addressSet,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addressSet** | **NetworkAddressSetPut**| Address set configuration | |
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

# **networkAddressSetsGet**
> NetworkAddressSetsGet200Response networkAddressSetsGet()

Returns a list of network address sets (URLs).

### Example

```typescript
import {
    NetworkAddressSetsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkAddressSetsApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let allProjects: boolean; //Retrieve network address sets from all projects (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.networkAddressSetsGet(
    project,
    allProjects,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve network address sets from all projects | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**NetworkAddressSetsGet200Response**

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

# **networkAddressSetsGetRecursion1**
> NetworkAddressSetsGetRecursion1200Response networkAddressSetsGetRecursion1()

Returns a list of network address sets (structs).

### Example

```typescript
import {
    NetworkAddressSetsApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkAddressSetsApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let allProjects: boolean; //Retrieve network address sets from all projects (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.networkAddressSetsGetRecursion1(
    project,
    allProjects,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve network address sets from all projects | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**NetworkAddressSetsGetRecursion1200Response**

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

# **networkAddressSetsPost**
> ServerPut200Response networkAddressSetsPost(addressSet)

Creates a new network address set.

### Example

```typescript
import {
    NetworkAddressSetsApi,
    Configuration,
    NetworkAddressSetsPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkAddressSetsApi(configuration);

let addressSet: NetworkAddressSetsPost; //address set
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkAddressSetsPost(
    addressSet,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addressSet** | **NetworkAddressSetsPost**| address set | |
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

