const hljs = require("highlight.js"); // https://highlightjs.org/

const defaultOptions = {
    copyButton: true,
    lineNumbers: true,
    multi: false,
    filename: "",
    split: ""
};

const parseOptions = function(rawOptions) {
    const options = Object.assign({}, defaultOptions);
    if (!rawOptions) return options;
    rawOptions = rawOptions.split(/\s+/g);
    if (!rawOptions.length) return options;
    for (const option of rawOptions) {
        const split = option.split("=");
        const key = split[0].trim();
        let value = split[1].trim();
        if (value === "true") value = true;
        else if (value === "false") value = false;
        else if (!isNaN(value)) value = Number(value);
        options[key] = value;
    }
    return options;
};

const makeLineNumbers = function(markup) {
    const lineCount = markup.split("\n").length - 1; // -1 to account for last line
    if (lineCount === 1) return "";
    let htmlstring = `<span class="line-numbers-container" aria-hidden="true">`;
    for (let l = 1; l <= lineCount; l++) htmlstring += `<span></span>`;
    htmlstring += `</span>`;
    return htmlstring;
};

const makeCopyButton = function() {
    return `<button title="Copy Code" class="btn btn-secondary btn-copy flex-container align-center hide-mobile"></button>`;
};

const fixDocStrings = function(markup) {
    const lines = markup.split("\n");
    for (let l = 0; l < lines.length; l++) {
        const line = lines[l];

        // Add a class to distinguish jsdoc comments
        if (line.includes("hljs-comment") && line.includes(">/**")) {
            lines[l] = line.replace("hljs-comment", "hljs-comment hljs-jsdoc");
        }

        if (!line.includes("hljs-doctag")) continue;
        const split = line.split(`> `);
        if (split.length != 2) continue;

        // Prevent adding a js class to a jsdoc comment string
        split[1] = split[1].replace(`<span class="hljs-variable">`, "").replace(`</span>`, "");
        lines[l] = split.join("> ");
    }
    return lines.join("\n");
};

const splitter = /<!-- [A-Za-z0-9]+ -->/g;
const getMarkup = function(code, lang, options) {
    if (options.multi) {
        const langs = code.match(splitter).map(r => r.replace("<!-- ", "").replace(" -->", ""));
        const codes = code.split(splitter).filter(s => s);

        let markup = "";
        for (let c = 0; c < codes.length; c++) {
            const parsed = hljs.highlight(codes[c].trimStart(), {language: langs[c]}).value;
            markup += fixDocStrings(parsed);
        }
        return markup;
    }

    const markup = hljs.highlight(code, {language: lang}).value;
    return fixDocStrings(markup);
};

const markupCode = function(code, lang, options) {
    if (!lang || !hljs.getLanguage(lang)) return `<pre><code>${code}</code></pre>`;

    const markup = getMarkup(code, lang, options);

    let htmlstring = markup;
    if (options.lineNumbers) {
        const result = makeLineNumbers(markup);
        if (!result) options.lineNumbers = false;
        else htmlstring += makeLineNumbers(markup);
    }
    if (options.copyButton) htmlstring += makeCopyButton(markup);

    const className = `language-${lang}` + (options.lineNumbers ? " line-numbers" : "");
    return `<pre class="${className}"><code class="${className}">${htmlstring}</code></pre>`;
};

module.exports = function (str, lang, languageOptions) {
    const options = parseOptions(languageOptions);
    if (!options.split) return markupCode(str, lang, options);

    const blocks = str.split(options.split);
    const langs = [lang];
    for (let b = 1; b < blocks.length; b++) {
        const block = blocks[b];
        const EOL = block.indexOf("\n");
        const language = block.substring(0, EOL);
        langs.push(language);
        blocks[b] = block.substring(EOL + 1);
    }

    const marked = blocks.map((b, i) => markupCode(b, langs[i], options));
    return marked.join("");
};