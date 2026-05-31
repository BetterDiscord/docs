# Class: BoundCommandAPI

`CommandAPI` is a utility class for managing commands, with plugin scoping automatically supplied.
An instance is available on instances of [BdApi](BdApi.md).
This allows plugins to register and manage their own commands.

## Properties

### Types

> **Types**: `object`

#### CommandTypes

> **CommandTypes**: `object`

##### CommandTypes.CHAT\_INPUT

> **CHAT\_INPUT**: `number` = `1`

##### CommandTypes.MESSAGE

> **MESSAGE**: `number`

##### CommandTypes.USER

> **USER**: `number`

#### InputTypes

> **InputTypes**: `object`

##### InputTypes.BOT

> **BOT**: `number`

##### InputTypes.BUILT\_IN

> **BUILT\_IN**: `number` = `0`

##### InputTypes.PLACEHOLDER

> **PLACEHOLDER**: `number`

##### InputTypes.SEARCH

> **SEARCH**: `number`

##### InputTypes.TEXT

> **TEXT**: `number`

#### MessageEmbedTypes

> **MessageEmbedTypes**: `object`

##### MessageEmbedTypes.APPLICATION\_NEWS

> **APPLICATION\_NEWS**: `string` = `"application_news"`

##### MessageEmbedTypes.ARTICLE

> **ARTICLE**: `string`

##### MessageEmbedTypes.AUTO\_MODERATION\_MESSAGE

> **AUTO\_MODERATION\_MESSAGE**: `string` = `"auto_moderation_message"`

##### MessageEmbedTypes.AUTO\_MODERATION\_NOTIFICATION

> **AUTO\_MODERATION\_NOTIFICATION**: `string` = `"auto_moderation_notification"`

##### MessageEmbedTypes.GAMING\_PROFILE

> **GAMING\_PROFILE**: `string` = `"gaming_profile"`

##### MessageEmbedTypes.GIFT

> **GIFT**: `string`

##### MessageEmbedTypes.GIFV

> **GIFV**: `string`

##### MessageEmbedTypes.IMAGE

> **IMAGE**: `string`

##### MessageEmbedTypes.LINK

> **LINK**: `string`

##### MessageEmbedTypes.POST\_PREVIEW

> **POST\_PREVIEW**: `string` = `"post_preview"`

##### MessageEmbedTypes.RICH

> **RICH**: `string`

##### MessageEmbedTypes.SAFETY\_POLICY\_NOTICE

> **SAFETY\_POLICY\_NOTICE**: `string` = `"safety_policy_notice"`

##### MessageEmbedTypes.SAFETY\_SYSTEM\_NOTIFICATION

> **SAFETY\_SYSTEM\_NOTIFICATION**: `string` = `"safety_system_notification"`

##### MessageEmbedTypes.TEXT

> **TEXT**: `string`

##### MessageEmbedTypes.TWEET

> **TWEET**: `string`

##### MessageEmbedTypes.VIDEO

> **VIDEO**: `string`

##### MessageEmbedTypes.VOICE\_CHANNEL

> **VOICE\_CHANNEL**: `string` = `"voice_channel"`

#### OptionTypes

> **OptionTypes**: `object`

##### OptionTypes.ATTACHMENT

> **ATTACHMENT**: `number`

##### OptionTypes.BOOLEAN

> **BOOLEAN**: `number`

##### OptionTypes.CHANNEL

> **CHANNEL**: `number`

##### OptionTypes.INTEGER

> **INTEGER**: `number`

##### OptionTypes.MENTIONABLE

> **MENTIONABLE**: `number`

##### OptionTypes.NUMBER

> **NUMBER**: `number`

##### OptionTypes.ROLE

> **ROLE**: `number`

##### OptionTypes.STRING

> **STRING**: `number`

##### OptionTypes.SUB\_COMMAND

> **SUB\_COMMAND**: `number` = `1`

##### OptionTypes.SUB\_COMMAND\_GROUP

> **SUB\_COMMAND\_GROUP**: `number` = `2`

##### OptionTypes.USER

> **USER**: `number`

## Methods

### getCommandsByCaller()

> **getCommandsByCaller**(): [`Command`](Command.md)[]

Gets all commands registered by this bound api

#### Returns

[`Command`](Command.md)[]

Array of command objects registered by the caller

***

### register()

> **register**(`command`): (() => `void`) \| `undefined`

Registers a new command

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | [`Command`](Command.md) | Command object |

#### Returns

(() => `void`) \| `undefined`

Unregister function

***

### unregister()

> **unregister**(`commandId`): `void`

Unregisters a command

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandId` | `string` | Command ID |

#### Returns

`void`

***

### unregisterAll()

> **unregisterAll**(): `void`

Unregisters all commands made by this bound api

#### Returns

`void`
