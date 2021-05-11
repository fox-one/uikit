const path = require("path");
const fs = require("fs");
const rimraf = require("rimraf");
const { parseName } = require("./utils");
const { getElementCode } = require("./template");

const styles = ["outline", "fill", "colorful"];

const rootDir = path.join(__dirname, "../");
const srcDir = path.join(rootDir, "src");
const iconsDir = path.join(rootDir, "src/icons");
const svgDir = path.join(rootDir, "src/svg");

const generateComponentCode = ({ componentName, filename, style }) => {
  const svgPath = path.join(svgDir, style, filename);
  const componentPath = path.join(iconsDir, `${componentName}.vue`);
  const svg = fs.readFileSync(svgPath);
  const component = getElementCode(componentName, svg, style);

  fs.writeFileSync(componentPath, component, "utf-8");
};

const build = () => {
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir);
  }

  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir);
  }

  const meta = {};
  const entries = [];

  styles.forEach((style) => {
    const filenames = fs.readdirSync(path.join(svgDir, style));
    const data = [];

    filenames.forEach((filename) => {
      const name = filename.replace(".svg", "");
      const { componentName } = parseName(name, style);
      const entry = `export { default as ${componentName} } from "./icons/${componentName}.vue"`;

      generateComponentCode({ filename, componentName, style });
      entries.push(entry);
      data.push({ name, componentName });
    });

    meta[style] = data;
  });

  fs.writeFileSync(
    path.join(srcDir, "meta.json"),
    JSON.stringify(meta),
    "utf-8"
  );
  fs.writeFileSync(path.join(srcDir, "index.ts"), entries.join("\n"), "utf-8");
};

rimraf.sync(iconsDir);
build();
