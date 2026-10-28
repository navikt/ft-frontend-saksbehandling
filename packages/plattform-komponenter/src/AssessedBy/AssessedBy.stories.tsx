import type { Meta, StoryObj } from '@storybook/react-vite';

import { AssessedBy } from './AssessedBy';
import { SaksbehandlernavnContext } from './SaksbehandlernavnContext';

const meta = {
  component: AssessedBy,
  args: {
    ident: 'Z123456',
    date: '2023-01-01',
  },
} satisfies Meta<typeof AssessedBy>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UtenSaksbehandlerKontekst: Story = {};

export const MedSaksbehandlernavn: Story = {
  decorators: [
    Story => (
      <SaksbehandlernavnContext value={{ Z123456: 'Kari Saksbehandler' }}>
        <Story />
      </SaksbehandlernavnContext>
    ),
  ],
};
