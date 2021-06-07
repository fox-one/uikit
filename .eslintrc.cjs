const base = require("@foxone/dev/config/eslint.cjs");

module.exports = {
  ...base,
  globals: {
    __VUETIFY_VERSION__: true,
    __REQUIRED_VUE__: true
  },
  ignorePatterns: [
    "**/*.html",
    ".eslintrc.cjs",
    ".github/**",
    ".vscode/**",
    ".yarn/**",
    "**/build/*",
    "**/coverage/*",
    "**/node_modules/*"
  ],
  parserOptions: {
    ...base.parserOptions,
    project: ["./tsconfig.json"]
  },
  rules: {
    ...base.rules,
    "sort-keys": "off",
    "@typescript-eslint/restrict-plus-operands": "off"
  }
};
