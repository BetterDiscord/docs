# Interface: PatchedReactHooks

Defined in: [src/betterdiscord/api/reactutils.ts:6](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L6)

## Properties

### useActionState()

```ts
useActionState: {
<State>  (action: (state: Awaited<State>) => 
  | State
  | Promise<State>, initialState: Awaited<State>, permalink?: string): [Awaited<State>, () => void, boolean];
<State, Payload>  (action: (state: Awaited<State>, payload: Payload) => 
  | State
  | Promise<State>, initialState: Awaited<State>, permalink?: string): [Awaited<State>, (payload: Payload) => void, boolean];
};
```

Defined in: [src/betterdiscord/api/reactutils.ts:19](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L19)

#### Call Signature

```ts
<State>(
   action: (state: Awaited<State>) => 
  | State
  | Promise<State>, 
   initialState: Awaited<State>, 
   permalink?: string): [Awaited<State>, () => void, boolean];
```

##### Type Parameters

| Type Parameter |
| ------ |
| `State` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `action` | (`state`: [`Awaited`](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype)\<`State`\>) => \| `State` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`State`\> |
| `initialState` | [`Awaited`](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype)\<`State`\> |
| `permalink?` | `string` |

##### Returns

\[[`Awaited`](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype)\<`State`\>, () => `void`, `boolean`\]

#### Call Signature

```ts
<State, Payload>(
   action: (state: Awaited<State>, payload: Payload) => 
  | State
  | Promise<State>, 
   initialState: Awaited<State>, 
   permalink?: string): [Awaited<State>, (payload: Payload) => void, boolean];
```

##### Type Parameters

| Type Parameter |
| ------ |
| `State` |
| `Payload` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `action` | (`state`: [`Awaited`](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype)\<`State`\>, `payload`: `Payload`) => \| `State` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`State`\> |
| `initialState` | [`Awaited`](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype)\<`State`\> |
| `permalink?` | `string` |

##### Returns

\[[`Awaited`](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype)\<`State`\>, (`payload`: `Payload`) => `void`, `boolean`\]

***

### useFormState()

```ts
useFormState: {
<State>  (action: (state: Awaited<State>) => 
  | State
  | Promise<State>, initialState: Awaited<State>, permalink?: string): [Awaited<State>, () => void, boolean];
<State, Payload>  (action: (state: Awaited<State>, payload: Payload) => 
  | State
  | Promise<State>, initialState: Awaited<State>, permalink?: string): [Awaited<State>, (payload: Payload) => void, boolean];
};
```

Defined in: [src/betterdiscord/api/reactutils.ts:20](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L20)

#### Call Signature

```ts
<State>(
   action: (state: Awaited<State>) => 
  | State
  | Promise<State>, 
   initialState: Awaited<State>, 
   permalink?: string): [Awaited<State>, () => void, boolean];
```

##### Type Parameters

| Type Parameter |
| ------ |
| `State` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `action` | (`state`: [`Awaited`](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype)\<`State`\>) => \| `State` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`State`\> |
| `initialState` | [`Awaited`](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype)\<`State`\> |
| `permalink?` | `string` |

##### Returns

\[[`Awaited`](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype)\<`State`\>, () => `void`, `boolean`\]

#### Call Signature

```ts
<State, Payload>(
   action: (state: Awaited<State>, payload: Payload) => 
  | State
  | Promise<State>, 
   initialState: Awaited<State>, 
   permalink?: string): [Awaited<State>, (payload: Payload) => void, boolean];
```

##### Type Parameters

| Type Parameter |
| ------ |
| `State` |
| `Payload` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `action` | (`state`: [`Awaited`](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype)\<`State`\>, `payload`: `Payload`) => \| `State` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`State`\> |
| `initialState` | [`Awaited`](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype)\<`State`\> |
| `permalink?` | `string` |

##### Returns

\[[`Awaited`](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype)\<`State`\>, (`payload`: `Payload`) => `void`, `boolean`\]

***

### useOptimistic()

```ts
useOptimistic: {
<State>  (passthrough: State): [State, (action: State | (pendingState: State) => State) => void];
<State, Action>  (passthrough: State, reducer: (state: State, action: Action) => State): [State, (action: Action) => void];
};
```

