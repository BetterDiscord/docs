# Class: BdApi

Defined in: [src/betterdiscord/api/index.ts:81](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L81)

`BdApi` is a globally (`window.BdApi`) accessible object for use by plugins and developers to make their lives easier.

## Constructors

### Constructor

```ts
new BdApi(pluginName: string): BdApi;
```

Defined in: [src/betterdiscord/api/index.ts:111](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L111)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pluginName` | `string` |

#### Returns

`BdApi`

## Properties

### Commands

```ts
Commands: CommandAPI<true>;
```

Defined in: [src/betterdiscord/api/index.ts:86](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L86)

***

### Data

```ts
Data: Data<true>;
```

Defined in: [src/betterdiscord/api/index.ts:83](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L83)

***

### DOM

```ts
DOM: DOM<true>;
```

Defined in: [src/betterdiscord/api/index.ts:84](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L84)

***

### Logger

```ts
Logger: Logger<true>;
```

Defined in: [src/betterdiscord/api/index.ts:85](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L85)

***

### Patcher

```ts
Patcher: Patcher<true>;
```

Defined in: [src/betterdiscord/api/index.ts:82](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L82)

***

### React

```ts
React: __module;
```

Defined in: [src/betterdiscord/api/index.ts:87](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L87)

***

### ReactDOM

```ts
ReactDOM: ReactDOMType;
```

Defined in: [src/betterdiscord/api/index.ts:88](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L88)

***

### version

```ts
version: string;
```

Defined in: [src/betterdiscord/api/index.ts:89](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L89)

***

### Commands

```ts
static Commands: CommandAPI<false>;
```

Defined in: [src/betterdiscord/api/index.ts:95](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L95)

***

### Components

```ts
static Components: typeof Components;
```

Defined in: [src/betterdiscord/api/index.ts:108](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L108)

***

### ContextMenu

```ts
static ContextMenu: ContextMenu;
```

Defined in: [src/betterdiscord/api/index.ts:107](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L107)

***

### Data

```ts
static Data: Data<false>;
```

Defined in: [src/betterdiscord/api/index.ts:92](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L92)

***

### DOM

```ts
static DOM: DOM<false>;
```

Defined in: [src/betterdiscord/api/index.ts:93](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L93)

***

### Hooks

```ts
static Hooks: Hooks;
```

Defined in: [src/betterdiscord/api/index.ts:96](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L96)

***

### Logger

```ts
static Logger: Logger<false>;
```

Defined in: [src/betterdiscord/api/index.ts:94](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L94)

***

### Net

```ts
static Net: typeof Net;
```

Defined in: [src/betterdiscord/api/index.ts:109](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L109)

***

### Patcher

```ts
static Patcher: Patcher<false>;
```

Defined in: [src/betterdiscord/api/index.ts:91](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L91)

***

### Plugins

```ts
static Plugins: AddonAPI;
```

Defined in: [src/betterdiscord/api/index.ts:101](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L101)

***

### React

```ts
static React: __module;
```

Defined in: [src/betterdiscord/api/index.ts:97](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L97)

***

### ReactDOM

```ts
static ReactDOM: ReactDOMType;
```

Defined in: [src/betterdiscord/api/index.ts:98](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L98)

***

### ReactUtils

```ts
static ReactUtils: typeof ReactUtils;
```

Defined in: [src/betterdiscord/api/index.ts:105](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L105)

***

### Themes

```ts
static Themes: AddonAPI;
```

Defined in: [src/betterdiscord/api/index.ts:102](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L102)

***

### UI

```ts
static UI: typeof UI;
```

Defined in: [src/betterdiscord/api/index.ts:104](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L104)

***

### Utils

```ts
static Utils: typeof Utils;
```

Defined in: [src/betterdiscord/api/index.ts:106](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L106)

***

### version

```ts
static version: string;
```

Defined in: [src/betterdiscord/api/index.ts:99](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L99)

***

### Webpack

```ts
static Webpack: typeof Webpack;
```

Defined in: [src/betterdiscord/api/index.ts:103](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L103)

## Accessors

### Components

#### Get Signature

```ts
get Components(): typeof Components;
```

Defined in: [src/betterdiscord/api/index.ts:139](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L139)

##### Returns

*typeof* [`Components`](Components.md)

***

### ContextMenu

#### Get Signature

```ts
get ContextMenu(): ContextMenu;
```

Defined in: [src/betterdiscord/api/index.ts:138](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L138)

##### Returns

[`ContextMenu`](ContextMenu.md)

***

### Net

#### Get Signature

```ts
get Net(): typeof Net;
```

Defined in: [src/betterdiscord/api/index.ts:136](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L136)

##### Returns

*typeof* [`Net`](Net.md)

***

### Plugins

#### Get Signature

```ts
get Plugins(): AddonAPI;
```

Defined in: [src/betterdiscord/api/index.ts:131](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L131)

##### Returns

[`AddonAPI`](AddonAPI.md)

***

### ReactUtils

#### Get Signature

```ts
get ReactUtils(): typeof ReactUtils;
```

Defined in: [src/betterdiscord/api/index.ts:137](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L137)

##### Returns

*typeof* [`ReactUtils`](ReactUtils.md)

***

### Themes

#### Get Signature

```ts
get Themes(): AddonAPI;
```

Defined in: [src/betterdiscord/api/index.ts:132](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L132)

##### Returns

[`AddonAPI`](AddonAPI.md)

***

### UI

#### Get Signature

```ts
get UI(): typeof UI;
```

Defined in: [src/betterdiscord/api/index.ts:135](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L135)

##### Returns

*typeof* [`UI`](UI.md)

***

### Utils

#### Get Signature

```ts
get Utils(): typeof Utils;
```

Defined in: [src/betterdiscord/api/index.ts:134](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L134)

##### Returns

*typeof* [`Utils`](Utils.md)

***

### Webpack

#### Get Signature

```ts
get Webpack(): typeof Webpack;
```

Defined in: [src/betterdiscord/api/index.ts:133](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/index.ts#L133)

##### Returns

*typeof* [`Webpack`](Webpack.md)
