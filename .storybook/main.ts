import type { StorybookConfig } from '@storybook/react-vite';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

import { lagStoriesEntriesForPakker } from './lagStoriesEntriesForPakker';

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
  ],
  framework: getAbsolutePath('@storybook/react-vite'),
  viteFinal: async c => ({
    ...c,
    rules: {
      test: /\.md$/,
      use: 'raw-loader',
    },
    plugins: c.plugins.filter(p => p['name'] !== 'vite:dts'),
  }),
  stories: async () => ['./*.mdx', ...(await lagStoriesEntriesForPakker('packages'))],
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
