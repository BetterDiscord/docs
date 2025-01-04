---
order: 4
description: The requirements and format of an addon.
---

# Addon System

## Basics

 - There are currently only two types of addons: plugins and themes.
 - Distributed addons are limited to a single file.
 - The distributed file must be named in the form `<name>.<type>.<ext>` where name is the addon name, type is the addon type, and ext is the standard file extension.
 - Addon files are split into two major sections, the meta and the body.
 - Meta sections (described more below) contain important information about the addon for BetterDiscord, the body section is the main portion of developer content.
 - Addons are dynamically added, removed, and updated to match the files on the users' system.

## Details

### Meta

The meta of an addon contains metadata about the addon as the name would suggest. The format of this meta is a JSDoc style comment at the *very beginning* of the file. Not having this at the beginning can cause BetterDiscord to not load the addon. A minimal meta header would look something like this:

```js
/**
 * @name ExampleAddon
 * @author YourName
 * @description Describe the basic information. Maybe a support server link.
 * @version 0.0.1
 */
```

And a fully filled out meta using all the fields would look something like this:
```js
/**
 * @name ExampleAddon
 * @author YourName
 * @description Describe the basic information. Maybe a support server link.
 * @version 0.0.1
 * @invite inviteCode
 * @authorId 51512151151651
 * @authorLink https://twitter.com/Whoever
 * @donate https://paypal.me/
 * @patreon https://patreon.com/
 * @website https://github.com/BetterDiscord/BetterDiscord
 * @source https://gist.github.com/rauenzi/e5f4d02fc3085a53872b0236cd6f8225
 */
 ```

Please see the table below for details on the fields.


|Field|Required|Description|
|-----|:------:|-----------|
|name|&#x2705;|The name of the addon. Typically does not contain spaces, but is allowed.|
|author|&#x2705;|The name of you the developer.|
|description|&#x2705;|A basic description of the what the addon does.|
|version|&#x2705;|Version representing the current update level. [Semantic versioning](https://semver.org/) recommended.|
|invite|&#x274C;|A Discord invite code, useful for directing users to a support server.|
|authorId|&#x274C;|Discord snowflake ID of the developer. This allows users to get in touch.|
|authorLink|&#x274C;|Link to use for the author's name on the addon pages.|
|donate|&#x274C;|Link to donate to the developer.|
|patreon|&#x274C;|Link to the patreon of the developer.|
|website|&#x274C;|Developer's (or addon's) website link.|
|source|&#x274C;|Link to the source on GitHub of the addon.|

### Body

This is the part of the addon that varies based on the type. For more information on this section, view the specific guides for plugin and theme development.