# Webpack

`Webpack` is a utility class for getting internal webpack modules. Instance is accessible through the [BdApi](./bdapi). This is extremely useful for interacting with the internals of Discord.

## Properties

### Filters
Series of [Filters](./filters) to be used for finding webpack modules.

**Type:** `Filters`
___

### modules
A Proxy that returns the module source by ID.

**Type:** `modules`
___


## Methods

### getAllByKeys
Finds all modules with a set of properties.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
props|...string|Properties to use to filter modules

**Returns:** `Array.<Any>`
___

### getAllByPrototypeKeys
Finds all modules with a set of properties of its prototype.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
prototypes|...string|Properties to use to filter modules

**Returns:** `Array.<Any>`
___

### getAllByRegex
Finds all modules using its code.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
regex|RegEx|&#x274C;|*none*|A regular expression to use to filter modules
options|object|&#x2705;|*none*|Options to configure the search
options.defaultExport|Boolean|&#x2705;|true|Whether to return default export when matching the default export
options.searchExports|Boolean|&#x2705;|false|Whether to execute the filter on webpack exports

**Returns:** `Array.<Any>`
___

### getAllByStrings
Finds all modules with a set of strings.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
strings|...String|Strings to use to filter modules

**Returns:** `Array.<Any>`
___

### getBulk
Finds multiple modules using multiple filters.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
queries|...object|&#x274C;|*none*|Object representing the query to perform
queries.filter|function|&#x274C;|*none*|A function to use to filter modules
queries.first|boolean|&#x2705;|true|Whether to return only the first matching module
queries.defaultExport|boolean|&#x2705;|true|Whether to return default export when matching the default export
queries.searchExports|boolean|&#x2705;|false|Whether to execute the filter on webpack exports

**Returns:** `any`
___

### getByKeys
Finds a single module using its own properties.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
props|...string|Properties to use to filter modules

**Returns:** `Any`
___

### getByPrototypeKeys
Finds a single module using properties on its prototype.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
prototypes|...string|Properties to use to filter modules

**Returns:** `Any`
___

### getByRegex
Finds a module using its code.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
regex|RegEx|&#x274C;|*none*|A regular expression to use to filter modules
options|object|&#x2705;|*none*|Options to configure the search
options.defaultExport|Boolean|&#x2705;|true|Whether to return default export when matching the default export
options.searchExports|Boolean|&#x2705;|false|Whether to execute the filter on webpack exports

**Returns:** `Any`
___

### getByStrings
Finds a single module using a set of strings.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
props|...String|Strings to use to filter modules

**Returns:** `Any`
___

### getModule
Finds a module using a filter function.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
filter|function|&#x274C;|*none*|A function to use to filter modules. It is given exports, module, and moduleID. Return `true` to signify match.
options|object|&#x2705;|*none*|Options to configure the search
options.first|boolean|&#x2705;|true|Whether to return only the first matching module
options.defaultExport|boolean|&#x2705;|true|Whether to return default export when matching the default export
options.searchExports|boolean|&#x2705;|false|Whether to execute the filter on webpack exports

**Returns:** `any`
___

### getModules
Finds all modules matching a filter function.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
filter|function|&#x274C;|*none*|A function to use to filter modules
options|object|&#x2705;|*none*|Options to configure the search
options.defaultExport|Boolean|&#x2705;|true|Whether to return default export when matching the default export
options.searchExports|Boolean|&#x2705;|false|Whether to execute the filter on webpack exports

**Returns:** `Array.<any>`
___

### getStore
Finds an internal Store module using the name.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
name|String|Name of the store to find (usually includes "Store")

**Returns:** `Any`
___

### getWithKey
Searches for a module by value, returns module & matched key. Useful in combination with the Patcher.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
filter|function|&#x274C;|*none*|A function to use to filter the module. It is given exports, module, and moduleID.
options|object|&#x2705;|*none*|Set of options to customize the search
options.target|any|&#x2705;|*none*|Optional module target to look inside.
options.defaultExport|Boolean|&#x2705;|true|Whether to return default export when matching the default export
options.searchExports|Boolean|&#x2705;|false|Whether to execute the filter on webpack export getters.

**Returns:** `Array.<any, string>`
___

### waitForModule
Finds a module that is lazily loaded.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
filter|function|&#x274C;|*none*|A function to use to filter modules. It is given exports. Return `true` to signify match.
options|object|&#x2705;|*none*|Options for configuring the listener
options.signal|AbortSignal|&#x2705;|*none*|AbortSignal of an AbortController to cancel the promise
options.defaultExport|boolean|&#x2705;|true|Whether to return default export when matching the default export
options.searchExports|boolean|&#x2705;|false|Whether to execute the filter on webpack exports

**Returns:** `Promise.<any>`
___
