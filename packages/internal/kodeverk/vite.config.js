import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import commonConfig from '@navikt/ft-config-vite';

const config = defineConfig({
  build: {
    lib: {
      name: '@navikt/ft-kodeverk',
    },
  },
});

// eslint-disable-next-line import/no-default-export
export default mergeConfig(commonConfig, config);
