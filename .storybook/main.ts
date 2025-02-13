import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../packages/**/src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async c => ({
    ...c,
    // @ts-ignore
    plugins: c.plugins?.filter(p => p?.name !== 'vite:dts'),
  }),
};

export default config;
