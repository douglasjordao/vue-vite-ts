module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue', '.ts', '.d.ts'],
      },
      alias: {
        extensions: ['.js', '.vue', '.ts', '.d.ts', '.scss'],
        map: ['@/*', './src/*'],
      },
    },
  },
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'prettier',
    'prettier/vue',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: [],
  rules: {},
};
