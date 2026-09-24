import pluginJs from '@eslint/js';
import eslintReact from '@eslint-react/eslint-plugin';
import vitest from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactYouMightNotNeedAnEffect from 'eslint-plugin-react-you-might-not-need-an-effect';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      vitest,
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...storybook.configs['flat/recommended'],
  ...tseslint.configs.recommended,
  eslintReact.configs['recommended-typescript'],
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
      'no-restricted-syntax': [
        ERROR,
        {
          selector: 'FunctionDeclaration[id.name=/^[A-Z]/]',
          message: 'Komponentar skal definerast som pilfunksjonar.',
        },
      ],
      'no-duplicate-imports': [ERROR, { allowSeparateTypeImports: true }],
      '@eslint-react/no-missing-component-display-name': ERROR,
      // Desse dekkjer eslint-plugin-react-hooks allereie
      '@eslint-react/error-boundaries': OFF,
      '@eslint-react/exhaustive-deps': OFF,
      '@eslint-react/purity': OFF,
      '@eslint-react/rules-of-hooks': OFF,
      '@eslint-react/set-state-in-effect': OFF,
      '@eslint-react/set-state-in-render': OFF,
      '@eslint-react/static-components': OFF,
      '@eslint-react/unsupported-syntax': OFF,
      '@eslint-react/use-memo': OFF,
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
      'no-restricted-exports': [
        ERROR,
        {
          restrictDefaultExports: {
            direct: true,
            named: true,
            defaultFrom: true,
            namedFrom: true,
            namespaceFrom: true,
          },
        },
      ],
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
      'no-restricted-exports': OFF,
      'react-hooks/rules-of-hooks': OFF,
    },
  },
];
