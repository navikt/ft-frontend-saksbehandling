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

// eslint-disable-next-line no-restricted-exports
export default mergeConfig(commonConfig, config);
