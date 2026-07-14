# Interface: Cache()\<T\>

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

> **Cache**(): `T`

Calls the factory function
If only the value hasn't been set or if the call count is over

## Returns

`T`

## Properties

### CALL\_LIMIT

> **CALL\_LIMIT**: `number`

Sets the call limit until it resets

#### Example

```ts
const foo = cache(() => console.log("Called"));
foo.CALL_LIMIT = 2;

foo(); // LOG: Called
foo(); // No log
foo(); // LOG: Called
```

***

### get

> `readonly` **get**: `T`

Just a getter form of accessing the data

## Methods

### hasValue()

> **hasValue**(): `boolean`

Checks to see if a value has been cached

#### Returns

`boolean`

***

### reset()

> **reset**(): `void`

Completely resets the cache factory

#### Returns

`void`

#### Example

```ts
const foo = cache(() => console.log("Called"));

foo(); // LOG: Called
foo(); // No log

foo.reset();

foo(); // LOG: Called
foo(); // No log
```
