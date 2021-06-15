const pathes = require("./path");
const { VuetifyLoaderPlugin } = require("vuetify-loader");

const isProd = process.env.NODE_ENV === "production";
const extractCSS = isProd || process.env.TARGET === "development";

const cssLoaders = [
  extractCSS ? MiniCssExtractPlugin.loader : "style-loader",
  { loader: "css-loader", options: { sourceMap: !isProd } },
  {
    loader: "postcss-loader",
    options: {
      sourceMap: !isProd,
      postcssOptions: {
        plugins: [["postcss-preset-env"]]
      }
    }
  }
];

const sassLoaders = [
  ...cssLoaders,
  {
    loader: "sass-loader",
    options: {
      implementation: require("sass"),
      sassOptions: {
        indentedSyntax: true
      },
      additionalData: "@import '@foxone/uikit/styles/variables.scss'"
    }
  }
];

const scssLoaders = [
  ...cssLoaders,
  {
    loader: "sass-loader",
    options: {
      implementation: require("sass"),
      sassOptions: {
        indentedSyntax: false
      },
      additionalData: "@import '@foxone/uikit/styles/variables.scss';"
    }
  }
];

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5"
  },
  webpackFinal: async (config) => {
    config.mode = "development";
    config.resolve.alias["@foxone/uikit"] = pathes.uikit;
    config.resolve.alias["@"] = pathes.uikit;
    config.module.rules.push({
      test: /\.sass$/,
      use: ["cache-loader", ...sassLoaders]
    });
    config.module.rules.push({
      test: /\.scss$/,
      use: ["cache-loader", ...scssLoaders]
    });
    config.plugins.push(new VuetifyLoaderPlugin());

    console.log(config.module);

    return config;
  }
};
