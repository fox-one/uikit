const { merge } = require("webpack-merge");
const { config: baseWebpackConfig } = require("./webpack.base.config");

const resolve = (file) => require("path").resolve(__dirname, file);

module.exports = merge(baseWebpackConfig, {
  entry: {
    app: "./src/index.ts"
  },
  output: {
    path: resolve("../build"),
    publicPath: "/build/",
    libraryTarget: "umd",
    libraryExport: "default",
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  externals: {
    vue: {
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
      root: "Vue"
    }
  }
});
