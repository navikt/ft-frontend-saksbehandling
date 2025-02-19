import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import commonConfig from '../../vite.config';

import { peerDependencies } from './package.json';

const config = defineConfig({
  build: {
    lib: {
      name: '@navikt/ft-fakta-fordel-beregningsgrunnlag',
    },
    rollupOptions: {
      external: Object.keys(peerDependencies).filter(
        key => key !== '@navikt/ft-kodeverk' && key !== '@navikt/ft-types',
      ),
    },
  },
});

export default mergeConfig(commonConfig, config);
