const package = require("./package.json");

module.exports = {
  presets: [
    ["@babel/preset-env", { modules: false, targets: "> 0.25%, not dead" }],
    "babel-preset-vue",
    "@babel/preset-typescript"
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    [
      "transform-define",
      {
        __VUETIFY_VERSION__: package.peerDependencies.vuetify,
        __REQUIRED_VUE__: package.peerDependencies.vue
      }
    ],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-optional-chaining"
  ]
};
