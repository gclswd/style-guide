const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const pluginTOC = require('eleventy-plugin-toc');

const Demo = require('./src/includes/components/Demo');
const ColorPalette = require('./src/includes/components/ColorPalette');

function eleventyConfig(config) {
  config.setTemplateFormats(["html", "md", "njk", "11ty.js"]);
  config.addPlugin(syntaxHighlight);
  config.addPlugin(pluginTOC, {
    ul: true
  });


  config.addPassthroughCopy("src/img");

  // Layout aliases
  config.addLayoutAlias("docs", "templates/docs.njk");

  markdownItConfig = {
    html: true
  };

  config.setLibrary(
    'md',
    markdownIt(markdownItConfig).use(markdownItAnchor)
  );

  config.addPairedShortcode("bold", (content) => {
    return `<b>${content}</b>`;
  });

  //config.addPairedShortcode('Demo', Demo);

  config.addShortcode('ColorPalette', ColorPalette);

  // You can return your Config object (optional).
  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "includes",
      data: "data"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
    pathPrefix: "/style-guide/"
  };
}

module.exports = eleventyConfig;