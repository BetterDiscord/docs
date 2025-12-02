# Class: ReactUtils

Defined in: [src/betterdiscord/api/reactutils.ts:133](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L133)

`ReactUtils` is a utility class for interacting with React internals. Instance is accessible through the [BdApi](BdApi.md).
This is extremely useful for interacting with the internals of the UI.

## Accessors

### rootInstance

#### Get Signature

```ts
get static rootInstance(): any;
```

Defined in: [src/betterdiscord/api/reactutils.ts:137](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L137)

##### Deprecated

##### Returns

`any`

## Methods

### getInternalInstance()

```ts
static getInternalInstance(node: HTMLElement): Fiber | null;
```

Defined in: [src/betterdiscord/api/reactutils.ts:147](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L147)

Gets the internal React data of a specified node.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `node` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | Node to get the internal React data from |

#### Returns

`Fiber` \| `null`

Either the found data or `undefined`

***

### getOwnerInstance()

```ts
static getOwnerInstance(node: 
  | HTMLElement
  | undefined, options: GetOwnerInstanceOptions): object | null | undefined;
```

Defined in: [src/betterdiscord/api/reactutils.ts:165](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L165)

Attempts to find the "owner" node to the current node. This is generally
a node with a `stateNode` - a class component.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `node` | \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| `undefined` | Node to obtain React instance of |
| `options` | [`GetOwnerInstanceOptions`](../interfaces/GetOwnerInstanceOptions.md) | Options for the search |

#### Returns

`object` \| `null` \| `undefined`

The owner instance or `undefined` if not found

***

### getType()

```ts
static getType<T>(elementType: ElementType<T>): T;
```

Defined in: [src/betterdiscord/api/reactutils.ts:291](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L291)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `FC`\<\{ \}\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `elementType` | [`ElementType`](../types/ElementType.md)\<`T`\> |

#### Returns

`T`

***

### wrapElement()

```ts
static wrapElement(element: 
  | HTMLElement
  | HTMLElement[]): typeof ReactWrapper;
```

Defined in: [src/betterdiscord/api/reactutils.ts:203](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L203)

Creates an unrendered React component that wraps HTML elements.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `element` | \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)[] | Element or array of elements to wrap |

#### Returns

*typeof* [`ReactWrapper`](ReactWrapper.md)

Unrendered React component

***

### wrapInHooks()

```ts
static wrapInHooks<T>(functionComponent: 
  | T
  | ForwardRefExoticComponent<T>
  | MemoExoticComponent<T | ForwardRefExoticComponent<T>>, customPatches: Partial<PatchedReactHooks>): (props: ComponentProps<T>) => 
  | string
  | number
  | bigint
  | boolean
  | ReactElement<unknown, string | JSXElementConstructor<any>>
  | Iterable<ReactNode, any, any>
  | Promise<ReactNode>
  | null
  | undefined;
```

Defined in: [src/betterdiscord/api/reactutils.ts:239](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L239)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `FC`\<\{ \}\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `functionComponent` | \| `T` \| `ForwardRefExoticComponent`\<`T`\> \| `MemoExoticComponent`\<`T` \| `ForwardRefExoticComponent`\<`T`\>\> |
| `customPatches` | [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`PatchedReactHooks`](../interfaces/PatchedReactHooks.md)\> |

#### Returns

```ts
(props: ComponentProps<T>): 
  | string
  | number
  | bigint
  | boolean
  | ReactElement<unknown, string | JSXElementConstructor<any>>
  | Iterable<ReactNode, any, any>
  | Promise<ReactNode>
  | null
  | undefined;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `ComponentProps`\<`T`\> |

##### Returns

  \| `string`
  \| `number`
  \| `bigint`
  \| `boolean`
  \| `ReactElement`\<`unknown`, `string` \| `JSXElementConstructor`\<`any`\>\>
  \| [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`ReactNode`, `any`, `any`\>
  \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ReactNode`\>
  \| `null`
  \| `undefined`
