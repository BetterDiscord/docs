# Class: Patcher

`Patcher` is a utility class for modifying existing functions. An instance is available on [BdApi](BdApi.md).
This is extremely useful for modifying the internals of Discord by adjusting return values of React renders, or arguments of internal functions.

## Methods

### after()

> **after**\<`M`, `K`\>(`caller`, `moduleToPatch`, `functionName`, `callback`): (() => `void`) \| `null`

This method patches onto another function, allowing your code to run afterwards.
Using this, you are able to modify the return value after the original method is run.

#### Type Parameters

| Type Parameter |
| ------ |
| `M` *extends* `object` |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `caller` | `string` | Name of the caller of the patch function |
| `moduleToPatch` | `M` | Object with the function to be patched. Can also be an object's prototype. |
| `functionName` | `K` | Name of the function to be patched |
| `callback` | [`AsAfterCallback`](AsAfterCallback.md)\<`M`, `K`\> | Function to run after the original method. The function is given the `this` context, the `arguments` of the original function, and the `return` value of the original function. |

#### Returns

(() => `void`) \| `null`

Function that cancels the original patch

***

### before()

> **before**\<`M`, `K`\>(`caller`, `moduleToPatch`, `functionName`, `callback`): (() => `void`) \| `null`

This method patches onto another function, allowing your code to run beforehand.
Using this, you are also able to modify the incoming arguments before the original method is run.

#### Type Parameters

| Type Parameter |
| ------ |
| `M` *extends* `object` |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `caller` | `string` | Name of the caller of the patch function |
| `moduleToPatch` | `M` | Object with the function to be patched. Can also be an object's prototype. |
| `functionName` | `K` | Name of the function to be patched |
| `callback` | [`AsBeforeCallback`](AsBeforeCallback.md)\<`M`, `K`\> | Function to run before the original method. The function is given the `this` context and the `arguments` of the original function. |

#### Returns

(() => `void`) \| `null`

Function that cancels the original patch

***

### getPatchesByCaller()

> **getPatchesByCaller**(`caller`): `void` \| [`GenericChildPatch`](GenericChildPatch.md)[]

Returns all patches by a particular caller. The patches all have an `unpatch()` method.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `caller` | `string` | ID of the original patches |

#### Returns

`void` \| [`GenericChildPatch`](GenericChildPatch.md)[]

Array of all the patch objects

***

### instead()

> **instead**\<`M`, `K`\>(`caller`, `moduleToPatch`, `functionName`, `callback`): (() => `void`) \| `null`

This method patches onto another function, allowing your code to run instead.
Using this, you are able to replace the original completely. You can still call the original manually if needed.

#### Type Parameters

| Type Parameter |
| ------ |
| `M` *extends* `object` |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `caller` | `string` | Name of the caller of the patch function |
| `moduleToPatch` | `M` | Object with the function to be patched. Can also be an object's prototype. |
| `functionName` | `K` | Name of the function to be patched |
| `callback` | [`AsInsteadCallback`](AsInsteadCallback.md)\<`M`, `K`\> | Function to run before the original method. The function is given the `this` context, `arguments` of the original function, and also the original function. |

#### Returns

(() => `void`) \| `null`

Function that cancels the original patch

***

### unpatchAll()

> **unpatchAll**(`caller`): `void`

Automatically cancels all patches created with a specific ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `caller` | `string` | ID of the original patches |

#### Returns

`void`
