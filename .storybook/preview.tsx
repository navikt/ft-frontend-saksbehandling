import type { Preview } from '@storybook/react-vite';
import dayjs from 'dayjs';

import { withThemeDecorator } from '@navikt/ft-frontend-storybook-utils';

import './global.module.css';

import 'dayjs/locale/nb.js';
import '@navikt/ds-css';

dayjs.locale('nb');

const globalTypes: Preview['globalTypes'] = {
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
