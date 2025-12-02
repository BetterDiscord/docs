---
order: 0
description: Internal module reference.
---

# Internal Modules

> [!IMPORTANT]
> Keep in mind that Discord's internals are not officially documented and are subject to change at any time. You can check the timestamp at the bottom of each page to see when the reference was last updated.

Discord uses Webpack as their bundler and through [`BdApi.Webpack`](/api/classes/Webpack.md) we are able to grab a number of their internal modules for our own use. There are several commonly known types of modules and this section of the documentation serves as a living reference of some of these modules.

## Data Stores

This common type of modules holds data that is used throughout the entire app by Discord. This includes local caches of information about users, guilds, roles, or anything else that may otherwise need to be pulled from the server. Having access to these can greatly enhance any plugin you may be working on. You can take a look at a mostly comprehensive list on the next page, or you can check out the [plugin guide](/plugins/advanced/webpack.md) for a walkthrough and tips on reverse engineering individual methods.