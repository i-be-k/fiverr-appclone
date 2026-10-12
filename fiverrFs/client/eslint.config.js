import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser }
  },

  // {
  //   "env": {
  //     "browser": true,
  //     "es2021": true
  //   },
  //   "extends": [
  //     "eslint:recommended",
  //     "plugin:react/recommended"
  //   ],
  //   "overrides": [
  //   ],
  //   "parserOptions": {
  //     "ecmaVersion": "latest",
  //     "sourceType": "module"
  //   },
  //   "plugins": ["react"],
  //   "rules": {
  //     "no-unused-vars": "warn",
  //     "react/prop-types": "off"
  //   }
  // },
  pluginReact.configs.flat.recommended,
]);
