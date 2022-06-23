module.exports = {
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