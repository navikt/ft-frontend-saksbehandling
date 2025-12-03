import { RawIntlProvider } from 'react-intl';

import { VStack } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import { GrunnlagForBeregning } from './components/grunnlagForBeregning/GrunnlagForBeregning';
import { useSkjæringstidspunktVelger } from './hooks/useSkjæringstidspunktVelger';
import type { KodeverkForPanel } from './types/KodeverkForPanel';
import type { Vilkår } from './types/Vilkår';

import messages from '../i18n/nb_NO.json';

interface Props {
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  beregningsgrunnlagsvilkår: Vilkår | null;
  kodeverkSamling: KodeverkForPanel;
}

const intl = createIntl(messages);

export const BeregningProsessIndex = ({
  beregningsgrunnlagListe,
  beregningsgrunnlagsvilkår,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
}: Props) => {
  const { aktivtBeregningsgrunnlag, skjæringstidspunktVelger } = useSkjæringstidspunktVelger(
    beregningsgrunnlagListe,
    beregningsgrunnlagsvilkår,
  );
  return (
    <RawIntlProvider value={intl}>
      <VStack gap="space-8">
        <GrunnlagForBeregning
          beregningsgrunnlag={aktivtBeregningsgrunnlag}
          beregningsgrunnlagsvilkår={beregningsgrunnlagsvilkår}
          kodeverkSamling={kodeverkSamling}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          skjæringstidspunktVelger={skjæringstidspunktVelger}
        />
        {/* her legges graf, tabell, ap, osv. */}
      </VStack>
    </RawIntlProvider>
  );
};
