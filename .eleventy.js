module.exports = (config) => {
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  // Set directories to pass through to the dist folder
  config.addPassthroughCopy("./src/fonts");
  config.addPassthroughCopy("./src/images/");
  config.addPassthroughCopy("./src/css/");

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
