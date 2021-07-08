# Stylelint

Indigo Tree Stylelint rules

## Usage

Install via NPM:

```
npm i @indigotree/stylelint-config@latest --save-dev
```

Note, there are also peerDependencies to install.

Add to `package.json` as:

```json
{
  "stylelint": "@indigotree/stylelint-config"
}
```

Or extend in `stylelint.config.js` with:

```js
module.exports = {
  ...require("@indigotree/stylelint-config"),
};
```

# Licence

[MPL](./LICENSE)
