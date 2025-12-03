import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import commonConfig from '@navikt/ft-config-vite';

import { peerDependencies } from './package.json';

const config = defineConfig({
  build: {
    lib: {
      name: '@navikt/ft-prosess-beregning',
    },
    rollupOptions: {
      external: Object.keys(peerDependencies).filter(
        key => key !== '@navikt/ft-kodeverk' && key !== '@navikt/ft-types',
      ),
    },
  },
});

// eslint-disable-next-line import/no-default-export
export default mergeConfig(commonConfig, config);
