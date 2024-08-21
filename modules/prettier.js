/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: "all",
  arrowParens: "always",
  semi: true,
  endOfLine: "auto",
  bracketSpacing: true,
  bracketSameLine: false,
  plugins: ['prettier-plugin-tailwindcss']
}