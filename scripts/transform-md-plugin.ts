import { MarkdownPageEvent, type MarkdownApplication } from "typedoc-plugin-markdown";
import { readFileSync } from "node:fs";
import { basename } from "node:path";

const propertyRegex = /(\n> (?:`static` )?\*\*\w+\*\*: .+) = `.+`\n/g;
const replace = [
    ["**ReactDOM**: `__module` & `__module`", "**ReactDOM**: *typeof* `ReactDOMBase` & *typeof* `ReactDOMClient`"]
]

export function load(app: MarkdownApplication) {
    app.renderer.on(MarkdownPageEvent.END, (page) => {
        // Overwrite index.md with our custom one
        if(basename(page.filename) === "index.md") {
            const content = readFileSync("scripts/data/apioverview.md", "utf-8");
            page.contents = content;
            return;
        }

        // Remove internal stuff like `= DiscordModules.React`
        page.contents = page.contents.replace(propertyRegex, "$1\n");

        // Manually rename certain types that typedoc doesn't like
        for (const [from, to] of replace) {
            page.contents = page.contents.replaceAll(from, to);
        }
    });
}