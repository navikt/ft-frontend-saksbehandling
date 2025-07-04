import type { Meta, StoryObj } from '@storybook/react-vite';

import { AksjonspunktHelpTextHTML } from './AksjonspunktHelpTextHTML';

const meta = {
  component: AksjonspunktHelpTextHTML,
} satisfies Meta<typeof AksjonspunktHelpTextHTML>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: ['Dette er en aksjonspunktmelding', 'Dette er en annen aksjonspunktmelding'],
  },
};

export const SkalIkkeVisesNårDetIkkeErAksjonspunkter: Story = {
  args: {
    children: [],
  },
};
