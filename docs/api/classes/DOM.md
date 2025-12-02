# Class: DOM\<Bound\>

Defined in: [src/betterdiscord/api/dom.ts:11](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/dom.ts#L11)

`DOM` is a simple utility class for dom manipulation. An instance is available on [BdApi](BdApi.md).

## Type Parameters

| Type Parameter |
| ------ |
| `Bound` *extends* `boolean` |

## Accessors

### screenHeight

#### Get Signature

```ts
get screenHeight(): number;
```

Defined in: [src/betterdiscord/api/dom.ts:23](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/dom.ts#L23)

Current height of the user's screen.

##### Returns

`number`

***

### screenWidth

#### Get Signature

```ts
get screenWidth(): number;
```

Defined in: [src/betterdiscord/api/dom.ts:17](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/dom.ts#L17)

Current width of the user's screen.

##### Returns

`number`

## Methods

### addStyle()

```ts
addStyle(...args: AddStyleArgs<Bound>): void;
```

Defined in: [src/betterdiscord/api/dom.ts:38](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/dom.ts#L38)

Adds a `<style>` to the document with the given ID.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | [`AddStyleArgs`](../types/AddStyleArgs.md)\<`Bound`\> |

#### Returns

`void`

***

### animate()

```ts
animate(
   update: (p: number) => void, 
   duration: number, 
   options?: {
  timing?: (_: number) => number;
}): () => void;
```

Defined in: [src/betterdiscord/api/dom.ts:97](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/dom.ts#L97)

Utility to help smoothly animate using JavaScript.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `update` | (`p`: `number`) => `void` | Render function indicating the style should be updated |
| `duration` | `number` | Duration in ms to animate for |
| `options?` | \{ `timing?`: (`_`: `number`) => `number`; \} | Options to customize the animation |
| `options.timing?` | (`_`: `number`) => `number` | Optional function calculating progress based on current time fraction. Linear by default. |

#### Returns

```ts
(): void;
```

##### Returns

`void`

***

### createElement()

```ts
createElement(
   tag: keyof HTMLElementTagNameMap, 
   options?: {
}, ...
   children?: (string | Node)[]): HTMLElement;
```

Defined in: [src/betterdiscord/api/dom.ts:113](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/dom.ts#L113)

Utility function to make creating DOM elements easier. Acts similarly
to `React.createElement`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tag` | keyof `HTMLElementTagNameMap` | HTML tag name to create |
| `options?` | \{ \} | Options object to customize the element |
| ...`children?` | (`string` \| [`Node`](https://developer.mozilla.org/docs/Web/API/Node))[] | Child nodes to add |

#### Returns

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

The created HTML element

***

### onAdded()

```ts
onAdded(selector: string, callback: () => void): void | () => void;
```

Defined in: [src/betterdiscord/api/dom.ts:85](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/dom.ts#L85)

Adds a listener for when a node matching a selector is added to the document body.
The listener is automatically removed upon firing.
The callback is given the matching element.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `selector` | `string` | node to wait for |
| `callback` | () => `void` | function to be performed on event |

#### Returns

`void` \| () => `void`

***

### onRemoved()

```ts
onRemoved(node: HTMLElement, callback: () => void): () => void;
```

Defined in: [src/betterdiscord/api/dom.ts:74](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/dom.ts#L74)

Adds a listener for when the node is removed from the document body.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `node` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | Node to be observed |
| `callback` | () => `void` | Function to run when removed |

#### Returns

```ts
(): void;
```

##### Returns

`void`

***

### parseHTML()

```ts
parseHTML(html: string, fragment?: boolean): 
  | Node
| NodeListOf<ChildNode>;
```

Defined in: [src/betterdiscord/api/dom.ts:129](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/dom.ts#L129)

Parses a string of HTML and returns the results. If the second parameter is true,
the parsed HTML will be returned as a document fragment [https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment).
This is extremely useful if you have a list of elements at the top level, they can then be appended all at once to another node.

If the second parameter is false, then the return value will be the list of parsed
nodes and there were multiple top level nodes, otherwise the single node is returned.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `html` | `string` | `undefined` | HTML to be parsed |
| `fragment?` | `boolean` | `false` | Whether or not the return should be the raw `DocumentFragment` |

#### Returns

  \| [`Node`](https://developer.mozilla.org/docs/Web/API/Node)
  \| `NodeListOf`\<`ChildNode`\>

The result of HTML parsing

***

### removeStyle()

```ts
removeStyle(...args: RemoveStyleArgs<Bound>): void;
```

Defined in: [src/betterdiscord/api/dom.ts:56](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/dom.ts#L56)

Removes a `<style>` from the document corresponding to the given ID.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | [`RemoveStyleArgs`](../types/RemoveStyleArgs.md)\<`Bound`\> |

#### Returns

`void`
