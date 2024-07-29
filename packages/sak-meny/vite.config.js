import { defineConfig } from 'vitest/config';
import { mergeConfig } from 'vite';
import { dependencies } from './package.json';
import commonConfig from '../../vite.config';

const config = defineConfig({
  build: {
    lib: {
      name: '@navikt/ft-sak-meny',
    },
    rollupOptions: {
      external: Object.keys(dependencies),
    },
  },
});

export default mergeConfig(commonConfig, config);
