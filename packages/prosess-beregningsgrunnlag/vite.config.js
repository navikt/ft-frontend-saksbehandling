import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import commonConfig from '@navikt/ft-config-vite';

import { peerDependencies } from './package.json';

const config = defineConfig({
  build: {
    lib: {
      name: '@navikt/ft-prosess-beregningsgrunnlag',
    },
    rollupOptions: {
      external: Object.keys(peerDependencies).filter(key => key !== '@navikt/ft-kodeverk'),
    },
  },
});

// eslint-disable-next-line import/no-default-export
export default mergeConfig(commonConfig, config);
