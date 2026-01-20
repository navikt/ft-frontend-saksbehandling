import React from 'react';

import { Preview } from '@storybook/react-vite';

import { withThemeDecorator } from '@navikt/ft-frontend-storybook-utils';

import './global.module.css';

import '@navikt/ds-css';

export const globalTypes = {
  theme: {
    name: 'Tema',
    description: 'Aksel tema',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'Lys' },
        { value: 'dark', icon: 'circle', title: 'Mørk' },
      ],
      showName: true,
    },
  },
};

const preview: Preview = {
  decorators: [
    Story => (
      <div style={{ margin: '40px' }}>
        <Story />
      </div>
    ),
    withThemeDecorator,
  ],
  globalTypes,
};

export default preview;
