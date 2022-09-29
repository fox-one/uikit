import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import filesize from "rollup-plugin-filesize";
import typescript from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";
import vue from "rollup-plugin-vue";
import alias from "@rollup/plugin-alias";
import scss from "rollup-plugin-scss";
import commonjs from "@rollup/plugin-commonjs";

const name = "UIKit";

export default {
  // input: "src/components/FBottomSheet/index.ts", // our source file
  input: "src/index.ts", // our source file
  inlineDynamicImports: true,
  output: [
    {
      // Keep the bundle as an ES module file, suitable for other bundlers
      // and inclusion as a <script type=module> tag in modern browsers
      name,
      dir: "build",
      format: "esm", // the preferred format
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
    typescript({
      typescript: require("typescript"),
      module: "esnext",
      check: false,
      tsconfig: "tsconfig.lib.json",
      rollupCommonJSResolveHack: true
    }),
    commonjs(),
    json(),
    vue({
      css: false,
      template: {
        isProduction: true
      }
    }),
    resolve({ extensions: [".js", ".ts", ".svg"] }),
    filesize({ showBrotliSize: true }),
    scss({
      output: "build/index.css",
      prefix: "@import '@foxone/uikit/src/styles/variables/_index.scss';"
    }),
    image()
  ]
};
