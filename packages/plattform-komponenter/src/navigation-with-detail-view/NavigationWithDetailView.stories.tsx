import { Meta, StoryObj } from '@storybook/react';

import { DetailView } from '../detail-view/DetailView';
import { NavigationWithDetailView } from './NavigationWithDetailView';

const meta = {
  title: 'Navigation with detail',
  component: NavigationWithDetailView,
} satisfies Meta<typeof NavigationWithDetailView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showDetailSection: true,
    navigationSection: () => <p>Navigasjon</p>,
    detailSection: () => (
      <DetailView title="Tittel">
        <p>Detaljer</p>
      </DetailView>
    ),
  },
};
