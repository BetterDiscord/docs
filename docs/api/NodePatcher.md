# Class: NodePatcher

## Constructors

### Constructor

> **new NodePatcher**(): `NodePatcher`

#### Returns

`NodePatcher`

## Methods

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### patch()

> **patch**\<`P`, `T`\>(`node`, `callback`): `void`

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `P` | - |
| `T` *extends* `ComponentType`\<`P`\> | `ComponentType`\<`P`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `node` | `ReactElement`\<`P`, `T`\> |
| `callback` | [`UnknownPatch`](UnknownPatch.md)\<`P`\> |

#### Returns

`void`
