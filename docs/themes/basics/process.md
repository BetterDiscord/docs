---
order: 1
---

# The Creative Process

If you've made it this far in the guide, you've hopefully learned about the [meta info](../../developers/addons.md#meta) comment and seen the [quick start](../introduction/quick-start.md) for themes. If not, please go and check those out first as they are crucial to making a BetterDiscord theme.

If you just want a quick example of the basics, check out the [example](#example) section below. Otherwise, keep reading for a good overview of the creative process.

## Designing

This may seem obvious, but you can't make a theme without some sort of design in mind. There are many different methods for this, and different levels as well. Some people go into it with a vague mental image of how they want to make the client look. Some people mock up their own designs in Photoshop or other similar software. There's also people that use something else as a reference like how the theme [Slate](https://betterdiscord.app/theme/Slate) is based on the [GitHub Desktop](https://desktop.github.com/) application.

We would definitely recommend the latter two options when it comes to designing a themes. It helps keep your theme consistent, and prevents forgetting what you wanted to do.

### Layout & Usability

When you're designing your theme, keep in mind that you have essentially full control CSS-wise. This means you can completely alter the layout and user experience. Like in the [Horizontal Server List](https://betterdiscord.app/theme/Horizontal%20Server%20List) theme, it completely changes the layout of the guilds in the client which affects how the user interacts with the client. This will often come down to personal preference, but you can work towards delivering a specific layout and user experience. Consider what you want to prioritize for the user, or what you find frustrating about the current client layout. Those are often good sources of inspiration.

### Color Scheme

Every good theme needs a good color scheme, and there are plenty of tools online that help you generate entire color palettes such as [Coolers](https://coolors.co/) (no that's not a typo 😁) which can automatically generate entire palettes or work with existing ones to generate complementary or shaded schemes. Definitely play around with these tools to come up with your own color scheme and do your best to stick with it as you make your theme. Having a set color scheme before implementing makes the code more seamless from the start, and it also makes it smoother because you don't have to stumble over different parts of the design to make a decision.

### Icons

This may seem like it's not a very important part of a theme, but icons can have a profound effect on the look and feel of the client. Many themes choose to override Discord's icons with their own in order to better match the vibe they are going for. There are many free (and open source) icon packages out there that you can either use or take inspiration from.

## Implementing

As you've already read in the [Environment](../introduction/environment.md) section of this guide, Discord has their own CSS variables they use to style different parts of the client. It's often a good starting point to override these when first beginning your theme. It allows you to get an idea of how your color scheme may look and feel on the Discord client or how the colors might mix together. You can always take this chance to go back and make adjustments to your scheme.

### Code Structure & Strategy

A good way to structure your code is the same way we would recommend implementing your design&mdash;by going from logical component to logical component. That is to say, it might be a good idea to start with your changes to the guild list and complete that section before moving on. This allows you to keep all the code in the same place and see rapid progress on your implementation.

### Specificity

Choosing the specificity of your selectors is key to the development of your theme. Having selectors with a higher specificity than Discord's will cause your styles to override their styles. Higher specificity selectors can also have some [performance considerations](../advanced/performance.md) especially for low-power devices. You can also use `!important` for this purpose, but we generally recommend avoiding this outside of overriding inline styles for the most part due to all the other issues it can cause. Another thing to keep in mind is that, generally speaking, your CSS will be added later than Discord's CSS. And if you know your CSS, having two selectors in the same `document` with the same specificity means the one that "appeared later" gets priority. This is a good technique to override some of Discord's styles without going overboard with the descendant selector. You'll learn more about selectors in the [next section](./selectors.md) of the guide.

### Resources

Themes are allowed to use external resources via `@import`. This is actually covered more in depth [later in the guide](../intermediate/remote.md). But this is still something to consider when implementing your theme. Do you want to make use of external resources like icons? Or would you prefer to keep them in the theme itself via [Data URIs](https://css-tricks.com/data-uris/)? You can also think about integrating other themes to your own like Horizontal Server List from before.