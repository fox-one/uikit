const esm = require("@foxone/dev/config/babel-config-esm.cjs");
const cjs = require("@foxone/dev/config/babel-config-cjs.cjs");
const webpack = require("@foxone/dev/config/babel-config-webpack.cjs");
const package = require("./package.json");

const env = process.env.NODE_ENV;
let config = webpack;

if (env === "esm") {
  config = esm;
} else if (env === "cjs") {
  config = cjs;
}

config.plugins.push([
  "transform-define",
  {
    __VUETIFY_VERSION__: package.peerDependencies.vuetify,
    __REQUIRED_VUE__: package.peerDependencies.vue
  }
]);

config.plugins.push([
  "@babel/plugin-proposal-private-property-in-object",
  { loose: true }
]);

module.exports = config;
