import resolve from "@rollup/plugin-node-resolve";
import css from "rollup-plugin-css-porter";
import filesize from "rollup-plugin-filesize";
import sass from "rollup-plugin-sass";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import vue from "rollup-plugin-vue";
import pkg from "./package.json";

const name = "FIconComponents";

// Default configs
const exports = "named";
const sourcemap = false;
const globals = {
  "vue-property-decorator": "vuePropertyDecorator",
  "vue-class-component": "vueClassComponent",
  vue: "Vue"
};

export default {
  input: "src/index.ts", // our source file
  inlineDynamicImports: true,
  output: [
    {
      // Keep the bundle as an ES module file, suitable for other bundlers
      // and inclusion as a <script type=module> tag in modern browsers
      name,
      file: "build/index.esm.js",
      format: "esm", // the preferred format
      compact: true,
      exports,
      sourcemap
    },
    {
      // Universal Module Definition, works as amd, cjs and iife all in one
      name,
      file: "build/index.umd.js",
      format: "umd",
      sourcemap: true,
      globals,
      exports: "named"
    },
    {
      // A self-executing function, suitable for inclusion as a <script> tag.
      // (If you want to create a bundle for your application, you probably want to use this.)
      name,
      file: `build/index.min.js`,
      format: "iife",
      sourcemap: true,
      plugins: [terser()],
      globals,
      exports: "named"
    },
    {
      // CommonJS, suitable for Node and other bundlers
      name,
      file: "build/index.cjs.js",
      format: "cjs",
      sourcemap: true,
      globals,
      exports: "named"
    }
  ],
  external: [...Object.keys(pkg.dependencies)],
  plugins: [
    typescript({
      typescript: require("typescript"),
      module: "esnext",
      check: false,
      tsconfig: "tsconfig.lib.json",
      rollupCommonJSResolveHack: true
    }),
    sass(),
    css(),
    vue({
      css: true,
      template: {
        isProduction: true
      }
    }),
    resolve({
      extensions: [".js", ".ts"]
    }),
    filesize({
      showBrotliSize: true
    })
  ]
};
