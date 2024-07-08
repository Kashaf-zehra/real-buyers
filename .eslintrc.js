module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'next',
    'prettier',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  plugins: ['eslint-plugin-prettier', 'react', 'react-hooks', 'jsx-a11y'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': ['error'],
    'prefer-const': ['error'],
    'no-undef': ['error', { typeof: true }],
  },
  globals: {
    Set: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
