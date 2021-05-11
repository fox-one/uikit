const { VuetifyLoaderPlugin } = require("vuetify-loader");

module.exports = {
  publicPath: process.env.PUBLIC_PATH || "",

  devServer: {
    port: 8088
  },

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
