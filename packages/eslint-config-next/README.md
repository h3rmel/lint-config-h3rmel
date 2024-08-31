# H3rmel's ESLint config for NextJS

My personal ESLint configuration for NextJS projects.

## Setup

Install the package:

```bash
npm i --save-dev @h3rmel/eslint-config-next
```

Install the dependencies:

```bash
npm i --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import-helpers eslint-plugin-jsx-a11y eslint
```

Extends the configuration:

```js
// .eslintrc.js
module.exports = {
  extends: ["next/core-web-vitals", "next", "@h3rmel/eslint-config-next"],
};
```
