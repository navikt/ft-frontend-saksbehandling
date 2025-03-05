import type { StorybookConfig } from '@storybook/react-vite';

import { lagStoriesEntriesForPakker } from './lagStoriesEntriesForPakker';

const config: StorybookConfig = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: '@storybook/react-vite',
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
