# UI

`UI` is a utility class for getting internal webpack modules. Instance is accessible through the [BdApi](./bdapi). This is extremely useful for interacting with the internals of Discord.

## Properties



## Methods

### alert
Shows a generic but very customizable modal.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
title|string|title of the modal
content|string\|ReactElement\|Array.&lt;(string\|ReactElement)&gt;|a string of text to display in the modal

**Returns:** `void`
___

### createTooltip
Creates a tooltip to automatically show on hover.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
node|HTMLElement|&#x274C;|*none*|DOM node to monitor and show the tooltip on
content|string\|HTMLElement|&#x274C;|*none*|string to show in the tooltip
options|object|&#x274C;|*none*|additional options for the tooltip
options.style|"primary"\|"info"\|"success"\|"warn"\|"danger"|&#x2705;|"primary"|correlates to the discord styling/colors
options.side|"top"\|"right"\|"bottom"\|"left"|&#x2705;|"top"|can be any of top, right, bottom, left
options.preventFlip|boolean|&#x2705;|false|prevents moving the tooltip to the opposite side if it is too big or goes offscreen
options.disabled|boolean|&#x2705;|false|whether the tooltip should be disabled from showing on hover

**Returns:** `Tooltip` - the tooltip that was generated
___

### openDialog
Gives access to the [Electron Dialog](https://www.electronjs.org/docs/latest/api/dialog/) api.  Returns a `Promise` that resolves to an `object` that has a `boolean` cancelled and a `filePath` string for saving and a `filePaths` string array for opening.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
options|object|&#x274C;|*none*|Options object to configure the dialog.
options.mode|"open"\|"save"|&#x2705;|"open"|Determines whether the dialog should open or save files.
options.defaultPath|string|&#x2705;|~|Path the dialog should show on launch.
options.filters|Array.&lt;object.&lt;string, Array.&lt;string&gt;&gt;&gt;|&#x2705;|[]|An array of [file filters](https://www.electronjs.org/docs/latest/api/structures/file-filter).
options.title|string|&#x2705;|*none*|Title for the titlebar.
options.message|string|&#x2705;|*none*|Message for the dialog.
options.showOverwriteConfirmation|boolean|&#x2705;|false|Whether the user should be prompted when overwriting a file.
options.showHiddenFiles|boolean|&#x2705;|false|Whether hidden files should be shown in the dialog.
options.promptToCreate|boolean|&#x2705;|false|Whether the user should be prompted to create non-existant folders.
options.openDirectory|boolean|&#x2705;|false|Whether the user should be able to select a directory as a target.
options.openFile|boolean|&#x2705;|true|Whether the user should be able to select a file as a target.
options.multiSelections|boolean|&#x2705;|false|Whether the user should be able to select multiple targets.
options.modal|boolean|&#x2705;|false|Whether the dialog should act as a modal to the main window.

**Returns:** `Promise.<object>` - Result of the dialog
___

### showConfirmationModal
Shows a generic but very customizable confirmation modal with optional confirm and cancel callbacks.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
title|string|&#x274C;|*none*|title of the modal
children|string\|ReactElement\|Array.&lt;(string\|ReactElement)&gt;|&#x274C;|*none*|a single or mixed array of react elements and strings. Everything is wrapped in Discord's `TextElement` component so strings will show and render properly.
options|object|&#x2705;|*none*|options to modify the modal
options.danger|boolean|&#x2705;|false|whether the main button should be red or not
options.confirmText|string|&#x2705;|Okay|text for the confirmation/submit button
options.cancelText|string|&#x2705;|Cancel|text for the cancel button
options.onConfirm|callable|&#x2705;|NOOP|callback to occur when clicking the submit button
options.onCancel|callable|&#x2705;|NOOP|callback to occur when clicking the cancel button

**Returns:** `void`
___

### showNotice
Shows a notice above Discord's chat layer.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
content|string\|Node|&#x274C;|*none*|Content of the notice
options|object|&#x274C;|*none*|Options for the notice.
options.type|string|&#x2705;|"info" | "error" | "warning" | "success"|Type for the notice. Will affect the color.
options.buttons|Array.&lt;{label: string, onClick: function()}&gt;|&#x2705;|*none*|Buttons that should be added next to the notice text.
options.timeout|number|&#x2705;|10000|Timeout until the notice is closed. Won't fire if it's set to 0;

**Returns:** `function`
___

### showToast
This shows a toast similar to android towards the bottom of the screen.

| Parameter |  Type  | Optional | Default |       Description      |
|:----------|:------:|:--------:|:-------:|:----------------------:|
content|string|&#x274C;|*none*|The string to show in the toast.
options|object|&#x274C;|*none*|Options object. Optional parameter.
options.type|string|&#x2705;|""|Changes the type of the toast stylistically and semantically. Choices: "", "info", "success", "danger"/"error", "warning"/"warn". Default: ""
options.icon|boolean|&#x2705;|true|Determines whether the icon should show corresponding to the type. A toast without type will always have no icon. Default: `true`
options.timeout|number|&#x2705;|3000|Adjusts the time (in ms) the toast should be shown for before disappearing automatically. Default: `3000`
options.forceShow|boolean|&#x2705;|false|Whether to force showing the toast and ignore the bd setting

**Returns:** `void`
___
