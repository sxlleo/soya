module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'no-unused-vars': 'off',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none',
        printWidth: 160,
        tabWidth: 2,
        useTabs: false,
        bracketSpacing: true,
        endOfLine: 'auto'
      }
    ],
  },
};
