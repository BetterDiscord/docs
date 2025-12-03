# Notices

Notices are a Discord-specific term for a banner-like element that appears at the top of the screen. In Discord this is most often used to either give persistent information or passively wait for user interaction.

![Notice Example](./img/notice.png)

## Showing Notices

This function has the same signature as `showToast` with the except that `content` can also be an `HTMLElement`. This allows it to be a bit more customizable. However, most of the functionality you would need is included already.


```js
BdApi.UI.showNotice("This is just a basic informational notice!");
```

::: details Result
![Basic Notice](./img/notice_basic.png)
:::

They can do more than just show information though, you can also add multiple buttons for the user to interact with.


```js
BdApi.UI.showNotice(
    "This is just a basic informational notice!",
    {
        type: "error",
        buttons: [
            {
                label: "Click Me!",
                onClick: () => console.log("Clicked Me")
            },
            {
                label: "No Me!",
                onClick: () => console.log("Wrong One!")
            }
        ]
    }
);
```

::: details Result
![Advanced Notice](./img/notice_advanced.png)
:::

Notice how this time we used `type: "error"` and it became red. This has the same `type` and styling options as [showToast](#showtoast).

Each of the buttons here act completely independently which allows for powerful combinations. Additionally, you can have the notice close after a set time using `timeout`. This is a number of milliseconds after which to close the notice. If set to 0 (the default), it won't close until closed by the user or the caller.

`showNotice` returns a function which allows the original caller to close the notice either earlier than the timeout or without user interaction. The `onClick` of the button is provided with this same function as the only argument.