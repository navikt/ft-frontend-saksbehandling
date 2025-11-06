import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import circleDependency from 'vite-plugin-circular-dependency';
import dts from 'vite-plugin-dts';
import { defineConfig as defineVitestConfig } from 'vitest/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const vitestConfig = defineVitestConfig(() => {
  //eslint-disable-next-line no-undef
  const args = process.argv.join(' ');
  // Kjører browser-mode kun hvis --project=browser er satt. Dette for å unngå at både jsdom og browser-mode kjører i editorer, som ikke filtrerer på prosjekt.
  const enableBrowser = /--project(?:=|\s+)browser\b/.test(args);

  return {
    test: {
      watch: false,
      globals: true,
      setupFiles: path.resolve(__dirname, 'vitest-setup.ts'),
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
        enableBrowser && {
          extends: true,
          test: {
            name: 'browser',
            browser: {
              enabled: true,
              provider: playwright({
                // ...custom playwright options
              }),
              instances: [{ browser: 'chromium' }],
            },
          },
        },
      ].filter(Boolean),
    },
  };
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
      formats: ['es'],
      fileName: format => `index.${format}.js`,
      cssFileName: 'style',
    },
    sourcemap: true,
  },
});

// eslint-disable-next-line import/no-default-export
export default mergeConfig(viteConfig, vitestConfig());
