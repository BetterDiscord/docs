# Class: ContextMenu

`ContextMenu` is a module to help patch and create context menus. Instance is accessible through the [BdApi](BdApi.md).

## Constructors

### Constructor

> **new ContextMenu**(): `ContextMenu`

#### Returns

`ContextMenu`

## Properties

### CheckboxItem

> **CheckboxItem**: `FC`\<`PropsWithChildren`\<[`MenuCheckboxItemProps`](MenuCheckboxItemProps.md)\>\> = `MenuComponents.CheckboxItem`

***

### ControlItem

> **ControlItem**: `FC`\<`PropsWithChildren`\<[`MenuControlItemProps`](MenuControlItemProps.md)\>\> = `MenuComponents.ControlItem`

***

### Group

> **Group**: `FC`\<\{ \}\> = `MenuComponents.Group`

***

### Item

> **Item**: `FC`\<`PropsWithChildren`\<[`BaseMenuItemProps`](BaseMenuItemProps.md)\>\> = `MenuComponents.Item`

***

### Menu

> **Menu**: `FC`\<`PropsWithChildren`\<[`MenuRenderProps`](MenuRenderProps.md)\>\> = `MenuComponents.Menu`

***

### RadioItem

> **RadioItem**: `FC`\<`PropsWithChildren`\<[`MenuRadioItemProps`](MenuRadioItemProps.md)\>\> = `MenuComponents.RadioItem`

***

### Separator

> **Separator**: `FC`\<\{ \}\> = `MenuComponents.Separator`

## Methods

### buildItem()

> **buildItem**(`props`): `FunctionComponentElement`\<`any`\> \| `FunctionComponentElement`\<\{ \}\>

Builds a single menu item. The only prop shown here is the type, the rest should
match the actual component being built. View those to see what options exist
for each, they often have less in common than you might think.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`MenuItem`](MenuItem.md) | Props used to build the item |

#### Returns

`FunctionComponentElement`\<`any`\> \| `FunctionComponentElement`\<\{ \}\>

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

> **buildMenu**(`setup`): (`props`) => `FunctionComponentElement`\<`PropsWithChildren`\<[`MenuRenderProps`](MenuRenderProps.md)\>\>

Creates the menu *component* including the wrapping `ContextMenu`.
Calls [ContextMenu.buildMenuChildren](#buildmenuchildren) under the covers.
Used to call in combination with [ContextMenu.open](#open).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `setup` | readonly ([`MenuItem`](MenuItem.md) \| [`MenuItemGroup`](MenuItemGroup.md))[] | Array of item props used to build items. See [ContextMenu.buildMenuChildren](#buildmenuchildren). |

#### Returns

The unique context menu component

(`props`) => `FunctionComponentElement`\<`PropsWithChildren`\<[`MenuRenderProps`](MenuRenderProps.md)\>\>

***

### buildMenuChildren()

> **buildMenuChildren**(`setup`): (`ReactElement`\<`unknown`, `string` \| `JSXElementConstructor`\<`any`\>\> \| `FunctionComponentElement`\<`any`\> \| `FunctionComponentElement`\<\{ \}\>)[]

Creates the all the items **and groups** of a context menu recursively.
There is no hard limit to the number of groups within groups or number
of items in a menu.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `setup` | readonly ([`MenuItem`](MenuItem.md) \| [`MenuItemGroup`](MenuItemGroup.md))[] | Array of item props used to build items. See [ContextMenu.buildItem](#builditem). |

#### Returns

(`ReactElement`\<`unknown`, `string` \| `JSXElementConstructor`\<`any`\>\> \| `FunctionComponentElement`\<`any`\> \| `FunctionComponentElement`\<\{ \}\>)[]

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

> **close**(): `void`

Closes the current opened context menu immediately.

#### Returns

`void`

***

### open()

> **open**(`event`, `menuComponent`, `config?`): `any`

Function that allows you to open an entire context menu. Recommended to build the menu with this module.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `MouseEvent` | The context menu event. This can be emulated, requires target, and all X, Y locations. |
| `menuComponent` | `ComponentType`\<[`MenuRenderProps`](MenuRenderProps.md)\> | Component to render. This can be any React component or output of [ContextMenu.buildMenu](#buildmenu). |
| `config?` | [`MenuConfig`](MenuConfig.md) | Configuration/props for the context menu |

#### Returns

`any`

***

### patch()

> **patch**(`navId`, `callback`): () => `void`

Allows you to patch a given context menu. Acts as a wrapper around the `Patcher`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `navId` | `string` \| `RegExp` | Discord's internal `navId` used to identify context menus |
| `callback` | [`PatchCallback`](PatchCallback.md) | Callback function that accepts the React render tree |

#### Returns

A function that automatically unpatches

() => `void`

***

### unpatch()

> **unpatch**(`navId`, `callback`): `void`

Allows you to remove the patch added to a given context menu.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `navId` | `string` \| `RegExp` | The original `navId` from patching |
| `callback` | [`PatchCallback`](PatchCallback.md) | The original callback from patching |

#### Returns

`void`
