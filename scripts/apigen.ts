import { $ } from "bun";
import { existsSync, rmSync } from "node:fs";

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
rmSync("./docs/api/README.md", { force: true });

console.log("Done!");