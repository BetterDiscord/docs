# Tooltips

Tooltips are yet another overlay element. These are very similar to popouts but much much smaller and usually point to a specific element to indicate that it is giving additional information about it. This is used to make clean buttons or clarify text.

![Tooltip Example](./img/tooltip.png)

## Creating Tooltips

If you're not using React, this little utility can come in handy. If you give it an HTML element to follow, a label, and an optional set of options, this will generate a return a nifty little tooltip.

```js
// This tooltip will automatically show/hide as the user hovers myElement
const tooltip = BdApi.UI.createTooltip(myElement, "My label", {side: "bottom"});

// But, we can also forcibly show (or hide) the tooltip to fit our needs
tooltip.show()
```

The default options object for `createTooltip` looks something like this:
```json
{
    "style": "primary",
    "side": "top",
    "preventFlip": false,
    "disabled": true
}
```

The sides available are top, right, bottom, and left.

The styles available are primary, info, success, warn, and danger.

You can also directly access the elements of the tooltip afterwards. So if you need to update the label you can do something like this:

```js
tooltip.labelElement.textContent = "New label";

// Or even fancier
const myNewLabel = BdApi.DOM.parseHTML(`<div class="foo">New label text</div>`);
tooltip.labelElement.textContent = "";
tooltip.labelElement.append(myNewLabel);
```

The options with this tooltip are surprisingly wide, so your best bet is to play around with it in console and get a feel for it.
