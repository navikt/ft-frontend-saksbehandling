import { HStack, Tag, VStack } from '@navikt/ds-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { EmptyPersonCard } from './EmptyPersonCard';
import { Gender } from './Gender';
import { PersonCard } from './PersonCard';

const meta = {
  component: PersonCard,
  args: {
    name: 'Ekstremt Langt Navn Navnesen For Å Teste Hva Som Skjer Med Brytningen',
    fodselsnummer: '01019541978',
    gender: Gender.female,
  },
  render: args => (
    <VStack gap="8">
      <div>
        <PersonCard
          name={args.name}
          gender={args.gender}
          fodselsnummer={args.fodselsnummer}
          url="#"
          isActive
          renderMenuContent={() => (
            <div>
              <p>Hei</p>
            </div>
          )}
          showPersonAge
        />
      </div>
      <HStack wrap={false}>
        <PersonCard
          name="Ekstremt Langt Navn Navnesen For Å Teste Hva Som Skjer Med Brytningen"
          gender={Gender.female}
          fodselsnummer="12345612345"
          url="#"
          isActive
        />
        <PersonCard name="Voksen Mann" gender={Gender.male} fodselsnummer="12345612345" url="#" />
      </HStack>
      <div>
        <PersonCard name="Voksen Kvinne" gender={Gender.female} fodselsnummer="12345612345" url="#" />
      </div>
      <div>
        <PersonCard name="Voksen Mann" gender={Gender.male} fodselsnummer="12345612345" url="#" />
      </div>
      <div>
        <PersonCard name="Nøytral Voksen" gender={Gender.unknown} fodselsnummer="12345612345" url="#" />
      </div>
      <div>
        <PersonCard name="Barn Barnesen" gender={Gender.unknown} isChild childAge="4 mnd" fodselsnummer="1" />
      </div>
      <div>
        <PersonCard
          name="Pest Tersonsen"
          gender={Gender.female}
          fodselsnummer="12345612346"
          renderLabelContent={() => (
            <Tag variant="neutral" size="small">
              Under 18
            </Tag>
          )}
        />
      </div>
      <div>
        <EmptyPersonCard namePlaceholder="Ukjent navn, mangler norsk id-nr" />
      </div>
    </VStack>
  ),
} satisfies Meta<typeof PersonCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
