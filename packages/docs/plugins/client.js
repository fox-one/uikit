module.exports = (config) => {
  require("./base")(config);

  config.target("web");

  config.module
    .rule("json")
    .resourceQuery(/blockType=codepen-resources/)
    .use("json")
    .loader("json-loader")
    .end();
};
