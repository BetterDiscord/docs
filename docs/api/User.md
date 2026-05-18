# Interface: User

## Properties

### avatar

> **avatar**: `string`

***

### avatarDecoration

> `readonly` **avatarDecoration**: \{ `asset`: `string`; `skuId`: `string`; \} \| `null`

***

### avatarDecorationData

> **avatarDecorationData**: \{ `asset`: `string`; `skuId`: `string`; \} \| `null`

***

### banner

> **banner**: `string` \| `null`

***

### bot

> **bot**: `boolean`

***

### clan

> **clan**: `string` \| `null`

***

### createdAt

> `readonly` **createdAt**: `Date`

***

### desktop

> **desktop**: `boolean`

***

### discriminator

> **discriminator**: `string`

***

### displayName

> **displayName**: `string`

***

### email

> **email**: `string` \| `null`

***

### flags

> **flags**: `number`

***

### globalName

> **globalName**: `string`

***

### guildMemberAvatars

> **guildMemberAvatars**: `object`

***

### hasBouncedEmail

> **hasBouncedEmail**: `boolean`

***

### id

> **id**: `string`

***

### isProvisional

> `readonly` **isProvisional**: `boolean`

***

### mfaEnabled

> **mfaEnabled**: `boolean`

***

### mobile

> **mobile**: `boolean`

***

### nsfwAllowed

> **nsfwAllowed**: `boolean` \| `undefined`

***

### personalConnectionId

> **personalConnectionId**: `string` \| `null`

***

### phone

> **phone**: `string` \| `null`

***

### premiumType

> **premiumType**: `number` \| `undefined`

***

### premiumUsageFlags

> **premiumUsageFlags**: `number`

***

### primaryGuild

> **primaryGuild**: `string` \| `null`

***

### publicFlags

> **publicFlags**: `number`

***

### purchasedFlags

> **purchasedFlags**: `number`

***

### system

> **system**: `boolean`

***

### tag

> `readonly` **tag**: `string`

***

### username

> **username**: `string`

***

### verified

> **verified**: `boolean`

## Methods

### getAvatarURL()

> **getAvatarURL**(`a`, `size`, `b`): `string`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `unknown` |
| `size` | `number` |
| `b` | `boolean` |

#### Returns

`string`

***

### hasAnyStaffLevel()

> **hasAnyStaffLevel**(): `boolean`

#### Returns

`boolean`

***

### hasFlag()

> **hasFlag**(`f`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `f` | `number` |

#### Returns

`boolean`

***

### isStaff()

> **isStaff**(): `boolean`

#### Returns

`boolean`

***

### isStaffPersonal()

> **isStaffPersonal**(): `boolean`

#### Returns

`boolean`
