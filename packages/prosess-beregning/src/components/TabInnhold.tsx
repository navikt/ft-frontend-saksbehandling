import { VStack } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';

import type { KodeverkForPanel } from '../types/KodeverkForPanel';
import type { Vilkår } from '../types/Vilkår';
import { Avviksberegninger } from './avviksberegning/Avviksberegninger';
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
  const { sammenligningsgrunnlagPrStatus = [], inntektsgrunnlag } = beregningsgrunnlag;
  return (
    <VStack gap="space-8" paddingBlock="space-16">
      <GrunnlagForBeregning
        beregningsgrunnlag={beregningsgrunnlag}
        beregningsgrunnlagsvilkår={beregningsgrunnlagsvilkår}
        kodeverkSamling={kodeverkSamling}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />

      {sammenligningsgrunnlagPrStatus.length > 0 && (
        <Avviksberegninger sammenligningsgrunnlagPrStatus={sammenligningsgrunnlagPrStatus} />
      )}

      {inntektsgrunnlag && sammenligningsgrunnlagPrStatus.length > 0 && (
        <Sammenligningsgrunnlag
          sammenligningsgrunnlagFom={sammenligningsgrunnlagPrStatus[0].sammenligningsgrunnlagFom}
          sammenligningsgrunnlagInntekter={inntektsgrunnlag.sammenligningsgrunnlagInntekter}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
      )}
    </VStack>
  );
};
