# ImagesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**imageAliasDelete**](#imagealiasdelete) | **DELETE** /1.0/images/aliases/{name} | Delete the image alias|
|[**imageAliasGet**](#imagealiasget) | **GET** /1.0/images/aliases/{name} | Get the image alias|
|[**imageAliasGetUntrusted**](#imagealiasgetuntrusted) | **GET** /1.0/images/aliases/{name}?public | Get the public image alias|
|[**imageDelete**](#imagedelete) | **DELETE** /1.0/images/{fingerprint} | Delete the image|
|[**imageExportGet**](#imageexportget) | **GET** /1.0/images/{fingerprint}/export | Get the raw image file(s)|
|[**imageExportGetUntrusted**](#imageexportgetuntrusted) | **GET** /1.0/images/{fingerprint}/export?public | Get the raw image file(s)|
|[**imageGet**](#imageget) | **GET** /1.0/images/{fingerprint} | Get the image|
|[**imageGetUntrusted**](#imagegetuntrusted) | **GET** /1.0/images/{fingerprint}?public | Get the public image|
|[**imagePatch**](#imagepatch) | **PATCH** /1.0/images/{fingerprint} | Partially update the image|
|[**imagePut**](#imageput) | **PUT** /1.0/images/{fingerprint} | Update the image|
|[**imagesAliasPatch**](#imagesaliaspatch) | **PATCH** /1.0/images/aliases/{name} | Partially update the image alias|
|[**imagesAliasPost**](#imagesaliaspost) | **POST** /1.0/images/aliases/{name} | Rename the image alias|
|[**imagesAliasesGet**](#imagesaliasesget) | **GET** /1.0/images/aliases | Get the image aliases|
|[**imagesAliasesGetRecursion1**](#imagesaliasesgetrecursion1) | **GET** /1.0/images/aliases?recursion&#x3D;1 | Get the image aliases|
|[**imagesAliasesPost**](#imagesaliasespost) | **POST** /1.0/images/aliases | Add an image alias|
|[**imagesAliasesPut**](#imagesaliasesput) | **PUT** /1.0/images/aliases/{name} | Update the image alias|
|[**imagesExportPost**](#imagesexportpost) | **POST** /1.0/images/{fingerprint}/export | Make the server push the image to a remote server|
|[**imagesGet**](#imagesget) | **GET** /1.0/images | Get the images|
|[**imagesGetRecursion1**](#imagesgetrecursion1) | **GET** /1.0/images?recursion&#x3D;1 | Get the images|
|[**imagesGetRecursion1Untrusted**](#imagesgetrecursion1untrusted) | **GET** /1.0/images?public&amp;recursion&#x3D;1 | Get the public images|
|[**imagesGetUntrusted**](#imagesgetuntrusted) | **GET** /1.0/images?public | Get the public images|
|[**imagesPost**](#imagespost) | **POST** /1.0/images | Add an image|
|[**imagesPostUntrusted**](#imagespostuntrusted) | **POST** /1.0/images?public | Add an image|
|[**imagesRefreshPost**](#imagesrefreshpost) | **POST** /1.0/images/{fingerprint}/refresh | Refresh an image|
|[**imagesSecretPost**](#imagessecretpost) | **POST** /1.0/images/{fingerprint}/secret | Generate secret for retrieval of the image by an untrusted client|

# **imageAliasDelete**
> ServerPut200Response imageAliasDelete()

Deletes a specific image alias.

### Example

```typescript
import {
    ImagesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.imageAliasDelete(
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

# **imageAliasGet**
> ImageAliasGet200Response imageAliasGet()

Gets a specific image alias.

### Example

```typescript
import {
    ImagesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.imageAliasGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**ImageAliasGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Image alias |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **imageAliasGetUntrusted**
> ImageAliasGet200Response imageAliasGetUntrusted()

Gets a specific public image alias. This untrusted endpoint only works for aliases pointing to public images.

### Example

```typescript
import {
    ImagesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.imageAliasGetUntrusted(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**ImageAliasGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Image alias |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **imageDelete**
> ClusterMembersPost202Response imageDelete()

Removes the image from the image store.

### Example

```typescript
import {
    ImagesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.imageDelete(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**ClusterMembersPost202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Operation |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **imageExportGet**
> imageExportGet()

Download the raw image file(s) from the server. If the image is in split format, a multipart http transfer occurs.

### Example

```typescript
import {
    ImagesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.imageExportGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, multipart/form-data


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Raw image data |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **imageExportGetUntrusted**
> imageExportGetUntrusted()

Download the raw image file(s) of a public image from the server. If the image is in split format, a multipart http transfer occurs.

### Example

```typescript
import {
    ImagesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let secret: string; //Secret token to retrieve a private image (optional) (default to undefined)

const { status, data } = await apiInstance.imageExportGetUntrusted(
    project,
    secret
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **secret** | [**string**] | Secret token to retrieve a private image | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, multipart/form-data


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Raw image data |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **imageGet**
> ImageGet200Response imageGet()

Gets a specific image.

### Example

```typescript
import {
    ImagesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.imageGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**ImageGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Image |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **imageGetUntrusted**
> ImageGet200Response imageGetUntrusted()

Gets a specific public image.

### Example

```typescript
import {
    ImagesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let secret: string; //Secret token to retrieve a private image (optional) (default to undefined)

const { status, data } = await apiInstance.imageGetUntrusted(
    project,
    secret
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **secret** | [**string**] | Secret token to retrieve a private image | (optional) defaults to undefined|


### Return type

**ImageGet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Image |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **imagePatch**
> ServerPut200Response imagePatch(image)

Updates a subset of the image definition.

### Example

```typescript
import {
    ImagesApi,
    Configuration,
    ImagePut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let image: ImagePut; //Image configuration
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.imagePatch(
    image,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **image** | **ImagePut**| Image configuration | |
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

# **imagePut**
> ServerPut200Response imagePut(image)

Updates the entire image definition.

### Example

```typescript
import {
    ImagesApi,
    Configuration,
    ImagePut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let image: ImagePut; //Image configuration
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.imagePut(
    image,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **image** | **ImagePut**| Image configuration | |
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

# **imagesAliasPatch**
> ServerPut200Response imagesAliasPatch(imageAlias)

Updates a subset of the image alias configuration.

### Example

```typescript
import {
    ImagesApi,
    Configuration,
    ImageAliasesEntryPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let imageAlias: ImageAliasesEntryPut; //Image alias configuration
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.imagesAliasPatch(
    imageAlias,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **imageAlias** | **ImageAliasesEntryPut**| Image alias configuration | |
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

# **imagesAliasPost**
> ServerPut200Response imagesAliasPost(imageAlias)

Renames an existing image alias.

### Example

```typescript
import {
    ImagesApi,
    Configuration,
    ImageAliasesEntryPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let imageAlias: ImageAliasesEntryPost; //Image alias rename request
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.imagesAliasPost(
    imageAlias,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **imageAlias** | **ImageAliasesEntryPost**| Image alias rename request | |
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

# **imagesAliasesGet**
> ImagesAliasesGet200Response imagesAliasesGet()

Returns a list of image aliases (URLs).

### Example

```typescript
import {
    ImagesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.imagesAliasesGet(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**ImagesAliasesGet200Response**

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

# **imagesAliasesGetRecursion1**
> ImagesAliasesGetRecursion1200Response imagesAliasesGetRecursion1()

Returns a list of image aliases (structs).

### Example

```typescript
import {
    ImagesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.imagesAliasesGetRecursion1(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**ImagesAliasesGetRecursion1200Response**

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

# **imagesAliasesPost**
> ServerPut200Response imagesAliasesPost(imageAlias)

Creates a new image alias.

### Example

```typescript
import {
    ImagesApi,
    Configuration,
    ImageAliasesPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let imageAlias: ImageAliasesPost; //Image alias
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.imagesAliasesPost(
    imageAlias,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **imageAlias** | **ImageAliasesPost**| Image alias | |
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

# **imagesAliasesPut**
> ServerPut200Response imagesAliasesPut(imageAlias)

Updates the entire image alias configuration.

### Example

```typescript
import {
    ImagesApi,
    Configuration,
    ImageAliasesEntryPut
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let imageAlias: ImageAliasesEntryPut; //Image alias configuration
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.imagesAliasesPut(
    imageAlias,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **imageAlias** | **ImageAliasesEntryPut**| Image alias configuration | |
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

# **imagesExportPost**
> ClusterMembersPost202Response imagesExportPost(image)

Gets the server to connect to a remote server and push the image to it.

### Example

```typescript
import {
    ImagesApi,
    Configuration,
    ImageExportPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let image: ImageExportPost; //Image push request
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.imagesExportPost(
    image,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **image** | **ImageExportPost**| Image push request | |
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**ClusterMembersPost202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Operation |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **imagesGet**
> ImagesGet200Response imagesGet()

Returns a list of images (URLs).

### Example

```typescript
import {
    ImagesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)
let allProjects: boolean; //Retrieve images from all projects (optional) (default to undefined)

const { status, data } = await apiInstance.imagesGet(
    project,
    filter,
    allProjects
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve images from all projects | (optional) defaults to undefined|


### Return type

**ImagesGet200Response**

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

# **imagesGetRecursion1**
> ImagesGetRecursion1Untrusted200Response imagesGetRecursion1()

Returns a list of images (structs).

### Example

```typescript
import {
    ImagesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)
let allProjects: boolean; //Retrieve images from all projects (optional) (default to undefined)

const { status, data } = await apiInstance.imagesGetRecursion1(
    project,
    filter,
    allProjects
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve images from all projects | (optional) defaults to undefined|


### Return type

**ImagesGetRecursion1Untrusted200Response**

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

# **imagesGetRecursion1Untrusted**
> ImagesGetRecursion1Untrusted200Response imagesGetRecursion1Untrusted()

Returns a list of publicly available images (structs).

### Example

```typescript
import {
    ImagesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)
let allProjects: boolean; //Retrieve images from all projects (optional) (default to undefined)

const { status, data } = await apiInstance.imagesGetRecursion1Untrusted(
    project,
    filter,
    allProjects
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve images from all projects | (optional) defaults to undefined|


### Return type

**ImagesGetRecursion1Untrusted200Response**

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

# **imagesGetUntrusted**
> ImagesGet200Response imagesGetUntrusted()

Returns a list of publicly available images (URLs).

### Example

```typescript
import {
    ImagesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let filter: string; //Collection filter (optional) (default to undefined)
let allProjects: boolean; //Retrieve images from all projects (optional) (default to undefined)

const { status, data } = await apiInstance.imagesGetUntrusted(
    project,
    filter,
    allProjects
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **filter** | [**string**] | Collection filter | (optional) defaults to undefined|
| **allProjects** | [**boolean**] | Retrieve images from all projects | (optional) defaults to undefined|


### Return type

**ImagesGet200Response**

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

# **imagesPost**
> ClusterMembersPost202Response imagesPost()

Adds a new image to the image store.

### Example

```typescript
import {
    ImagesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let project: string; //Project name (optional) (default to undefined)
let xIncusSecret: any; //Push secret for server to server communication (optional) (default to undefined)
let xIncusFingerprint: any; //Expected fingerprint when pushing a raw image (optional) (default to undefined)
let xIncusAliases: any; //List of aliases to assign (optional) (default to undefined)
let xIncusProperties: any; //Descriptive properties (optional) (default to undefined)
let xIncusPublic: any; //Whether the image is available to unauthenticated users (optional) (default to undefined)
let xIncusFilename: any; //Original filename of the image (optional) (default to undefined)
let xIncusProfiles: any; //List of profiles to use (optional) (default to undefined)

const { status, data } = await apiInstance.imagesPost(
    project,
    xIncusSecret,
    xIncusFingerprint,
    xIncusAliases,
    xIncusProperties,
    xIncusPublic,
    xIncusFilename,
    xIncusProfiles
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|
| **xIncusSecret** | **any** | Push secret for server to server communication | (optional) defaults to undefined|
| **xIncusFingerprint** | **any** | Expected fingerprint when pushing a raw image | (optional) defaults to undefined|
| **xIncusAliases** | **any** | List of aliases to assign | (optional) defaults to undefined|
| **xIncusProperties** | **any** | Descriptive properties | (optional) defaults to undefined|
| **xIncusPublic** | **any** | Whether the image is available to unauthenticated users | (optional) defaults to undefined|
| **xIncusFilename** | **any** | Original filename of the image | (optional) defaults to undefined|
| **xIncusProfiles** | **any** | List of profiles to use | (optional) defaults to undefined|


### Return type

**ClusterMembersPost202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Operation |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **imagesPostUntrusted**
> ServerPut200Response imagesPostUntrusted(image)

Pushes the data to the target image server. This is meant for server to server communication where a new image entry is prepared on the target server and the source server is provided that URL and a secret token to push the image content over.

### Example

```typescript
import {
    ImagesApi,
    Configuration,
    ImagesPost
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let image: ImagesPost; //Image
let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.imagesPostUntrusted(
    image,
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **image** | **ImagesPost**| Image | |
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

# **imagesRefreshPost**
> ClusterMembersPost202Response imagesRefreshPost()

This causes the server to check the image source server for an updated version of the image and if available to refresh the local copy with the new version.

### Example

```typescript
import {
    ImagesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.imagesRefreshPost(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**ClusterMembersPost202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Operation |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **imagesSecretPost**
> ClusterMembersPost202Response imagesSecretPost()

This generates a background operation including a secret one time key in its metadata which can be used to fetch this image from an untrusted client.

### Example

```typescript
import {
    ImagesApi,
    Configuration
} from 'incus-client';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let project: string; //Project name (optional) (default to undefined)

const { status, data } = await apiInstance.imagesSecretPost(
    project
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **project** | [**string**] | Project name | (optional) defaults to undefined|


### Return type

**ClusterMembersPost202Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Operation |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

