const webpack = require("webpack");
const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

const base = require("./webpack.prod.config");

const builds = {
  development: {
    config: {
      devtool: "source-map",
      mode: "development",
      output: {
        filename: "index.js",
        libraryTarget: "umd"
      },
      plugins: [new MiniCssExtractPlugin({ filename: "index.css" })]
    }
  },
  production: {
    config: {
      mode: "production",
      output: {
        filename: "index.min.js",
        libraryTarget: "umd"
      },
      plugins: [new MiniCssExtractPlugin({ filename: "index.min.css" })],
      performance: {
        hints: false
      }
    },
    env: "production"
  }
};

function genConfig(opts) {
  const config = merge({}, base, opts.config);

  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(opts.env || "development")
    })
  ]);

  if (opts.env) {
    config.optimization = {
      minimizer: [
        new TerserPlugin({
          parallel: true
        }),
        new CssMinimizerWebpackPlugin()
      ]
    };
  }

  return config;
}

if (process.env.TARGET) {
  module.exports = genConfig(builds[process.env.TARGET]);
} else {
  module.exports = Object.keys(builds).map((name) => genConfig(builds[name]));
}
