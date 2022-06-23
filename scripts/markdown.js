const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const slugify = require("@sindresorhus/slugify");
const highlight = require("./highlight");

module.exports = markdownIt({
    highlight: highlight,
    html: true,
    breaks: true,
    linkify: true
}).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
        "placement": "after",
        "class": "direct-link",
        "symbol": "#",
        "level": [1, 2, 3, 4],
    }),
    slugify: slugify
});