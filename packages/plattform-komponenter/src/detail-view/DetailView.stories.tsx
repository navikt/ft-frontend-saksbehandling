import { Meta, StoryObj } from '@storybook/react';

import { DetailView } from './DetailView';

const meta = {
  title: 'plattform-komponenter/Detail view',
  component: DetailView,
} satisfies Meta<typeof DetailView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Tittel',
    children: <p>Detaljer</p>,
  },
};
