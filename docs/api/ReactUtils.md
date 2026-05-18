# Class: ReactUtils

`ReactUtils` is a utility class for interacting with React internals. Instance is accessible through the [BdApi](BdApi.md).
This is extremely useful for interacting with the internals of the UI.

## Constructors

### Constructor

> **new ReactUtils**(): `ReactUtils`

#### Returns

`ReactUtils`

## Properties

### getInternalInstance

> **getInternalInstance**: (`node`) => `Fiber` \| `null`

Gets the internal React data of a specified node.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `node` | `Element` | Node to get the internal React data from |

#### Returns

`Fiber` \| `null`

Either the found data or `undefined`

***

### getOwnerInstance

> **getOwnerInstance**: (`node`, `options`) => `any`

Attempts to find the "owner" node to the current node. This is generally
a node with a `stateNode` - a class component.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `node` | `Element` \| `undefined` | Node to obtain React instance of |
| `options` | [`GetOwnerInstanceOptions`](GetOwnerInstanceOptions.md) | Options for the search |

#### Returns

`any`

The owner instance or `undefined` if not found

***

### getType

> **getType**: \<`T`, `P`\>(`elementType`) => `T`

Gets the type of a React component, going through things such as forwardRef and memo

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `FC`\<`P`\> |
| `P` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `elementType` | [`ReactElementType`](ReactElementType.md)\<`T`, `P`\> |

#### Returns

`T`

***

### wrapElement

> **wrapElement**: (`element`) => *typeof* [`ReactWrapper`](ReactWrapper.md)

Creates an unrendered React component that wraps HTML elements.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `element` | `Element` \| `Element`[] | Element or array of elements to wrap |

#### Returns

*typeof* [`ReactWrapper`](ReactWrapper.md)

Unrendered React component

***

### wrapInHooks

> **wrapInHooks**: \<`T`, `P`\>(`functionComponent`, `customPatches`) => `FunctionComponent`\<`ComponentProps`\<`T`\>\>

Wraps a functional React component to allow it to be created outside of
the normal React lifecycle.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `FC`\<`P`\> |
| `P` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `functionComponent` | `T` \| `ForwardRefExoticComponent`\<`T`\> \| `MemoExoticComponent`\<`T` \| `ForwardRefExoticComponent`\<`T`\>\> | The functional component to wrap |
| `customPatches` | `Partial`\<[`PatchedReactHooks`](PatchedReactHooks.md)\> | Custom react hooks to use |

#### Returns

`FunctionComponent`\<`ComponentProps`\<`T`\>\>

The wrapped component

## Accessors

### rootInstance

#### Get Signature

> **get** **rootInstance**(): `any`

##### Deprecated

##### Returns

`any`

## Methods

### createNodePatcher()

> **createNodePatcher**(): [`NodePatcher`](NodePatcher.md)

Creates a NodePatcher instance which is used to patch React nodes

#### Returns

[`NodePatcher`](NodePatcher.md)
