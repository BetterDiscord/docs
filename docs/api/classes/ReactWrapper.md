# Class: ReactWrapper

Defined in: [src/betterdiscord/api/reactutils.ts:204](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L204)

## Properties

### element

```ts
element: 
  | HTMLElement
  | HTMLElement[];
```

Defined in: [src/betterdiscord/api/reactutils.ts:205](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L205)

***

### ref

```ts
ref: RefObject<
  | HTMLDivElement
| null>;
```

Defined in: [src/betterdiscord/api/reactutils.ts:207](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L207)

***

### state

```ts
state: {
  hasError: boolean;
};
```

Defined in: [src/betterdiscord/api/reactutils.ts:206](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L206)

#### hasError

```ts
hasError: boolean;
```

## Methods

### componentDidCatch()

```ts
componentDidCatch(): void;
```

Defined in: [src/betterdiscord/api/reactutils.ts:215](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L215)

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Returns

`void`

***

### componentDidMount()

```ts
componentDidMount(): void;
```

Defined in: [src/betterdiscord/api/reactutils.ts:219](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L219)

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

#### Returns

`void`

***

### render()

```ts
render(): 
  | DetailedReactHTMLElement<{
  className: string;
  ref: RefObject<
     | HTMLDivElement
    | null>;
}, HTMLDivElement>
  | null;
```

Defined in: [src/betterdiscord/api/reactutils.ts:230](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/reactutils.ts#L230)

#### Returns

  \| `DetailedReactHTMLElement`\<\{
  `className`: `string`;
  `ref`: `RefObject`\<
     \| [`HTMLDivElement`](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)
    \| `null`\>;
\}, [`HTMLDivElement`](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)\>
  \| `null`
