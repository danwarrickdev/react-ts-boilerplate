// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import jestPlugin from "eslint-plugin-jest";
import globals from "globals";

export default [js.configs.recommended, {
  ignores: ["**/*.d.ts", "**/build/**", "**/node_modules/**"],
  files: ["**/*.ts", "**/*.tsx"],
  plugins: {
    "@typescript-eslint": tsPlugin,
    react: reactPlugin,
    "react-hooks": reactHooksPlugin,
    "jsx-a11y": jsxA11yPlugin,
  },
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    globals: {
      ...globals.browser, // Includes document, window, etc.
      React: "readonly",
    },
  },
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
}, // Separate config for test files
{
  files: ["**/*.test.ts", "**/*.test.tsx"],
  plugins: {
    jest: jestPlugin,
  },
  languageOptions: {
    parser: tsParser,
    globals: {
      ...globals.jest,
      ...globals.node,
    },
  },
  rules: {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "react/react-in-jsx-scope": "off",
  },
}, ...storybook.configs["flat/recommended"]];
