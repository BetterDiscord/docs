# ContextMenu

`ContextMenu` is a module to help patch and create context menus. Instance is accessible through the [BdApi](./bdapi).

## Properties



## Methods

### buildItem
Builds a single menu item. The only prop shown here is the type, the rest should match the actual component being built. View those to see what options exist for each, they often have less in common than you might think.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
props|object|&#x274C;|*none*|Props used to build the item
props.type|string|&#x2705;|"text"|Type of the item, options: text, submenu, toggle, radio, custom, separator

**Returns:** `object` - The created component
___

### buildMenu
Creates the menu *component* including the wrapping `ContextMenu`. Calls {@link ContextMenu.buildMenuChildren} under the covers. Used to call in combination with {@link ContextMenu.open}.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
setup|Array.&lt;object&gt;|Array of item props used to build items. See {@link ContextMenu.buildMenuChildren}.

**Returns:** `function` - The unique context menu component
___

### buildMenuChildren
Creates the all the items **and groups** of a context menu recursively. There is no hard limit to the number of groups within groups or number of items in a menu.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
setup|Array.&lt;object&gt;|Array of item props used to build items. See {@link ContextMenu.buildItem}.

**Returns:** `Array.<object>` - Array of the created component
___

### close
Closes the current opened context menu immediately.


**Returns:** `void`
___

### open
Function that allows you to open an entire context menu. Recommended to build the menu with this module.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
event|MouseEvent|&#x274C;|*none*|The context menu event. This can be emulated, requires target, and all X, Y locations.
menuComponent|function|&#x274C;|*none*|Component to render. This can be any React component or output of {@link ContextMenu.buildMenu}.
config|object|&#x274C;|*none*|Configuration/props for the context menu
config.position|string|&#x2705;|"right"|Default position for the menu, options: "left", "right"
config.align|string|&#x2705;|"top"|Default alignment for the menu, options: "bottom", "top"
config.onClose|function|&#x2705;|*none*|Function to run when the menu is closed

**Returns:** `void`
___

### patch
Allows you to patch a given context menu. Acts as a wrapper around the `Patcher`.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
navId|string|Discord's internal `navId` used to identify context menus
callback|function|Callback function that accepts the React render tree

**Returns:** `function` - A function that automatically unpatches
___

### unpatch
Allows you to remove the patch added to a given context menu.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
navId|string|The original `navId` from patching
callback|function|The original callback from patching

**Returns:** `void`
___
