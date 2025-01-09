import { defineConfig } from 'vitest/config';
import { mergeConfig } from 'vite';
import commonConfig from '../../vite.config';

const config = defineConfig({
  build: {
    lib: {
      name: '@navikt/ft-types',
    },
  },
});

export default mergeConfig(commonConfig, config);
