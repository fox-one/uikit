const base = require("./webpack.config.base");
const externals = require("./externals");
const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

const resolve = (file) => require("path").resolve(__dirname, file);

module.exports = merge(base, {
  entry: "./src/index.ts",
  devtool: "source-map",
  mode: "production",
  output: {
    filename: "index.min.js",
    path: resolve("../build"),
    publicPath: "",
    libraryTarget: "umd",
    libraryExport: "default",
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  plugins: [new MiniCssExtractPlugin({ filename: "index.min.css" })],
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true
      }),
      new CssMinimizerWebpackPlugin()
    ]
  },
  externals
});
