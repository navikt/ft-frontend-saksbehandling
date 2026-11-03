import { HStack } from '@navikt/ds-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { alleKodeverk, getIntlDecorator } from '@navikt/ft-frontend-storybook-utils';

import { arbeidsgiverOpplysningerPerId } from '../../../testdata/arbeidsgivere';
import { arbeidstakerOgFrilansFP } from '../../../testdata/arbeidstakerOgFrilansFP';
import { SammenligningType } from '../../kodeverk/sammenligningType';
import type { KodeverkForPanel } from '../../types/KodeverkForPanel';
import { createVisningsnavnForAndel } from '../../utils/createVisningsnavnForAktivitet';
import { Avviksberegninger } from './Avviksberegninger';

import messages from '../../../i18n/nb_NO.json';

import '@navikt/ft-ui-komponenter/dist/style.css';

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

const sammenligningstyper = Object.values(SammenligningType);

export const AvviksberegningerFlereTyper: Story = {
  args: {
    visBareSammenligningTyper: sammenligningstyper,
    formaterVisningsnavnForAndel: createVisningsnavnForAndel(
      arbeidsgiverOpplysningerPerId,
      alleKodeverk as KodeverkForPanel,
    ),
    beregningsgrunnlag: {
      ...arbeidstakerOgFrilansFP.beregningsgrunnlagListe[0],
      sammenligningsgrunnlagPrStatus: sammenligningstyper.map(sammenligningsgrunnlagType => ({
        sammenligningsgrunnlagFom: '2025-12-01',
        sammenligningsgrunnlagTom: '2025-12-31',
        rapportertPrAar: 380000,
        avvikPromille: 691.2521631,
        avvikProsent: 69.12521631,
        sammenligningsgrunnlagType,
        differanseBeregnet: -155314,
      })),
    },
  },
};
