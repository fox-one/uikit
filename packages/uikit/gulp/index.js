const { dest, series, src } = require("gulp");
const path = require("path");
const ts = require("gulp-typescript");
const replace = require("gulp-replace-path");
const babel = require("gulp-babel");
const header = require("gulp-header");
const sass = require("gulp-sass")(require("sass"));
const tildeImporter = require("node-sass-tilde-importer");
const autoprefixer = require("gulp-autoprefixer");
const vue = require("@omni-door/gulp-plugin-vue-sfc");

const srcDir = path.resolve(__dirname, "../src");
const destDir = path.resolve(__dirname, "../lib");
const tsProject = ts.createProject(
  path.resolve(__dirname, "../tsconfig.lib.json")
);

function compileScripts() {
  const scripts = [
    `${srcDir}/**/*.{ts,tsx,js,jsx}`,
    `!${srcDir}/**/*.stories.{ts,tsx,js,jsx}`
  ];

  return src(scripts)
    .pipe(tsProject())
    .on("error", () => {})
    .pipe(replace(/vuetify\/src/g, "vuetify/lib"))
    .pipe(replace(/\.vue("|'){1}/g, ".js$1"))
    .pipe(replace(/\.scss/g, ".css"))
    .pipe(babel({ root: "../" }))
    .pipe(dest(destDir));
}

function compileStyles() {
  const styles = `${srcDir}/**/*.scss`;
  const variablePath = path.resolve(
    __dirname,
    "../src/styles/variables/_index.scss"
  );

  return src(styles)
    .pipe(header(`@import "${variablePath}";`))
    .pipe(sass({ importer: tildeImporter }))
    .pipe(autoprefixer())
    .pipe(dest(destDir));
}

function compileSFC() {
  const sfc = [`${srcDir}/**/*.vue`, `!${srcDir}/**/*.stories.vue`];

  return src(sfc)
    .pipe(vue.default({ ext: ".ts" }))
    .pipe(babel({ root: "../" }))
    .pipe(replace(/\.vue("|'){1}/g, ".js$1"))
    .pipe(replace(/vuetify\/src/g, "vuetify/lib"))
    .pipe(replace(/\.scss/g, ".css"))
    .pipe(dest(destDir));
}

exports.default = series(compileScripts, compileStyles, compileSFC);
