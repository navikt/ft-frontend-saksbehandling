import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import commonConfig, { externalizePeerDependencies } from '@navikt/ft-config-vite';

import { peerDependencies } from './package.json' with { type: 'json' };

const config = defineConfig({
  build: {
    lib: {
      name: '@navikt/ft-form-hooks',
    },
    rollupOptions: {
      external: externalizePeerDependencies(peerDependencies, ['@navikt/ft-types']),
    },
  },
});

// eslint-disable-next-line import/no-default-export
export default mergeConfig(commonConfig, config);
