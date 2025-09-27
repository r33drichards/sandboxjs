# InstanceExecPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **Array&lt;string&gt;** | Command and its arguments | [optional] [default to undefined]
**cwd** | **string** | Current working directory for the command | [optional] [default to undefined]
**environment** | **{ [key: string]: string; }** | Additional environment to pass to the command | [optional] [default to undefined]
**group** | **number** | GID of the user to spawn the command as | [optional] [default to undefined]
**height** | **number** | Terminal height in rows (for interactive) | [optional] [default to undefined]
**interactive** | **boolean** | Whether the command is to be spawned in interactive mode (singled PTY instead of 3 PIPEs) | [optional] [default to undefined]
**record_output** | **boolean** | Whether to capture the output for later download (requires non-interactive) | [optional] [default to undefined]
**user** | **number** | UID of the user to spawn the command as | [optional] [default to undefined]
**wait_for_websocket** | **boolean** | Whether to wait for all websockets to be connected before spawning the command | [optional] [default to undefined]
**width** | **number** | Terminal width in characters (for interactive) | [optional] [default to undefined]

## Example

```typescript
import { InstanceExecPost } from 'incus-client';

const instance: InstanceExecPost = {
    command,
    cwd,
    environment,
    group,
    height,
    interactive,
    record_output,
    user,
    wait_for_websocket,
    width,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
