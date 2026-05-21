# Class: Utils

`Utils` is a utility containing commonly reused functions. An instance is available on [BdApi](BdApi.md).

## Properties

### className

> **className**: (...`inputs`) => `string` = `clsx`

Builds a classname string from any number of arguments. This includes arrays and objects.
When given an array all values from the array are added to the list.
When given an object they keys are added as the classnames if the value is truthy.
Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`inputs` | `ClassValue`[] |

#### Returns

`string`

Joined classname

***

### debounce

> **debounce**: \<`T`\>(`executor`, `delay`) => (...`args`) => `void`

Returns a function, that, as long as it continues to be invoked, will not
be triggered. The function will be called after it stops being called for
`delay` milliseconds. It is called at the end of the sequence (trailing edge).

Adapted from the version by David Walsh (https://davidwalsh.name/javascript-debounce-function)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* (...`args`) => `any` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `executor` | `T` | The function to be debounced |
| `delay` | `number` | Number of ms to delay calls |

#### Returns

A debounced version of the function

(...`args`) => `void`

***

### extend

> **extend**: (`target`, ...`extenders`) => `object`

Deep extends an object with a set of other objects. Objects later in the list
of `extenders` have priority, that is to say if one sets a key to be a primitive,
it will be overwritten with the next one with the same key. If it is an object,
and the keys match, the object is extended. This happens recursively.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `object` | - |
| ...`extenders` | `object`[] | Objects to extend with |

#### Returns

`object`

A reference to `extendee`

***

### findInTree

> **findInTree**: (`tree`, `searchFilter`, `options`) => `any`

Finds a value, subobject, or array from a tree that matches a specific filter. This is a DFS.

Finds a value, subobject, or array from a tree that matches a specific filter.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tree` | `any` | Tree that should be walked |
| `searchFilter` | `string` \| [`TreeFilter`](TreeFilter.md) | Filter to check against each object and subobject |
| `options` | [`FindInTreeOptions`](FindInTreeOptions.md) | Additional options to customize the search |

#### Returns

`any`

#### Param

Tree that should be walked

#### Param

Filter to check against each object and subobject

#### Param

Additional options to customize the search

***

### forceLoad

> **forceLoad**: (`id`) => `Promise`\<`any`[]\>

Loads the module ids within a chunk

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` \| `number` | Module with the chunk id. |

#### Returns

`Promise`\<`any`[]\>

Resolved chunk module

***

### mapObject

> **mapObject**: \<`T`\>(`module`, `mappers`) => `T`

Maps the properties of one object onto another based on a set of filters

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `object` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `module` | `any` |
| `mappers` | `Record`\<keyof `T`, [`ExportedOnlyFilter`](ExportedOnlyFilter.md)\> |

#### Returns

`T`

***

### semverCompare

> **semverCompare**: (`currentVersion`, `remoteVersion`) => `-1` \| `0` \| `1` = `comparator`

Compares two semantic versions, e.g. "1.0.0"

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `currentVersion` | `string` | The current installed version |
| `remoteVersion` | `string` | The version to compare against |

#### Returns

`-1` \| `0` \| `1`

0 indicates equal, -1 indicates left hand greater, 1 indicates right hand greater

***

### Store

> **Store**: *typeof* [`Store`](Store.md)

A class which can be listened to for changes

## Methods

### escapeHTML()

> **escapeHTML**(`html`): `string`

Takes a string of HTML and escapes it using the browser's own escaping mechanism

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `html` | `string` | HTML to be escaped |

#### Returns

`string`

Escaped HTML string

***

### getNestedValue()

> **getNestedValue**\<`T`, `R`\>(`object`, `path`): `R`

Gets a nested value (if it exists) of an object safely. path should be something like `key.key2.key3`.
Numbers can be used for arrays as well like `key.key2.array.0.id`.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `Record`\<`string` \| `number` \| `symbol`, `unknown`\> | - |
| `R` | `any` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `object` | `T` | Object to get nested value from |
| `path` | `string` | Key path to the desired value |

#### Returns

`R`
