import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactYouMightNotNeedAnEffect from 'eslint-plugin-react-you-might-not-need-an-effect';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import storybook from 'eslint-plugin-storybook';
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
  ...storybook.configs['flat/recommended'],
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  importPlugin.flatConfigs.recommended,
  reactRefresh.configs.vite,
  reactHooks.configs.flat.recommended,
  reactYouMightNotNeedAnEffect.configs.recommended,
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
      '@typescript-eslint/ban-ts-comment': ERROR,
      'import/no-default-export': ERROR,
      'react-hooks/rules-of-hooks': ERROR,
      'react-hooks/exhaustive-deps': OFF,
      'react-hooks/incompatible-library': OFF,

      // Note: you must disable the base rule as it can report incorrect errors
      'no-use-before-define': OFF,
      '@typescript-eslint/no-use-before-define': [OFF],
      'no-shadow': OFF,
      '@typescript-eslint/no-shadow': [ERROR],
      'no-unused-vars': OFF,
      '@typescript-eslint/no-unused-vars': [ERROR],

      // TODO (TOR) Ignorert inntil videre grunnet kost/nytte
      '@typescript-eslint/no-explicit-any': OFF,

      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^react'], ['^@?\\w'], ['^@navikt/ft-*'], ['@/(.*)'], ['^[./]'], ['./*.module.css'], ['./*.json']],
        },
      ],
    },
  },
  {
    files: ['**/*.stories.tsx', 'eslint.config.mjs', '.storybook/**/*', 'knip.ts'],
    rules: {
      'import/no-default-export': OFF,
      'react-hooks/rules-of-hooks': OFF,
    },
  },
];
