# Class: Tooltip

## Constructors

### Constructor

> **new Tooltip**(`node`, `text`, `options?`): `Tooltip`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `node` | `HTMLElement` | DOM node to monitor and show the tooltip on |
| `text` | `string` \| `HTMLElement` | A string to show in the tooltip |
| `options` | [`TooltipOptions`](TooltipOptions.md) | Additional options for the tooltip |

#### Returns

`Tooltip`

## Properties

### active

> **active**: `boolean`

***

### disabled

> **disabled**: `boolean`

***

### element

> **element**: `HTMLDivElement`

***

### label

> **label**: `string` \| `HTMLElement`

***

### labelElement

> **labelElement**: `HTMLDivElement`

***

### node

> **node**: `HTMLElement`

***

### observer?

> `optional` **observer?**: `MutationObserver`

***

### preventFlip

> **preventFlip**: `boolean`

***

### side

> **side**: `"top"` \| `"bottom"` \| `"left"` \| `"right"`

***

### style

> **style**: `"warn"` \| `"info"` \| `"success"` \| `"primary"` \| `"danger"`

***

### tooltipElement

> **tooltipElement**: `HTMLDivElement`

## Accessors

### canShowAbove

#### Get Signature

> **get** **canShowAbove**(): `boolean`

Boolean representing if the tooltip will fit on screen above the element

##### Returns

`boolean`

***

### canShowBelow

#### Get Signature

> **get** **canShowBelow**(): `boolean`

Boolean representing if the tooltip will fit on screen below the element

##### Returns

`boolean`

***

### canShowLeft

#### Get Signature

> **get** **canShowLeft**(): `boolean`

Boolean representing if the tooltip will fit on screen to the left of the element

##### Returns

`boolean`

***

### canShowRight

#### Get Signature

> **get** **canShowRight**(): `boolean`

Boolean representing if the tooltip will fit on screen to the right of the element

##### Returns

`boolean`

***

### container

#### Get Signature

> **get** **container**(): `Element`

Container where the tooltip will be appended.

##### Returns

`Element`

## Methods

### centerHorizontally()

> **centerHorizontally**(): `void`

#### Returns

`void`

***

### centerVertically()

> **centerVertically**(): `void`

#### Returns

`void`

***

### hide()

> **hide**(): `void`

Hides the tooltip. Automatically called on mouseleave.

#### Returns

`void`

***

### show()

> **show**(): `void`

Shows the tooltip. Automatically called on mouseenter. Will attempt to flip if position was wrong.

#### Returns

`void`

***

### showAbove()

> **showAbove**(): `void`

Force showing the tooltip above the node.

#### Returns

`void`

***

### showBelow()

> **showBelow**(): `void`

Force showing the tooltip below the node.

#### Returns

`void`

***

### showLeft()

> **showLeft**(): `void`

Force showing the tooltip to the left of the node.

#### Returns

`void`

***

### showRight()

> **showRight**(): `void`

Force showing the tooltip to the right of the node.

#### Returns

`void`

***

### create()

> `static` **create**(`node`, `text`, `options?`): `Tooltip`

Alias for the constructor

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `node` | `HTMLElement` |
| `text` | `string` \| `HTMLElement` |
| `options` | [`TooltipOptions`](TooltipOptions.md) |

#### Returns

`Tooltip`
