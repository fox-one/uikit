const path = require("path");
const { merge } = require("webpack-merge");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { VuetifyLoaderPlugin } = require("vuetify-loader");
const { config: baseWebpackConfig } = require("./webpack.base.config");

const resolve = (file) => path.resolve(__dirname, file);

module.exports = merge(baseWebpackConfig, {
  devtool: "source-map",
  entry: ["babel-polyfill", "./dev/index.ts"],
  output: {
    filename: "[name].js",
    path: resolve("../dev"),
    publicPath: "/dev/",
    library: "UIKit"
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    contentBase: resolve("../dev"),
    publicPath: "/dev/",
    host: process.env.HOST || "localhost",
    port: process.env.PORT || "8081",
    disableHostCheck: true
  },
  plugins: [new VueLoaderPlugin(), new VuetifyLoaderPlugin()]
});
