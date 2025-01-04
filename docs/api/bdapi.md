# BdApi

`BdApi` is a globally (`window.BdApi`) accessible object for use by plugins and developers to make their lives easier.

## Properties

### Components
A set of [react components](./components.md) plugins can make use of.

**Type:** `Components`
___

### ContextMenu
An instance of [ContextMenu](./contextmenu) for interacting with context menus.

**Type:** `ContextMenu`
___

### DOM
An instance of [DOM](./dom) to interact with the DOM.

**Type:** `DOM`
___

### Data
An instance of [Data](./data) to manage data.

**Type:** `Data`
___

### Logger
An instance of [Logger](./logger.md) for logging information.

**Type:** `Logger`
___

### Net
An instance of [Net](./net.md) for using network related tools.

**Type:** `Net`
___

### Patcher
An instance of [Patcher](./patcher) to monkey patch functions.

**Type:** `Patcher`
___

### Plugins
An instance of [AddonAPI](./addonapi) to access plugins.

**Type:** `AddonAPI`
___

### React
The React module being used inside Discord.

**Type:** `React`
___

### ReactDOM
The ReactDOM module being used inside Discord.

**Type:** `ReactDOM`
___

### ReactUtils
An instance of [ReactUtils](./reactutils) to work with React.

**Type:** `ReactUtils`
___

### Themes
An instance of [AddonAPI](./addonapi) to access themes.

**Type:** `AddonAPI`
___

### UI
An instance of [UI](./ui) to create interfaces.

**Type:** `UI`
___

### Utils
An instance of [Utils](./utils) for general utility functions.

**Type:** `Utils`
___

### Webpack
An instance of [Webpack](./webpack) to search for modules.

**Type:** `Webpack`
___

### emotes <Badge type="danger">deprecated</Badge>
A reference object for BD's emotes.

**Type:** `object`
___

### settings <Badge type="danger">deprecated</Badge>
A reference object to get BD's settings.

**Type:** `object`
___

### version
A reference string for BD's version.

**Type:** `string`
___


## Methods

::: danger

All methods directly on the `BdApi` object have been deprecated for a long time and are slated for removal. Do not use these in new projects!

:::

### alert <Badge type="danger">deprecated</Badge>
Shows a generic but very customizable modal.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
title|string|Title of the modal
content|string\|ReactElement\|Array.&lt;(string\|ReactElement)&gt;|A string of text to display in the modal

**Returns:** `void`
___

### clearCSS <Badge type="danger">deprecated</Badge>
Removes a `<style>` from the document corresponding to the given ID.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
id|string|ID uses for the style element

**Returns:** `void`
___

### deleteData <Badge type="danger">deprecated</Badge>
Deletes a piece of stored data. This is different from saving `null` or `undefined`.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
pluginName|string|Name of the plugin deleting data
key|string|Which piece of data to delete

**Returns:** `void`
___

### disableSetting <Badge type="danger">deprecated</Badge>
Disables a BetterDiscord setting by IDs.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
collection|string|&#x2705;|"settings"|Collection ID
category|string|&#x274C;|*none*|Category ID in the collection
id|string|&#x274C;|*none*|Setting ID in the category

**Returns:** `void`
___

### enableSetting <Badge type="danger">deprecated</Badge>
Enables a BetterDiscord setting by IDs.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
collection|string|&#x2705;|"settings"|Collection ID
category|string|&#x274C;|*none*|Category ID in the collection
id|string|&#x274C;|*none*|Setting ID in the category

**Returns:** `void`
___

### findAllModules <Badge type="danger">deprecated</Badge>
Finds multiple webpack modules using a filter.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
filter|function|A filter given the exports, module, and moduleId. Returns `true` if the module matches.

**Returns:** `Array` - Either an array of matching modules or an empty array
___

### findModule <Badge type="danger">deprecated</Badge>
Finds a webpack module using a filter.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
filter|function|A filter given the exports, module, and moduleId. Returns `true` if the module matches.

**Returns:** `any` - Either the matching module or `undefined`
___

### findModuleByDisplayName <Badge type="danger">deprecated</Badge>
Finds a webpack module by `displayName` property.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
name|string|Desired `displayName` property

**Returns:** `any` - Either the matching module or `undefined`
___

### findModuleByProps <Badge type="danger">deprecated</Badge>
Finds a webpack module by own properties.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
props|...string|Any desired properties

**Returns:** `any` - Either the matching module or `undefined`
___

