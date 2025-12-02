# Class: Utils

Defined in: [src/betterdiscord/api/utils.ts:13](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/utils.ts#L13)

`Utils` is a utility containing commonly reused functions. Instance is accessible through the [BdApi](BdApi.md).

## Properties

### className()

```ts
static className: (...inputs: ClassValue[]) => string = clsx;
```

Defined in: [src/betterdiscord/api/utils.ts:81](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/utils.ts#L81)

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

### debounce()

```ts
static debounce: <T>(executor: T, delay: number) => (...args: Parameters<T>) => void;
```

Defined in: [src/betterdiscord/api/utils.ts:56](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/utils.ts#L56)

Returns a function, that, as long as it continues to be invoked, will not
be triggered. The function will be called after it stops being called for
`delay` milliseconds. It is called at the end of the sequence (trailing edge).

Adapted from the version by David Walsh (https://davidwalsh.name/javascript-debounce-function)

Returns a function, that, as long as it continues to be invoked, will not
be triggered. The function will be called after it stops being called for
N milliseconds.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* (...`args`: `any`[]) => `any` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `executor` | `T` | function to debounce |
| `delay` | `number` | time to delay in milliseconds |

#### Returns

```ts
(...args: Parameters<T>): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | [`Parameters`](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype)\<`T`\> |

##### Returns

`void`

#### Param

The function to be debounced

#### Param

Number of ms to delay calls

#### Returns

A debounced version of the function

***

### extend()

```ts
static extend: (target: object, ...extenders: object[]) => object;
```

Defined in: [src/betterdiscord/api/utils.ts:43](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/utils.ts#L43)

Deep extends an object with a set of other objects. Objects later in the list
of `extenders` have priority, that is to say if one sets a key to be a primitive,
it will be overwritten with the next one with the same key. If it is an object,
and the keys match, the object is extended. This happens recursively.

Deep extends an object with a set of other objects. Objects later in the list
of `extenders` have priority, that is to say if one sets a key to be a primitive,
it will be overwritten with the next one with the same key. If it is an object,
and the keys match, the object is extended. This happens recursively.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `object` | target object for extension |
| ...`extenders` | `object`[] | series of objects to use for extension |

#### Returns

`object`

#### Param

Object to be extended

#### Param

Objects to extend with

#### Returns

A reference to `extendee`

***

### findInTree()

```ts
static findInTree: (tree: 
  | Record<string | number, unknown>
  | null, searchFilter: string | TreeFilter, options: {
  ignore?: string[];
  walkable?: string[] | null;
}) => any;
```

Defined in: [src/betterdiscord/api/utils.ts:23](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/utils.ts#L23)

Finds a value, subobject, or array from a tree that matches a specific filter. This is a DFS.

Finds a value, subobject, or array from a tree that matches a specific filter.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tree` | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string` \| `number`, `unknown`\> \| `null` | Tree that should be walked |
| `searchFilter` | `string` \| [`TreeFilter`](../types/TreeFilter.md) | Filter to check against each object and subobject |
| `options` | \{ `ignore?`: `string`[]; `walkable?`: `string`[] \| `null`; \} | Additional options to customize the search |
| `options.ignore?` | `string`[] | Array of strings to use as keys to exclude from the search, most helpful when `walkable = null`. |
| `options.walkable?` | `string`[] \| `null` | Array of strings to use as keys that are allowed to be walked on. Null value indicates all keys are walkable |

#### Returns

`any`

#### Param

Tree that should be walked

#### Param

Filter to check against each object and subobject

#### Param

Additional options to customize the search

#### Param

Array of strings to use as keys that are allowed to be walked on. `null` indicates all keys are walkable.

#### Param

Array of strings to use as keys to exclude from the search. Most helpful when `walkable = null`.

***

### forceLoad()

```ts
static forceLoad: (id: string | number) => Promise<any[]>;
```

Defined in: [src/betterdiscord/api/utils.ts:31](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/utils.ts#L31)

Loads the module ids within a chunk

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` \| `number` | module with the chunk id. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`[]\>

resolved chunk module

***

### semverCompare()

```ts
static semverCompare: (currentVersion: string, remoteVersion: string) => -1 | 0 | 1 = comparator;
```

Defined in: [src/betterdiscord/api/utils.ts:99](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/utils.ts#L99)

This works on semantic versioning e.g. "1.0.0".

This works on semantic versioning e.g. "1.0.0".

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `currentVersion` | `string` |  |
| `remoteVersion` | `string` |  |

#### Returns

`-1` \| `0` \| `1`

0 indicates equal, -1 indicates left hand greater, 1 indicates right hand greater

#### Param

#### Param

#### Returns

0 indicates equal, -1 indicates left hand greater, 1 indicates right hand greater

***

### Store

```ts
static Store: typeof Store;
```

Defined in: [src/betterdiscord/api/utils.ts:101](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/utils.ts#L101)

## Methods

### escapeHTML()

```ts
static escapeHTML(html: string): string;
```

Defined in: [src/betterdiscord/api/utils.ts:64](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/utils.ts#L64)

Takes a string of HTML and escapes it using the browser's own escaping mechanism.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `html` | `string` | HTML to be escaped |

#### Returns

`string`

Escaped HTML string

***

### getNestedValue()

```ts
static getNestedValue<T, R>(object: T, path: string): R;
```

Defined in: [src/betterdiscord/api/utils.ts:88](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/utils.ts#L88)

Gets a nested value (if it exists) of an object safely. keyPath should be something like `key.key2.key3`.
Numbers can be used for arrays as well like `key.key2.array.0.id`.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string` \| `number` \| `symbol`, `unknown`\> | - |
| `R` | `any` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `T` |
| `path` | `string` |

#### Returns

`R`
