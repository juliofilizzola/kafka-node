module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'max-lines': ['error', { max: 100 }],
    'linebreak-style': 0,
    semi: ['error', 'always'],
    'no-magic-numbers': [
      'error',
      {
        ignore: [0, 1, 2, 100],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    'no-console': ['off'],
  },
};