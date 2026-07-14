# Interface: FluxStore

## Indexable

> \[`key`: `string` \| `number` \| `symbol`\]: `any`

## Properties

### \_dispatchToken

> **\_dispatchToken**: `string`

***

### \_isInitialized

> **\_isInitialized**: `boolean`

## Methods

### addChangeListener()

> **addChangeListener**(`listener`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | () => `void` |

#### Returns

`void`

***

### addReactChangeListener()

> **addReactChangeListener**(`listener`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | () => `void` |

#### Returns

`void`

***

### emitChange()

> **emitChange**(): `void`

#### Returns

`void`

***

### getDispatchToken()

> **getDispatchToken**(): `string`

#### Returns

`string`

***

### getName()

> **getName**(): `string`

#### Returns

`string`

***

### hasChangeCallbacks()

> **hasChangeCallbacks**(): `boolean`

#### Returns

`boolean`

***

### initialize()

> **initialize**(): `void`

#### Returns

`void`

***

### initializeIfNeeded()

> **initializeIfNeeded**(): `void`

#### Returns

`void`

***

### removeChangeListener()

> **removeChangeListener**(`listener`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | () => `void` |

#### Returns

`void`

***

### removeReactChangeListener()

> **removeReactChangeListener**(`listener`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | () => `void` |

#### Returns

`void`

***

### syncWith()

> **syncWith**(`stores`, `emitChange`, `delay?`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stores` | `FluxStore`[] |
| `emitChange` | `boolean` |
| `delay?` | `number` |

#### Returns

`void`

***

### waitFor()

> **waitFor**(...`stores`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`stores` | `FluxStore`[] |

#### Returns

`void`
