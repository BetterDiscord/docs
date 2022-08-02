# Webpack

`Webpack` is a utility class for getting internal webpack modules. Instance is accessible through the [BdApi](./bdapi).This is extremely useful for interacting with the internals of Discord.

## Properties

### Filters
Series of [Filters](./filters) to be used for finding webpack modules.

**Type:** `Filters`
___


## Methods

### getBulk
Finds multiple modules using multiple filters.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
queries|...object|&#x274C;|*none*|Whether to return only the first matching module
queries.filter|function|&#x274C;|*none*|A function to use to filter modules
queries.first|Boolean|&#x2705;|true|Whether to return only the first matching module
queries.defaultExport|Boolean|&#x2705;|true|Whether to return default export when matching the default export

**Returns:** `any`
___

### getModule
Finds a module using a filter function.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
filter|function|&#x274C;|*none*|A function to use to filter modules. It is given exports, module, and moduleID. Return true to signify match.
options|object|&#x2705;|*none*|Whether to return only the first matching module
options.first|Boolean|&#x2705;|true|Whether to return only the first matching module
options.defaultExport|Boolean|&#x2705;|true|Whether to return default export when matching the default export

**Returns:** `any`
___

### waitForModule
Finds a module that lazily loaded.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
filter|function|&#x274C;|*none*|A function to use to filter modules. It is given exports. Return true to signify match.
options|object|&#x2705;|*none*|Whether to return only the first matching module
options.signal|AbortSignal|&#x2705;|*none*|AbortSignal of an AbortController to cancel the promise
options.defaultExport|Boolean|&#x2705;|true|Whether to return default export when matching the default export

**Returns:** `Promise.<any>`
___
