module.exports = (config) => {
  require("./base.config")(config);

  config.optimization.splitChunks({
    cacheGroups: {
      test: /[\\/]vuetify[\\/]lib[\\/]/,
      enforce: true
    },
    chunks: "all",
    maxAsyncRequests: 20,
    maxInitialRequests: 5,
    minSize: 20000
  });

  config.target("web");
};
