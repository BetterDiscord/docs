# Type Alias: RawModule

> **RawModule** = (`module`, `exports`, `require`) => `void` & `object`

## Type Declaration

### \_\_BD\_\_?

> `optional` **\_\_BD\_\_?**: `object`

#### \_\_BD\_\_.originalModule

> **originalModule**: `RawModule`

#### \_\_BD\_\_.runListeners

> **runListeners**: (`module`, `exports`, `require`) => `void`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `module` | [`Module`](Module.md) |
| `exports` | `object` |
| `require` | [`Require`](Require.md) |

##### Returns

`void`

### \_\_early\_patched\_\_?

> `optional` **\_\_early\_patched\_\_?**: `boolean`

### \_\_raw\_module\_\_?

> `optional` **\_\_raw\_module\_\_?**: () => `RawModule`

#### Returns

`RawModule`
