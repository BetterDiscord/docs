# Class: Logger

`Logger` is a helper class to log data in a nice and consistent way. An instance is available on [BdApi](BdApi.md).

## Methods

### debug()

> **debug**(`pluginName`, ...`messages`): `void`

Logs a message used for debugging purposes.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | Name of the calling module. |
| ...`messages` | `any`[] | Messages to log |

#### Returns

`void`

***

### error()

> **error**(`pluginName`, ...`messages`): `void`

Logs an error message.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | Name of the calling module |
| ...`messages` | `any`[] | Messages to log |

#### Returns

`void`

***

### info()

> **info**(`pluginName`, ...`messages`): `void`

Logs an informational message.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | Name of the calling module |
| ...`messages` | `any`[] | Messages to log |

#### Returns

`void`

***

### log()

> **log**(`pluginName`, ...`messages`): `void`

Logs a basic message.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | Name of the calling module. |
| ...`messages` | `any`[] | Messages to log |

#### Returns

`void`

***

### stacktrace()

> **stacktrace**(`pluginName`, `message`, `error`): `void`

Logs an error using a collapsed error group with stacktrace.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | Name of the calling module |
| `message` | `any` | Message or error to log |
| `error` | `Error` | Error object to log with the message |

#### Returns

`void`

***

### warn()

> **warn**(`pluginName`, ...`messages`): `void`

Logs a warning message.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | Name of the calling module |
| ...`messages` | `any`[] | Messages to log |

#### Returns

`void`
