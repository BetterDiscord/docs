# Filters

Series of [Filters](./filters) to be used for finding webpack modules.

## Properties



## Methods

### byDisplayName
Generates a function that filters by a set of properties.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
name|string|Name the module should have

**Returns:** `function` - A filter that checks for a set of properties
___

### byProps
Generates a function that filters by a set of properties.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
props|...string|List of property names

**Returns:** `function` - A filter that checks for a set of properties
___

### byPrototypeFields
Generates a function that filters by a set of properties on the object's prototype.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
props|...string|List of property names

**Returns:** `function` - A filter that checks for a set of properties on the object's prototype.
___

### byRegex
Generates a function that filters by a regex.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
search|RegExp|A RegExp to check on the module
filter|function|Additional filter

**Returns:** `function` - A filter that checks for a regex match
___

### byStrings
Generates a function that filters by strings.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
strings|...String|A list of strings

**Returns:** `function` - A filter that checks for a set of strings
___

### combine
Generates a combined function from a list of filters.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
filters|...function|A list of filters

**Returns:** `function` - Combinatory filter of all arguments
___
