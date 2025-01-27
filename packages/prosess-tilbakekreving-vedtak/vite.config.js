import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import commonConfig from '../../vite.config';

import { peerDependencies } from './package.json';

const config = defineConfig({
  build: {
    lib: {
      name: '@navikt/ft-prosess-tilbakekreving-vedtak',
    },
    rollupOptions: {
      external: Object.keys(peerDependencies).filter(key => key !== '@navikt/ft-kodeverk'),
    },
  },
});

export default mergeConfig(commonConfig, config);
