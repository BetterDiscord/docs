# BdApi

`BdApi` is a globally (`window.BdApi`) accessible object for use by plugins and developers to make their lives easier.

## Properties

### React
The React module being used inside Discord.

**Type:** `object`
___

### ReactDOM
The ReactDOM module being used inside Discord.

**Type:** `object`
___

### Patcher
An instance of [Patcher](./patcher) used to affect existing functions.

**Type:** `Patcher`
___

### Plugins
An instance of [AddonAPI](./addonapi) to access plugins.

**Type:** `AddonAPI`
___

### Themes
An instance of [AddonAPI](./addonapi) to access themes.

**Type:** `AddonAPI`
___

### settings
A reference object to get BD's settings.

**Type:** `object`
___

### emotes
A reference object for BD's emotes.

**Type:** `object`
___

### screenWidth
The total active width of the application.

**Type:** `number`
___

### screenHeight
The total active height of the application.

**Type:** `number`
___


## Methods

### alert
Creates an shows an alert modal to the user.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
title|string|The title to show on the modal.
content|string \| ReactElement \| Array&lt;string \| ReactElement&gt;|Content to show in the modal.

**Returns:** `void`
___

### clearCSS
Removes a `<style>` from the document corresponding to the given ID.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
id|string|Style ID to be cleared

**Returns:** `void`
___

### deleteData
Deletes some saved data for plugin `pluginName` with key `key`.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
pluginName|string|Which plugin this is being used for.
key|string|Key for which data should be deleted.

**Returns:** `void`
___

### disableSetting
Disables a BetterDiscord setting by ids.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
collection|string|&#x2705;|settings|Collection ID
category|string|&#x274C;|*none*|Category ID within the collection
id|string|&#x274C;|*none*|Setting ID within the category

**Returns:** `void`
___

### enableSetting
Enable a BetterDiscord setting by ids.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
collection|string|&#x2705;|settings|Collection ID
category|string|&#x274C;|*none*|Category ID within the collection
id|string|&#x274C;|*none*|Setting ID within the category

**Returns:** `void`
___

### findModule
Searches for an internal Discord webpack module based on a filter. Returns the found module or `null` if none.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
filter|function|A function to use to filter modules.

**Returns:** `{any | null}`
___

### findAllModules
Searches for an internal Discord webpack module based on a filter. Returns the found modules or `null` if none. This is the same as `findModule` but finds all matches.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
filter|function|A function to use to filter modules.

**Returns:** `{Array<any> | null}`
___

### findModuleByProps
Searches for an internal Discord webpack module that has every property passed. Returns the found module or `null` if none.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
props|...string|A series of properties to check for.

**Returns:** `{any | null}`
___

### findModuleByPrototypes
Searches for an internal Discord webpack module based that has every prototype passed. Returns the found module or `null` if none.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
protos|...string|A series of prototypes to check for.

**Returns:** `{any | null}`
___

### findModuleByDisplayName
Searches for an internal Discord webpack module that has a specific name. Returns the found module or `null` if none.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
name|string|The `displayName` to check for.

**Returns:** `{any | null}`
___

### getBDData
Gets some data in BetterDiscord's misc data.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
key|string|The key of data to get.

**Returns:** `any`
___

### getData
Alias for `loadData`


**Returns:** `void`
___

### getInternalInstance
Gets the internal react instance for a DOM node if it exists.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
node|HTMLElement|DOM node containing desired react instance.

**Returns:** `object | undefined`
___

### injectCSS
Adds a `<style>` to the document with the given ID.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
id|string|ID to be used
css|string|Series of style rules to add

**Returns:** `void`
___

### isSettingEnabled <span class="deprecated">Deprecated</span>
Gets a specific setting's status from BD

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
collection|string|&#x2705;|settings|Collection ID
category|string|&#x274C;|*none*|Category ID within the collection
id|string|&#x274C;|*none*|Setting ID within the category

**Returns:** `boolean`
___

### linkJS <span class="deprecated">Deprecated</span>
Adds a `<script>` to the document with the given ID and src.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
id|string|ID to be used
url|string|URL of the javascript to link

**Returns:** `void`
___

### loadData
Gets some saved data for plugin `pluginName` with key `key`.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
pluginName|string|Which plugin this is being used for.
key|string|Key for which data should be retrieved.

**Returns:** `any`
___

### monkeyPatch <span class="deprecated">Deprecated</span>
This function monkey-patches a method on an object. The patching callback may be run before, after or instead of target method.
 - Be careful when monkey-patching. Think not only about original functionality of target method and your changes, but also about developers of other plugins, who may also patch this method before or after you. Try to change target method behaviour as little as possible, and avoid changing method signatures.
 - Display name of patched method is changed, so you can see if a function has been patched (and how many times) while debugging or in the stack trace. Also, patched methods have property `__monkeyPatched` set to `true`, in case you want to check something programmatically.
 

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
module|object|&#x274C;|*none*|object to be patched. You can can also pass class prototypes to patch all class instances.
methodName|string|&#x274C;|*none*|Name of the function to be patched.
options|object|&#x274C;|*none*|Options object to configure the patch.
options.after|function|&#x2705;|void|Callback that will be called after original target method call. You can modify return value here, so it will be passed to external code which calls target method. Can be combined with `before`.
options.before|function|&#x2705;|void|Callback that will be called before original target method call. You can modify arguments here, so it will be passed to original method. Can be combined with `after`.
options.instead|function|&#x2705;|void|Callback that will be called instead of original target method call. You can get access to original method using `originalMethod` parameter if you want to call it, but you do not have to. Can't be combined with `before` or `after`.
options.once|boolean|&#x2705;|false|Set to `true` if you want to automatically unpatch method after first call.
options.silent|boolean|&#x2705;|false|Set to `true` if you want to suppress log messages about patching and unpatching.

