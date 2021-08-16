const { VuetifyLoaderPlugin } = require("vuetify-loader");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/uikit/next/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: "@import '@/styles/variables.scss'"
      },
      scss: {
        prependData: "@import '@/styles/variables.scss';"
      }
    }
  },

  chainWebpack: (config) => {
    config.resolve.alias.set("@docs", resolve("src"));

    config
      .plugin("VuetifyLoaderPlugin")
      .use(new VuetifyLoaderPlugin())
      .tap(() => [
        {
          progressiveImages: true
        }
      ]);
  },

  transpileDependencies: ["vuetify", "@foxone/uikit", "markdown-it-prism"]
};
