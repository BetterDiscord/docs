# Interface: BaseMenuItemProps

## Extends

- `Record`\<`string`, `any`\>

## Extended by

- [`MenuItemSubmenu`](MenuItemSubmenu.md)
- [`MenuItemDefault`](MenuItemDefault.md)

## Indexable

> \[`key`: `string`\]: `any`

## Properties

### children?

> `optional` **children?**: `ReactNode`

***

### className?

> `optional` **className?**: `string`

***

### color?

> `optional` **color?**: [`MenuItemColor`](MenuItemColor.md)

***

### disabled?

> `optional` **disabled?**: `boolean`

***

### dontCloseOnActionIfHoldingShiftKey?

> `optional` **dontCloseOnActionIfHoldingShiftKey?**: `boolean`

***

### focusedClassName?

> `optional` **focusedClassName?**: `string`

***

### icon?

> `optional` **icon?**: `FunctionComponent`\<[`DiscordIconProps`](DiscordIconProps.md)\>

***

### id

> **id**: `string`

***

### keepItemStyles?

> `optional` **keepItemStyles?**: `boolean`

***

### subtext?

> `optional` **subtext?**: `string`

## Methods

### action()?

> `optional` **action**(`event`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `MouseEvent` |

#### Returns

`void`

***

### imageUrl()?

> `optional` **imageUrl**(`props`): `string`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `unknown` |

#### Returns

`string`
