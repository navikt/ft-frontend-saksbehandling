import type { StorybookConfig } from '@storybook/react-vite';

// @ts-expect-error må ha .ts
import { lagStoriesEntriesForPakker } from './lagStoriesEntriesForPakker.ts';

const config: StorybookConfig = {
  addons: ['@storybook/addon-links', '@storybook/addon-a11y', '@storybook/addon-docs', '@storybook/addon-vitest'],
  framework: '@storybook/react-vite',
  stories: async () => ['./*.mdx', ...(await lagStoriesEntriesForPakker('packages'))],
};

export default config;
