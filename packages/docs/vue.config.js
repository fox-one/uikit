module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: "@import '@foxone/uikit/styles/variables.sass'"
      },
      scss: {
        additionalData: "@import '@foxone/uikit/styles/variables.sass'"
      }
    }
  },
  transpileDependencies: ["vuetify", "@foxone/uikit", "markdown-it-prism"]
  // chainWebpack: (config) => {}
};
