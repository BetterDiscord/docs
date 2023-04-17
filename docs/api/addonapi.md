# AddonAPI

`AddonAPI` is a utility class for working with plugins and themes. Instances are accessible through the [BdApi](./bdapi).

## Properties

### folder
The path to the addon folder.

**Type:** `string`
___


## Methods

### disable
Disables the given addon.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
idOrFile|string|Addon ID or filename

**Returns:** `void`
___

### enable
Enables the given addon.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
idOrFile|string|Addon ID or filename

**Returns:** `void`
___

### get
Gets a particular addon.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
idOrFile|string|Addon ID or filename

**Returns:** `object` - Addon instance
___

### getAll
Gets all addons of this type.


**Returns:** `Array.<object>` - Array of all addon instances
___

### isEnabled
Determines if a particular addon is enabled.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
idOrFile|string|Addon ID or filename

**Returns:** `boolean`
___

### reload
Reloads if a particular addon is enabled.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
idOrFile|string|Addon ID or filename

**Returns:** `void`
___

### toggle
Toggles if a particular addon is enabled.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
idOrFile|string|Addon ID or filename

**Returns:** `void`
___
