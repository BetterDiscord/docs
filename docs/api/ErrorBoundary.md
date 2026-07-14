# Class: ErrorBoundary

## Extends

- `Component`\<[`ErrorBoundaryProps`](ErrorBoundaryProps.md), \{ `hasError`: `boolean`; \}\>

## Constructors

### Constructor

> **new ErrorBoundary**(`props`): `ErrorBoundary`

Creates an error boundary with optional fallbacks and debug info.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | [`ErrorBoundaryProps`](ErrorBoundaryProps.md) | - |

#### Returns

`ErrorBoundary`

#### Overrides

`React.Component<ErrorBoundaryProps, {hasError: boolean;}>.constructor`

## Methods

### componentDidCatch()

> **componentDidCatch**(`error`): `void`

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `Error` |

#### Returns

`void`

#### Overrides

`React.Component.componentDidCatch`

***

### render()

> **render**(): `string` \| `number` \| `bigint` \| `boolean` \| `Iterable`\<`ReactNode`, `any`, `any`\> \| `Promise`\<`AwaitedReactNode`\> \| `Element` \| `null` \| `undefined`

#### Returns

`string` \| `number` \| `bigint` \| `boolean` \| `Iterable`\<`ReactNode`, `any`, `any`\> \| `Promise`\<`AwaitedReactNode`\> \| `Element` \| `null` \| `undefined`

#### Overrides

`React.Component.render`
