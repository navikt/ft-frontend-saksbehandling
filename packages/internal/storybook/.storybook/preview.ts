import type { Preview } from '@storybook/react-vite';
import dayjs from 'dayjs';

import { withPanelDecorator } from './decorators/withPanelDecorator';
import { withThemeDecorator } from './decorators/withThemeDecorator';

import 'dayjs/locale/nb.js';
import '@navikt/ds-css';

dayjs.locale('nb');

const preview: Preview = {
  parameters: {
    htmlLang: 'nb',
  },
  decorators: [withPanelDecorator, withThemeDecorator],
  globalTypes: {
    theme: {
      name: 'Tema',
      description: 'Aksel tema',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'circlehollow', title: 'Lys' },
          { value: 'dark', icon: 'circle', title: 'Mørk' },
        ],
      },
    },
    panelramme: {
      name: 'Panelramme',
      description: 'Simuler plasseringen av prosess-/faktapanelet inne i fp-frontend',
      toolbar: {
        icon: 'sidebar',
        items: [
          { value: 'av', icon: 'component', title: 'Vis kun komponent' },
          { value: 'på', icon: 'sidebar', title: 'Vis app-ramme' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
    panelramme: 'av',
  },
};

export default preview;
