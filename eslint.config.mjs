import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'linebreak-style': OFF,
      'no-console': WARNING,
      'no-debugger': WARNING,
      'max-len': [ERROR, 160],
      'no-undef': OFF,
      'react/require-default-props': OFF,
      'react/jsx-filename-extension': OFF,
      'react/static-property-placement': OFF,
      'react/state-in-constructor': OFF,
      'react/prop-types': OFF,
      'no-restricted-exports': OFF,
      'function-paren-newline': OFF,
      'function-call-argument-newline': OFF,
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],

      // note you must disable the base rule as it can report incorrect errors
      'no-use-before-define': OFF,
      '@typescript-eslint/no-use-before-define': [ERROR],
      'no-shadow': OFF,
      '@typescript-eslint/no-shadow': [ERROR],
      'no-unused-vars': OFF,
      '@typescript-eslint/no-unused-vars': [ERROR],

      // TODO (TOR) Ignorert inntil videre grunnet kost/nytte
      'max-classes-per-file': OFF,
      'react/jsx-props-no-spreading': OFF,
      '@typescript-eslint/no-empty-function': OFF,
      '@typescript-eslint/no-explicit-any': OFF,
      '@typescript-eslint/ban-ts-comment': OFF,
    },
  },
];
