# InstanceState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu** | [**InstanceStateCPU**](InstanceStateCPU.md) |  | [optional] [default to undefined]
**disk** | [**{ [key: string]: InstanceStateDisk; }**](InstanceStateDisk.md) | Disk usage key/value pairs | [optional] [default to undefined]
**memory** | [**InstanceStateMemory**](InstanceStateMemory.md) |  | [optional] [default to undefined]
**network** | [**{ [key: string]: InstanceStateNetwork; }**](InstanceStateNetwork.md) | Network usage key/value pairs | [optional] [default to undefined]
**os_info** | [**InstanceStateOSInfo**](InstanceStateOSInfo.md) |  | [optional] [default to undefined]
**pid** | **number** | PID of the runtime | [optional] [default to undefined]
**processes** | **number** | Number of processes in the instance | [optional] [default to undefined]
**started_at** | **string** | The time that the instance started at  API extension: instance_state_started_at. | [optional] [default to undefined]
**status** | **string** | Current status (Running, Stopped, Frozen or Error) | [optional] [default to undefined]
**status_code** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { InstanceState } from 'incus-client';

const instance: InstanceState = {
    cpu,
    disk,
    memory,
    network,
    os_info,
    pid,
    processes,
    started_at,
    status,
    status_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
