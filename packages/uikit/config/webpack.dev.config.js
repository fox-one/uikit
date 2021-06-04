const path = require("path");
const { merge } = require("webpack-merge");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
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
        exclude: [/node_modules/],
        test: /\.(js|ts|tsx)$/,
        use: [
          {
            loader: "babel-loader?retainLines=true",
            options: {
              plugins: [
                ["@babel/plugin-proposal-class-properties", { loose: true }],
                ["@babel/plugin-proposal-private-methods", { loose: true }]
              ]
            }
          }
        ]
      },
      {
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/.vue$/]
        },
        test: /\.tsx?$/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "img/[name].[hash:7].[ext]"
        }
      }
    ]
  },
  devServer: {
    contentBase: resolve("../dev"),
    publicPath: "/dev/",
    host: process.env.HOST || "localhost",
    port: process.env.PORT || "8080",
    disableHostCheck: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        tsconfig: resolve("../tsconfig.json")
      }
    })
  ]
});
