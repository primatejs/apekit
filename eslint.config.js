import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tsconfigRootDir => tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      "scripts/*.js",
      "**/lib/**/*",
      "**/node_modules/**/*",
    ]
  },
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir,
      },
    },
    rules: {
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "args": "all",
          "argsIgnorePattern": "^_",
          "caughtErrors": "all",
          "caughtErrorsIgnorePattern": "^_",
          "destructuredArrayIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "ignoreRestSiblings": true
        }
      ],
      "accessor-pairs": "error",
      "no-shadow": "error",
    }
  },
);
