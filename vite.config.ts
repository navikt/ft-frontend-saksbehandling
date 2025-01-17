import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';

import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';

const vitestConfig = defineVitestConfig({
  test: {
    deps: { interopDefault: true },
    environment: 'jsdom',
    css: false,
    globals: true,
    setupFiles: '../../vitest-setup.ts',
    watch: false,
    testTimeout: 20000,
  },
});

const viteConfig = defineViteConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  build: {
    lib: {
      entry: 'index.ts',
      formats: ['es', 'umd'],
      fileName: format => `index.${format}.js`,
      cssFileName: 'style',
    },
    sourcemap: true,
  },
});

export default mergeConfig(viteConfig, vitestConfig);
