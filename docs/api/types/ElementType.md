# Type Alias: ElementType\<T\>

```ts
type ElementType<T> = 
  | T
  | React.MemoExoticComponent<T | React.ForwardRefExoticComponent<T>>
  | React.ForwardRefExoticComponent<T>
  | React.LazyExoticComponent<
  | T
  | React.MemoExoticComponent<T | React.ForwardRefExoticComponent<T>>
| React.ForwardRefExoticComponent<T>>;
```

Defined in: [src/betterdiscord/api/reactutils.ts:112](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L112)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `React.FC` |
