# Theme File Structure
Themes are stored in [CSS (Cascading Stylesheet)](https://developer.mozilla.org/en-US/docs/Web/CSS) files. 

## Requirements

The following requirements must be met for the client to register a file as a theme:
- Themes must be contained within a single file. This does not include usage of [remote resources](todo).
- Themes must utilize a [META](todo) on the first line of the file, with the required data fields containing valid entries.
- Theme files must be named in the following format: `*.theme.css`.
The `*` character may contain any name in it's place, however the `@name` field in your file's [metadata](todo) will determine the name displayed in the client.

## Example Theme Template

```css
/**
 * @name Theme Name
 * @version 1.0.0
 * @description A description of your theme.
 * @author Theme Author
 * @website https://betterdiscord.net/
*/

body {
    background-color: red;
}
```

Click [here](https://github.com/BetterDiscord/Documentation/blob/main/examples/example.theme.css) to view the file.
