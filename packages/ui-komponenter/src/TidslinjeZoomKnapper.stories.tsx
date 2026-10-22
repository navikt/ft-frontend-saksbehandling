import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { TidslinjeZoomKnapper } from './TidslinjeZoomKnapper';

const meta = {
  component: TidslinjeZoomKnapper,
  args: {
    onZoomInn: action('onZoomInn'),
    onZoomUt: action('onZoomOut'),
    kanZoomeInn: true,
  },
} satisfies Meta<typeof TidslinjeZoomKnapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ZoomInnDeaktivert: Story = {
  args: {
    kanZoomeInn: false,
  },
};
