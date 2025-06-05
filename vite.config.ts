import react from '@vitejs/plugin-react';
import appRoot from 'app-root-path';
import path from 'path';
import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import circleDependency from 'vite-plugin-circular-dependency';
import dts from 'vite-plugin-dts';
import { defineConfig as defineVitestConfig } from 'vitest/config';

const vitestConfig = defineVitestConfig({
  test: {
    watch: false,
    globals: true,
    setupFiles: path.join(appRoot.path, 'vitest-setup.ts'),
    testTimeout: 20000,
    projects: [
      {
        extends: true,
        test: {
          name: 'jsdom',
          deps: { interopDefault: true },
          environment: 'jsdom',
          css: false,
        },
      },
      {
        extends: true,
        test: {
          name: 'browser',
          browser: {
            enabled: true,
            provider: 'playwright',
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
  },
});

const viteConfig = defineViteConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
    circleDependency(),
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

// eslint-disable-next-line import/no-default-export
export default mergeConfig(viteConfig, vitestConfig);
