const esm = require("@foxone/dev/config/babel-config-esm.cjs");
const cjs = require("@foxone/dev/config/babel-config-cjs.cjs");
const webpack = require("@foxone/dev/config/babel-config-webpack.cjs");

const env = process.env.NODE_ENV;
let config = webpack;

if (env === "esm") {
  config = esm;
} else if (env === "cjs") {
  config = cjs;
}

module.exports = config;
