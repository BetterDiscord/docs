# Class: BaseHooks

## Extended by

- [`Hooks`](Hooks.md)
- [`BoundHooks`](BoundHooks.md)

## Constructors

### Constructor

> **new BaseHooks**(): `BaseHooks`

#### Returns

`BaseHooks`

## Properties

### useForceUpdate

> **useForceUpdate**: () => \[`number`, `ActionDispatch`\<`any`\>\]

Creates a hook that forces a re-render when called.

#### Returns

\[`number`, `ActionDispatch`\<`any`\>\]

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
