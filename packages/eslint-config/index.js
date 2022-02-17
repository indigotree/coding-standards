module.exports = {
  root: true,
  globals: {
    "wp": "readonly",
    "jQuery": "writable"
  },
  extends: [
    "plugin:@wordpress/eslint-plugin/recommended-with-formatting",
    "plugin:prettier/recommended",
  ],
};
