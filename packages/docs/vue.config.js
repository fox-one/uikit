const { VuetifyLoaderPlugin } = require("vuetify-loader");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: "@import '@foxone/uikit/src/styles/variables.scss'"
      },
      scss: {
        prependData: "@import '@foxone/uikit/src/styles/variables.scss'"
      }
    }
  },
  chainWebpack: (config) => {
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
