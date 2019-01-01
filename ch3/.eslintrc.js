// .eslintrc.js
module.exports = {
  plugins: ['react'],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
  settings: {
    "import/parser": "babel-eslint",
    react: {
      version: '16.4.1',
    }
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
  env: {
    node: true,
  },
  rules: {
    quotes: ["error", "single", {avoidEscape: true}],
    "comma-dangle": ["error", "always-multiline"],
  },
};
