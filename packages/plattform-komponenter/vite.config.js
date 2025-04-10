import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import commonConfig from '../../vite.config';

import { peerDependencies } from './package.json';

const config = defineConfig({
  build: {
    lib: {
      name: '@navikt/ft-prosess-komponenter',
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
    },
  },
});

export default mergeConfig(commonConfig, config);
