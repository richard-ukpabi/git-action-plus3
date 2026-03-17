module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  env: {
    node: true,
    es2020: true,
    jest: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  overrides: [
    {
      files: ["tests/**/*.ts"],
      parserOptions: {
        project: null, // disable type-checking for tests
      },
    },
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "error"
  }
};
