# H3rmel ESLint and Prettier Config

Ready setup for ESLint and Prettier for my personal projects.

## What's included?

Ready ESLint config for React projects, including:

- React
- React Hooks
- Import Helpers
- JSX a11y

Ready ESLint config por Next projects, including:

- Import Helpers
- JSX a11y

Ready prettier config for projects, including:

- Prettier TailwindCSS

## Setup

### Next

Install the package:

```bash
npm i --save-dev @h3rmel/eslint-config-next
```

Extends the configuration:

```js
// .eslintrc.js
module.exports = {
  extends: ["@h3rmel/eslint-config-next"],
};
```

### React

Install the package:

```bash
npm i --save-dev @h3rmel/eslint-config-react
```

Extends the configuration:

```js
// .eslintrc.js
module.exports = {
  extends: ["@h3rmel/eslint-config-react"],
};
```

### Prettier

Install the package:

```bash
npm i --save-dev @h3rmel/prettier-config
```

Extends the configuration:

```js
// .eslintrc.js
module.exports = {
  extends: ["@h3rmel/prettier-config"],
};
```
