import { defineConfig } from 'vitest/config';
import { mergeConfig } from 'vite';
import { dependencies } from './package.json';
import commonConfig from '../../vite.config';

const config = defineConfig({
  build: {
    lib: {
      name: '@navikt/ft-fakta-fordel-beregningsgrunnlag',
    },
    rollupOptions: {
      external: Object.keys(dependencies),
    },
  },
});

export default mergeConfig(commonConfig, config);
