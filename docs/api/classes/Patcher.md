# Class: Patcher\<Bounded\>

Defined in: [src/betterdiscord/api/patcher.ts:34](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/patcher.ts#L34)

`Patcher` is a utility class for modifying existing functions. Instance is accessible through the [BdApi](BdApi.md).
This is extremely useful for modifying the internals of Discord by adjusting return value or React renders, or arguments of internal functions.

## Type Parameters

| Type Parameter |
| ------ |
| `Bounded` *extends* `boolean` |

## Methods

### after()

```ts
after<M, K>(...args: [...(Bounded extends false ? [caller: string] : [])[], M, K, M[K] extends (...a: any[]) => any ? AfterCallback<any[any]> : never]): () => void | null;
```

Defined in: [src/betterdiscord/api/patcher.ts:117](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/patcher.ts#L117)

This method patches onto another function, allowing your code to run afterwards.
Using this, you are able to modify the return value after the original method is run.

#### Type Parameters

| Type Parameter |
| ------ |
| `M` *extends* `object` |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`...(Bounded extends false ? [caller: string] : [])[]`, `M`, `K`, `M`\[`K`\] *extends* (...`a`: `any`[]) => `any` ? `AfterCallback`\<`any`\[`any`\]\> : `never`\] |

#### Returns

() => `void` \| `null`

Function that cancels the original patch

***

### before()

```ts
before<M, K>(...args: [...(Bounded extends false ? [caller: string] : [])[], M, K, M[K] extends (...a: any[]) => any ? BeforeCallback<any[any]> : never]): () => void | null;
```

Defined in: [src/betterdiscord/api/patcher.ts:51](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/patcher.ts#L51)

This method patches onto another function, allowing your code to run beforehand.
Using this, you are also able to modify the incoming arguments before the original method is run.

#### Type Parameters

| Type Parameter |
| ------ |
| `M` *extends* `object` |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`...(Bounded extends false ? [caller: string] : [])[]`, `M`, `K`, `M`\[`K`\] *extends* (...`a`: `any`[]) => `any` ? `BeforeCallback`\<`any`\[`any`\]\> : `never`\] |

#### Returns

() => `void` \| `null`

Function that cancels the original patch

***

### getPatchesByCaller()

```ts
getPatchesByCaller(caller: string): void | GenericChildPatch[];
```

Defined in: [src/betterdiscord/api/patcher.ts:146](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/patcher.ts#L146)

Returns all patches by a particular caller. The patches all have an `unpatch()` method.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `caller` | `string` | ID of the original patches |

#### Returns

`void` \| `GenericChildPatch`[]

Array of all the patch objects

***

### instead()

```ts
instead<M, K>(...args: [...(Bounded extends false ? [caller: string] : [])[], M, K, M[K] extends (...a: any[]) => any ? InsteadCallback<any[any]> : never]): () => void | null;
```

Defined in: [src/betterdiscord/api/patcher.ts:84](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/patcher.ts#L84)

This method patches onto another function, allowing your code to run instead.
Using this, you are able to replace the original completely. You can still call the original manually if needed.

#### Type Parameters

| Type Parameter |
| ------ |
| `M` *extends* `object` |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`...(Bounded extends false ? [caller: string] : [])[]`, `M`, `K`, `M`\[`K`\] *extends* (...`a`: `any`[]) => `any` ? `InsteadCallback`\<`any`\[`any`\]\> : `never`\] |

#### Returns

() => `void` \| `null`

Function that cancels the original patch

***

### unpatchAll()

```ts
unpatchAll(caller: string): void;
```

Defined in: [src/betterdiscord/api/patcher.ts:157](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/patcher.ts#L157)

Automatically cancels all patches created with a specific ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `caller` | `string` | ID of the original patches |

#### Returns

`void`