### findModuleByPrototypes <Badge type="danger">deprecated</Badge>
Finds a webpack module by own prototypes.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
protos|...string|Any desired prototype properties

**Returns:** `any` - Either the matching module or `undefined`
___

### getBDData <Badge type="danger">deprecated</Badge>
Gets some data in BetterDiscord's misc data.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
key|string|Key of the data to load

**Returns:** `any` - The stored data
___

### getInternalInstance <Badge type="danger">deprecated</Badge>
Gets the internal React data of a specified node.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
node|HTMLElement|Node to get the internal React data from.

**Returns:** `object` - Either the found data or `undefined`
___

### injectCSS <Badge type="danger">deprecated</Badge>
Adds a `<style>` to the document with the given ID.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
id|string|ID to use for style element
css|string|CSS to apply to the document

**Returns:** `void`
___

### isSettingEnabled <Badge type="danger">deprecated</Badge>
Gets a specific setting's status from BD.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
collection|string|&#x2705;|"settings"|Collection ID
category|string|&#x274C;|*none*|Category ID in the collection
id|string|&#x274C;|*none*|Setting ID in the category

**Returns:** `boolean` - If the setting is enabled
___

### linkJS <Badge type="danger">deprecated</Badge>
Automatically creates and links a remote JS script.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
id|string|ID of the script element
url|string|URL of the remote script

**Returns:** `Promise` - Resolves upon onload event
___

### loadData <Badge type="danger">deprecated</Badge>
Loads previously stored data.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
pluginName|string|Name of the plugin loading data
key|string|Which piece of data to load

**Returns:** `any` - The stored data
___

### monkeyPatch <Badge type="danger">deprecated</Badge>
Monkey-patches a method on an object. The patching callback may be run before, after or instead of target method.

 - Be careful when monkey-patching. Think not only about original functionality of target method and your changes, but also about developers of other plugins, who may also patch this method before or after you. Try to change target method behaviour as little as possible, and avoid changing method signatures.
 - Display name of patched method is changed, so you can see if a function has been patched (and how many times) while debugging or in the stack trace. Also, patched methods have property `__monkeyPatched` set to `true`, in case you want to check something programmatically.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
what|object|&#x274C;|*none*|Object to be patched. You can can also pass class prototypes to patch all class instances.
methodName|string|&#x274C;|*none*|Name of the function to be patched
options|object|&#x274C;|*none*|Options object to configure the patch
options.after|function|&#x2705;|*none*|Callback that will be called after original target method call. You can modify return value here, so it will be passed to external code which calls target method. Can be combined with `before`.
options.before|function|&#x2705;|*none*|Callback that will be called before original target method call. You can modify arguments here, so it will be passed to original method. Can be combined with `after`.
options.instead|function|&#x2705;|*none*|Callback that will be called instead of original target method call. You can get access to original method using `originalMethod` parameter if you want to call it, but you do not have to. Can't be combined with `before` or `after`.
options.once|boolean|&#x2705;|false|Set to `true` if you want to automatically unpatch method after first call
options.silent|boolean|&#x2705;|false|Set to `true` if you want to suppress log messages about patching and unpatching

**Returns:** `function` - A function that cancels the monkey patch
___

### onRemoved <Badge type="danger">deprecated</Badge>
Adds a listener for when the node is removed from the document body.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
node|HTMLElement|Node to be observed
callback|function|Function to run when removed

**Returns:** `void`
___

