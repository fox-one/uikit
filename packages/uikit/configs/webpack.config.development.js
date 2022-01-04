const base = require("./webpack.config.base");
const externals = require("./externals");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const resolve = (file) => require("path").resolve(__dirname, file);

module.exports = merge(base, {
  entry: "./src/index.ts",
  devtool: "source-map",
  mode: "development",
  output: {
    filename: "indexl.min.js",
    path: resolve("../build"),
    libraryTarget: "umd",
    libraryExport: "default",
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  plugins: [new MiniCssExtractPlugin({ filename: "index.min.css" })],
  externals
});
