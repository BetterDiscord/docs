# Interface: Command

## Properties

### description?

> `optional` **description?**: `string`

***

### id

> **id**: `string`

***

### name

> **name**: `string`

***

### options?

> `optional` **options?**: [`Option`](Option.md)[]

## Methods

### execute()

> **execute**(`options`, `props`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `any`[] |
| `props` | \{ `channel`: [`Channel`](Channel.md); `guild?`: [`Guild`](Guild.md); \} |
| `props.channel` | [`Channel`](Channel.md) |
| `props.guild?` | [`Guild`](Guild.md) |

#### Returns

`void`

***

### predicate()?

> `optional` **predicate**(): `boolean`

#### Returns

`boolean`