### openDialog <Badge type="danger">deprecated</Badge>
Gives access to the [Electron Dialog](https://www.electronjs.org/docs/latest/api/dialog/) api. Returns a `Promise` that resolves to an `object` that has a `boolean` cancelled and a `filePath` string for saving and a `filePaths` string array for opening.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
options|object|&#x274C;|*none*|Options object to configure the dialog
options.mode|"open"\|"save"|&#x2705;|"open"|Determines whether the dialog should open or save files
options.defaultPath|string|&#x2705;|~|Path the dialog should show on launch
options.filters|Array.&lt;object.&lt;string, Array.&lt;string&gt;&gt;&gt;|&#x2705;|[]|An array of [file filters](https://www.electronjs.org/docs/latest/api/structures/file-filter)
options.title|string|&#x2705;|*none*|Title for the titlebar
options.message|string|&#x2705;|*none*|Message for the dialog
options.showOverwriteConfirmation|boolean|&#x2705;|false|Whether the user should be prompted when overwriting a file
options.showHiddenFiles|boolean|&#x2705;|false|Whether hidden files should be shown in the dialog
options.promptToCreate|boolean|&#x2705;|false|Whether the user should be prompted to create non-existent folders
options.openDirectory|boolean|&#x2705;|false|Whether the user should be able to select a directory as a target
options.openFile|boolean|&#x2705;|true|Whether the user should be able to select a file as a target
options.multiSelections|boolean|&#x2705;|false|Whether the user should be able to select multiple targets
options.modal|boolean|&#x2705;|false|Whether the dialog should act as a modal to the main window

**Returns:** `Promise.<object>` - Result of the dialog
___

### saveData <Badge type="danger">deprecated</Badge>
Saves JSON-serializable data.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
pluginName|string|Name of the plugin saving data
key|string|Which piece of data to store
data|any|The data to be saved

**Returns:** `void`
___

### setBDData <Badge type="danger">deprecated</Badge>
Sets some data in BetterDiscord's misc data.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
key|string|Key of the data to store

**Returns:** `any` - The stored data
___

### showConfirmationModal <Badge type="danger">deprecated</Badge>
Shows a generic but very customizable confirmation modal with optional confirm and cancel callbacks.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
title|string|&#x274C;|*none*|Title of the modal
children|string\|ReactElement\|Array.&lt;(string\|ReactElement)&gt;|&#x274C;|*none*|Single or mixed array of React elements and strings. Everything is wrapped in Discord's `TextElement` component so strings will show and render properly.
options|object|&#x2705;|*none*|Options to modify the modal
options.danger|boolean|&#x2705;|false|Whether the main button should be red or not
options.confirmText|string|&#x2705;|Okay|Text for the confirmation/submit button
options.cancelText|string|&#x2705;|Cancel|Text for the cancel button
options.onConfirm|callable|&#x2705;|NOOP|Callback to occur when clicking the submit button
options.onCancel|callable|&#x2705;|NOOP|Callback to occur when clicking the cancel button

**Returns:** `string` - The key used for this modal
___

### showNotice <Badge type="danger">deprecated</Badge>
Shows a notice above Discord's chat layer.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
content|string\|Node|&#x274C;|*none*|Content of the notice
options|object|&#x274C;|*none*|Options for the notice
options.type|string|&#x2705;|"info" | "error" | "warning" | "success"|Type for the notice. Will affect the color.
options.buttons|Array.&lt;{label: string, onClick: function()}&gt;|&#x2705;|*none*|Buttons that should be added next to the notice text
options.timeout|number|&#x2705;|10000|Timeout until the notice is closed. Will not fire when set to `0`.

**Returns:** `function` - A callback for closing the notice. Passing `true` as first parameter closes immediately without transitioning out.
___

### showToast <Badge type="danger">deprecated</Badge>
Shows a toast similar to android towards the bottom of the screen.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
content|string|&#x274C;|*none*|The string to show in the toast
options|object|&#x274C;|*none*|Options object. Optional parameter
options.type|string|&#x2705;|""|Changes the type of the toast stylistically and semantically. Choices: "", "info", "success", "danger"/"error", "warning"/"warn". Default: "".
options.icon|boolean|&#x2705;|true|Determines whether the icon should show corresponding to the type. A toast without type will always have no icon. Default: `true`.
options.timeout|number|&#x2705;|3000|Adjusts the time (in ms) the toast should be shown for before disappearing automatically. Default: `3000`.
options.forceShow|boolean|&#x2705;|false|Whether to force showing the toast and ignore the BD setting

**Returns:** `void`
___

### suppressErrors <Badge type="danger">deprecated</Badge>
Wraps a given function in a `try..catch` block.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
method|function|Function to wrap
message|string|Additional message to print when an error occurs

**Returns:** `function` - The new wrapped function
___

### testJSON <Badge type="danger">deprecated</Badge>
Tests a given object to determine if it is valid JSON.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
data|object|Data to be tested

**Returns:** `boolean` - Result of the test
___

### toggleSetting <Badge type="danger">deprecated</Badge>
Toggles a BetterDiscord setting by IDs.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
collection|string|&#x2705;|"settings"|Collection ID
category|string|&#x274C;|*none*|Category ID in the collection
id|string|&#x274C;|*none*|Setting ID in the category

**Returns:** `void`
___

### unlinkJS <Badge type="danger">deprecated</Badge>
Removes a remotely linked JS script.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
id|string|ID of the script element

**Returns:** `void`
___
