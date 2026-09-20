import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";

export default tseslint.config(
  {
    ignores: [
      "node_modules/**",
      ".mint/**",
      ".mintlify/**",
      ".husky/**",
      "navigation-progress.js",
      "merchant-flow-runtime.js",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ["**/*.ts", "**/*.tsx"],
  })),
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: ["snippets/**/*.jsx", "runtime/**/*.jsx"],
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
    plugins: { react, "react-hooks": hooks },
    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
);
