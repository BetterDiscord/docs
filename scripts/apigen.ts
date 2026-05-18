import { $ } from "bun";
import { existsSync } from "node:fs";

const forceClone = process.argv.includes("--forceClone");
const sourceExists = existsSync("bd-source");

if(forceClone && sourceExists) {
    console.log("Removing existing source...");
    await $`rm -rf bd-source`;
}

if(!sourceExists || forceClone) {
    console.log("Cloning BetterDiscord source...");
    await $`git clone https://github.com/BetterDiscord/BetterDiscord.git bd-source`;
}

console.log("Generating API documentation...");
await $`bunx typedoc`;

console.log("Done!");