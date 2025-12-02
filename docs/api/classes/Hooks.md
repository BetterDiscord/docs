# Class: Hooks\<CN, Bounded\>

Defined in: [src/betterdiscord/api/hooks.ts:17](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/hooks.ts#L17)

`Hooks` is a utility class providing access to various React hooks. An instance is available on [BdApi](BdApi.md).

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `CN` *extends* `string` \| `undefined` | `undefined` |
| `Bounded` *extends* [`IsTruthy`](../types/IsTruthy.md)\<`CN`\> | [`IsTruthy`](../types/IsTruthy.md)\<`CN`\> |

## Properties

### useForceUpdate()

```ts
useForceUpdate: () => [number, ActionDispatch<any>];
```

Defined in: [src/betterdiscord/api/hooks.ts:26](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/hooks.ts#L26)

#### Returns

\[`number`, `ActionDispatch`\<`any`\>\]

***

### useStateFromStores()

```ts
useStateFromStores: <T>(stores: 
  | StoreType
  | StoreType[], factory: () => T, deps?: DependencyList, areStateEqual: true | (oldState: T, newState: T) => boolean) => T;
```

Defined in: [src/betterdiscord/api/hooks.ts:25](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/hooks.ts#L25)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stores` | \| [`StoreType`](../types/StoreType.md) \| [`StoreType`](../types/StoreType.md)[] |
| `factory` | () => `T` |
| `deps?` | `DependencyList` |
| `areStateEqual?` | `true` \| (`oldState`: `T`, `newState`: `T`) => `boolean` |

#### Returns

`T`

## Methods

### useData()

```ts
useData<T>(...args: [...(Bounded extends false ? [pluginName: string] : [])[], string]): T;
```

Defined in: [src/betterdiscord/api/hooks.ts:28](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/hooks.ts#L28)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`...(Bounded extends false ? [pluginName: string] : [])[]`, `string`\] |

#### Returns

`T`
