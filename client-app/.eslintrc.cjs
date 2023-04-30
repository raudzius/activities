module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: ['airbnb', 'airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: 'client-app/tsconfig.json' },
  plugins: ['react-refresh'],
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
