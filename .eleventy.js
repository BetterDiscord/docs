/**
 * This is a workaround for an issue with eleventy.
 * 
 * This may seem unnecessary, but breaking it out into a
 * separate file allows us to make changes that are
 * reloaded properly when watching/serving the build.
 * If they were done directly in this file, they
 * would not be picked up for the build properly.
 * 
 * To use this workaround, make a change in the
 * desired file and save it. Then open this file
 * and trigger a change by saving it as well.
 * This causes eleventy to properly reload any
 * and all changes from the other files.
 */
module.exports = require("./scripts/eleventy");