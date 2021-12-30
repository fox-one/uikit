const { fs, path } = require("@vuepress/shared-utils");

const readdir = (dir, base) => {
  return fs
    .readdirSync(path.resolve(__dirname, dir))
    .map((filename) => base + filename.slice(0, -3))
    .sort();
};

module.exports = [
  {
    title: "Styles",
    collapsable: false,
    sidebarDepth: 0,
    children: readdir("../styles", "styles/")
  },
  {
    title: "Components",
    collapsable: false,
    sidebarDepth: 0,
    children: readdir("../components", "components/")
  }
];
