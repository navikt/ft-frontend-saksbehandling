import { defineConfig } from 'vitest/config';
import { mergeConfig } from 'vite';
import { peerDependencies } from './package.json';
import commonConfig from '../../vite.config';

const config = defineConfig({
  build: {
    lib: {
      name: '@navikt/ft-fakta-beregning',
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
    },
  },
});

export default mergeConfig(commonConfig, config);
