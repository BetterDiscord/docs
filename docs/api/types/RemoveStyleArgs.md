# Type Alias: RemoveStyleArgs\<Bound\>

```ts
type RemoveStyleArgs<Bound> = Bound extends true ? [] | [string] : [string];
```

Defined in: [src/betterdiscord/api/dom.ts:4](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/dom.ts#L4)

## Type Parameters

| Type Parameter |
| ------ |
| `Bound` *extends* `boolean` |
