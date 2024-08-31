# H3rmel ESLint and Prettier Config

![Lint Config Banner](public//h3rmel-lint-config.png)

---

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

### React

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

### Prettier

Install the package:

```bash
npm i --save-dev @h3rmel/prettier-config
```

Install the dependencies:

```bash
npm i --save-dev prettier prettier-plugin-tailwindcss
```

Extends the configuration:

```js
// .prettierrc
"@h3rmel/prettier-config";
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
