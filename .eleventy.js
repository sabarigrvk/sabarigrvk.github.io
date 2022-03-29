const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter('markdown', value => md.renderInline(value));
    eleventyConfig.addPassthroughCopy("src/images");
    return {
        dir: {
            input: 'src',
            output: 'docs',
        },
    };
};
