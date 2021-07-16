const base = require("@foxone/dev/config/eslint.cjs");

module.exports = {
  ...base,
  root: true,
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
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/ban-ts-comment": "off"
  }
};
