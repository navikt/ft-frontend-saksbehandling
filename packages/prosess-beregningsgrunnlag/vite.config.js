import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import commonConfig, { externalizePeerDependencies } from '@navikt/ft-config-vite';

import packageJson from './package.json' with { type: 'json' };

const config = defineConfig({
  build: {
    lib: {
      name: '@navikt/ft-prosess-beregningsgrunnlag',
    },
    rollupOptions: {
      external: externalizePeerDependencies(
        packageJson.peerDependencies,
        ['@navikt/ft-kodeverk', '@navikt/ft-types'],
        [/^echarts(?:\/.*)?$/],
      ),
    },
  },
});

// eslint-disable-next-line no-restricted-exports
export default mergeConfig(commonConfig, config);
