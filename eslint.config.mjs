// eslint.config.mjs
import nextPlugin from '@next/eslint-plugin-next';
import prettierPlugin from 'eslint-plugin-prettier';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import prettierConfig from 'eslint-config-prettier';
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

/** @type {import("eslint").Linter.Config} */
const config = [
  // Base configuration
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@next/eslint-plugin-next': nextPlugin,
      prettier: prettierPlugin,
      perfectionist: perfectionistPlugin,
    },
    rules: {
      // Vercel style guide
      'import/no-default-export': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

      // Prettier
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          trailingComma: 'none',
          printWidth: 100,
          endOfLine: 'auto',
          tailwindConfig: '../../config-tailwind/src/tailwind.config.js',
        },
      ],

      // Perfectionist
      'import/order': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          groups: [
            'type',
            'next',
            'react',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'side-effect',
            'style',
            'object',
            'unknown',
          ],
          customGroups: {
            value: {
              next: ['next', 'next-*'],
              react: ['react', 'react-*'],
            },
          },
          newlinesBetween: 'never',
        },
      ],
      'perfectionist/sort-exports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
        },
      ],
    },
  },

  // Extend configurations
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  prettierConfig,
];

export default config;
