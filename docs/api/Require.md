# Interface: Require()

> **Require**\<`T`\>(`id`): `T`

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

> **c**: `Record`\<`PropertyKey`, [`Module`](Module.md)\>

***

### m

> **m**: `Record`\<`PropertyKey`, [`RawModule`](RawModule.md)\>

## Methods

### d()

> **d**(`target`, `exports`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | `object` |
| `exports` | `Record`\<`string`, () => `any`\> |

#### Returns

`void`

***

### e()

> **e**(`id`): `Promise`\<`unknown`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `PropertyKey` |

#### Returns

`Promise`\<`unknown`\>

***

### l()

> **l**(`url`, `onLoad`, `key`, `id`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `onLoad` | (`event`) => `void` |
| `key` | `string` |
| `id` | `string` |

#### Returns

`void`
