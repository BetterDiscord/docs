# Interface: ButtonActions

Defined in: [src/betterdiscord/ui/notifications.tsx:19](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/notifications.tsx#L19)

## Extends

- [`ButtonProps`](../types/ButtonProps.md)

## Properties

### buttonRef?

```ts
optional buttonRef: RefObject<
  | HTMLButtonElement
| null>;
```

Defined in: [src/betterdiscord/ui/base/button.tsx:57](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/base/button.tsx#L57)

#### Inherited from

```ts
ButtonProps.buttonRef
```

***

### className?

```ts
optional className: string;
```

Defined in: [src/betterdiscord/ui/base/button.tsx:54](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/base/button.tsx#L54)

#### Inherited from

```ts
ButtonProps.className
```

***

### color?

```ts
optional color: 
  | ""
  | "bd-button-color-brand"
  | "bd-button-color-blurple"
  | "bd-button-color-red"
  | "bd-button-color-green"
  | "bd-button-color-yellow"
  | "bd-button-color-primary"
  | "bd-button-color-link"
  | "bd-button-color-white"
  | "bd-button-color-transparent";
```

Defined in: [src/betterdiscord/ui/base/button.tsx:61](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/base/button.tsx#L61)

#### Inherited from

```ts
ButtonProps.color
```

***

### disabled?

```ts
optional disabled: boolean;
```

Defined in: [src/betterdiscord/ui/base/button.tsx:58](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/base/button.tsx#L58)

#### Inherited from

```ts
ButtonProps.disabled
```

***

### dontClose?

```ts
optional dontClose: boolean;
```

Defined in: [src/betterdiscord/ui/notifications.tsx:21](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/notifications.tsx#L21)

***

### dontCloseOnActionIfHoldingShiftKey?

```ts
optional dontCloseOnActionIfHoldingShiftKey: boolean;
```

Defined in: [src/betterdiscord/ui/notifications.tsx:22](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/notifications.tsx#L22)

***

### grow?

```ts
optional grow: boolean;
```

Defined in: [src/betterdiscord/ui/base/button.tsx:63](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/base/button.tsx#L63)

#### Inherited from

```ts
ButtonProps.grow
```

***

### label

```ts
label: string;
```

Defined in: [src/betterdiscord/ui/notifications.tsx:20](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/notifications.tsx#L20)

***

### look?

```ts
optional look: 
  | "bd-button-filled"
  | "bd-button-outlined"
  | "bd-button-link"
  | "bd-button-blank";
```

Defined in: [src/betterdiscord/ui/base/button.tsx:60](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/base/button.tsx#L60)

#### Inherited from

```ts
ButtonProps.look
```

***

### onClick?

```ts
optional onClick: MouseEventHandler<HTMLButtonElement>;
```

Defined in: [src/betterdiscord/ui/base/button.tsx:55](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/base/button.tsx#L55)

#### Inherited from

```ts
ButtonProps.onClick
```

***

### onKeyDown?

```ts
optional onKeyDown: KeyboardEventHandler<HTMLButtonElement>;
```

Defined in: [src/betterdiscord/ui/base/button.tsx:56](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/base/button.tsx#L56)

#### Inherited from

```ts
ButtonProps.onKeyDown
```

***

### size?

```ts
optional size: 
  | ""
  | "bd-button-tiny"
  | "bd-button-small"
  | "bd-button-medium"
  | "bd-button-large"
  | "bd-button-icon";
```

Defined in: [src/betterdiscord/ui/base/button.tsx:62](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/base/button.tsx#L62)

#### Inherited from

```ts
ButtonProps.size
```

***

### type?

```ts
optional type: "button" | "submit" | "reset";
```

Defined in: [src/betterdiscord/ui/base/button.tsx:59](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/base/button.tsx#L59)

#### Inherited from

```ts
ButtonProps.type
```
