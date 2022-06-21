const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const pluginNavigation = require("@11ty/eleventy-navigation");
const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
    // Copy the `assets` folders to the output
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("src/scripts");
    eleventyConfig.addPassthroughCopy("src/styles/vendor");

    eleventyConfig.addPlugin(pluginNavigation);
    eleventyConfig.addPlugin(eleventySass);

    eleventyConfig.addFilter("getElementByKey", function(array, key, value) {
        if (!array) console.log("KEY, VALUE: ", key, value);
        return array.find(e => e[key] === value);
    });

    eleventyConfig.addFilter("getIndexByKey", function(array, key, value) {
        if (!array) console.log("KEY, VALUE: ", key, value);
        return array.findIndex(e => e[key] === value);
    });

    eleventyConfig.addPairedShortcode("banner", function(content, type = "info", format = "html") {
		if (format === "md") {
			content = markdownIt.renderInline(content);
		}
        else if (format === "md-block") {
			content = markdownIt.render(content);
		}

        let icon = "";
        if (type == "warning") icon = `<path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path>`;
        if (type == "info") icon = `<path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"></path>`;
        if (type == "danger") icon = `<path d="M4.25 7.25a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z"></path><path fill-rule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"></path>`;
		if (type == "success") icon = `<path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM0 8a8 8 0 1116 0A8 8 0 010 8zm11.78-1.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z"></path>`;
        
        return `<div class="banner ${type}">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                        ${icon}
                    </svg>
                    <span>${content}</span>
                </div>`;
	});

    // Customize Markdown library and settings:
    const markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: true
    }).use(markdownItAnchor, {
        permalink: markdownItAnchor.permalink.ariaHidden({
            placement: "after",
            class: "direct-link",
            symbol: "#",
            level: [1, 2, 3, 4],
        }),
        slugify: eleventyConfig.getFilter("slug")
    });

    eleventyConfig.setLibrary("md", markdownLibrary);

    return {
        templateFormats: [
            "md",
            "njk",
            "html"
        ],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        pathPrefix: "/docs/",
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "dist"
        }
    };
};