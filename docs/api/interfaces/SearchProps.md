# Interface: SearchProps

Defined in: [src/betterdiscord/ui/settings/components/search.tsx:9](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/settings/components/search.tsx#L9)

## Properties

### className?

```ts
optional className: string;
```

Defined in: [src/betterdiscord/ui/settings/components/search.tsx:11](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/settings/components/search.tsx#L11)

***

### placeholder?

```ts
optional placeholder: string;
```

Defined in: [src/betterdiscord/ui/settings/components/search.tsx:12](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/settings/components/search.tsx#L12)

## Methods

### onChange()?

```ts
optional onChange(event: 
  | ChangeEvent<Element>
  | {
  target: {
     value: string;
  };
}): void;
```

Defined in: [src/betterdiscord/ui/settings/components/search.tsx:10](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/settings/components/search.tsx#L10)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | \| `ChangeEvent`\<[`Element`](https://developer.mozilla.org/docs/Web/API/Element)\> \| \{ `target`: \{ `value`: `string`; \}; \} |

#### Returns

`void`

***

### onKeyDown()?

```ts
optional onKeyDown(event: KeyboardEvent<HTMLInputElement>): void;
```

Defined in: [src/betterdiscord/ui/settings/components/search.tsx:13](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/settings/components/search.tsx#L13)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `KeyboardEvent`\<[`HTMLInputElement`](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)\> |

#### Returns

`void`
