# Type Alias: ButtonProps

```ts
type ButtonProps = PropsWithChildren<{
  buttonRef?: RefObject<
     | HTMLButtonElement
    | null>;
  className?: string;
  color?: typeof Colors[keyof typeof Colors];
  disabled?: boolean;
  grow?: boolean;
  look?: typeof Looks[keyof typeof Looks];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
  size?: typeof Sizes[keyof typeof Sizes];
  type?: "button" | "submit" | "reset";
}>;
```

Defined in: [src/betterdiscord/ui/base/button.tsx:53](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/ui/base/button.tsx#L53)
