const OFF = 0;
const ERROR = 2;

const config = {
  env: {
    es6: true,
    browser: true,
  },

  globals: {
    VERSION: 'off',
  },

  parser: '@typescript-eslint/parser',

  plugins: ['vitest', '@typescript-eslint'],

  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],

  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      ecmaVersion: 8,
      jsx: true,
      impliedStrict: true,
    },
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'packages/*/tsconfig.json',
      },
    },
  },

  rules: {
    'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
    'linebreak-style': OFF,
    'import/no-named-as-default': OFF,
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
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.stories.tsx'] },
    ],
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
    'jsx-a11y/control-has-associated-label': OFF,
    'react/jsx-props-no-spreading': OFF,
    '@typescript-eslint/no-empty-function': OFF,
    '@typescript-eslint/no-explicit-any': OFF,
    '@typescript-eslint/ban-ts-comment': OFF,
  },
  overrides: [
    {
      files: ['*.spec.tsx', '*.spec.ts'],
      rules: {
        'no-unused-expressions': OFF,
      },
    },
  ],
};
module.exports = config;