**Returns:** `function<cancel>`
___

### onRemoved
Adds a listener for when the node is removed from the document body.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
node|HTMLElement|Node to be observed
callback|function|Function to run when the event fires

**Returns:** `void`
___

### openDialog
Gives access to the [Electron Dialog](https://www.electronjs.org/docs/latest/api/dialog/) api. Returns a `Promise` that resolves to an `object` that has a boolean `cancelled` and a `filePath` string for saving and a `filePaths` string array for opening.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
options|object|&#x274C;|*none*|Options object to configure the dialog.
options.mode|string&lt;open, save&gt;|&#x2705;|open|Determines whether the dialog should open or save files.
options.defaultPath|string|&#x2705;|~|Path the dialog should show on launch.
options.filters|Array&lt;object&lt;string, string[]&gt;&gt;|&#x2705;|[]|An array of [file filters](https://www.electronjs.org/docs/latest/api/structures/file-filter).
options.title|string|&#x2705;|*none*|Title for the titlebar.
options.message||&#x2705;|*none*|Message for the dialog.
options.showOverwriteConfirmation|boolean|&#x2705;|false|Whether the user should be prompted when overwriting a file.
options.showHiddenFiles|boolean|&#x2705;|false|Whether hidden files should be shown in the dialog.
options.promptToCreate|boolean|&#x2705;|false|Whether the user should be prompted to create non-existant folders.
options.openDirectory|boolean|&#x2705;|false|Whether the user should be able to select a directory as a target.
options.openFile|boolean|&#x2705;|true|Whether the user should be able to select a file as a target.
options.multiSelections|boolean|&#x2705;|false|Whether the user should be able to select multiple targets.
options.modal|boolean|&#x2705;|false|Whether the dialog should act as a modal to the main window.

**Returns:** `Promise<object>`
___

### saveData
Save some data for plugin `pluginName` under key `key`. Gets saved in the plugins folder under `pluginName.config.json`. Saved data can be accessed with `loadData`.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
pluginName|string|Which plugin this is being used for.
key|string|Key for which data should be retrieved.
data|any|The data to store

**Returns:** `void`
___

### setBDData
Sets some data in BetterDiscord's misc data.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
key|string|The key of data to get.
data|any|The data to store

**Returns:** `void`
___

### setData
Alias for `loadData`


**Returns:** `void`
___

### showConfirmationModal
Shows a generic but very customizable confirmation modal with optional confirm and cancel callbacks.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
title|string|&#x274C;|*none*|Title to show in the modal header.
content|string \| ReactElement \| Array&lt;string \| ReactElement&gt;|&#x274C;|*none*|Content to show in the modal body.
options|object|&#x2705;|{}|Options object to configure the modal.
options.danger|boolean|&#x274C;|false|Whether the main button should be red or not.
options.confirmText|string|&#x2705;|Okay|Text for the confirmation/submit button.
options.cancelText|string|&#x2705;|Cancel|Text for the cancel button.
options.onConfirm|function|&#x2705;|void|Callback to occur when clicking the submit button.
options.onCancel|function|&#x2705;|void|Callback to occur when clicking the cancel button.

**Returns:** `void`
___

### showNotice
Shows a notice banner at the top of Discord.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
content|string \| Node|&#x274C;|*none*|Content to show in the banner.
options|object|&#x2705;|{}|Options object to configure the notice.
options.type|string|&#x2705;|info|Changes the type of the toast stylistically and semantically. Choices: "info", "success", "error", "warning".
options.buttons|Array&lt;object&lt;string, function&gt;&gt;|&#x2705;|[]|An array of objects containing a `label` string and `onClick` handler for buttons.
options.timeout|number|&#x2705;|10000|Timeout until the notice is closed. Won't fire if it's set to 0;.

**Returns:** `void`
___

### showToast
Shows a simple toast message similar to on Android.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
content|string|&#x274C;|*none*|Content to show inside the toast.
options|object|&#x2705;|{}|Options object to configure the toast.
options.type|string|&#x2705;|""|Changes the type of the toast stylistically and semantically. Choices: "", "info", "success", "danger"/"error", "warning"/"warn".
options.icon|boolean|&#x2705;|true|Determines whether the icon should show corresponding to the type.
options.timeout|number|&#x2705;|3000|Adjusts the time (in ms) the toast should be shown for before disappearing automatically.

**Returns:** `void`
___

### suppressErrors <span class="deprecated">Deprecated</span>
Wraps a given function in a `try..catch` block.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
risky|function|Function to be wrapped

**Returns:** `function`
___

### testJSON <span class="deprecated">Deprecated</span>
Tests a given object to determine if it is valid JSON.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
data|object|Object to test

**Returns:** `boolean`
___

### toggleSetting
Toggle a BetterDiscord setting by ids.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
collection|string|&#x2705;|settings|Collection ID
category|string|&#x274C;|*none*|Category ID within the collection
id|string|&#x274C;|*none*|Setting ID within the category

**Returns:** `void`
___

### unlinkJS <span class="deprecated">Deprecated</span>
Removes a `<script>` to the document with the given ID.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
id|string|ID to be used

**Returns:** `void`
___
