const pluginNavigation = require("@11ty/eleventy-navigation");
const eleventySass = require("eleventy-sass");

const eleventyConfigObject = require("./config");
const markdownLibrary = require("./markdown");
const filtersModule = require("./filters");
const pairedModule = require("./paired");
const shortcodesModule = require("./shortcodes");

const passthroughs = ["assets", "src/scripts", "src/styles/vendor"];

module.exports = function(eleventyConfig) {

    // Copy the `assets` folders to the output
    for (const folder of passthroughs) eleventyConfig.addPassthroughCopy(folder);

    // Add filters, shortcodes, and paired shortcodes
    filtersModule.add(eleventyConfig);
    pairedModule.add(eleventyConfig);
    shortcodesModule.add(eleventyConfig);

    // Use custom highlighter
    eleventyConfig.setLibrary("md", markdownLibrary);

    // Add important plugins
    eleventyConfig.addPlugin(pluginNavigation);
    eleventyConfig.addPlugin(eleventySass);

    return eleventyConfigObject;
};