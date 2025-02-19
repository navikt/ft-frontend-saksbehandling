import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { OkAvbrytModal } from './OkAvbrytModal';

const meta = {
  title: 'ui-komponenter/OkAvbrytModal',
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
