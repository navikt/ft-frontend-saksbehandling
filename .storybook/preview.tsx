import React from 'react';

import { Preview } from '@storybook/react';

import './global.module.css';

import '@navikt/ds-css';

const preview: Preview = {
  decorators: [
    Story => (
      <div style={{ margin: '40px' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
