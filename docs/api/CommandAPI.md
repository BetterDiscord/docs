# Class: CommandAPI

`CommandAPI` is a utility class for managing commands. An instance is available on [BdApi](BdApi.md).
This allows plugins to register and manage their own commands.

## Properties

### Types

> **Types**: `object`

#### CommandTypes

> **CommandTypes**: `object`

##### CommandTypes.CHAT\_INPUT

> **CHAT\_INPUT**: `number` = `1`

##### CommandTypes.MESSAGE

> **MESSAGE**: `number` = `3`

##### CommandTypes.USER

> **USER**: `number` = `2`

#### InputTypes

> **InputTypes**: `object`

##### InputTypes.BOT

> **BOT**: `number` = `3`

##### InputTypes.BUILT\_IN

> **BUILT\_IN**: `number` = `0`

##### InputTypes.PLACEHOLDER

> **PLACEHOLDER**: `number` = `4`

##### InputTypes.SEARCH

> **SEARCH**: `number` = `2`

##### InputTypes.TEXT

> **TEXT**: `number` = `1`

#### MessageEmbedTypes

> **MessageEmbedTypes**: `object`

##### MessageEmbedTypes.APPLICATION\_NEWS

> **APPLICATION\_NEWS**: `string` = `"application_news"`

##### MessageEmbedTypes.ARTICLE

> **ARTICLE**: `string` = `"article"`

##### MessageEmbedTypes.AUTO\_MODERATION\_MESSAGE

> **AUTO\_MODERATION\_MESSAGE**: `string` = `"auto_moderation_message"`

##### MessageEmbedTypes.AUTO\_MODERATION\_NOTIFICATION

> **AUTO\_MODERATION\_NOTIFICATION**: `string` = `"auto_moderation_notification"`

##### MessageEmbedTypes.GAMING\_PROFILE

> **GAMING\_PROFILE**: `string` = `"gaming_profile"`

##### MessageEmbedTypes.GIFT

> **GIFT**: `string` = `"gift"`

##### MessageEmbedTypes.GIFV

> **GIFV**: `string` = `"gifv"`

##### MessageEmbedTypes.IMAGE

> **IMAGE**: `string` = `"image"`

##### MessageEmbedTypes.LINK

> **LINK**: `string` = `"link"`

##### MessageEmbedTypes.POST\_PREVIEW

> **POST\_PREVIEW**: `string` = `"post_preview"`

##### MessageEmbedTypes.RICH

> **RICH**: `string` = `"rich"`

##### MessageEmbedTypes.SAFETY\_POLICY\_NOTICE

> **SAFETY\_POLICY\_NOTICE**: `string` = `"safety_policy_notice"`

##### MessageEmbedTypes.SAFETY\_SYSTEM\_NOTIFICATION

> **SAFETY\_SYSTEM\_NOTIFICATION**: `string` = `"safety_system_notification"`

##### MessageEmbedTypes.TEXT

> **TEXT**: `string` = `"text"`

##### MessageEmbedTypes.TWEET

> **TWEET**: `string` = `"tweet"`

##### MessageEmbedTypes.VIDEO

> **VIDEO**: `string` = `"video"`

##### MessageEmbedTypes.VOICE\_CHANNEL

> **VOICE\_CHANNEL**: `string` = `"voice_channel"`

#### OptionTypes

> **OptionTypes**: `object`

##### OptionTypes.ATTACHMENT

> **ATTACHMENT**: `number` = `11`

##### OptionTypes.BOOLEAN

> **BOOLEAN**: `number` = `5`

##### OptionTypes.CHANNEL

> **CHANNEL**: `number` = `7`

##### OptionTypes.INTEGER

> **INTEGER**: `number` = `4`

##### OptionTypes.MENTIONABLE

> **MENTIONABLE**: `number` = `9`

##### OptionTypes.NUMBER

> **NUMBER**: `number` = `10`

##### OptionTypes.ROLE

> **ROLE**: `number` = `8`

##### OptionTypes.STRING

> **STRING**: `number` = `3`

##### OptionTypes.SUB\_COMMAND

> **SUB\_COMMAND**: `number` = `1`

##### OptionTypes.SUB\_COMMAND\_GROUP

> **SUB\_COMMAND\_GROUP**: `number` = `2`

##### OptionTypes.USER

> **USER**: `number` = `6`

## Methods

### getCommandsByCaller()

> **getCommandsByCaller**(`caller`): [`Command`](Command.md)[]

Gets all commands registered by a specific caller

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `caller` | `string` | Name of the caller whose commands should be retrieved |

#### Returns

[`Command`](Command.md)[]

Array of command objects registered by the caller

***

### register()

> **register**(`caller`, `command`): (() => `void`) \| `undefined`

Registers a new command

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `caller` | `string` | Caller name |
| `command` | [`Command`](Command.md) | Command object |

#### Returns

(() => `void`) \| `undefined`

Unregister function

***

### unregister()

> **unregister**(`caller`, `commandId`): `void`

Unregisters a command

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `caller` | `string` | Caller name |
| `commandId` | `string` | Command ID |

#### Returns

`void`

***

### unregisterAll()

> **unregisterAll**(`caller`): `void`

Unregisters all commands for a specific caller

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `caller` | `string` | Name of the caller whose commands should be unregistered |

#### Returns

`void`
