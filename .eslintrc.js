/** @type {import("eslint").Linter.Config} */
const config = {
  $schema: 'https://json.schemastore.org/eslintrc.json',
  extends: [
    "next/core-web-vitals", 
    "next/typescript", 
    'prettier'
  ],
  plugins: ['@next/eslint-plugin-next', 'prettier', 'perfectionist'],
  rules: {
    // vercel style guide
    'import/no-default-export': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    '@typescript-eslint/consistent-type-definitions': [2, 'type'],

    // prettier
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        printWidth: 100,
        endOfLine: 'auto',
        tailwindConfig: '../../config-tailwind/src/tailwind.config.js'
      }
    ],

    // perfectionist
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
          'unknown'
        ],
        'custom-groups': {
          value: {
            next: ['next', 'next-*'],
            react: ['react', 'react-*']
          }
        },
        'newlines-between': 'never'
      }
    ],
    'perfectionist/sort-exports': [
      'error',
      {
        type: 'natural',
        order: 'asc'
      }
    ]
  }
}

module.exports = config
