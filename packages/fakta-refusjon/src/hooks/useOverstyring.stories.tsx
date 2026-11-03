import { useState } from 'react';

import { BodyShort, Heading, TextField, VStack } from '@navikt/ds-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { useOverstyring, type UseOverstyringProps } from './useOverstyring';

type Props = Pick<UseOverstyringProps, 'readOnly' | 'erOverstyrer' | 'harVærtOverstyrt'>;

const OverstyringEksempel = ({ readOnly, erOverstyrer, harVærtOverstyrt }: Props) => {
  const [beløp, setBeløp] = useState('42000');
  const { erOverstyringRedigerbar, erOverstyringReadOnly, visOverstyring, overstyringKnapp } = useOverstyring({
    readOnly,
    erOverstyrer,
    harVærtOverstyrt,
    onAvbrytOverstyring: () => setBeløp('42000'),
  });

  return (
    <VStack gap="space-16" align="start">
      <Heading size="small" level="2">
        Overstyring av refusjon
      </Heading>
      <VStack gap="space-8">
        <BodyShort>
          <strong>Rolle:</strong> {erOverstyrer ? 'Overstyrer' : 'Saksbehandler'}
        </BodyShort>
        <BodyShort>
          <strong>Modus:</strong> {readOnly ? 'Readonly' : 'Skrivbar'}
        </BodyShort>
        <BodyShort>
          <strong>Har tidligere overstyringsaksjonspunkt:</strong> {harVærtOverstyrt ? 'Ja' : 'Nei'}
        </BodyShort>
      </VStack>
      {overstyringKnapp}
      {visOverstyring ? (
        <>
          <BodyShort>
            {erOverstyringRedigerbar ? 'Overstyring er aktiv.' : 'Tidligere overstyring vises skrivebeskyttet.'}
          </BodyShort>
          <TextField
            label="Refusjonsbeløp per måned"
            size="small"
            htmlSize={12}
            inputMode="decimal"
            value={beløp}
            onChange={event => setBeløp(event.target.value)}
            readOnly={erOverstyringReadOnly}
          />
        </>
      ) : (
        <BodyShort>Ingen overstyring å vise.</BodyShort>
      )}
    </VStack>
  );
};

const meta = {
  title: 'useOverstyring',
  component: OverstyringEksempel,
  args: {
    readOnly: false,
    erOverstyrer: true,
    harVærtOverstyrt: false,
  },
  argTypes: {
    readOnly: { control: 'boolean', description: 'Om panelet er i lesemodus.' },
    erOverstyrer: { control: 'boolean', description: 'Om saksbehandleren har overstyringstilgang.' },
    harVærtOverstyrt: { control: 'boolean', description: 'Om panelet har et tidligere overstyringsaksjonspunkt.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Eksemplet bruker lokal tilstand i useOverstyring. Avbryt overstyring tilbakestiller beløpet via avbrytOverstyring. ' +
          'Førstegangsoverstyring krever et klikk på Overstyr. Tidligere overstyring åpnes automatisk for redigering ' +
          'for overstyrere i et skrivbart panel. Andre kan bare lese tidligere overstyringer. ' +
          'Avbryt overstyring vises bare ved førstegangs overstyring.',
      },
    },
  },
} satisfies Meta<typeof OverstyringEksempel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OverstyrerUtenAksjonspunkt: Story = {};

export const SaksbehandlerUtenAksjonspunkt: Story = {
  args: { erOverstyrer: false },
};

export const OverstyrerMedOverstyringsaksjonspunkt: Story = {
  args: { harVærtOverstyrt: true },
};

export const SaksbehandlerMedOverstyringsaksjonspunkt: Story = {
  args: { erOverstyrer: false, harVærtOverstyrt: true },
};

export const OverstyrerILesemodusUtenAksjonspunkt: Story = {
  args: { readOnly: true },
};

export const SaksbehandlerILesemodusUtenAksjonspunkt: Story = {
  args: { readOnly: true, erOverstyrer: false },
};

export const OverstyrerILesemodusMedOverstyringsaksjonspunkt: Story = {
  args: { readOnly: true, harVærtOverstyrt: true },
};

export const SaksbehandlerILesemodusMedOverstyringsaksjonspunkt: Story = {
  args: { readOnly: true, erOverstyrer: false, harVærtOverstyrt: true },
};
