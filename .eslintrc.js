module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    jest: true,
  },
  extends: ["plugin:@typescript-eslint/recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  plugins: ["react-hooks", "@emotion"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "react/prop-types": "off",
    "react/self-closing-comp": "error",
    "array-callback-return": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "@emotion/pkg-renaming": "error",
  },
  overrides: [
    {
      files: ["**/*.test.ts", "**/*.test.tsx"],
      extends: ["plugin:jest/all"],
      rules: {
        "jest/prefer-expect-assertions": "off",
        "jest/require-hook": "off", // pissing me :)
      },
    },
  ],
}
