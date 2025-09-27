# ProfilesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**profileDelete**](#profiledelete) | **DELETE** /1.0/profiles/{name} | Delete the profile|
|[**profileGet**](#profileget) | **GET** /1.0/profiles/{name} | Get the profile|
|[**profilePatch**](#profilepatch) | **PATCH** /1.0/profiles/{name} | Partially update the profile|
|[**profilePost**](#profilepost) | **POST** /1.0/profiles/{name} | Rename the profile|
|[**profilePut**](#profileput) | **PUT** /1.0/profiles/{name} | Update the profile|
|[**profilesGet**](#profilesget) | **GET** /1.0/profiles | Get the profiles|
|[**profilesGetRecursion1**](#profilesgetrecursion1) | **GET** /1.0/profiles?recursion&#x3D;1 | Get the profiles|
|[**profilesPost**](#profilespost) | **POST** /1.0/profiles | Add a profile|

# **profileDelete**
> ServerPut200Response profileDelete()

Removes the profile.

### Example

```typescript
import {
    ProfilesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ProfilesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.profileDelete(
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

# **profileGet**
> ProfileGet200Response profileGet()

Gets a specific profile.

### Example

```typescript
import {
    ProfilesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ProfilesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.profileGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**ProfileGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Profile |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profilePatch**
> ServerPut200Response profilePatch(profile)

Updates a subset of the profile configuration.

### Example

```typescript
import {
    ProfilesApi,
    Configuration,
    ProfilePut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ProfilesApi(configuration);

let profile: ProfilePut; //Profile configuration
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.profilePatch(
    profile,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **profile** | **ProfilePut**| Profile configuration | |
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

# **profilePost**
> ServerPut200Response profilePost(profile)

Renames an existing profile.

### Example

```typescript
import {
    ProfilesApi,
    Configuration,
    ProfilePost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ProfilesApi(configuration);

let profile: ProfilePost; //Profile rename request
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.profilePost(
    profile,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **profile** | **ProfilePost**| Profile rename request | |
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

# **profilePut**
> ServerPut200Response profilePut(profile)

Updates the entire profile configuration.

### Example

```typescript
import {
    ProfilesApi,
    Configuration,
    ProfilePut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ProfilesApi(configuration);

let profile: ProfilePut; //Profile configuration
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.profilePut(
    profile,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **profile** | **ProfilePut**| Profile configuration | |
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

# **profilesGet**
> ProfilesGet200Response profilesGet()

Returns a list of profiles (URLs).

### Example

```typescript
import {
    ProfilesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ProfilesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let allProjects: boolean; //Retrieve profiles from all projects (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.profilesGet(
    project,
    allProjects,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve profiles from all projects | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**ProfilesGet200Response**

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

# **profilesGetRecursion1**
> ProfilesGetRecursion1200Response profilesGetRecursion1()

Returns a list of profiles (structs).

### Example

```typescript
import {
    ProfilesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ProfilesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let allProjects: boolean; //Retrieve profiles from all projects (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)

const { status, data } = await apiInstance.profilesGetRecursion1(
    project,
    allProjects,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve profiles from all projects | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|


### Return type

**ProfilesGetRecursion1200Response**

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

# **profilesPost**
> ServerPut200Response profilesPost(profile)

Creates a new profile.

### Example

```typescript
import {
    ProfilesApi,
    Configuration,
    ProfilesPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ProfilesApi(configuration);

let profile: ProfilesPost; //Profile
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.profilesPost(
    profile,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **profile** | **ProfilesPost**| Profile | |
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

