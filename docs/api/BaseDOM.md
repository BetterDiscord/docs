# Class: BaseDOM

## Extended by

- [`DOM`](DOM.md)
- [`BoundDOM`](BoundDOM.md)

## Constructors

### Constructor

> **new BaseDOM**(): `BaseDOM`

#### Returns

`BaseDOM`

## Accessors

### screenHeight

#### Get Signature

> **get** **screenHeight**(): `number`

The current height of the user's screen.

##### Returns

`number`

***

### screenWidth

#### Get Signature

> **get** **screenWidth**(): `number`

The current width of the user's screen.

##### Returns

`number`

## Methods

### animate()

> **animate**(`update`, `duration`, `options?`): () => `void`

Utility to help smoothly animate using JavaScript.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `update` | (`p`) => `void` | Render function indicating the style should be updated |
| `duration` | `number` | Duration in ms to animate for |
| `options?` | [`AnimateOptions`](AnimateOptions.md) | Options to customize the animation |

#### Returns

() => `void`

***

### createElement()

> **createElement**\<`T`\>(`tag`, `options?`, ...`children?`): `HTMLElement`

Utility function to make creating DOM elements easier. Acts similarly
to `React.createElement`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof `HTMLElementTagNameMap` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tag` | `T` | HTML tag name to create |
| `options?` | `Partial`\<`HTMLElementTagNameMap`\[`T`\]\> | Options object to customize the element |
| ...`children?` | (`string` \| `Node`)[] | Child nodes to add |

#### Returns

`HTMLElement`

The created HTML element

***

### onAdded()

> **onAdded**(`selector`, `callback`): `void` \| (() => `void`)

Adds a listener for when a node matching a selector is added to the document body.
The listener is automatically removed upon firing.
The callback is given the matching element.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `selector` | `string` | A CSS selector for the node to wait for |
| `callback` | () => `void` | Function to be performed on event |

#### Returns

`void` \| (() => `void`)

***

### onRemoved()

> **onRemoved**(`node`, `callback`): () => `void`

Adds a listener for when the node is removed from the document body.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `node` | `HTMLElement` | Node to be observed |
| `callback` | () => `void` | Function to run when removed |

#### Returns

() => `void`

***

### parseHTML()

> **parseHTML**(`html`, `fragment?`): `Node` \| `NodeListOf`\<`ChildNode`\>

Parses a string of HTML and returns the results. If the second parameter is true,
the parsed HTML will be returned as a [document fragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment).
This is extremely useful if you have a list of elements at the top level, they can then be appended all at once to another node.

If the second parameter is false, then the return value will be the list of parsed
nodes and there were multiple top level nodes, otherwise the single node is returned.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `html` | `string` | `undefined` | HTML to be parsed |
| `fragment?` | `boolean` | `false` | Whether or not the return should be the raw `DocumentFragment` |

#### Returns

`Node` \| `NodeListOf`\<`ChildNode`\>

The result of HTML parsing
