import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { TIDENES_ENDE } from '@navikt/ft-utils';

import { arbeidsgiverOpplysningerPerId } from '../testdata/arbeidgiverOpplysningerPerId';
import { dokumenterPåSaken } from '../testdata/dokumenter';
import { refusjonsandelerForTreArbeidsgivere } from '../testdata/refusjonsandeler';
import { FaktaRefusjonIndex } from './FaktaRefusjonIndex';
import type { AksjonspunktRefusjon, OverstyrRefusjonskravSubmitType } from './types/aksjonspunkt';

import '@navikt/ft-plattform-komponenter/dist/style.css';

const refusjonsandelerMedÅpenSlutt = refusjonsandelerForTreArbeidsgivere.map(andel => ({
  ...andel,
  refusjonsperioder: andel.refusjonsperioder.map((periode, index) =>
    index === andel.refusjonsperioder.length - 1 ? { ...periode, tom: TIDENES_ENDE } : periode,
  ),
}));

const meta = {
  component: FaktaRefusjonIndex,
  args: {
    refusjonsandeler: refusjonsandelerMedÅpenSlutt,
    dokumenter: dokumenterPåSaken,
    åpneDokument: action('åpneDokument'),
    arbeidsgiverOpplysningerPerId,
    readOnly: false,
    erOverstyrer: true,
    submitCallback: action('submit') as (data: OverstyrRefusjonskravSubmitType) => Promise<void>,
    setFormData: () => undefined,
    aksjonspunkt: [] satisfies AksjonspunktRefusjon[],
  },
} satisfies Meta<typeof FaktaRefusjonIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SaksbehandlerUtenTidligereOverstyring: Story = {
  args: { erOverstyrer: false },
};

export const Førstegangsoverstyring: Story = {
  args: { readOnly: false, erOverstyrer: true, aksjonspunkt: [] },
  parameters: {
    docs: {
      description: {
        story:
          'Klikk Overstyr for å starte førstegangsoverstyring. Avbryt overstyring viser Overstyr-knappen igjen. ' +
          'Overstyringsaksjonspunktet opprettes først ved innsending og får status UTFO.',
      },
    },
  },
};

export const Lesemodus: Story = {
  args: { readOnly: true },
};

export const TidligereOverstyring: Story = {
  args: {
    aksjonspunkt: [
      {
        kode: 'OVERSTYR_REFUSJONSKRAV',
        status: 'UTFO',
        begrunnelse: 'Tidligere overstyring',
        vurdertAv: 'S123456',
        vurdertTidspunkt: '2026-10-23T16:01:39.853',
      },
    ],
    refusjonsandeler: refusjonsandelerMedÅpenSlutt.map(andel => ({ ...andel, kilde: 'SAKSBEHANDLER' })),
  },
};

export const TidligereOverstyringUtenOverstyringsrett: Story = {
  args: { ...TidligereOverstyring.args, erOverstyrer: false },
};

export const TidligereOverstyringILesemodus: Story = {
  args: { ...TidligereOverstyring.args, readOnly: true },
};
