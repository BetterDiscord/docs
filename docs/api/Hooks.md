# Class: Hooks

`Hooks` is a utility class for React hooks. An instance is available on [BdApi](BdApi.md).

## Extends

- [`BaseHooks`](BaseHooks.md)

## Properties

### useForceUpdate

> **useForceUpdate**: () => \[`number`, `ActionDispatch`\<`any`\>\]

Creates a hook that forces a re-render when called.

#### Returns

\[`number`, `ActionDispatch`\<`any`\>\]

#### Inherited from

[`BaseHooks`](BaseHooks.md).[`useForceUpdate`](BaseHooks.md#useforceupdate)

***

### useStateFromStores

> **useStateFromStores**: \<`T`\>(`stores`, `factory`, `deps?`, `isStateEqual`) => `T`

Subscribes to one or more stores and re-computes a value when they change, causing a re-render.
A store is anything with an `addChangeListener` and `removeChangeListener` method,
such as Discord's Flux stores or BdApi.Utils.Store.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `stores` | [`StoreType`](StoreType.md) \| [`StoreType`](StoreType.md)[] | The store(s) to subscribe to |
| `factory` | () => `T` | A function that computes the value to return when stores change |
| `deps?` | `DependencyList` | An optional dependency list that controls when the factory function is updated |
| `isStateEqual?` | `true` \| ((`oldState`, `newState`) => `boolean`) | An optional function that allows for skipping re-renders if the state hasn't changed |

#### Returns

`T`

#### Inherited from

[`BaseHooks`](BaseHooks.md).[`useStateFromStores`](BaseHooks.md#usestatefromstores)

## Methods

### useData()

> **useData**\<`T`\>(`caller`, `key`): `T`

Retrieves data from storage and automatically re-renders when it changes.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `caller` | `string` | The name of the plugin to use data from |
| `key` | `string` | The key of the data to retrieve |

#### Returns

`T`

The current value of the data with the given key, or undefined if it doesn't exist
