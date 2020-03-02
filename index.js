const rules = require("./rules.js");

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: rules
};
