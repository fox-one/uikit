const sidebar = require("./sidebar");
const { path } = require("@vuepress/shared-utils");

module.exports = (ctx) => {
  return {
    title: "Fox.ONE UIKit",
    base: "/vuepress-theme-docs/next/",
    description:
      "Fox.ONE UIKit is a lib base on Vuetify, which contains customized styles for Fox.ONE Apps.",
    theme: "@foxone/vuepress-theme-docs",
    themeConfig: {
      logo: "/logo.png",
      sidebar
    },
    configureWebpack: {
      resolve: {
        alias: {
          "@examples": path.resolve(__dirname, "../.examples")
        }
      }
    }
  };
};
