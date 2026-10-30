import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import commonConfig, { externalizePeerDependencies } from '@navikt/ft-config-vite';

import packageJson from './package.json' with { type: 'json' };

const config = defineConfig({
  build: {
    lib: {
      name: '@navikt/ft-hooks',
    },
    rollupOptions: {
      external: externalizePeerDependencies(packageJson.peerDependencies),
    },
  },
});

// eslint-disable-next-line no-restricted-exports
export default mergeConfig(commonConfig, config);
