// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vitest/config';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mergeConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import { dependencies, devDependencies } from './package.json';
// eslint-disable-next-line import/no-relative-packages
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
