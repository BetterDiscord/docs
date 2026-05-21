# Class: BoundLogger

`BoundLogger` is a helper class to log data in a nice and consistent way, with plugin scoping automatically supplied.
An instance is available on instances of [BdApi](BdApi.md).

## Methods

### debug()

> **debug**(...`messages`): `void`

Logs a message used for debugging purposes.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`messages` | `any`[] | Messages to log |

#### Returns

`void`

***

### error()

> **error**(...`messages`): `void`

Logs an error message.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`messages` | `any`[] | Messages to log |

#### Returns

`void`

***

### info()

> **info**(...`messages`): `void`

Logs an informational message.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`messages` | `any`[] | Messages to log |

#### Returns

`void`

***

### log()

> **log**(...`messages`): `void`

Logs a basic message.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`messages` | `any`[] | Messages to log |

#### Returns

`void`

***

### stacktrace()

> **stacktrace**(`message`, `error`): `void`

Logs an error using a collapsed error group with stacktrace.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `any` | Message or error to log |
| `error` | `Error` | Error object to log with the message |

#### Returns

`void`

***

### warn()

> **warn**(...`messages`): `void`

Logs a warning message.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`messages` | `any`[] | Messages to log |

#### Returns

`void`
