# Coding Standards

Indigo Tree coding standards.

## Packages

- [ESLint](./packages/eslint-config) - `@indigotree/eslint-config`
- [Prettier](./packages/prettier-config) - `@indigotree/prettier-config`
- [Stylelint](./packages/stylelint-config) - `@indigotree/stylelint-config`
- [PHPCS](./IndigoTree/ruleset.xml) - `indigotree/coding-standards`

## Deployment

This project uses [Lerna](https://github.com/lerna/lerna), which is a  tool that optimises the workflow around managing multi-package repositories with git and npm. Most of the time, `npm run learna:publish` is what you need to publish new packages.