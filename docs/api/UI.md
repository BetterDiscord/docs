# Class: UI

`UI` is a utility class for creating user interfaces. An instance is available on [BdApi](BdApi.md).

## Methods

### alert()

> **alert**(`title`, `content`): `void`

Shows a generic but very customizable modal.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `title` | `string` | Title of the modal |
| `content` | `string` \| `ReactElement`\<`unknown`, `string` \| `JSXElementConstructor`\<`any`\>\> \| readonly (`string` \| `ReactElement`\<`unknown`, `string` \| `JSXElementConstructor`\<`any`\>\>)[] | A string of text to display in the modal |

#### Returns

`void`

***

### buildSettingItem()

> **buildSettingItem**(`setting`): `Element` \| `null`

Creates a single setting wrapped in a setting item that has a name and note.
The shape of the object should match the props of the component you want to render, check the
`BdApi.Components` section for details.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `setting` | [`CustomSetting`](CustomSetting.md) \| [`ButtonSetting`](ButtonSetting.md) \| [`Setting`](Setting.md) |

#### Returns

`Element` \| `null`

A SettingItem with a an input as the child

***

### buildSettingsPanel()

> **buildSettingsPanel**(`props`): `CElement`\<[`ErrorBoundaryProps`](ErrorBoundaryProps.md), [`ErrorBoundary`](ErrorBoundary.md)\>

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
| `props` | [`SettingsPanelProps`](SettingsPanelProps.md) | - |

#### Returns

`CElement`\<[`ErrorBoundaryProps`](ErrorBoundaryProps.md), [`ErrorBoundary`](ErrorBoundary.md)\>

React element usable for a settings panel

***

### createTooltip()

> **createTooltip**(`node`, `content`, `options?`): [`Tooltip`](Tooltip.md)

Creates a tooltip to automatically show on hover.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `node` | `HTMLElement` | DOM node to monitor and show the tooltip on |
| `content` | `string` \| `HTMLElement` | String to show in the tooltip |
| `options` | [`TooltipOptions`](TooltipOptions.md) | Additional options for the tooltip |

#### Returns

[`Tooltip`](Tooltip.md)

The tooltip that was generated

***

### openDialog()

> **openDialog**(`options`): `Promise`\<`any`\>

Gives access to the [Electron Dialog](https://www.electronjs.org/docs/latest/api/dialog/) api.
Returns a `Promise` that resolves to an `object` that has a `boolean` cancelled and a `filePath` string for saving and a `filePaths` string array for opening.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `Partial`\<[`DialogOptions`](DialogOptions.md)\> | Options object to configure the dialog |

#### Returns

`Promise`\<`any`\>

The result of the dialog

***

### showChangelogModal()

> **showChangelogModal**(`options`): `string` \| `number`

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
| `options` | [`ChangelogProps`](ChangelogProps.md) | Information to display in the modal |

#### Returns

`string` \| `number`

The key used for this modal

***

### showConfirmationModal()

> **showConfirmationModal**(`title`, `content`, `options?`): `string` \| `number` \| `void`

Shows a generic but very customizable confirmation modal with optional confirm and cancel callbacks.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `title` | `string` | Title of the modal. |
| `content` | `string` \| `ReactElement`\<`unknown`, `string` \| `JSXElementConstructor`\<`any`\>\> \| readonly (`string` \| `ReactElement`\<`unknown`, `string` \| `JSXElementConstructor`\<`any`\>\>)[] | Single or mixed array of React elements and strings. Everything is wrapped in Discord's `TextElement` component so strings will show and render properly. |
| `options?` | [`ConfirmationModalOptions`](ConfirmationModalOptions.md) | Options to modify the modal |

#### Returns

`string` \| `number` \| `void`

***

### showInviteModal()

> **showInviteModal**(`inviteCode`): `Promise`\<`void`\>

Shows a modal for joining a guild like you would natively through Discord.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inviteCode` | `string` | The invite code |

#### Returns

`Promise`\<`void`\>

***

### showNotice()

> **showNotice**(`content`, `options?`): ((`immediately`) => `void`) \| `undefined`

Shows a notice above Discord's chat layer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `string` | Content of the notice |
| `options` | [`NoticeOptions`](NoticeOptions.md) | Options for the notice |

#### Returns

((`immediately`) => `void`) \| `undefined`

A callback for closing the notice. Passing `true` as first parameter closes immediately without transitioning out.

***

### showNotification()

> **showNotification**(`options`): \{ `close`: () => `void`; `id`: `string`; `isVisible`: () => `boolean`; \} \| `undefined`

Shows a customizable notification to the user.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`Notification`](Notification.md) |

#### Returns

\{ `close`: () => `void`; `id`: `string`; `isVisible`: () => `boolean`; \} \| `undefined`

An object with `isVisible` and `close` methods

***

### showToast()

> **showToast**(`content`, `options?`): `void`

Shows a toast similar to android towards the bottom of the screen.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `string` | The string to show in the toast |
| `options` | [`ToastOptions`](ToastOptions.md) | Options for the toast |

#### Returns

`void`
