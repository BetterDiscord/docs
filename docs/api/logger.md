# Logger

`Logger` is a helper class to log data in a nice and consistent way. An instance is available on [BdApi](./bdapi).

## Properties



## Methods

### debug
Logs used for debugging purposes.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
module|string|Name of the calling module.
message|...any|Messages to have logged.

**Returns:** `void`
___

### error
Logs an error message.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
pluginName|string|Name of the calling module
message|...any|Messages to have logged.

**Returns:** `void`
___

### info
Logs an informational message.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
module|string|Name of the calling module.
message|...any|Messages to have logged.

**Returns:** `void`
___

### log
Logs used for basic logging.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
module|string|Name of the calling module.
message|...any|Messages to have logged.

**Returns:** `void`
___

### stacktrace
Logs an error using a collapsed error group with stacktrace.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
pluginName|string|Name of the calling module.
message|string|Message or error to have logged.
error|Error|Error object to log with the message.

**Returns:** `void`
___

### warn
Logs a warning message.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
module|string|Name of the calling module.
message|...any|Messages to have logged.

**Returns:** `void`
___
