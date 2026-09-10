# Interface: GetOwnerInstanceOptions

## Properties

### exclude?

> `optional` **exclude?**: `string`[]

A list of items to exclude from the search

***

### filter?

> `optional` **filter?**: (`owner`) => `boolean`

A filter to check the current instance with (should return a boolean)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | `any` |

#### Returns

`boolean`

***

### include?

> `optional` **include?**: `string`[]

A list of items to include in the search
