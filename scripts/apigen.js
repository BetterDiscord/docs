function getProps(properties) {
    const props = [];
    for (const prop of properties) {
        let propString = "";
        propString += `### ${prop.name}\n`;
        propString += `${prop.description}\n\n`;
        propString += `**Type:** \`${prop.type}\`\n`;
        propString += "___\n";
        props.push(propString);
    }
    return props.join("\n");
}


const fullParamHeader = [
    `| Parameter |  Type  | Optional | Default |       Description      |`,
    `|:----------|:------:|:--------:|:-------:|:----------------------:|`,
];

const compactParamHeader = [
    `| Parameter |  Type  |       Description      |`,
    `|:----------|:------:|:----------------------:|`,
];

function getParams(method) {
    const hasOptionalParams = method.parameters?.some(p => p.optional || p.value);
    const table = (hasOptionalParams ? fullParamHeader : compactParamHeader).slice(0);
    if (method.parameters) {
        for (const parameter of method.parameters) {
            const paramString = [];
            paramString.push(parameter.name);
            paramString.push(parameter.type.replace(/\|/g, "\\|").replace(/</g, "&lt;").replace(/>/g, "&gt;"));
            if (hasOptionalParams) paramString.push(parameter.optional || parameter.value ? "&#x2705;" : "&#x274C;");
            if (hasOptionalParams) paramString.push(parameter.value ?? "*none*");
            paramString.push(parameter.description);
            table.push(paramString.join("|"));
        }
        table.push("");
    }
    return table.join("\n") + "\n";
}

function getMethods(methods) {
    const funcs = [];
    for (const method of methods) {
        const deprecation = method.deprecated ? ` <span class="deprecated">Deprecated</span>` : "";
        let methodString = "";
        methodString += `### ${method.name}${deprecation}\n`;
        methodString += `${method.description}\n\n`;
        methodString += method.parameters ? getParams(method) : "\n";
        methodString += `**Returns:** \`${method.returns ?? "void"}\`\n`;
        methodString += "___\n";
        funcs.push(methodString);
    }
    return funcs.join("\n");
}

const fs = require("fs");
const path = require("path");
const template = `# {{name}}

{{description}}

## Properties

{{properties}}

## Methods

{{methods}}`;

function generateApiDoc(which) {
    const data = require(`./data/${which}`);
    const outFile = path.resolve(__dirname, "..", "docs", "plugins", "api", `${which}.md`);
    
    const finalMarkdown = template.replace("{{name}}", data.name)
                                  .replace("{{description}}", data.description)
                                  .replace("{{properties}}", getProps(data.properties))
                                  .replace("{{methods}}", getMethods(data.methods));
    fs.writeFileSync(outFile, finalMarkdown);
}

generateApiDoc("bdapi");
generateApiDoc("addonapi");
generateApiDoc("patcher");