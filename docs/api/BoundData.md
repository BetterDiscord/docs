# Class: BoundData

`Data` is a simple utility class for the management of plugin data. An instance is available on [BdApi](BdApi.md).

## Constructors

### Constructor

> **new BoundData**(`pluginName`): `BoundData`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pluginName` | `string` |

#### Returns

`BoundData`

## Methods

### delete()

> **delete**(`key`): `void`

Deletes a piece of stored data. This is different than saving `null` or `undefined`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | Which piece of data to delete. |

#### Returns

`void`

***

### load()

> **load**\<`T`\>(`key`): `T`

Loads previously stored data.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | Which piece of data to load |

#### Returns

`T`

The stored data

***

### recache()

> **recache**(): `Promise`\<`boolean`\>

Recaches JSON-serializable save file.

#### Returns

`Promise`\<`boolean`\>

Whether the data successfully recached

⚠️ **Use of recaching is discouraged!**

Recache loads can block the filesystem and significantly degrade performance.
Use this method only for **debugging or testing purposes**. Avoid frequent recaching in production environments.

***

### save()

> **save**(`key`, `data`): `void`

Saves JSON-serializable data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | Which piece of data to store |
| `data` | `any` | The data to be saved |

#### Returns

`void`
