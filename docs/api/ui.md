# UI

`UI` is a utility class for creating user interfaces. Instance is accessible through the [BdApi](./bdapi).

## Properties



## Methods

### alert
Shows a generic but very customizable modal.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
title|string|Title of the modal
content|string\|ReactElement\|Array.&lt;(string\|ReactElement)&gt;|A string of text to display in the modal

**Returns:** `void`
___

### buildSettingItem
Creates a single setting wrapped in a setting item that has a name and note.
The shape of the object should match the props of the component you want to render, check the
`BdApi.Components` section for details. Shown below are ones common to all setting types.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
setting|object|&#x274C;|*none*|
setting.type|string|&#x274C;|*none*|One of: dropdown, number, switch, text, slider, radio, keybind, color, custom
setting.id|string|&#x274C;|*none*|Identifier to used for callbacks
setting.name|string|&#x274C;|*none*|Visual name to display
setting.note|string|&#x274C;|*none*|Visual description to display
setting.value|any|&#x274C;|*none*|Current value of the setting
setting.children|ReactElement|&#x2705;|*none*|Only used for "custom" type
setting.onChange|CallableFunction|&#x2705;|*none*|Callback when the value changes (only argument is new value)
setting.disabled|boolean|&#x2705;|false|Whether this setting is disabled
setting.inline|boolean|&#x2705;|true|Whether the input should render inline with the name (this is false by default for radio type)

**Returns:** `void`
___

### buildSettingsPanel
Creates a settings panel (react element) based on json-like data.

The `settings` array here is an array of the same settings types described in `buildSetting` above.
However, this API allows one additional setting "type" called `category`. This has the same properties
as the Group React Component found under the `Components` API.

`onChange` will always be given 3 arguments: category id, setting id, and setting value. In the case
that you have settings on the "root" of the panel, the category id is `null`. Any `onChange`
listeners attached to individual settings will fire before the panel-level change listener.

`onDrawerToggle` is given 2 arguments: category id, and the current shown state. You can use this to
save drawer states.

`getDrawerState` is given 2 arguments: category id, and the default shown state. You can use this to
recall a saved drawer state.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
props|object|&#x274C;|*none*|
props.settings|Array.&lt;object&gt;|&#x274C;|*none*|Array of settings to show
props.onChange|CallableFunction|&#x274C;|*none*|Function called on every change
props.onDrawerToggle|CallableFunction|&#x2705;|*none*|Optionally used to save drawer states
props.getDrawerState|CallableFunction|&#x2705;|*none*|Optionally used to recall drawer states

**Returns:** `void`
___

### createTooltip
Creates a tooltip to automatically show on hover.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
node|HTMLElement|&#x274C;|*none*|DOM node to monitor and show the tooltip on
content|string\|HTMLElement|&#x274C;|*none*|String to show in the tooltip
options|object|&#x274C;|*none*|Additional options for the tooltip
options.style|"primary"\|"info"\|"success"\|"warn"\|"danger"|&#x2705;|"primary"|Correlates to the Discord styling/colors
options.side|"top"\|"right"\|"bottom"\|"left"|&#x2705;|"top"|Can be any of top, right, bottom, left
options.preventFlip|boolean|&#x2705;|false|Prevents moving the tooltip to the opposite side if it is too big or goes offscreen
options.disabled|boolean|&#x2705;|false|Whether the tooltip should be disabled from showing on hover

**Returns:** `Tooltip` - The tooltip that was generated.
___

### openDialog
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

### showChangelogModal
Shows a changelog modal in a similar style to Discord's. Customizable with images, videos, colored sections and supports markdown.

The changes option is an array of objects that have this typing:
```ts
interface Changes {
    title: string;
    type: "fixed" | "added" | "progress" | "changed";
    items: Array<string>;
    blurb?: string;
}
```

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
options|object|&#x274C;|*none*|Information to display in the modal
options.title|string|&#x274C;|*none*|Title to show in the modal header
options.subtitle|string|&#x274C;|*none*|Title to show below the main header
options.blurb|string|&#x2705;|*none*|Text to show in the body of the modal before the list of changes
options.banner|string|&#x2705;|*none*|URL to an image to display as the banner of the modal
options.video|string|&#x2705;|*none*|Youtube link or url of a video file to use as the banner
options.poster|string|&#x2705;|*none*|URL to use for the video freeze-frame poster
options.footer|string\|ReactElement\|Array.&lt;(string\|ReactElement)&gt;|&#x2705;|*none*|What to show in the modal footer
options.changes|Array.&lt;Changes&gt;|&#x2705;|*none*|List of changes to show (see description for details)

**Returns:** `string` - The key used for this modal.
___

### showConfirmationModal
Shows a generic but very customizable confirmation modal with optional confirm and cancel callbacks.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
title|string|&#x274C;|*none*|Title of the modal.
children|string\|ReactElement\|Array.&lt;(string\|ReactElement)&gt;|&#x274C;|*none*|Single or mixed array of React elements and strings. Everything is wrapped in Discord's `TextElement` component so strings will show and render properly.
options|object|&#x2705;|*none*|Options to modify the modal
options.danger|boolean|&#x2705;|false|Whether the main button should be red or not
options.confirmText|string|&#x2705;|Okay|Text for the confirmation/submit button
options.cancelText|string|&#x2705;|Cancel|Text for the cancel button
options.onConfirm|callable|&#x2705;|NOOP|Callback to occur when clicking the submit button
options.onCancel|callable|&#x2705;|NOOP|Callback to occur when clicking the cancel button
options.onClose|callable|&#x2705;|NOOP|Callback to occur when exiting the modal

**Returns:** `string` - The key used for this modal.
___

### showNotice
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

### showToast
This shows a toast similar to android towards the bottom of the screen.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
content|string|&#x274C;|*none*|The string to show in the toast
options|object|&#x274C;|*none*|Options for the toast
options.type|string|&#x2705;|""|Changes the type of the toast stylistically and semantically. Choices: "", "info", "success", "danger"/"error", "warning"/"warn". Default: "".
options.icon|boolean|&#x2705;|true|Determines whether the icon should show corresponding to the type. A toast without type will always have no icon. Default: `true`.
options.timeout|number|&#x2705;|3000|Adjusts the time (in ms) the toast should be shown for before disappearing automatically. Default: `3000`.
options.forceShow|boolean|&#x2705;|false|Whether to force showing the toast and ignore the BD setting

**Returns:** `void`
___
