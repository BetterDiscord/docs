# Class: Webpack

Defined in: [src/betterdiscord/api/webpack.ts:30](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L30)

`Webpack` is a utility class for getting internal webpack modules. Instance is accessible through the [BdApi](BdApi.md).
This is extremely useful for interacting with the internals of Discord.

## Properties

### Filters

```ts
static Filters: {
  byComponentType: ExportedOnlyFilter;
  byDisplayName: ExportedOnlyFilter;
  byKeys: ExportedOnlyFilter;
  byPrototypeKeys: ExportedOnlyFilter;
  byRegex: ExportedOnlyFilter;
  bySource: Filter;
  byStoreName: ExportedOnlyFilter;
  byStrings: ExportedOnlyFilter;
  combine: Filter;
  not: Filter;
};
```

Defined in: [src/betterdiscord/api/webpack.ts:42](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L42)

Series of [Filters](#filters) to be used for finding webpack modules.

#### byComponentType()

```ts
byComponentType(filter: ExportedOnlyFilter): ExportedOnlyFilter;
```

Generates a filter to search React functional components.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | [`ExportedOnlyFilter`](../types/ExportedOnlyFilter.md) |

##### Returns

[`ExportedOnlyFilter`](../types/ExportedOnlyFilter.md)

#### byDisplayName()

```ts
byDisplayName(name: string): ExportedOnlyFilter;
```

Generates a function that filters by the `displayName` property.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

##### Returns

[`ExportedOnlyFilter`](../types/ExportedOnlyFilter.md)

#### byKeys()

```ts
byKeys(...keys: string[]): ExportedOnlyFilter;
```

Generates a function that filters by a set of properties.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`keys` | `string`[] |

##### Returns

[`ExportedOnlyFilter`](../types/ExportedOnlyFilter.md)

#### byPrototypeKeys()

```ts
byPrototypeKeys(...props: string[]): ExportedOnlyFilter;
```

Generates a function that filters by a set of properties on the object's prototype.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`props` | `string`[] |

##### Returns

[`ExportedOnlyFilter`](../types/ExportedOnlyFilter.md)

#### byRegex()

```ts
byRegex(regex: RegExp): ExportedOnlyFilter;
```

Generates a function that filters by a regex.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `regex` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) |

##### Returns

[`ExportedOnlyFilter`](../types/ExportedOnlyFilter.md)

#### bySource()

```ts
bySource(...searches: (
  | string
  | RegExp)[]): Filter;
```

Generates a function that filters by source code content.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`searches` | ( \| `string` \| [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp))[] |

##### Returns

[`Filter`](../types/Filter.md)

#### byStoreName()

```ts
byStoreName(name: string): ExportedOnlyFilter;
```

Generates a function that filters by a specific internal Store name.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

##### Returns

[`ExportedOnlyFilter`](../types/ExportedOnlyFilter.md)

#### byStrings()

```ts
byStrings(...strings: string[]): ExportedOnlyFilter;
```

Generates a function that filters by strings.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`strings` | `string`[] |

##### Returns

[`ExportedOnlyFilter`](../types/ExportedOnlyFilter.md)

#### combine()

```ts
combine(...filters: Filter[]): Filter;
```

Generates a combined function from a list of filters.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`filters` | [`Filter`](../types/Filter.md)[] |

##### Returns

[`Filter`](../types/Filter.md)

#### not()

```ts
not(filter: Filter): Filter;
```

Generates a filter that returns the opposite of the passed filter.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | [`Filter`](../types/Filter.md) |

##### Returns

[`Filter`](../types/Filter.md)

***

### modules

```ts
static modules: Record<PropertyKey, RawModule>;
```

Defined in: [src/betterdiscord/api/webpack.ts:34](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L34)

A Proxy that returns the module source by ID.

***

### Stores

```ts
static Stores: Record<StoreNameType, FluxStore>;
```

Defined in: [src/betterdiscord/api/webpack.ts:36](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L36)

## Methods

### getAllByKeys()

```ts
static getAllByKeys<T>(...props: WithOptions<string, WebpackOptions>): void | T;
```

