import eslint from '@eslint/js';
import json from '@eslint/json';
import nlDesignSystemConfig from '@nl-design-system/eslint-config/configs/nl-design-system.config.mjs';
import prettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import react from 'eslint-plugin-react';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['**/dist/', '**/build/', '**/coverage/', '.docusaurus/', '**/.astro/']),
  {
    files: ['*.cjs'],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
  {
    name: 'perfectionist/recommended/natural',
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
    plugins: { perfectionist },
    ...perfectionist.configs['recommended/natural'],
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          ignoreCase: false,
          newlinesBetween: 'never',
        },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          customGroups: {
            first: ['id', 'name'],
            last: ['overrides'],
          },
          groups: ['first', 'unknown', 'last'],
        },
      ],
    },
  },
  {
    name: 'eslint/js/recommended',
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
    ...eslint.configs.recommended,
  },
  {
    extends: [tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
  },
  {
    name: 'eslint/json/recommended',
    files: ['**/*.json'],
    language: 'json/json',
    ...json.configs.recommended,
  },
  {
    files: ['**/tsconfig*.json'],
    language: 'json/jsonc',
    ...json.configs.recommended,
  },
  {
    name: 'eslint-plugin-react',
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
    plugins: { react },
    ...react.configs.flat.recommended,
    ...react.configs.flat['jsx-runtime'],
  },
  {
    extends: [nlDesignSystemConfig],
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
  },
  {
    name: 'eslint-config-prettier',
    ...prettier,
  },
]);
