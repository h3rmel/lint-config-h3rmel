# H3rmel's ESLint config for React

My personal ESLint configuration for React projects.

## Setup

Install the package:

```bash
npm i --save-dev @h3rmel/eslint-config-react
```

Install the dependencies:

```bash
npm i --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import-helpers eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint
```

Extends the configuration:

```js
// .eslintrc.js
module.exports = {
  extends: ["@h3rmel/eslint-config-react"],
};
```
