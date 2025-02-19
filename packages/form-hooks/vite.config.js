import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import commonConfig from '../../vite.config';

import { peerDependencies } from './package.json';

const config = defineConfig({
  build: {
    lib: {
      name: '@navikt/ft-form-hooks',
    },
    rollupOptions: {
      external: Object.keys(peerDependencies).filter(key => key !== '@navikt/ft-types'),
    },
  },
});

export default mergeConfig(commonConfig, config);
