import type { Meta, ReactRenderer, StoryObj } from '@storybook/react-vite';
import type { DecoratorFunction } from 'storybook/internal/types';

import { getIntlDecorator } from '@navikt/ft-frontend-storybook-utils';

import { DataFetchPendingModal } from './DataFetchPendingModal';

const withIntl = getIntlDecorator({
  'DataFetchPendingModal.LosningenJobberMedBehandlingen': 'Løsningen jobber med behandlingen...',
});

const withWidth: DecoratorFunction<ReactRenderer> = Story => (
  <div style={{ width: '200px' }}>
    <Story />
  </div>
);

const meta = {
  component: DataFetchPendingModal,
  decorators: [withWidth, withIntl],
} satisfies Meta<typeof DataFetchPendingModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pendingMessage: 'Henting av data pågår',
  },
};
