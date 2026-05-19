# Class: Data

`Data` is a simple utility class for the management of plugin data. An instance is available on [BdApi](BdApi.md).

## Methods

### delete()

> **delete**(`pluginName`, `key`): `void`

Deletes a piece of stored data. This is different than saving `null` or `undefined`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | Name of the plugin deleting data |
| `key` | `string` | Which piece of data to delete. |

#### Returns

`void`

***

### load()

> **load**(`pluginName`, `key`): `unknown`

Loads previously stored data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | Name of the plugin loading data |
| `key` | `string` | Which piece of data to load |

#### Returns

`unknown`

The stored data

***

### recache()

> **recache**(`pluginName`): `Promise`\<`boolean`\>

Recaches JSON-serializable save file.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | Name of the plugin saving data |

#### Returns

`Promise`\<`boolean`\>

Whether the data successfully recached

⚠️ **Use of recaching is discouraged!**

Recache loads can block the filesystem and significantly degrade performance.
Use this method only for **debugging or testing purposes**. Avoid frequent recaching in production environments.

***

### save()

> **save**(`pluginName`, `key`, `data`): `void`

Saves JSON-serializable data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginName` | `string` | Name of the plugin saving data |
| `key` | `string` | Which piece of data to store |
| `data` | `any` | The data to be saved |

#### Returns

`void`