Defined in: [src/betterdiscord/api/reactutils.ts:26](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L26)

#### Call Signature

```ts
<State>(passthrough: State): [State, (action: State | (pendingState: State) => State) => void];
```

##### Type Parameters

| Type Parameter |
| ------ |
| `State` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `passthrough` | `State` |

##### Returns

\[`State`, (`action`: `State` \| (`pendingState`: `State`) => `State`) => `void`\]

#### Call Signature

```ts
<State, Action>(passthrough: State, reducer: (state: State, action: Action) => State): [State, (action: Action) => void];
```

##### Type Parameters

| Type Parameter |
| ------ |
| `State` |
| `Action` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `passthrough` | `State` |
| `reducer` | (`state`: `State`, `action`: `Action`) => `State` |

##### Returns

\[`State`, (`action`: `Action`) => `void`\]

## Methods

### readContext()

```ts
readContext<T>(context: Context<T>): T;
```

Defined in: [src/betterdiscord/api/reactutils.ts:14](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L14)

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

```ts
use<T>(usable: PromiseLike<T> | Context<T>): T;
```

Defined in: [src/betterdiscord/api/reactutils.ts:7](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L7)

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

```ts
useCallback<T>(callback: T): T;
```

Defined in: [src/betterdiscord/api/reactutils.ts:12](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L12)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* (...`args`: `any`[]) => `any` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `T` |

#### Returns

`T`

***

### useContext()

```ts
useContext<T>(context: Context<T>): T;
```

Defined in: [src/betterdiscord/api/reactutils.ts:13](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L13)

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

```ts
useDebugValue(): void;
```

Defined in: [src/betterdiscord/api/reactutils.ts:22](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L22)

#### Returns

`void`

***

### useDeferredValue()

```ts
useDeferredValue<T>(value: T): T;
```

Defined in: [src/betterdiscord/api/reactutils.ts:23](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L23)

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

```ts
useEffect(): void;
```

Defined in: [src/betterdiscord/api/reactutils.ts:15](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L15)

#### Returns

`void`

***

### useId()

```ts
useId(): string;
```

Defined in: [src/betterdiscord/api/reactutils.ts:25](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L25)

#### Returns

`string`

***

### useImperativeHandle()

```ts
useImperativeHandle(): void;
```

Defined in: [src/betterdiscord/api/reactutils.ts:17](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L17)

#### Returns

`void`

***

### useInsertionEffect()

```ts
useInsertionEffect(): void;
```

Defined in: [src/betterdiscord/api/reactutils.ts:21](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L21)

#### Returns

`void`

***

### useLayoutEffect()

```ts
useLayoutEffect(): void;
```

Defined in: [src/betterdiscord/api/reactutils.ts:16](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L16)

#### Returns

`void`

***

### useMemo()

```ts
useMemo<T>(factory: () => T): T;
```

Defined in: [src/betterdiscord/api/reactutils.ts:8](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L8)

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

```ts
useReducer<T>(reducer: (state: T, action: any) => T, initial: T): [T, () => void];
```

Defined in: [src/betterdiscord/api/reactutils.ts:10](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L10)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reducer` | (`state`: `T`, `action`: `any`) => `T` |
| `initial` | `T` |

#### Returns

\[`T`, () => `void`\]

***

### useRef()

```ts
useRef<T>(value?: T): {
  current: T | null;
};
```

Defined in: [src/betterdiscord/api/reactutils.ts:11](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L11)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value?` | `T` |

#### Returns

```ts
{
  current: T | null;
}
```

##### current

```ts
current: T | null;
```

***

### useState()

```ts
useState<T>(initial: T | () => T): [T, () => void];
```

Defined in: [src/betterdiscord/api/reactutils.ts:9](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L9)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `initial` | `T` \| () => `T` |

#### Returns

\[`T`, () => `void`\]

***

### useSyncExternalStore()

```ts
useSyncExternalStore<T>(subscribe: () => void, getSnapshot: () => T): T;
```

Defined in: [src/betterdiscord/api/reactutils.ts:24](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L24)

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

```ts
useTransition(): [boolean, (callback: () => void) => void];
```

Defined in: [src/betterdiscord/api/reactutils.ts:18](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L18)

#### Returns

\[`boolean`, (`callback`: () => `void`) => `void`\]
