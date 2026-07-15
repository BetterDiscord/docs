import { MarkdownPageEvent, type MarkdownApplication } from "typedoc-plugin-markdown";
import { readFileSync, existsSync } from "node:fs";
import { basename } from "node:path";
import { execSync } from "node:child_process";
import { join } from "node:path";

const propertyRegex = /(\n> (?:`static` )?\*\*\w+\*\*: .+) = `.+`\n/g;
const replace: [string, string][] = [
    ["`__module` & `__module`", "*typeof* `ReactDOMBase` & *typeof* `ReactDOMClient`"]
]

export function load(app: MarkdownApplication) {
    // Make sure that bd-source has its node_modules installed
    if(!existsSync(join("bd-source", "node_modules"))) {
        console.log("Installing dependencies for docs generation...");
        execSync("bun i --frozen-lockfile", { cwd: "bd-source", stdio: "inherit" });
    }

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