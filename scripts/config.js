module.exports = {
    templateFormats: [
        "md",
        "njk",
        "html"
    ],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix: "/",
    dir: {
        input: "src",
        includes: "_includes",
        data: "_data",
        output: "dist"
    }
};