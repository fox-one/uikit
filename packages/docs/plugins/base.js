const { md } = require("./configs/markdown-it");
const Mode = require("frontmatter-markdown-loader/mode");
const path = require("path");

const IS_PROD = process.env.NODE_ENV === "production";

module.exports = (config) => {
  config.module
    .rule("markdown")
    .test(/\.md$/)
    .use("toc-loader")
    .loader(path.resolve("./plugins/configs/toc-loader.js"))
    .end()
    .use("frontmatter-markdown-loader")
    .loader("frontmatter-markdown-loader")
    .tap(() => ({
      markdown: (body) => md.render(body),
      mode: [Mode.VUE_COMPONENT, Mode.BODY],
      vue: {
        root: "markdown-body"
      }
    }));

  config.resolve.alias.set("vue$", "vue/dist/vue.runtime.common.js");

  config.optimization
    .removeAvailableModules(IS_PROD)
    .removeEmptyChunks(IS_PROD);
};
