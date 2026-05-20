import { $ } from "bun";
import { rmSync, readFileSync, writeFileSync, cpSync } from "node:fs";
import { join } from "node:path";

console.log("Generating API documentation...");
await $`bunx typedoc`;

console.log("Cleaning up...");
const baseDir = join("docs", "api");
const bdApiPath = join(baseDir, "BdApi.md");

// Remove README, add apioverview as index
rmSync(join(baseDir, "README.md"), { force: true });
cpSync(join("scripts", "data", "apioverview.md"), join(baseDir, "index.md"));

// Remove the initialization information from BdApi
let apiText = readFileSync(bdApiPath, "utf-8");
apiText = apiText.replace(/(\n> `static` .+) = .+\n/g, "$1\n");

// Manually change the ReactDOM type since typedoc really does not like it for some reason
const reactDOMType = "**ReactDOM**: *typeof* `ReactDOMBase` & *typeof* `ReactDOMClient`";
apiText = apiText.replaceAll("**ReactDOM**: `__module` & `__module`", reactDOMType)
writeFileSync(bdApiPath, apiText);

console.log("Done!");