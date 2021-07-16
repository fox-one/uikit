const { VuetifyLoaderPlugin } = require("vuetify-loader");

module.exports = {
  publicPath: process.env.PUBLIC_PATH || "",

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

  transpileDependencies: ["vuetify"]
};
