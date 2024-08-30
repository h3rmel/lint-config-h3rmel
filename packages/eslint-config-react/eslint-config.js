/**
 * @see https://eslint.org/docs/latest/use/configure/
 * @type {import("eslint").ESLint.ConfigData}
 */
module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y", "@typescript-eslint", "import-helpers"],
  rules: {
    /**
     * Default rules
     * @see https://eslint.org/docs/latest/rules/
     */
    "spaced-comment": "warn",
    "no-console": "warn",
    /**
     * React
     * @see https://github.com/jsx-eslint/eslint-plugin-react#readme
     */
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/no-unknown-property": "error",
    "react/self-closing-comp": "error",
    /**
     * Import Helpers
     * @see https://github.com/willhoney7/eslint-plugin-import-helpers
     */
    "import-helpers/order-imports": [
      "error",
      {
        newlinesBetween: "always", // new line between groups
        groups: [
          "/^react/",
          "module",
          "/^@/contexts/",
          "/^@/components/",
          "/^@/lib/",
          "/^@/assets/",
          "/^@/",
          ["parent", "sibling", "index"],
        ],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    /**
     * JSX a11y
     * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme
     */
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
        img: ["Image"],
      },
    ],
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [
    "node_modules",
    "dist",
    "build",
    "docs",
    ".vscode",
    "package-lock.json",
    "yarn.lock",
    "pnpm-lock.yaml",
  ],
};
