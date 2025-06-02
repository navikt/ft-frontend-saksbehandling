import { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { OkAvbrytModal } from './OkAvbrytModal';

const meta = {
  component: OkAvbrytModal,
} satisfies Meta<typeof OkAvbrytModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Dette er ein test',
    showModal: true,
    submit: action('button-click'),
    cancel: action('button-click'),
  },
};
