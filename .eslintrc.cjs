const base = require("@foxone/dev/config/eslint.cjs");

module.exports = {
  ...base,
  root: true,
  ignorePatterns: [
    ".eslintrc.cjs",
    ".github/**",
    ".vscode/**",
    ".yarn/**",
    "**/build/*",
    "**/public/*",
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
    "vue/no-v-html": "off",
    "vue/component-definition-name-casing": "off",
    "vue/require-default-prop": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "vue/attribute-hyphenation": "off"
  }
};
