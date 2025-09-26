const js = require('@eslint/js');
const tseslint = require('typescript-eslint');

module.exports = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      // Re-enable after fixing types
    },
  },
  {
    files: ['tests/**/*.ts'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    ignores: ['dist/', 'node_modules/', '*.js'],
  },
];
