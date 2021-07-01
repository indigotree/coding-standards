# Prettier

Indigo Tree Prettier rules

We use default Prettier rules. This package exists as an abstraction layer to simplify future modifications.

## Usage

Install via NPM:

```
npm i @indigotree/prettier-config@latest --save-dev
```

Add to `package.json` as:

```json
{
  "prettier": "@indigotree/prettier-config"
}
```

Or extend in `prettier.config.js` with:

```js
module.exports = {
  ...require("@indigotree/prettier-config"),
};
```

# License

[MPL](./LICENSE)
