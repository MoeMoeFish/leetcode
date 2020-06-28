module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true
    }
  },

  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },

  extends: ['standard', 'plugin:jest/recommended'],

  rules: {
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'operator-linebreak': [
      2,
      'before',
      {
        overrides: {
          '&&': 'before',
          '||': 'before',
          '^': 'before',
          '=': 'after'
        }
      }
    ],
    semi: [2, 'always'], // 行末分号
    indent: [2], // 缩进
    'no-unused-vars': 2,
    'no-undef': 2,
    quotes: [2, 'single'],
    // 'no-alert': 2,
    // 'no-console': 2,
    'array-bracket-newline': [
      2,
      {
        multiline: true,
        minItems: 10
      }
    ]
  }
};
