import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import filesize from "rollup-plugin-filesize";
import typescript from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";
import vue from "rollup-plugin-vue";
import alias from "@rollup/plugin-alias";
import scss from "rollup-plugin-scss";
import commonjs from "@rollup/plugin-commonjs";
import { DEFAULT_EXTENSIONS } from "@babel/core";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/index.ts",
  inlineDynamicImports: true,
  output: [
    {
      dir: "dist",
      format: "esm",
      compact: true,
      sourcemap: false
    }
  ],
  external: [
    "vue",
    "axios",
    "bignumber.js",
    "vue-property-decorator",
    "vue-class-component",
    "qrcode",
    "@foxone/icons",
    /^@foxone\/utils/,
    /^vuetify\/lib/
  ],
  plugins: [
    alias({
      entries: [{ find: /^vuetify\/src(.+)/, replacement: "vuetify/lib$1" }]
    }),
    resolve({ extensions: [".js", ".ts", ".svg"] }),
    vue({
      css: false,
      template: {
        isProduction: true
      }
    }),
    scss({
      output: "dist/index.min.css",
      outputStyle: "compressed",
      prefix: "@import '@foxone/uikit/src/styles/variables/_index.scss';"
    }),
    typescript({
      typescript: require("typescript"),
      module: "esnext",
      check: false,
      tsconfig: "tsconfig.lib.json",
      rollupCommonJSResolveHack: true
    }),
    commonjs(),
    babel({
      babelHelpers: "runtime",
      extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx", ".vue"]
    }),
    json(),
    filesize({ showBrotliSize: true }),
    image()
  ]
};
