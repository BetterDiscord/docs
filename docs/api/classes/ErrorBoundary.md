# Class: ErrorBoundary

Defined in: [src/betterdiscord/ui/errorboundary.tsx:15](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/errorboundary.tsx#L15)

## Extends

- `Component`\<[`ErrorBoundaryProps`](../types/ErrorBoundaryProps.md), \{
  `hasError`: `boolean`;
\}\>

## Constructors

### Constructor

```ts
new ErrorBoundary(props: ErrorBoundaryProps): ErrorBoundary;
```

Defined in: [src/betterdiscord/ui/errorboundary.tsx:26](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/errorboundary.tsx#L26)

Creates an error boundary with optional fallbacks and debug info.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`ErrorBoundaryProps`](../types/ErrorBoundaryProps.md) |  |

#### Returns

`ErrorBoundary`

#### Overrides

```ts
React.Component<ErrorBoundaryProps, {hasError: boolean;}>.constructor
```

## Methods

### componentDidCatch()

```ts
componentDidCatch(error: Error): void;
```

Defined in: [src/betterdiscord/ui/errorboundary.tsx:31](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/errorboundary.tsx#L31)

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) |

#### Returns

`void`

#### Overrides

```ts
React.Component.componentDidCatch
```

***

### render()

```ts
render(): 
  | string
  | number
  | bigint
  | boolean
  | Iterable<ReactNode, any, any>
  | Promise<AwaitedReactNode>
  | Element
  | null
  | undefined;
```

Defined in: [src/betterdiscord/ui/errorboundary.tsx:37](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/errorboundary.tsx#L37)

#### Returns

  \| `string`
  \| `number`
  \| `bigint`
  \| `boolean`
  \| [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`ReactNode`, `any`, `any`\>
  \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`AwaitedReactNode`\>
  \| `Element`
  \| `null`
  \| `undefined`

#### Overrides

```ts
React.Component.render
```
