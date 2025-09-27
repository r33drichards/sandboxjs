# NetworkPeersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**networkPeerDelete**](#networkpeerdelete) | **DELETE** /1.0/networks/{networkName}/peers/{peerName} | Delete the network peer|
|[**networkPeerGet**](#networkpeerget) | **GET** /1.0/networks/{networkName}/peers/{peerName} | Get the network peer|
|[**networkPeerGetRecursion1**](#networkpeergetrecursion1) | **GET** /1.0/networks/{networkName}/peers?recursion&#x3D;1 | Get the network peers|
|[**networkPeerPatch**](#networkpeerpatch) | **PATCH** /1.0/networks/{networkName}/peers/{peerName} | Partially update the network peer|
|[**networkPeerPut**](#networkpeerput) | **PUT** /1.0/networks/{networkName}/peers/{peerName} | Update the network peer|
|[**networkPeersGet**](#networkpeersget) | **GET** /1.0/networks/{networkName}/peers | Get the network peers|
|[**networkPeersPost**](#networkpeerspost) | **POST** /1.0/networks/{networkName}/peers | Add a network peer|

# **networkPeerDelete**
> ServerPut200Response networkPeerDelete()

Removes the network peering.

### Example

```typescript
import {
    NetworkPeersApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkPeersApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkPeerDelete(
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

# **networkPeerGet**
> NetworkPeerGet200Response networkPeerGet()

Gets a specific network peering.

### Example

```typescript
import {
    NetworkPeersApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkPeersApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkPeerGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**NetworkPeerGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Peer |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **networkPeerGetRecursion1**
> NetworkPeerGetRecursion1200Response networkPeerGetRecursion1()

Returns a list of network peers (structs).

### Example

```typescript
import {
    NetworkPeersApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkPeersApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.networkPeerGetRecursion1(
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

**NetworkPeerGetRecursion1200Response**

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

# **networkPeerPatch**
> ServerPut200Response networkPeerPatch(peer)

Updates a subset of the network peering configuration.

### Example

```typescript
import {
    NetworkPeersApi,
    Configuration,
    NetworkPeerPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkPeersApi(configuration);

let peer: NetworkPeerPut; //Peer configuration
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkPeerPatch(
    peer,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peer** | **NetworkPeerPut**| Peer configuration | |
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

# **networkPeerPut**
> ServerPut200Response networkPeerPut(peer)

Updates the entire network peering configuration.

### Example

```typescript
import {
    NetworkPeersApi,
    Configuration,
    NetworkPeerPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkPeersApi(configuration);

let peer: NetworkPeerPut; //Peer configuration
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkPeerPut(
    peer,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peer** | **NetworkPeerPut**| Peer configuration | |
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

# **networkPeersGet**
> NetworkPeersGet200Response networkPeersGet()

Returns a list of network peers (URLs).

### Example

```typescript
import {
    NetworkPeersApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkPeersApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.networkPeersGet(
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

**NetworkPeersGet200Response**

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

# **networkPeersPost**
> ServerPut200Response networkPeersPost(peer)

Initiates/creates a new network peering.

### Example

```typescript
import {
    NetworkPeersApi,
    Configuration,
    NetworkPeersPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new NetworkPeersApi(configuration);

let peer: NetworkPeersPost; //Peer
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.networkPeersPost(
    peer,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peer** | **NetworkPeersPost**| Peer | |
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
|**202** | Empty sync response |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

