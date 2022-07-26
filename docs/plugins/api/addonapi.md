# AddonAPI

`AddonAPI` is a utility class for working with plugins and themes. Instances are accessible through the [BdApi](./bdapi).

## Properties

### folder
The path to the addon folder.

**Type:** `string`
___


## Methods

### isEnabled
Determines if a particular adon is enabled.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
idOrFile|string|Plugin id or filename.

**Returns:** `boolean`
___

### enable
Enables the given addon.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
idOrFile|string|Plugin id or filename.

**Returns:** `void`
___

### disable
Disables the given addon.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
idOrFile|string|Plugin id or filename.

**Returns:** `void`
___

### toggle
Toggles the given addon.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
idOrFile|string|Plugin id or filename.

**Returns:** `void`
___

### reload
Reloads the given addon.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
idOrFile|string|Plugin id or filename.

**Returns:** `void`
___

### get
Gets the given addon if it exists and returns the addon object.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
idOrFile|string|Plugin id or filename.

**Returns:** `{object|undefined}`
___

### getAll
Gets all addons of this type.


**Returns:** `Array<object>`
___
