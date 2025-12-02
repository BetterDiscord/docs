# Class: ContextMenu

Defined in: [src/betterdiscord/api/contextmenu.ts:200](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/contextmenu.ts#L200)

`ContextMenu` is a module to help patch and create context menus. Instance is accessible through the [BdApi](BdApi.md).

## Methods

### buildItem()

```ts
buildItem(props: any): 
  | CElement<{
}, Component<{
}, any, any>>
| CElement<any, Component<any, any, any>>;
```

Defined in: [src/betterdiscord/api/contextmenu.ts:251](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/contextmenu.ts#L251)

Builds a single menu item. The only prop shown here is the type, the rest should
match the actual component being built. View those to see what options exist
for each, they often have less in common than you might think.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | `any` | Props used to build the item |

#### Returns

  \| `CElement`\<\{
\}, `Component`\<\{
\}, `any`, `any`\>\>
  \| `CElement`\<`any`, `Component`\<`any`, `any`, `any`\>\>

The created component

#### Examples

```ts
// Creates a single menu item that prints "MENU ITEM" on click
ContextMenu.buildItem({
     label: "Menu Item",
     action: () => {console.log("MENU ITEM");}
});
```

```ts
// Creates a single toggle item that starts unchecked
// and print the new value on every toggle
ContextMenu.buildItem({
     type: "toggle",
     label: "Item Toggle",
     checked: false,
     action: (newValue) => {console.log(newValue);}
});
```

***

### buildMenu()

```ts
buildMenu(setup: any): (props: any) => DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
```

Defined in: [src/betterdiscord/api/contextmenu.ts:350](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/contextmenu.ts#L350)

Creates the menu *component* including the wrapping `ContextMenu`.
Calls [ContextMenu.buildMenuChildren](#buildmenuchildren) under the covers.
Used to call in combination with [ContextMenu.open](#open).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `setup` | `any` | Array of item props used to build items. See [ContextMenu.buildMenuChildren](#buildmenuchildren). |

#### Returns

The unique context menu component

```ts
(props: any): DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `any` |

##### Returns

`DetailedReactHTMLElement`\<`InputHTMLAttributes`\<[`HTMLInputElement`](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)\>, [`HTMLInputElement`](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)\>

***

### buildMenuChildren()

```ts
buildMenuChildren(setup: any): any;
```

Defined in: [src/betterdiscord/api/contextmenu.ts:330](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/contextmenu.ts#L330)

Creates the all the items **and groups** of a context menu recursively.
There is no hard limit to the number of groups within groups or number
of items in a menu.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `setup` | `any` | Array of item props used to build items. See [ContextMenu.buildItem](#builditem). |

#### Returns

`any`

Array of the created component

#### Examples

```ts
// Creates a single item group item with a toggle item
ContextMenu.buildMenuChildren([{
     type: "group",
     items: [{
         type: "toggle",
         label: "Item Toggle",
         active: false,
         action: (newValue) => {console.log(newValue);}
     }]
}]);
```

```ts
// Creates two item groups with a single toggle item each
ContextMenu.buildMenuChildren([{
    type: "group",
    items: [{
        type: "toggle",
        label: "Item Toggle",
        active: false,
        action: (newValue) => {
            console.log(newValue);
        }
    }]
}, {
    type: "group",
    items: [{
        type: "toggle",
        label: "Item Toggle",
        active: false,
        action: (newValue) => {
            console.log(newValue);
        }
    }]
}]);
```

***

### close()

```ts
close(): void;
```

Defined in: [src/betterdiscord/api/contextmenu.ts:373](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/contextmenu.ts#L373)

Closes the current opened context menu immediately.

#### Returns

`void`

***

### open()

```ts
open(
   event: any, 
   menuComponent: any, 
   config: any): any;
```

Defined in: [src/betterdiscord/api/contextmenu.ts:364](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/contextmenu.ts#L364)

Function that allows you to open an entire context menu. Recommended to build the menu with this module.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `any` | The context menu event. This can be emulated, requires target, and all X, Y locations. |
| `menuComponent` | `any` | Component to render. This can be any React component or output of [ContextMenu.buildMenu](#buildmenu). |
| `config` | `any` | Configuration/props for the context menu |

#### Returns

`any`

***

### patch()

```ts
patch(navId: any, callback: any): () => void;
```

Defined in: [src/betterdiscord/api/contextmenu.ts:209](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/contextmenu.ts#L209)

Allows you to patch a given context menu. Acts as a wrapper around the `Patcher`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `navId` | `any` | Discord's internal `navId` used to identify context menus |
| `callback` | `any` | Callback function that accepts the React render tree |

#### Returns

A function that automatically unpatches

```ts
(): void;
```

##### Returns

`void`

***

### unpatch()

```ts
unpatch(navId: any, callback: any): void;
```

Defined in: [src/betterdiscord/api/contextmenu.ts:221](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/contextmenu.ts#L221)

Allows you to remove the patch added to a given context menu.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `navId` | `any` | The original `navId` from patching |
| `callback` | `any` | The original callback from patching |

#### Returns

`void`
