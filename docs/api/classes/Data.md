# Class: Data\<Bounded\>

Defined in: [src/betterdiscord/api/data.ts:27](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/data.ts#L27)

`Data` is a simple utility class for the management of plugin data. An instance is available on [BdApi](BdApi.md).

## Type Parameters

| Type Parameter |
| ------ |
| `Bounded` *extends* `boolean` |

## Methods

### delete()

```ts
delete(...args: [...(Bounded extends false ? [pluginName: string] : [])[], string]): void;
```

Defined in: [src/betterdiscord/api/data.ts:87](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/data.ts#L87)

Deletes a piece of stored data. This is different than saving `null` or `undefined`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`...(Bounded extends false ? [pluginName: string] : [])[]`, `string`\] |

#### Returns

`void`

***

### load()

```ts
load<T>(...args: [...(Bounded extends false ? [pluginName: string] : [])[], string]): T;
```

Defined in: [src/betterdiscord/api/data.ts:57](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/data.ts#L57)

Loads previously stored data.

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

The stored data

***

### recache()

```ts
recache(...args: Bounded extends true ? [] : [string]): Promise<boolean>;
```

Defined in: [src/betterdiscord/api/data.ts:76](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/data.ts#L76)

Recaches JSON-serializable save file.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `Bounded` *extends* `true` ? \[\] : \[`string`\] |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

success Did the data recache

#### Warning

⚠️ **Use of the recaching is discouraged!**

Recache loads can block the filesystem and significantly degrade performance.
Use this method only for **debugging or testing purposes**. Avoid frequent recaching in production environments.

***

### save()

```ts
save<T>(...args: [...(Bounded extends false ? [pluginName: string] : [])[], string, T]): void;
```

Defined in: [src/betterdiscord/api/data.ts:42](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/data.ts#L42)

Saves JSON-serializable data.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`...(Bounded extends false ? [pluginName: string] : [])[]`, `string`, `T`\] |

#### Returns

`void`
