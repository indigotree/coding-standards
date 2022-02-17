module.exports = {
  root: true,
  globals: {
    "wp": "readonly",
    "jQuery": "readonly"
  },
  extends: [
    "plugin:@wordpress/eslint-plugin/recommended-with-formatting",
    "plugin:prettier/recommended",
  ],
};
