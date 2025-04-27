/* eslint-disable @typescript-eslint/naming-convention */
// @ts-check
import globals from 'globals';
import jsEslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import eslintPluginVue from 'eslint-plugin-vue';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/**
 * @see https://typescript-eslint.io/getting-started/#step-2-configuration
 * @type {import('typescript-eslint').Config}
 */
export default tsEslint.config(
  jsEslint.configs.recommended,
  tsEslint.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.{vue,js,jsx,ts,tsx,cjs,cjsx,cts,ctsx,mjs,mjsx,mts,mtsx}'],
    ignores: ['node_modules', 'dist', 'public', '.husky'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        parser: tsEslint.parser,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'interface',
          format: ['StrictPascalCase'],
          prefix: ['I'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
        {
          selector: ['typeLike'],
          format: ['StrictPascalCase'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'enumMember',
          format: ['StrictPascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'default',
          format: ['strictCamelCase', 'snake_case', 'StrictPascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'forbid',
        },
      ],
    },
  },
);
