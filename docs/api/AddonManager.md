# Abstract Class: AddonManager\<T\>

## Extends

- [`Store`](Store.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`Addon`](Addon.md) | [`Addon`](Addon.md) |

## Constructors

### Constructor

> **new AddonManager**\<`T`\>(): `AddonManager`\<`T`\>

#### Returns

`AddonManager`\<`T`\>

#### Inherited from

[`Store`](Store.md).[`constructor`](Store.md#constructor)

## Properties

### addonFolder

> `abstract` **addonFolder**: `string`

***

### addonInfo

> **addonInfo**: [`Addon`](Addon.md)[] = `[]`

***

### addonList

> **addonList**: `T`[] = `[]`

***

### duplicatePattern

> `abstract` **duplicatePattern**: `RegExp`

***

### extension

> `abstract` **extension**: `string`

***

### hasInitialized

> **hasInitialized**: `boolean` = `false`

***

### initialAddonsLoaded

> **initialAddonsLoaded**: `number` = `0`

***

### language

> `abstract` **language**: `string`

***

### name

> `abstract` **name**: `string`

***

### order

> `abstract` **order**: `number`

***

### prefix

> `abstract` **prefix**: [`AddonType`](AddonType.md)

***

### state

> **state**: `Record`\<`string`, `boolean`\> = `{}`

***

### timeCache

> **timeCache**: `Record`\<`string`, `number`\> = `{}`

***

### windows

> **windows**: `Set`\<`string`\>

## Methods

### addChangeListener()

> **addChangeListener**(`callback`): () => `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |

#### Returns

() => `void`

#### Inherited from

[`Store`](Store.md).[`addChangeListener`](Store.md#addchangelistener)

***

### deleteAddon()

> **deleteAddon**(`idOrFileOrAddon`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrFileOrAddon` | `string` \| `T` |

#### Returns

`void`

***

### disableAddon()

> **disableAddon**(`idOrAddon`): `boolean` \| `undefined`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrAddon` | `string` \| `T` |

#### Returns

`boolean` \| `undefined`

***

### disableAllAddons()

> **disableAllAddons**(): `void`

#### Returns

`void`

***

### editAddon()

> **editAddon**(`idOrFileOrAddon`, `system?`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrFileOrAddon` | `string` \| `T` |
| `system?` | `boolean` \| `"detached"` \| `"external"` \| `"system"` |

#### Returns

`void`

***

### emitChange()

> **emitChange**(): `void`

#### Returns

`void`

#### Inherited from

[`Store`](Store.md).[`emitChange`](Store.md#emitchange)

***

### enableAddon()

> **enableAddon**(`idOrAddon`): `boolean` \| `undefined`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrAddon` | `string` \| `T` |

#### Returns

`boolean` \| `undefined`

***

### enableAllAddons()

> **enableAllAddons**(): `void`

#### Returns

`void`

***

### finishInit()

> **finishInit**(): `void`

#### Returns

`void`

***

### initAddon()

> `abstract` **initAddon**(`addon`): `T` \| `null`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `addon` | [`Addon`](Addon.md) |

#### Returns

`T` \| `null`

***

### initialize()

> **initialize**(): `void`

#### Returns

`void`

#### Overrides

[`Store`](Store.md).[`initialize`](Store.md#initialize)

***

### isEnabled()

> **isEnabled**(`idOrFile`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrFile` | `string` |

#### Returns

`boolean`

***

### isLoaded()

> **isLoaded**(`idOrFile`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrFile` | `string` |

#### Returns

`boolean`

***

### loadAddon()

> **loadAddon**(`addon`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `addon` | [`Addon`](Addon.md) |

#### Returns

`void`

***

### loadState()

> **loadState**(): `void`

#### Returns

`void`

***

### openDetached()

> **openDetached**(`addon`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `addon` | `T` |

#### Returns

`void`

***

### readAddon()

> **readAddon**(`filename`, `loadAfter?`): [`Addon`](Addon.md) \| `null`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `filename` | `string` |
| `loadAfter?` | `boolean` |

#### Returns

[`Addon`](Addon.md) \| `null`

***

### readAllAddons()

> **readAllAddons**(): `void`

#### Returns

`void`

***

### reloadAddon()

> **reloadAddon**(`idOrFileOrAddon`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrFileOrAddon` | `string` \| `T` |

#### Returns

`boolean`

***

### removeChangeListener()

> **removeChangeListener**(`callback`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Inherited from

[`Store`](Store.md).[`removeChangeListener`](Store.md#removechangelistener)

***

### resolveAddon()

> **resolveAddon**(`idOrFileOrAddon`): `T` \| `undefined`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrFileOrAddon` | `string` \| `T` |

#### Returns

`T` \| `undefined`

***

### saveAddon()

> **saveAddon**(`idOrFileOrAddon`, `content`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrFileOrAddon` | `string` \| `T` |
| `content` | `string` |

#### Returns

`void`

***

### saveState()

> **saveState**(): `void`

#### Returns

`void`

***

### showAddonError()

> **showAddonError**(`addon`, `message`, `info`): `null`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `addon` | [`Addon`](Addon.md) |
| `message` | `string` |
| `info` | [`ErrorInfo`](ErrorInfo.md) |

#### Returns

`null`

***

### startAddon()

> `abstract` **startAddon**(`idOrAddon`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrAddon` | `string` \| `T` |

#### Returns

`boolean`

***

### stopAddon()

> `abstract` **stopAddon**(`idOrAddon`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `idOrAddon` | `string` \| `T` |

#### Returns

`boolean`

***

### toggleAddon()

> **toggleAddon**(`id`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`void`

***

### trigger()

> **trigger**(`event`, ...`args`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |
| ...`args` | `any`[] |

#### Returns

`boolean`

***

### unloadAddon()

> **unloadAddon**(`idOrFileOrAddon`, `isReload?`): `boolean`

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `idOrFileOrAddon` | `string` \| `T` | `undefined` |
| `isReload` | `boolean` | `false` |

#### Returns

`boolean`

***

### watchAddons()

> **watchAddons**(): `void`

#### Returns

`void`
