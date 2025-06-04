import { Meta, StoryObj } from '@storybook/react-vite';

import { KopierbarTekst } from './KopierbarTekst';

const meta = {
  component: KopierbarTekst,
} satisfies Meta<typeof KopierbarTekst>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MedUlikVisningFraKopierbarTekst: Story = {
  args: {
    tekst: 'Dette er den kopierte teksten',
    children: <span>Når du klikker på denne teksten blir en tekst kopiert til utklippstavlen</span>,
  },
};
export const MedLikVisningSomKopierbarTekst: Story = {
  args: {
    tekst: 'Denne teksten kopieres når du klikker på den',
  },
};
