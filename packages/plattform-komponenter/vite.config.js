import { defineConfig } from 'vitest/config';
import { mergeConfig } from 'vite';
import { dependencies, devDependencies } from './package.json';
import commonConfig from '../../vite.config';

const config = defineConfig({
  build: {
    lib: {
      name: '@navikt/ft-prosess-komponenter',
    },
    rollupOptions: {
      external: Object.keys(dependencies).concat(Object.keys(devDependencies)),
    },
  },
});

export default mergeConfig(commonConfig, config);
