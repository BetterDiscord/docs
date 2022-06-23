module.exports = new class CustomFilters {
    add(eleventyConfig) {
        eleventyConfig.addFilter("getElementByKey", this.getElementByKey);
        eleventyConfig.addFilter("getIndexByKey", this.getIndexByKey);
        eleventyConfig.addFilter("pageTitleCap", this.pageTitleCap);
    }

    getElementByKey(array, key, value) {
        return array.find(e => e[key] === value);
    }

    getIndexByKey(array, key, value) {
        return array.findIndex(e => e[key] === value);
    }

    pageTitleCap(title) {
        return title.charAt(0).toUpperCase() + title.slice(1);
    }
};