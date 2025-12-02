# Class: Tooltip

Defined in: [src/betterdiscord/ui/tooltip.ts:22](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L22)

## Constructors

### Constructor

```ts
new Tooltip(
   node: HTMLElement, 
   text: 
  | string
  | HTMLElement, 
   options: TooltipOptions): Tooltip;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:44](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L44)

Creates a tooltip that shows when hovering over the given node.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `node` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | DOM node to monitor and show the tooltip on |
| `text` | \| `string` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | - |
| `options` | [`TooltipOptions`](../interfaces/TooltipOptions.md) | additional options for the tooltip |

#### Returns

`Tooltip`

## Properties

### active

```ts
active: boolean;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:29](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L29)

***

### disabled

```ts
disabled: boolean;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:28](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L28)

***

### element

```ts
element: HTMLDivElement;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:30](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L30)

***

### label

```ts
label: 
  | string
  | HTMLElement;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:24](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L24)

***

### labelElement

```ts
labelElement: HTMLDivElement;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:32](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L32)

***

### node

```ts
node: HTMLElement;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:23](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L23)

***

### observer?

```ts
optional observer: MutationObserver;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:33](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L33)

***

### preventFlip

```ts
preventFlip: boolean;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:27](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L27)

***

### side

```ts
side: "top" | "right" | "bottom" | "left";
```

Defined in: [src/betterdiscord/ui/tooltip.ts:26](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L26)

***

### style

```ts
style: "warn" | "info" | "success" | "danger" | "primary";
```

Defined in: [src/betterdiscord/ui/tooltip.ts:25](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L25)

***

### tooltipElement

```ts
tooltipElement: HTMLDivElement;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:31](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L31)

## Accessors

### canShowAbove

#### Get Signature

```ts
get canShowAbove(): boolean;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:83](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L83)

Boolean representing if the tooltip will fit on screen above the element

##### Returns

`boolean`

***

### canShowBelow

#### Get Signature

```ts
get canShowBelow(): boolean;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:85](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L85)

Boolean representing if the tooltip will fit on screen below the element

##### Returns

`boolean`

***

### canShowLeft

#### Get Signature

```ts
get canShowLeft(): boolean;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:87](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L87)

Boolean representing if the tooltip will fit on screen to the left of the element

##### Returns

`boolean`

***

### canShowRight

#### Get Signature

```ts
get canShowRight(): boolean;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:89](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L89)

Boolean representing if the tooltip will fit on screen to the right of the element

##### Returns

`boolean`

***

### container

#### Get Signature

```ts
get container(): Element;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:81](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L81)

Container where the tooltip will be appended.

##### Returns

[`Element`](https://developer.mozilla.org/docs/Web/API/Element)

## Methods

### centerHorizontally()

```ts
centerHorizontally(): void;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:173](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L173)

#### Returns

`void`

***

### centerVertically()

```ts
centerVertically(): void;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:178](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L178)

#### Returns

`void`

***

### hide()

```ts
hide(): void;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:92](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L92)

Hides the tooltip. Automatically called on mouseleave.

#### Returns

`void`

***

### show()

```ts
show(): void;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:100](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L100)

Shows the tooltip. Automatically called on mouseenter. Will attempt to flip if position was wrong.

#### Returns

`void`

***

### showAbove()

```ts
showAbove(): void;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:146](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L146)

Force showing the tooltip above the node.

#### Returns

`void`

***

### showBelow()

```ts
showBelow(): void;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:153](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L153)

Force showing the tooltip below the node.

#### Returns

`void`

***

### showLeft()

```ts
showLeft(): void;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:160](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L160)

Force showing the tooltip to the left of the node.

#### Returns

`void`

***

### showRight()

```ts
showRight(): void;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:167](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L167)

Force showing the tooltip to the right of the node.

#### Returns

`void`

***

### create()

```ts
static create(
   node: HTMLElement, 
   text: 
  | string
  | HTMLElement, 
   options: TooltipOptions): Tooltip;
```

Defined in: [src/betterdiscord/ui/tooltip.ts:78](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/tooltip.ts#L78)

Alias for the constructor

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `node` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) |
| `text` | \| `string` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) |
| `options` | [`TooltipOptions`](../interfaces/TooltipOptions.md) |

#### Returns

`Tooltip`
