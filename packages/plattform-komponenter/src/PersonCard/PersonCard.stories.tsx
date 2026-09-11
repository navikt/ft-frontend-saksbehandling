import { Box, HStack, Spacer, Tag } from '@navikt/ds-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { EmptyPersonCard } from './EmptyPersonCard';
import { Gender } from './Gender';
import { PersonCard } from './PersonCard';
import { VisittKort } from './VisittKort';

const meta = {
  component: PersonCard,
  args: {
    name: 'Ekstremt Langt Navn Navnesen For Å Teste Hva Som Skjer Med Brytningen',
    fodselsnummer: '01019541978',
    gender: Gender.female,
    url: '#',
  },
} satisfies Meta<typeof PersonCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MedMenyOgAlder: Story = {
  args: {
    isActive: true,
    showPersonAge: true,
    renderMenuContent: () => (
      <div>
        <p>Hei</p>
      </div>
    ),
  },
};

export const FlereVedSiden: Story = {
  render: () => (
    <Box background="neutral-moderate">
      <HStack wrap={false}>
        <PersonCard
          name="Ekstremt Langt Navn Navnesen For Å Teste Hva Som Skjer Med Brytningen"
          gender={Gender.female}
          fodselsnummer="12345612345"
          url="#"
          isActive
        />
        <PersonCard name="Voksen Mann" gender={Gender.male} fodselsnummer="12345612345" url="#" />
        <Spacer />
        <VisittKort icon={Gender.female} children={<span>heiheihieh hiehi e hieihe</span>} />
      </HStack>
    </Box>
  ),
};

export const VoksenKvinne: Story = {
  args: { name: 'Voksen Kvinne', gender: Gender.female, fodselsnummer: '12345612345' },
};

export const VoksenMann: Story = {
  args: { name: 'Voksen Mann', gender: Gender.male, fodselsnummer: '12345612345' },
};

export const NøytralVoksen: Story = {
  args: { name: 'Nøytral Voksen', gender: Gender.unknown, fodselsnummer: '12345612345' },
};

export const Barn: Story = {
  args: {
    name: 'Barn Barnesen',
    gender: Gender.unknown,
    isChild: true,
    childAge: '4 mnd',
    fodselsnummer: '1',
    url: undefined,
  },
};

export const MedLabel: Story = {
  args: {
    name: 'Pest Tersonsen',
    gender: Gender.female,
    fodselsnummer: '12345612346',
    url: undefined,
    renderLabelContent: () => (
      <Tag data-color="neutral" variant="outline" size="small">
        Under 18
      </Tag>
    ),
  },
};

export const Tom: Story = {
  render: () => <EmptyPersonCard namePlaceholder="Ukjent navn, mangler norsk id-nr" />,
};
