module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,

  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [0, { 'packageDir ': './src/' }],
    'linebreak-style': ['error', 'unix'],
    'no-debugger': 'off',
    'no-console': 'off',
  },
};