Defined in: [src/betterdiscord/api/webpack.ts:147](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L147)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `any`[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`props` | [`WithOptions`](../types/WithOptions.md)\<`string`, [`WebpackOptions`](../interfaces/WebpackOptions.md)\> |

#### Returns

`void` \| `T`

***

### getAllByPrototypeKeys()

```ts
static getAllByPrototypeKeys<T>(...prototypes: WithOptions<string, WebpackOptions>): void | T;
```

Defined in: [src/betterdiscord/api/webpack.ts:136](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L136)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `any`[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`prototypes` | [`WithOptions`](../types/WithOptions.md)\<`string`, [`WebpackOptions`](../interfaces/WebpackOptions.md)\> |

#### Returns

`void` \| `T`

***

### getAllByRegex()

```ts
static getAllByRegex<T>(regex: RegExp, options: WebpackOptions): void | T;
```

Defined in: [src/betterdiscord/api/webpack.ts:119](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L119)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `any`[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `regex` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) |
| `options` | [`WebpackOptions`](../interfaces/WebpackOptions.md) |

#### Returns

`void` \| `T`

***

### getAllBySource()

```ts
static getAllBySource<T>(...searches: WithOptions<
  | string
  | RegExp, WebpackOptions>): void | T;
```

Defined in: [src/betterdiscord/api/webpack.ts:170](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L170)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `object`[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`searches` | [`WithOptions`](../types/WithOptions.md)\< \| `string` \| [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [`WebpackOptions`](../interfaces/WebpackOptions.md)\> |

#### Returns

`void` \| `T`

***

### getAllByStrings()

```ts
static getAllByStrings<T>(...strings: WithOptions<string, WebpackOptions>): void | T;
```

Defined in: [src/betterdiscord/api/webpack.ts:158](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L158)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `any`[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`strings` | [`WithOptions`](../types/WithOptions.md)\<`string`, [`WebpackOptions`](../interfaces/WebpackOptions.md)\> |

#### Returns

`void` \| `T`

***

### getBulk()

```ts
static getBulk<T>(...queries: BulkQueries[]): T;
```

Defined in: [src/betterdiscord/api/webpack.ts:104](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L104)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `any`[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`queries` | [`BulkQueries`](../types/BulkQueries.md)[] |

#### Returns

`T`

***

### getBulkKeyed()

```ts
static getBulkKeyed<T>(queries: Record<keyof T, BulkQueries>): T;
```

Defined in: [src/betterdiscord/api/webpack.ts:105](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L105)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `object` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `queries` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<keyof `T`, [`BulkQueries`](../types/BulkQueries.md)\> |

#### Returns

`T`

***

### getById()

```ts
static getById(id: PropertyKey): object | undefined;
```

Defined in: [src/betterdiscord/api/webpack.ts:178](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L178)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `PropertyKey` |

#### Returns

`object` \| `undefined`

***

### getByKeys()

```ts
static getByKeys<T>(...props: WithOptions<string, WebpackOptions>): void | T;
```

Defined in: [src/betterdiscord/api/webpack.ts:142](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L142)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`props` | [`WithOptions`](../types/WithOptions.md)\<`string`, [`WebpackOptions`](../interfaces/WebpackOptions.md)\> |

#### Returns

`void` \| `T`

***

### getByPrototypeKeys()

```ts
static getByPrototypeKeys<T>(...prototypes: WithOptions<string, WebpackOptions>): void | T;
```

Defined in: [src/betterdiscord/api/webpack.ts:131](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L131)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`prototypes` | [`WithOptions`](../types/WithOptions.md)\<`string`, [`WebpackOptions`](../interfaces/WebpackOptions.md)\> |

#### Returns

`void` \| `T`

***

### getByRegex()

```ts
static getByRegex<T>(regex: RegExp, options: WebpackOptions): void | T;
```

Defined in: [src/betterdiscord/api/webpack.ts:115](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L115)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `regex` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) |
| `options` | [`WebpackOptions`](../interfaces/WebpackOptions.md) |

#### Returns

`void` \| `T`

***

### getBySource()

```ts
static getBySource<T>(...searches: WithOptions<
  | string
  | RegExp, WebpackOptions>): void | T;
```

Defined in: [src/betterdiscord/api/webpack.ts:164](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L164)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`searches` | [`WithOptions`](../types/WithOptions.md)\< \| `string` \| [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [`WebpackOptions`](../interfaces/WebpackOptions.md)\> |

#### Returns

`void` \| `T`

***

### getByStrings()

```ts
static getByStrings<T>(...strings: WithOptions<string, WebpackOptions>): void | T;
```

Defined in: [src/betterdiscord/api/webpack.ts:153](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L153)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`strings` | [`WithOptions`](../types/WithOptions.md)\<`string`, [`WebpackOptions`](../interfaces/WebpackOptions.md)\> |

#### Returns

`void` \| `T`

***

### getMangled()

```ts
static getMangled<T>(
   filter: 
  | string
  | RegExp
  | Filter, 
   mangled: Record<keyof T, ExportedOnlyFilter>, 
   options: Options): void | T;
```

Defined in: [src/betterdiscord/api/webpack.ts:123](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L123)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `object` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | \| `string` \| [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) \| [`Filter`](../types/Filter.md) |
| `mangled` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<keyof `T`, [`ExportedOnlyFilter`](../types/ExportedOnlyFilter.md)\> |
| `options` | [`Options`](../types/Options.md) |

#### Returns

`void` \| `T`

***

### getModule()

```ts
static getModule<T>(filter: Filter, options: WebpackOptions): void | T;
```

Defined in: [src/betterdiscord/api/webpack.ts:87](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L87)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | [`Filter`](../types/Filter.md) |
| `options` | [`WebpackOptions`](../interfaces/WebpackOptions.md) |

#### Returns

`void` \| `T`

***

### getModules()

```ts
static getModules<T>(filter: Filter, options: WebpackOptions): void | T;
```

Defined in: [src/betterdiscord/api/webpack.ts:97](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L97)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `any`[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | [`Filter`](../types/Filter.md) |
| `options` | [`WebpackOptions`](../interfaces/WebpackOptions.md) |

#### Returns

`void` \| `T`

***

### getStore()

```ts
static getStore(name: string): FluxStore | undefined;
```

Defined in: [src/betterdiscord/api/webpack.ts:176](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L176)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

[`FluxStore`](../interfaces/FluxStore.md) \| `undefined`

***

### getWithKey()

```ts
static getWithKey(filter: ExportedOnlyFilter, options: WithKeyOptions): 
  | void
| Generator<any, void, unknown>;
```

Defined in: [src/betterdiscord/api/webpack.ts:79](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L79)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | [`ExportedOnlyFilter`](../types/ExportedOnlyFilter.md) |
| `options` | [`WithKeyOptions`](../types/WithKeyOptions.md) |

#### Returns

  \| `void`
  \| [`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`any`, `void`, `unknown`\>

***

### waitForModule()

```ts
static waitForModule<T>(filter: Filter, options: LazyOptions): 
  | void
| Promise<T | undefined>;
```

Defined in: [src/betterdiscord/api/webpack.ts:107](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/webpack.ts#L107)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | [`Filter`](../types/Filter.md) |
| `options` | [`LazyOptions`](../types/LazyOptions.md) |

#### Returns

  \| `void`
  \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T` \| `undefined`\>
