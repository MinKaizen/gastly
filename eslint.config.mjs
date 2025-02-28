// @ts-check

import tseslint from 'typescript-eslint';

export default tseslint.config(
  tseslint.configs.strict,
  {
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
);