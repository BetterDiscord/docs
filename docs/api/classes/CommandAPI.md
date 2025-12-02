# Class: CommandAPI\<Bounded\>

Defined in: [src/betterdiscord/api/commands.ts:18](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/commands.ts#L18)

`CommandAPI` is a utility class for managing commands. Instance is accessible through the BdApi.
This allows plugins to register and manage their own commands.

## Type Parameters

| Type Parameter |
| ------ |
| `Bounded` *extends* `boolean` |

## Properties

### Types

```ts
Types: {
  CommandTypes: {
     CHAT_INPUT: number;
     MESSAGE: number;
     USER: number;
  };
  InputTypes: {
     BOT: number;
     BUILT_IN: number;
     PLACEHOLDER: number;
     SEARCH: number;
     TEXT: number;
  };
  MessageEmbedTypes: {
     APPLICATION_NEWS: string;
     ARTICLE: string;
     AUTO_MODERATION_MESSAGE: string;
     AUTO_MODERATION_NOTIFICATION: string;
     GAMING_PROFILE: string;
     GIFT: string;
     GIFV: string;
     IMAGE: string;
     LINK: string;
     POST_PREVIEW: string;
     RICH: string;
     SAFETY_POLICY_NOTICE: string;
     SAFETY_SYSTEM_NOTIFICATION: string;
     TEXT: string;
     TWEET: string;
     VIDEO: string;
     VOICE_CHANNEL: string;
  };
  OptionTypes: {
     ATTACHMENT: number;
     BOOLEAN: number;
     CHANNEL: number;
     INTEGER: number;
     MENTIONABLE: number;
     NUMBER: number;
     ROLE: number;
     STRING: number;
     SUB_COMMAND: number;
     SUB_COMMAND_GROUP: number;
     USER: number;
  };
};
```

Defined in: [src/betterdiscord/api/commands.ts:26](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/commands.ts#L26)

#### CommandTypes

```ts
CommandTypes: {
  CHAT_INPUT: number;
  MESSAGE: number;
  USER: number;
};
```

##### CommandTypes.CHAT\_INPUT

```ts
CHAT_INPUT: number = 1;
```

##### CommandTypes.MESSAGE

```ts
MESSAGE: number = 3;
```

##### CommandTypes.USER

```ts
USER: number = 2;
```

#### InputTypes

```ts
InputTypes: {
  BOT: number;
  BUILT_IN: number;
  PLACEHOLDER: number;
  SEARCH: number;
  TEXT: number;
};
```

##### InputTypes.BOT

```ts
BOT: number = 3;
```

##### InputTypes.BUILT\_IN

```ts
BUILT_IN: number = 0;
```

##### InputTypes.PLACEHOLDER

```ts
PLACEHOLDER: number = 4;
```

##### InputTypes.SEARCH

```ts
SEARCH: number = 2;
```

##### InputTypes.TEXT

```ts
TEXT: number = 1;
```

#### MessageEmbedTypes

```ts
MessageEmbedTypes: {
  APPLICATION_NEWS: string;
  ARTICLE: string;
  AUTO_MODERATION_MESSAGE: string;
  AUTO_MODERATION_NOTIFICATION: string;
  GAMING_PROFILE: string;
  GIFT: string;
  GIFV: string;
  IMAGE: string;
  LINK: string;
  POST_PREVIEW: string;
  RICH: string;
  SAFETY_POLICY_NOTICE: string;
  SAFETY_SYSTEM_NOTIFICATION: string;
  TEXT: string;
  TWEET: string;
  VIDEO: string;
  VOICE_CHANNEL: string;
};
```

##### MessageEmbedTypes.APPLICATION\_NEWS

```ts
APPLICATION_NEWS: string = "application_news";
```

##### MessageEmbedTypes.ARTICLE

```ts
ARTICLE: string = "article";
```

##### MessageEmbedTypes.AUTO\_MODERATION\_MESSAGE

```ts
AUTO_MODERATION_MESSAGE: string = "auto_moderation_message";
```

##### MessageEmbedTypes.AUTO\_MODERATION\_NOTIFICATION

```ts
AUTO_MODERATION_NOTIFICATION: string = "auto_moderation_notification";
```

##### MessageEmbedTypes.GAMING\_PROFILE

```ts
GAMING_PROFILE: string = "gaming_profile";
```

##### MessageEmbedTypes.GIFT

```ts
GIFT: string = "gift";
```

##### MessageEmbedTypes.GIFV

```ts
GIFV: string = "gifv";
```

##### MessageEmbedTypes.IMAGE

```ts
IMAGE: string = "image";
```

##### MessageEmbedTypes.LINK

```ts
LINK: string = "link";
```

##### MessageEmbedTypes.POST\_PREVIEW

```ts
POST_PREVIEW: string = "post_preview";
```

##### MessageEmbedTypes.RICH

```ts
RICH: string = "rich";
```

##### MessageEmbedTypes.SAFETY\_POLICY\_NOTICE

```ts
SAFETY_POLICY_NOTICE: string = "safety_policy_notice";
```

##### MessageEmbedTypes.SAFETY\_SYSTEM\_NOTIFICATION

```ts
SAFETY_SYSTEM_NOTIFICATION: string = "safety_system_notification";
```

##### MessageEmbedTypes.TEXT

```ts
TEXT: string = "text";
```

##### MessageEmbedTypes.TWEET

```ts
TWEET: string = "tweet";
```

##### MessageEmbedTypes.VIDEO

```ts
VIDEO: string = "video";
```

##### MessageEmbedTypes.VOICE\_CHANNEL

```ts
VOICE_CHANNEL: string = "voice_channel";
```

#### OptionTypes

```ts
OptionTypes: {
  ATTACHMENT: number;
  BOOLEAN: number;
  CHANNEL: number;
  INTEGER: number;
  MENTIONABLE: number;
  NUMBER: number;
  ROLE: number;
  STRING: number;
  SUB_COMMAND: number;
  SUB_COMMAND_GROUP: number;
  USER: number;
};
```

##### OptionTypes.ATTACHMENT

```ts
ATTACHMENT: number = 11;
```

##### OptionTypes.BOOLEAN

```ts
BOOLEAN: number = 5;
```

##### OptionTypes.CHANNEL

```ts
CHANNEL: number = 7;
```

##### OptionTypes.INTEGER

```ts
INTEGER: number = 4;
```

##### OptionTypes.MENTIONABLE

```ts
MENTIONABLE: number = 9;
```

##### OptionTypes.NUMBER

```ts
NUMBER: number = 10;
```

##### OptionTypes.ROLE

```ts
ROLE: number = 8;
```

##### OptionTypes.STRING

```ts
STRING: number = 3;
```

##### OptionTypes.SUB\_COMMAND

```ts
SUB_COMMAND: number = 1;
```

##### OptionTypes.SUB\_COMMAND\_GROUP

```ts
SUB_COMMAND_GROUP: number = 2;
```

##### OptionTypes.USER

```ts
USER: number = 6;
```

## Methods

### getCommandsByCaller()

```ts
getCommandsByCaller(caller: string): Command[];
```

Defined in: [src/betterdiscord/api/commands.ts:95](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/commands.ts#L95)

Gets all commands registered by a specific caller

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `caller` | `string` | Name of the caller whose commands should be retrieved |

#### Returns

[`Command`](../interfaces/Command.md)[]

Array of command objects registered by the caller

***

### register()

```ts
register(...args: [...(Bounded extends false ? [caller: string] : [])[], Command]): () => void | undefined;
```

Defined in: [src/betterdiscord/api/commands.ts:39](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/commands.ts#L39)

Registers a new command

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`...(Bounded extends false ? [caller: string] : [])[]`, [`Command`](../interfaces/Command.md)\] |

#### Returns

() => `void` \| `undefined`

Unregister function

***

### unregister()

```ts
unregister(...args: [...(Bounded extends false ? [caller: string] : [])[], string]): void;
```

Defined in: [src/betterdiscord/api/commands.ts:55](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/commands.ts#L55)

Unregisters a command

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`...(Bounded extends false ? [caller: string] : [])[]`, `string`\] |

#### Returns

`void`

***

### unregisterAll()

```ts
unregisterAll(caller: string): void;
```

Defined in: [src/betterdiscord/api/commands.ts:85](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/commands.ts#L85)

Unregisters all commands for a specific caller

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `caller` | `string` | Name of the caller whose commands should be unregistered |

#### Returns

`void`
