# Server

Server represents a server configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_extensions** | **Array&lt;string&gt;** | List of supported API extensions | [optional] [readonly] [default to undefined]
**api_status** | **string** | Support status of the current API (one of \&quot;devel\&quot;, \&quot;stable\&quot; or \&quot;deprecated\&quot;) | [optional] [readonly] [default to undefined]
**api_version** | **string** | API version number | [optional] [readonly] [default to undefined]
**auth** | **string** | Whether the client is trusted (one of \&quot;trusted\&quot; or \&quot;untrusted\&quot;) | [optional] [readonly] [default to undefined]
**auth_methods** | **Array&lt;string&gt;** | List of supported authentication methods | [optional] [readonly] [default to undefined]
**auth_user_method** | **string** | The current API user login method | [optional] [readonly] [default to undefined]
**auth_user_name** | **string** | The current API user identifier | [optional] [readonly] [default to undefined]
**config** | **object** | Server configuration map (refer to doc/server.md) | [optional] [default to undefined]
**environment** | [**ServerEnvironment**](ServerEnvironment.md) |  | [optional] [default to undefined]
**_public** | **boolean** | Whether the server is public-only (only public endpoints are implemented) | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Server } from 'incus-client';

const instance: Server = {
    api_extensions,
    api_status,
    api_version,
    auth,
    auth_methods,
    auth_user_method,
    auth_user_name,
    config,
    environment,
    _public,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
