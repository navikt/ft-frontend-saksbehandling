import { VStack } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';

import type { KodeverkForPanel } from '../types/KodeverkForPanel';
import type { Vilkår } from '../types/Vilkår';
import { GrunnlagForBeregning } from './grunnlagForBeregning/GrunnlagForBeregning';
import { Sammenligningsgrunnlag } from './sammenligningsgrunnlag/Sammenligningsgrunnlag';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  beregningsgrunnlagsvilkår: Vilkår | null;
  kodeverkSamling: KodeverkForPanel;
}
export const TabInnhold = ({
  beregningsgrunnlag,
  beregningsgrunnlagsvilkår,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
}: Props) => {
  return (
    <VStack gap="space-8" paddingBlock="space-16">
      <GrunnlagForBeregning
        beregningsgrunnlag={beregningsgrunnlag}
        beregningsgrunnlagsvilkår={beregningsgrunnlagsvilkår}
        kodeverkSamling={kodeverkSamling}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
      {beregningsgrunnlag.inntektsgrunnlag &&
        beregningsgrunnlag.sammenligningsgrunnlagPrStatus?.[0]?.sammenligningsgrunnlagFom && (
          <Sammenligningsgrunnlag
            sammenligningsgrunnlagFom={beregningsgrunnlag.sammenligningsgrunnlagPrStatus[0].sammenligningsgrunnlagFom}
            inntektsgrunnlag={beregningsgrunnlag.inntektsgrunnlag}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
        )}
    </VStack>
  );
};
