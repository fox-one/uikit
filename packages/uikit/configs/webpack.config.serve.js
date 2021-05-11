const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VuetifyLoaderPlugin } = require("vuetify-loader");

const base = require("./webpack.config.base");

module.exports = merge(base, {
  target: "web",
  devtool: "source-map",
  entry: ["./src/main.ts"],
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
    publicPath: "/dist/"
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  devServer: {
    hot: true,
    contentBase: "./public",
    host: process.env.HOST || "localhost",
    port: process.env.PORT || "8081",
    disableHostCheck: true
  },
  plugins: [
    new VuetifyLoaderPlugin(),
    new HtmlWebpackPlugin({
      inject: "body",
      template: "public/index.html",
      hash: false
    })
  ]
});
