import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const configDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    storybookTest({
      configDir,
    }),
  ],
  test: {
    browser: {
      enabled: true,
      headless: true,
      instances: [{ browser: 'chromium' }],
      provider: playwright(),
    },
    name: 'storybook',
  },
});
