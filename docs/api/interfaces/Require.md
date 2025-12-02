# Interface: Require()

Defined in: [src/betterdiscord/types/discord/webpack.d.ts:2](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/types/discord/webpack.d.ts#L2)

```ts
Require<T>(id: PropertyKey): T;
```

Defined in: [src/betterdiscord/types/discord/webpack.d.ts:3](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/types/discord/webpack.d.ts#L3)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `PropertyKey` |

## Returns

`T`

## Properties

### c

```ts
c: Record<PropertyKey, Module>;
```

Defined in: [src/betterdiscord/types/discord/webpack.d.ts:5](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/types/discord/webpack.d.ts#L5)

***

### m

```ts
m: Record<PropertyKey, RawModule>;
```

Defined in: [src/betterdiscord/types/discord/webpack.d.ts:6](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/types/discord/webpack.d.ts#L6)

## Methods

### d()

```ts
d(target: object, exports: Record<string, () => any>): void;
```

Defined in: [src/betterdiscord/types/discord/webpack.d.ts:4](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/types/discord/webpack.d.ts#L4)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | `object` |
| `exports` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, () => `any`\> |

#### Returns

`void`

***

### e()

```ts
e(id: PropertyKey): Promise<unknown>;
```

Defined in: [src/betterdiscord/types/discord/webpack.d.ts:7](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/types/discord/webpack.d.ts#L7)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `PropertyKey` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`unknown`\>
