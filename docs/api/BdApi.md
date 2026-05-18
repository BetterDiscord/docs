# Class: BdApi

`BdApi` is a globally (`window.BdApi`) accessible object for use by plugins and developers to make their lives easier.

## Constructors

### Constructor

> **new BdApi**(`pluginName`): `BdApi`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pluginName` | `string` |

#### Returns

`BdApi`

## Properties

### Commands

> **Commands**: [`BoundCommandAPI`](BoundCommandAPI.md)

An instance of [CommandAPI](CommandAPI.md) for adding slash commands

***

### Data

> **Data**: [`BoundData`](BoundData.md)

An instance of [Data](Data.md) to manage data

***

### DOM

> **DOM**: [`BoundDOM`](BoundDOM.md)

An instance of [DOM](DOM.md) to interact with the DOM

***

### Hooks

> **Hooks**: [`BoundHooks`](BoundHooks.md)

An instance of [Hooks](Hooks.md) for react hooks

***

### Logger

> **Logger**: [`BoundLogger`](BoundLogger.md)

An instance of [Logger](Logger.md) for logging information

***

### Patcher

> **Patcher**: [`BoundPatcher`](BoundPatcher.md)

An instance of [Patcher](Patcher.md) to monkey patch functions

***

### Commands

> `static` **Commands**: [`CommandAPI`](CommandAPI.md) = `CommandsAPI`

An instance of [CommandAPI](CommandAPI.md) for adding slash commands

***

### Components

> `static` **Components**: [`Components`](Components.md) = `ComponentsInstance`

A set of react components plugins can make use of

***

### ContextMenu

> `static` **ContextMenu**: [`ContextMenu`](ContextMenu.md) = `ContextMenuAPI`

An instance of [ContextMenu](ContextMenu.md) for interacting with context menus

***

### Data

> `static` **Data**: [`Data`](Data.md) = `DataAPI`

An instance of [Data](Data.md) to manage data

***

### DOM

> `static` **DOM**: [`DOM`](DOM.md) = `DOMAPI`

An instance of [DOM](DOM.md) to interact with the DOM

***

### Hooks

> `static` **Hooks**: [`Hooks`](Hooks.md) = `HooksAPI`

An instance of [Hooks](Hooks.md) for react hooks

***

### Logger

> `static` **Logger**: [`Logger`](Logger.md) = `DefaultLogger`

An instance of [Logger](Logger.md) for logging information

***

### Net

> `static` **Net**: `Readonly`\<\{ `fetch`: (`input`, `init?`) => `Promise`\<`Response`\>; \}\>

An instance of [Net](#net) for using network related tools

***

### Patcher

> `static` **Patcher**: [`Patcher`](Patcher.md) = `PatcherAPI`

An instance of [Patcher](Patcher.md) to monkey patch functions

***

### Plugins

> `static` **Plugins**: [`AddonAPI`](AddonAPI.md) = `PluginAPI`

An instance of [AddonAPI](AddonAPI.md) to access plugins

***

### React

> `static` **React**: *typeof* `React` = `DiscordModules.React`

The React module being used inside Discord

***

### ReactDOM

> `static` **ReactDOM**: `__module` & `__module`

The ReactDOM module being used inside Discord

***

### ReactUtils

> `static` **ReactUtils**: [`ReactUtils`](ReactUtils.md) = `ReactUtilsInstance`

An instance of [ReactUtils](ReactUtils.md) to work with React

***

### Themes

> `static` **Themes**: [`AddonAPI`](AddonAPI.md) = `ThemeAPI`

An instance of [AddonAPI](AddonAPI.md) to access themes

***

### UI

> `static` **UI**: [`UI`](UI.md) = `UIInstance`

An instance of [UI](UI.md) to create interfaces

***

### Utils

> `static` **Utils**: [`Utils`](Utils.md) = `UtilsInstance`

An instance of [Utils](Utils.md) for general utility functions

***

### version

> `static` **version**: `string`

A reference string for BD's version

***

### Webpack

> `static` **Webpack**: [`Webpack`](Webpack.md) = `WebpackInstance`

An instance of [Webpack](Webpack.md) to search for modules

## Accessors

### Components

#### Get Signature

> **get** **Components**(): [`Components`](Components.md)

A set of react components plugins can make use of

##### Returns

[`Components`](Components.md)

***

### ContextMenu

#### Get Signature

> **get** **ContextMenu**(): [`ContextMenu`](ContextMenu.md)

An instance of [ContextMenu](ContextMenu.md) for interacting with context menus

##### Returns

[`ContextMenu`](ContextMenu.md)

***

### Net

#### Get Signature

> **get** **Net**(): `Readonly`\<\{ `fetch`: (`input`, `init?`) => `Promise`\<`Response`\>; \}\>

An instance of [Net](#net) for using network related tools

##### Returns

`Readonly`\<\{ `fetch`: (`input`, `init?`) => `Promise`\<`Response`\>; \}\>

***

### Plugins

#### Get Signature

> **get** **Plugins**(): [`AddonAPI`](AddonAPI.md)

An instance of [AddonAPI](AddonAPI.md) to access plugins

##### Returns

[`AddonAPI`](AddonAPI.md)

***

### React

#### Get Signature

> **get** **React**(): *typeof* `React`

The React module being used inside Discord

##### Returns

*typeof* `React`

***

### ReactDOM

#### Get Signature

> **get** **ReactDOM**(): `__module` & `__module`

The ReactDOM module being used inside Discord

##### Returns

`__module` & `__module`

***

### ReactUtils

#### Get Signature

> **get** **ReactUtils**(): [`ReactUtils`](ReactUtils.md)

An instance of [ReactUtils](ReactUtils.md) to work with React

##### Returns

[`ReactUtils`](ReactUtils.md)

***

### Themes

#### Get Signature

> **get** **Themes**(): [`AddonAPI`](AddonAPI.md)

An instance of [AddonAPI](AddonAPI.md) to access themes

##### Returns

[`AddonAPI`](AddonAPI.md)

***

### UI

#### Get Signature

> **get** **UI**(): [`UI`](UI.md)

An instance of [UI](UI.md) to create interfaces

##### Returns

[`UI`](UI.md)

***

### Utils

#### Get Signature

> **get** **Utils**(): [`Utils`](Utils.md)

An instance of [Utils](Utils.md) for general utility functions

##### Returns

[`Utils`](Utils.md)

***

### version

#### Get Signature

> **get** **version**(): `string`

A reference string for BD's version

##### Returns

`string`

***

### Webpack

#### Get Signature

> **get** **Webpack**(): [`Webpack`](Webpack.md)

An instance of [Webpack](Webpack.md) to search for modules

##### Returns

[`Webpack`](Webpack.md)
