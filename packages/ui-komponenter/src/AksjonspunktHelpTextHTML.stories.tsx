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

export const MedOverskrift: Story = {
  args: {
    heading: 'Overskrift for aksjonspunkt',
    children: 'Beskrivelse av hva saksbehandler må gjøre.',
  },
};

export const SkalIkkeVisesNårDetIkkeErAksjonspunkter: Story = {
  args: {
    children: [],
  },
};

export const FlereSammensatteChildren: Story = {
  args: {
    children: [null, 'andre element', <span key="1">tredje element</span>],
  },
};
export const EnStringTekst: Story = {
  args: {
    children: 'en tekst',
  },
};

export const EnReactNodeTekst: Story = {
  args: {
    children: <span>en react node</span>,
  },
};
