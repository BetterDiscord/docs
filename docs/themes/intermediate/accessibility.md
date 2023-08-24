---
sidebar_position: 2
---

# Accessibility

As mentioned before, Discord has several accessibility options that users may take advantage of either out of necessity or just out of preference. Either way, it's a good idea to try to adhere to these the best we can.

## Reduced Motion

Reduced motion is exactly as it sounds, the users with this enabled want less motion on their screen. This means toning down or completely removing animations and transitions throughout your theme. The easiest way to do this is to add a `@media` query whenever you use an animation.

```css
#myElement {
    animation: bounce 500ms ease;
}

@media (prefers-reduced-motion) {
    #myElement {
        animation: none;
    }
}
```

Doing the `@media` query directly after the original selector ensures that you don't miss one by making a giant media query at the bottom of your file.

## Saturation

Discord's application of the saturation filter has improved over time, but sometimes it is still necessary to handle it ourselves. For any very saturated color you are using, consider adding the following:

```css
.my-class {
    filter: saturate(var(--saturation-factor,1)) contrast(var(--contrast,1)) brightness(var(--brightness,1));
}
```

This will cause your element to automatically desaturate as the user changes their setting in Discord's accessibility settings.