# Class: BoundDOM

## Extends

- [`BaseDOM`](BaseDOM.md)

## Constructors

### Constructor

> **new BoundDOM**(`callerName`): `BoundDOM`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callerName` | `string` |

#### Returns

`BoundDOM`

#### Overrides

[`BaseDOM`](BaseDOM.md).[`constructor`](BaseDOM.md#constructor)

## Accessors

### screenHeight

#### Get Signature

> **get** **screenHeight**(): `number`

The current height of the user's screen.

##### Returns

`number`

#### Inherited from

[`BaseDOM`](BaseDOM.md).[`screenHeight`](BaseDOM.md#screenheight)

***

### screenWidth

#### Get Signature

> **get** **screenWidth**(): `number`

The current width of the user's screen.

##### Returns

`number`

#### Inherited from

[`BaseDOM`](BaseDOM.md).[`screenWidth`](BaseDOM.md#screenwidth)

## Methods

### addStyle()

#### Call Signature

> **addStyle**(`css`): `void`

Adds a `<style>` to the document with the given ID.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `css` | `string` | CSS to apply to the document |

##### Returns

`void`

#### Call Signature

> **addStyle**(`id`, `css`): `void`

Adds a `<style>` to the document with the given ID.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | ID to use for style element |
| `css` | `string` | CSS to apply to the document |

##### Returns

`void`

***

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

#### Inherited from

[`BaseDOM`](BaseDOM.md).[`animate`](BaseDOM.md#animate)

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

#### Inherited from

[`BaseDOM`](BaseDOM.md).[`createElement`](BaseDOM.md#createelement)

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

#### Inherited from

[`BaseDOM`](BaseDOM.md).[`onAdded`](BaseDOM.md#onadded)

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

#### Inherited from

[`BaseDOM`](BaseDOM.md).[`onRemoved`](BaseDOM.md#onremoved)

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

#### Inherited from

[`BaseDOM`](BaseDOM.md).[`parseHTML`](BaseDOM.md#parsehtml)

***

### removeStyle()

> **removeStyle**(`id?`): `void`

Removes a `<style>` from the document corresponding to the given ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id?` | `string` | ID used for the style element |

#### Returns

`void`
