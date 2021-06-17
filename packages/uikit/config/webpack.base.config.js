const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

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
        plugins: [
          [
            "postcss-preset-env",
            {
              // 其他选项
            }
          ]
        ]
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

const plugins = [
  new FriendlyErrorsWebpackPlugin({
    clearConsole: true
  })
];

exports.config = {
  mode: isProd ? "production" : "development",
  resolve: {
    alias: {
      "@foxone/uikit": path.resolve(__dirname, "../src")
    },
    extensions: ["*", ".js", ".json", ".vue", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: sassLoaders
      },
      {
        test: /\.scss$/,
        use: scssLoaders
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
          transpileOnly: true,
          allowTsInNodeModules: true,
          appendTsSuffixTo: [/.vue$/]
        },
        test: /\.tsx?$/
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
  plugins,
  performance: {
    hints: false
  },
  stats: { children: false }
};
