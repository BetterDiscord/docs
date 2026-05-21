# Interface: PatchedReactHooks

## Properties

### useActionState

> **useActionState**: \{\<`State`\>(`action`, `initialState`, `permalink?`): \[`Awaited`\<`State`\>, () => `void`, `boolean`\]; \<`State`, `Payload`\>(`action`, `initialState`, `permalink?`): \[`Awaited`\<`State`\>, (`payload`) => `void`, `boolean`\]; \}

#### Call Signature

> \<`State`\>(`action`, `initialState`, `permalink?`): \[`Awaited`\<`State`\>, () => `void`, `boolean`\]

##### Type Parameters

| Type Parameter |
| ------ |
| `State` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `action` | (`state`) => `State` \| `Promise`\<`State`\> |
| `initialState` | `Awaited`\<`State`\> |
| `permalink?` | `string` |

##### Returns

\[`Awaited`\<`State`\>, () => `void`, `boolean`\]

#### Call Signature

> \<`State`, `Payload`\>(`action`, `initialState`, `permalink?`): \[`Awaited`\<`State`\>, (`payload`) => `void`, `boolean`\]

##### Type Parameters

| Type Parameter |
| ------ |
| `State` |
| `Payload` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `action` | (`state`, `payload`) => `State` \| `Promise`\<`State`\> |
| `initialState` | `Awaited`\<`State`\> |
| `permalink?` | `string` |

##### Returns

\[`Awaited`\<`State`\>, (`payload`) => `void`, `boolean`\]

***

### useFormState

> **useFormState**: \{\<`State`\>(`action`, `initialState`, `permalink?`): \[`Awaited`\<`State`\>, () => `void`, `boolean`\]; \<`State`, `Payload`\>(`action`, `initialState`, `permalink?`): \[`Awaited`\<`State`\>, (`payload`) => `void`, `boolean`\]; \}

#### Call Signature

> \<`State`\>(`action`, `initialState`, `permalink?`): \[`Awaited`\<`State`\>, () => `void`, `boolean`\]

##### Type Parameters

| Type Parameter |
| ------ |
| `State` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `action` | (`state`) => `State` \| `Promise`\<`State`\> |
| `initialState` | `Awaited`\<`State`\> |
| `permalink?` | `string` |

##### Returns

\[`Awaited`\<`State`\>, () => `void`, `boolean`\]

#### Call Signature

> \<`State`, `Payload`\>(`action`, `initialState`, `permalink?`): \[`Awaited`\<`State`\>, (`payload`) => `void`, `boolean`\]

##### Type Parameters

| Type Parameter |
| ------ |
| `State` |
| `Payload` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `action` | (`state`, `payload`) => `State` \| `Promise`\<`State`\> |
| `initialState` | `Awaited`\<`State`\> |
| `permalink?` | `string` |

##### Returns

\[`Awaited`\<`State`\>, (`payload`) => `void`, `boolean`\]

***

### useOptimistic

> **useOptimistic**: \{\<`State`\>(`passthrough`): \[`State`, (`action`) => `void`\]; \<`State`, `Action`\>(`passthrough`, `reducer`): \[`State`, (`action`) => `void`\]; \}

#### Call Signature

> \<`State`\>(`passthrough`): \[`State`, (`action`) => `void`\]

##### Type Parameters

| Type Parameter |
| ------ |
| `State` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `passthrough` | `State` |

##### Returns

\[`State`, (`action`) => `void`\]

#### Call Signature

> \<`State`, `Action`\>(`passthrough`, `reducer`): \[`State`, (`action`) => `void`\]

##### Type Parameters

| Type Parameter |
| ------ |
| `State` |
| `Action` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `passthrough` | `State` |
| `reducer` | (`state`, `action`) => `State` |

##### Returns

\[`State`, (`action`) => `void`\]

## Methods

### readContext()

> **readContext**\<`T`\>(`context`): `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | `Context`\<`T`\> |

#### Returns

`T`

***

### use()

> **use**\<`T`\>(`usable`): `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `usable` | `PromiseLike`\<`T`\> \| `Context`\<`T`\> |

#### Returns

`T`

***

### useCallback()

> **useCallback**\<`T`\>(`callback`): `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* (...`args`) => `any` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `T` |

#### Returns

`T`

***

### useContext()

> **useContext**\<`T`\>(`context`): `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | `Context`\<`T`\> |

#### Returns

`T`

***

### useDebugValue()

> **useDebugValue**(): `void`

#### Returns

`void`

***

### useDeferredValue()

> **useDeferredValue**\<`T`\>(`value`): `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

#### Returns

`T`

***

### useEffect()

> **useEffect**(): `void`

#### Returns

`void`

***

### useId()

> **useId**(): `string`

#### Returns

`string`

***

### useImperativeHandle()

> **useImperativeHandle**(): `void`

#### Returns

`void`

***

### useInsertionEffect()

> **useInsertionEffect**(): `void`

#### Returns

`void`

***

### useLayoutEffect()

> **useLayoutEffect**(): `void`

#### Returns

`void`

***

### useMemo()

> **useMemo**\<`T`\>(`factory`): `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `factory` | () => `T` |

#### Returns

`T`

***

### useReducer()

> **useReducer**\<`T`\>(`reducer`, `initial`): \[`T`, () => `void`\]

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reducer` | (`state`, `action`) => `T` |
| `initial` | `T` |

#### Returns

\[`T`, () => `void`\]

***

### useRef()

> **useRef**\<`T`\>(`value?`): `object`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value?` | `T` |

#### Returns

`object`

##### current

> **current**: `T` \| `null`

***

### useState()

> **useState**\<`T`\>(`initial`): \[`T`, () => `void`\]

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `initial` | `T` \| (() => `T`) |

#### Returns

\[`T`, () => `void`\]

***

### useSyncExternalStore()

> **useSyncExternalStore**\<`T`\>(`subscribe`, `getSnapshot`): `T`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `subscribe` | () => `void` |
| `getSnapshot` | () => `T` |

#### Returns

`T`

***

### useTransition()

> **useTransition**(): \[`boolean`, (`callback`) => `void`\]

#### Returns

\[`boolean`, (`callback`) => `void`\]
