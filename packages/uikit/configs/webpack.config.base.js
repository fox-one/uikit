const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

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
      additionalData: "@import '@foxone/uikit/styles/variables/_index.scss'"
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
      additionalData: "@import '@foxone/uikit/styles/variables/_index.scss';"
    }
  }
];

module.exports = {
  resolve: {
    extensions: ["*", ".js", ".json", ".vue", ".ts"],
    alias: {
      "@foxone/uikit": path.resolve(__dirname, "../src")
    }
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
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "babel-loader?retainLines=true"
          }
        ]
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          allowTsInNodeModules: true,
          appendTsSuffixTo: [/.vue$/]
        }
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
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true
    })
  ],
  performance: {
    hints: false
  },
  stats: { children: false }
};
