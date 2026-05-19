# Class: Webpack

`Webpack` is a utility class for getting internal webpack modules. An instance is available on [BdApi](BdApi.md).
This is extremely useful for interacting with the internals of Discord.

## Properties

### Filters

> **Filters**: `object`

Series of [Filters](#filters) to be used for finding webpack modules.

#### byComponentType()

> **byComponentType**(`filter`): [`ExportedOnlyFilter`](ExportedOnlyFilter.md)

Generates a filter to search React functional components.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | [`ExportedOnlyFilter`](ExportedOnlyFilter.md) |

##### Returns

[`ExportedOnlyFilter`](ExportedOnlyFilter.md)

#### byDisplayName()

> **byDisplayName**(`name`): [`ExportedOnlyFilter`](ExportedOnlyFilter.md)

Generates a function that filters by the `displayName` property.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

##### Returns

[`ExportedOnlyFilter`](ExportedOnlyFilter.md)

#### byKeys()

> **byKeys**(...`keys`): [`ExportedOnlyFilter`](ExportedOnlyFilter.md)

Generates a function that filters by a set of properties.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`keys` | `string`[] |

##### Returns

[`ExportedOnlyFilter`](ExportedOnlyFilter.md)

#### byPrototypeKeys()

> **byPrototypeKeys**(...`props`): [`ExportedOnlyFilter`](ExportedOnlyFilter.md)

Generates a function that filters by a set of properties on the object's prototype.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`props` | `string`[] |

##### Returns

[`ExportedOnlyFilter`](ExportedOnlyFilter.md)

#### byRegex()

> **byRegex**(`regex`): [`ExportedOnlyFilter`](ExportedOnlyFilter.md)

Generates a function that filters by a regex.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `regex` | `RegExp` |

##### Returns

[`ExportedOnlyFilter`](ExportedOnlyFilter.md)

#### bySource()

> **bySource**(...`searches`): [`ModuleFilter`](ModuleFilter.md)

Generates a function that filters by source code content.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`searches` | (`string` \| `RegExp`)[] |

##### Returns

[`ModuleFilter`](ModuleFilter.md)

#### byStoreName()

> **byStoreName**(`name`): [`ExportedOnlyFilter`](ExportedOnlyFilter.md)

Generates a function that filters by a specific internal Store name.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

##### Returns

[`ExportedOnlyFilter`](ExportedOnlyFilter.md)

#### byStrings()

> **byStrings**(...`strings`): [`ExportedOnlyFilter`](ExportedOnlyFilter.md)

Generates a function that filters by strings.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`strings` | `string`[] |

##### Returns

[`ExportedOnlyFilter`](ExportedOnlyFilter.md)

#### combine()

> **combine**(...`filters`): [`ModuleFilter`](ModuleFilter.md)

Generates a combined function from a list of filters.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`filters` | [`ModuleFilter`](ModuleFilter.md)[] |

##### Returns

[`ModuleFilter`](ModuleFilter.md)

#### not()

> **not**(`filter`): [`ModuleFilter`](ModuleFilter.md)

Generates a filter that returns the opposite of the passed filter.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | [`ModuleFilter`](ModuleFilter.md) |

##### Returns

[`ModuleFilter`](ModuleFilter.md)

***

### modules

> **modules**: `Record`\<`PropertyKey`, [`RawModule`](RawModule.md)\>

A Proxy that returns the module source by ID.

***

### Stores

> **Stores**: `Record`\<[`StoreNameType`](StoreNameType.md), [`FluxStore`](FluxStore.md)\>

An object containing all of Discord's internal stores which can be accessed by their name.

## Methods

### getAllByKeys()

> **getAllByKeys**\<`T`\>(...`props`): `void` \| `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `any`[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`props` | [`WithOptions`](WithOptions.md)\<`string`, [`WebpackOptions`](WebpackOptions.md)\> |

#### Returns

`void` \| `T`

***

### getAllByPrototypeKeys()

> **getAllByPrototypeKeys**\<`T`\>(...`prototypes`): `void` \| `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `any`[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`prototypes` | [`WithOptions`](WithOptions.md)\<`string`, [`WebpackOptions`](WebpackOptions.md)\> |

#### Returns

`void` \| `T`

***

### getAllByRegex()

> **getAllByRegex**\<`T`\>(`regex`, `options?`): `void` \| `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `any`[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `regex` | `RegExp` |
| `options` | [`WebpackOptions`](WebpackOptions.md) |

#### Returns

`void` \| `T`

***

### getAllBySource()

> **getAllBySource**\<`T`\>(...`searches`): `void` \| `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `object`[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`searches` | [`WithOptions`](WithOptions.md)\<`string` \| `RegExp`, [`WebpackOptions`](WebpackOptions.md)\> |

#### Returns

`void` \| `T`

***

### getAllByStrings()

> **getAllByStrings**\<`T`\>(...`strings`): `void` \| `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `any`[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`strings` | [`WithOptions`](WithOptions.md)\<`string`, [`WebpackOptions`](WebpackOptions.md)\> |

#### Returns

`void` \| `T`

***

### getBulk()

> **getBulk**\<`T`\>(...`queries`): `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `any`[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`queries` | [`BulkQueries`](BulkQueries.md)[] |

#### Returns

`T`

***

### getBulkKeyed()

> **getBulkKeyed**\<`T`\>(`queries`): `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `object` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `queries` | `Record`\<keyof `T`, [`BulkQueries`](BulkQueries.md)\> |

#### Returns

`T`

***

### getById()

> **getById**(`id`, `options?`): `void` \| `object`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `PropertyKey` |
| `options` | [`WebpackOptions`](WebpackOptions.md) |

#### Returns

`void` \| `object`

***

### getByKeys()

> **getByKeys**\<`T`\>(...`props`): `void` \| `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`props` | [`WithOptions`](WithOptions.md)\<`string`, [`WebpackOptions`](WebpackOptions.md)\> |

#### Returns

`void` \| `T`

***

### getByPrototypeKeys()

> **getByPrototypeKeys**\<`T`\>(...`prototypes`): `void` \| `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`prototypes` | [`WithOptions`](WithOptions.md)\<`string`, [`WebpackOptions`](WebpackOptions.md)\> |

#### Returns

`void` \| `T`

***

### getByRegex()

> **getByRegex**\<`T`\>(`regex`, `options?`): `void` \| `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `regex` | `RegExp` |
| `options` | [`WebpackOptions`](WebpackOptions.md) |

#### Returns

`void` \| `T`

***

### getBySource()

> **getBySource**\<`T`\>(...`searches`): `void` \| `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`searches` | [`WithOptions`](WithOptions.md)\<`string` \| `RegExp`, [`WebpackOptions`](WebpackOptions.md)\> |

#### Returns

`void` \| `T`

***

### getByStrings()

> **getByStrings**\<`T`\>(...`strings`): `void` \| `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`strings` | [`WithOptions`](WithOptions.md)\<`string`, [`WebpackOptions`](WebpackOptions.md)\> |

#### Returns

`void` \| `T`

***

### getMangled()

> **getMangled**\<`T`\>(`filter`, `mangled`, `options?`): `void` \| `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `object` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | `string` \| `RegExp` \| [`ModuleFilter`](ModuleFilter.md) |
| `mangled` | `Record`\<keyof `T`, [`ExportedOnlyFilter`](ExportedOnlyFilter.md)\> |
| `options` | [`MangledOptions`](MangledOptions.md) |

#### Returns

`void` \| `T`

***

### getModule()

> **getModule**\<`T`\>(`filter`, `options?`): `void` \| `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | [`ModuleFilter`](ModuleFilter.md) |
| `options` | [`WebpackOptions`](WebpackOptions.md) |

#### Returns

`void` \| `T`

***

### getModules()

> **getModules**\<`T`\>(`filter`, `options?`): `void` \| `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `any`[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | [`ModuleFilter`](ModuleFilter.md) |
| `options` | [`WebpackOptions`](WebpackOptions.md) |

#### Returns

`void` \| `T`

***

### getStore()

> **getStore**(`name`): [`FluxStore`](FluxStore.md) \| `undefined`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

[`FluxStore`](FluxStore.md) \| `undefined`

***

### getWithKey()

> **getWithKey**(`filter`, `options?`): `void` \| `Generator`\<`any`, `void`, `unknown`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | [`ExportedOnlyFilter`](ExportedOnlyFilter.md) |
| `options` | [`WithKeyOptions`](WithKeyOptions.md) |

#### Returns

`void` \| `Generator`\<`any`, `void`, `unknown`\>

***

### waitForModule()

> **waitForModule**\<`T`\>(`filter`, `options?`): `void` \| `Promise`\<`T` \| `undefined`\>

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | [`ModuleFilter`](ModuleFilter.md) |
| `options` | [`LazyOptions`](LazyOptions.md) |

#### Returns

`void` \| `Promise`\<`T` \| `undefined`\>
