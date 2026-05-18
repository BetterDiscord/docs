# Interface: DialogOptions

## Properties

### defaultPath

> **defaultPath**: `string`

The path the dialog should show on launch

***

### filters

> **filters**: `Record`\<`string`, `string`[]\>[]

An array of [file filters](https://www.electronjs.org/docs/latest/api/structures/file-filter)

***

### message

> **message**: `string`

A message for the dialog

***

### modal

> **modal**: `boolean`

Whether the dialog should act as a modal to the main window

***

### mode

> **mode**: `"open"` \| `"save"`

Determines whether the dialog should open or save files

***

### multiSelections

> **multiSelections**: `boolean`

Whether the user should be able to select multiple targets

***

### openDirectory

> **openDirectory**: `boolean`

Whether the user should be able to select a directory as a target

***

### openFile

> **openFile**: `boolean`

Whether the user should be able to select a file as a target

***

### promptToCreate

> **promptToCreate**: `boolean`

Whether the user should be prompted to create non-existent folders

***

### showHiddenFiles

> **showHiddenFiles**: `boolean`

Whether hidden files should be shown in the dialog

***

### showOverwriteConfirmation

> **showOverwriteConfirmation**: `boolean`

Whether the user should be prompted when overwriting a file

***

### title

> **title**: `string`

A title for the titlebar
