const { md } = require("./markdown-it");
const fm = require("front-matter");
const fs = require("fs");
const glob = require("glob");
const path = require("path");
const VirtualModulesPlugin = require("webpack-virtual-modules");

function readFile(filePath) {
  return fs.readFileSync(filePath, "utf-8");
}

function getPages(files) {
  return files.reduce((pages, filePath) => {
    const { attributes, body } = fm(readFile(filePath));
    const { nav, meta = {} } = attributes;
    const dir = filePath.replace(/^\.\/src\/pages/, "").replace(/\.\w+$/, "/");
    const tokens = md.parse(body, {});
    const firstIndex = tokens.findIndex(({ type }) => type === "heading_open");
    const nextIndex = firstIndex + 1;
    const heading = (tokens[nextIndex] || {}).content || "";

    pages[dir] = nav || heading || meta.title;

    return pages;
  }, {});
}

class Plugin {
  apply(compiler) {
    const virtualModules = new VirtualModulesPlugin(files);
    
  }
}
