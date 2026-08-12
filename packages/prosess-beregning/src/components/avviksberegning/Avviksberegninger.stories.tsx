import { HStack } from '@navikt/ds-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { alleKodeverk, getIntlDecorator } from '@navikt/ft-frontend-storybook-utils';

import { arbeidsgiverOpplysningerPerId } from '../../../testdata/arbeidsgivere';
import { arbeidstakerFPEttArbeidsforhold } from '../../../testdata/arbeidstakerFPEttArbeidsforhold';
import type { KodeverkForPanel } from '../../types/KodeverkForPanel';
import { createVisningsnavnForAndel } from '../../utils/createVisningsnavnForAktivitet';
import { Avviksberegninger } from './Avviksberegninger';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  decorators: [
    withIntl,
    Story => (
      <HStack gap="space-8">
        <Story />
      </HStack>
    ),
  ],
  component: Avviksberegninger,
} satisfies Meta<typeof Avviksberegninger>;

export default meta;

type Story = StoryObj<typeof Avviksberegninger>;

export const AvviksberegningerFlereTyper: Story = {
  args: {
    formaterVisningsnavnForAndel: createVisningsnavnForAndel(
      arbeidsgiverOpplysningerPerId,
      alleKodeverk as KodeverkForPanel,
    ),
    beregningsgrunnlag: {
      ...arbeidstakerFPEttArbeidsforhold.beregningsgrunnlagListe[0],
      sammenligningsgrunnlagPrStatus: [
        ...arbeidstakerFPEttArbeidsforhold.beregningsgrunnlagListe[0].sammenligningsgrunnlagPrStatus!,
        {
          sammenligningsgrunnlagFom: '2025-12-01',
          sammenligningsgrunnlagTom: '2025-12-31',
          rapportertPrAar: 380000,
          avvikPromille: 691.2521631,
          avvikProsent: 69.12521631,
          sammenligningsgrunnlagType: 'SAMMENLIGNING_SN',
          differanseBeregnet: -155314,
        },
      ],
    },
  },
};
