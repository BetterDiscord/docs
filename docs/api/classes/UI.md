# Class: UI

Defined in: [src/betterdiscord/api/ui.ts:24](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/ui.ts#L24)

`UI` is a utility class for creating user interfaces. Instance is accessible through the [BdApi](BdApi.md).

## Methods

### alert()

```ts
static alert(title: string, content: 
  | string
  | ReactElement<unknown, string | JSXElementConstructor<any>>
  | (
  | string
  | ReactElement<unknown, string | JSXElementConstructor<any>>)[]): void;
```

Defined in: [src/betterdiscord/api/ui.ts:31](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/ui.ts#L31)

Shows a generic but very customizable modal.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `title` | `string` | Title of the modal |
| `content` | \| `string` \| `ReactElement`\<`unknown`, `string` \| `JSXElementConstructor`\<`any`\>\> \| ( \| `string` \| `ReactElement`\<`unknown`, `string` \| `JSXElementConstructor`\<`any`\>\>)[] | A string of text to display in the modal |

#### Returns

`void`

***

### buildSettingItem()

```ts
static buildSettingItem(setting: Setting): Element | null;
```

Defined in: [src/betterdiscord/api/ui.ts:199](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/ui.ts#L199)

Creates a single setting wrapped in a setting item that has a name and note.
The shape of the object should match the props of the component you want to render, check the
`BdApi.Components` section for details. Shown below are ones common to all setting types.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `setting` | [`Setting`](../types/Setting.md) |  |

#### Returns

`Element` \| `null`

A SettingItem with a an input as the child

***

### buildSettingsPanel()

```ts
static buildSettingsPanel(props: {
  getDrawerState?: (categoryId: string, defaultShown: boolean) => boolean;
  onChange: (categoryId: string | null, settingId: string, value: any) => void;
  onDrawerToggle?: (categoryId: string, shown: boolean) => void;
  settings: Setting[];
}): CElement<ErrorBoundaryProps, ErrorBoundary>;
```

Defined in: [src/betterdiscord/api/ui.ts:228](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/ui.ts#L228)

Creates a settings panel (react element) based on json-like data.

The `settings` array here is an array of the same settings types described in `buildSetting` above.
However, this API allows one additional setting "type" called `category`. This has the same properties
as the Group React Component found under the `Components` API.

`onChange` will always be given 3 arguments: category id, setting id, and setting value. In the case
that you have settings on the "root" of the panel, the category id is `null`. Any `onChange`
listeners attached to individual settings will fire before the panel-level change listener.

`onDrawerToggle` is given 2 arguments: category id, and the current shown state. You can use this to
save drawer states.

`getDrawerState` is given 2 arguments: category id, and the default shown state. You can use this to
recall a saved drawer state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | \{ `getDrawerState?`: (`categoryId`: `string`, `defaultShown`: `boolean`) => `boolean`; `onChange`: (`categoryId`: `string` \| `null`, `settingId`: `string`, `value`: `any`) => `void`; `onDrawerToggle?`: (`categoryId`: `string`, `shown`: `boolean`) => `void`; `settings`: [`Setting`](../types/Setting.md)[]; \} |  |
| `props.getDrawerState?` | (`categoryId`: `string`, `defaultShown`: `boolean`) => `boolean` | Optionially used to recall drawer states |
| `props.onChange` | (`categoryId`: `string` \| `null`, `settingId`: `string`, `value`: `any`) => `void` | Function called on every change |
| `props.onDrawerToggle?` | (`categoryId`: `string`, `shown`: `boolean`) => `void` | Optionally used to save drawer states |
| `props.settings` | [`Setting`](../types/Setting.md)[] | Array of settings to show |

#### Returns

`CElement`\<[`ErrorBoundaryProps`](../types/ErrorBoundaryProps.md), [`ErrorBoundary`](ErrorBoundary.md)\>

React element usable for a settings panel

***

### createTooltip()

```ts
static createTooltip(
   node: HTMLElement, 
   content: 
  | string
  | HTMLElement, 
   options: TooltipOptions): Tooltip;
```

Defined in: [src/betterdiscord/api/ui.ts:64](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/ui.ts#L64)

Creates a tooltip to automatically show on hover.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `node` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | DOM node to monitor and show the tooltip on |
| `content` | \| `string` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) | String to show in the tooltip |
| `options` | [`TooltipOptions`](../interfaces/TooltipOptions.md) | Additional options for the tooltip |

#### Returns

[`Tooltip`](Tooltip.md)

The tooltip that was generated.

***

### openDialog()

```ts
static openDialog(options: any): Promise<any>;
```

Defined in: [src/betterdiscord/api/ui.ts:176](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/ui.ts#L176)

Gives access to the [Electron Dialog](https://www.electronjs.org/docs/latest/api/dialog/) api.
Returns a `Promise` that resolves to an `object` that has a `boolean` cancelled and a `filePath` string for saving and a `filePaths` string array for opening.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `any` | Options object to configure the dialog |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>

Result of the dialog

***

### showChangelogModal()

```ts
static showChangelogModal(options: ChangelogProps): string | number;
```

Defined in: [src/betterdiscord/api/ui.ts:116](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/ui.ts#L116)

Shows a changelog modal in a similar style to Discord's. Customizable with images, videos, colored sections and supports markdown.

The changes option is a array of objects that have this typing:
```ts
interface Changes {
    title: string;
    type: "fixed" | "added" | "progress" | "improved";
    items: Array<string>;
    blurb?: string;
}
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`ChangelogProps`](../interfaces/ChangelogProps.md) | Information to display in the modal |

#### Returns

`string` \| `number`

The key used for this modal.

***

### showConfirmationModal()

```ts
static showConfirmationModal(
   title: string, 
   content: 
  | string
  | ReactElement<unknown, string | JSXElementConstructor<any>>
  | (
  | string
  | ReactElement<unknown, string | JSXElementConstructor<any>>)[], 
   options?: {
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onClose?: () => void;
  onConfirm?: () => void;
}): string | number | void;
```

Defined in: [src/betterdiscord/api/ui.ts:82](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/ui.ts#L82)

Shows a generic but very customizable confirmation modal with optional confirm and cancel callbacks.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `title` | `string` | Title of the modal. |
| `content` | \| `string` \| `ReactElement`\<`unknown`, `string` \| `JSXElementConstructor`\<`any`\>\> \| ( \| `string` \| `ReactElement`\<`unknown`, `string` \| `JSXElementConstructor`\<`any`\>\>)[] | - |
| `options?` | \{ `cancelText?`: `string`; `confirmText?`: `string`; `onCancel?`: () => `void`; `onClose?`: () => `void`; `onConfirm?`: () => `void`; \} | Options to modify the modal |
| `options.cancelText?` | `string` | Text for the cancel button |
| `options.confirmText?` | `string` | Text for the confirmation/submit button |
| `options.onCancel?` | () => `void` | Callback to occur when clicking the cancel button |
| `options.onClose?` | () => `void` | Callback to occur when exiting the modal |
| `options.onConfirm?` | () => `void` | Callback to occur when clicking the submit button |

#### Returns

`string` \| `number` \| `void`

The key used for this modal.

***

### showInviteModal()

```ts
static showInviteModal(inviteCode: string): Promise<void>;
```

Defined in: [src/betterdiscord/api/ui.ts:124](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/ui.ts#L124)

Shows a modal for joining a guild like you would natively through Discord.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inviteCode` | `string` | the invite code |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### showNotice()

```ts
static showNotice(content: string, options: NoticeOptions): (immediately: boolean) => void | undefined;
```

Defined in: [src/betterdiscord/api/ui.ts:152](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/ui.ts#L152)

Shows a notice above Discord's chat layer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `string` | Content of the notice |
| `options` | [`NoticeOptions`](../interfaces/NoticeOptions.md) | Options for the notice |

#### Returns

(`immediately`: `boolean`) => `void` \| `undefined`

A callback for closing the notice. Passing `true` as first parameter closes immediately without transitioning out.

***

### showNotification()

```ts
static showNotification(notificationObj: Notification): 
  | {
  close: () => void;
  id: string;
  isVisible: () => boolean;
}
  | undefined;
```

Defined in: [src/betterdiscord/api/ui.ts:35](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/ui.ts#L35)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `notificationObj` | [`Notification`](../interfaces/Notification.md) |

#### Returns

  \| \{
  `close`: () => `void`;
  `id`: `string`;
  `isVisible`: () => `boolean`;
\}
  \| `undefined`

***

### showToast()

```ts
static showToast(content: string, options: ToastOptions): void;
```

Defined in: [src/betterdiscord/api/ui.ts:138](https://github.com/BetterDiscord/BetterDiscord/blob/aeaf27b249f5b68e3ac27c13795ea2eeeef19ffb/src/betterdiscord/api/ui.ts#L138)

This shows a toast similar to android towards the bottom of the screen.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `string` | The string to show in the toast |
| `options` | [`ToastOptions`](../interfaces/ToastOptions.md) | Options for the toast |

#### Returns

`void`
