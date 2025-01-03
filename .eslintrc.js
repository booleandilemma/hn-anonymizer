module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [ 'airbnb-base', 'eslint:recommended'],
  overrides: [
  {
    files: [ '*.js' ],
    rules: {
      'class-methods-use-this': 'off',
      'no-plusplus': 'off',
      'no-console': 'off',
      'linebreak-style': 'off',
      'quotes': 'off',
      'camelcase': 'off',
      'max-classes-per-file': 'off',
      'strict': 'off',
      'prefer-destructuring': 'off',
      'no-param-reassign': 'off',
    }
  }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
  },
};
