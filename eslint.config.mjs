// eslint.config.mjs
import nextPlugin from '@next/eslint-plugin-next'
import { FlatCompat } from '@eslint/eslintrc'
import prettierConfig from 'eslint-config-prettier'
import perfectionistPlugin from 'eslint-plugin-perfectionist'
import prettierPlugin from 'eslint-plugin-prettier'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname
})

/** @type {import("eslint").Linter.Config} */
const config = [
  // Base configuration
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      '@next/eslint-plugin-next': nextPlugin,
      prettier: prettierPlugin,
      perfectionist: perfectionistPlugin
    },
    rules: {
      // Vercel style guide
      'import/no-default-export': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function'
        }
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

      // Prettier
      'prettier/prettier': [
        'error',
        {
          plugins: ['prettier-plugin-tailwindcss'],
          tailwindFunctions: ['cva'],
          semi: false,
          singleQuote: true,
          trailingComma: 'none',
          printWidth: 100,
          endOfLine: 'auto'
        }
      ],

      // Unused vars
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn', // or "error"
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],

      // Perfectionist - imports / exports
      'import/order': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          ignoreCase: false,
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
            'unknown'
          ],
          customGroups: {
            value: {
              next: ['next', 'next-*'],
              react: ['react', 'react-*']
            }
          },
          newlinesBetween: 'never'
        }
      ],
      'perfectionist/sort-exports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          ignoreCase: false,
          groupKind: 'values-first'
        }
      ],

      // Perfectionist - named imports / exports
      'perfectionist/sort-named-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          ignoreAlias: false,
          ignoreCase: false,
          groupKind: 'values-first'
        }
      ],
      'perfectionist/sort-named-exports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          ignoreCase: false,
          groupKind: 'values-first'
        }
      ],

      // Perfectionist - jsx props
      'perfectionist/sort-jsx-props': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          ignoreCase: false,
          groups: [
            'react',
            'name',
            'type',
            'className',
            'unknown',
            'img',
            'anchor',
            'callback',
            'multiline',
            'shorthand'
          ],
          customGroups: {
            react: ['^ref$', '^key$'],
            name: ['^id$', '^name$'],
            type: ['^rel$', '^type$'],
            className: 'className',
            img: ['^src$', '^href$', '^alt$', '^width$', '^height$'],
            anchor: ['^href$', '^to$', '^target$'],
            callback: '^on.+'
          }
        }
      ]
    }
  },

  // Extend configurations
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  prettierConfig
]

export default config
