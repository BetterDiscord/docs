import { $ } from "bun";
import { existsSync, rmSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const forceClone = process.argv.includes("--forceClone");
const sourceExists = existsSync("bd-source");

if(forceClone && sourceExists) {
    console.log("Removing existing source...");
    rmSync("bd-source", { recursive: true, force: true });
}

if(!sourceExists || forceClone) {
    console.log("Cloning BetterDiscord source...");
    await $`git clone https://github.com/BetterDiscord/BetterDiscord.git bd-source`;
}

console.log("Generating API documentation...");
await $`bunx typedoc`;

console.log("Cleaning up...");
const baseDir = join("docs", "api");
const bdApiPath = join(baseDir, "BdApi.md");

// Remove the readme file that snuck in
rmSync(join(baseDir, "README.md"), { force: true });

// Remove the initialization information from BdApi
let apiText = readFileSync(bdApiPath, "utf-8");
apiText = apiText.replace(/(\n> `static` .+) = .+\n/g, "$1\n");

// Manually change the ReactDOM type since typedoc really does not like it for some reason
const reactDOMType = "**ReactDOM**: *typeof* `ReactDOMBase` & *typeof* `ReactDOMClient`";
apiText = apiText.replaceAll("**ReactDOM**: `__module` & `__module`", reactDOMType)
writeFileSync(bdApiPath, apiText);

console.log("Done!");