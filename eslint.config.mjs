import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import vitest from 'eslint-plugin-vitest';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      vitest,
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  importPlugin.flatConfigs.recommended,
  reactRefresh.configs.vite,
  eslintConfigPrettier,
  {
    rules: {
      ...vitest.configs.recommended.rules,
      'max-len': [ERROR, 160],
      'no-console': WARNING,
      'no-debugger': WARNING,
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/prop-types': OFF,
      'jsx-a11y/no-autofocus': OFF,
      'react/react-in-jsx-scope': OFF,
      'import/no-unresolved': OFF,
      'import/named': OFF,
      'import/no-duplicates': ERROR,
      '@typescript-eslint/no-restricted-types': [
        'error',
        {
          types: {
            'React.FC': {
              message: 'Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177',
            },
            FC: {
              message: 'Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177',
            },
            'React.FunctionComponent': {
              message: 'Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177',
            },
            FunctionComponent: {
              message: 'Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177',
            },
          },
        },
      ],

      // Note: you must disable the base rule as it can report incorrect errors
      'no-use-before-define': OFF,
      '@typescript-eslint/no-use-before-define': [OFF],
      'no-shadow': OFF,
      '@typescript-eslint/no-shadow': [ERROR],
      'no-unused-vars': OFF,
      '@typescript-eslint/no-unused-vars': [ERROR],

      // TODO (TOR) Ignorert inntil videre grunnet kost/nytte
      '@typescript-eslint/no-explicit-any': OFF,
      '@typescript-eslint/ban-ts-comment': OFF,

      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^react'], ['^@?\\w'], ['^@navikt/ft-*'], ['@/(.*)'], ['^[./]'], ['./*.module.css'], ['./*.json']],
        },
      ],
    },
  },
  {
    ignores: ['**/*.stories.tsx', 'eslint.config.mjs', '.storybook/**/*'],
    rules: {
      'import/no-default-export': ERROR,
    },
  },
];
