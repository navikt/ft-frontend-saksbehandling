import { fileURLToPath } from 'node:url';

import config from '@navikt/ft-config-eslint';

export default [
  ...config,
  {
    files: ['.storybook/main.ts'],
    rules: {
      'storybook/no-uninstalled-addons': [
        'error',
        {
          packageJsonLocation: fileURLToPath(new URL('./package.json', import.meta.url)),
        },
      ],
    },
  },
];
