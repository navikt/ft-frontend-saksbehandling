import { HStack, VStack } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';

import { LegacyAksjonspunktTittel } from '../legacyAP/LegacyAksjonspunktTittel';
import type { KodeverkForPanel } from '../types/KodeverkForPanel';
import type { Vilkår } from '../types/Vilkår';
import { AksjonspunktKode, medAPKode } from '../utils/aksjonspunkt';
import { ReadonlyAPGraderingUtenBG } from './aksjonspunkt/utgåttAP/ReadonlyAPGraderingUtenBG';
import { Avviksberegninger } from './avviksberegning/Avviksberegninger';
import { Dagsatser } from './dagsats/Dagsatser';
import { GrunnlagForBeregning } from './grunnlagForBeregning/GrunnlagForBeregning';
import { Sammenligningsgrunnlag } from './sammenligningsgrunnlag/Sammenligningsgrunnlag';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  beregningsgrunnlagsvilkår: Vilkår;
  kodeverkSamling: KodeverkForPanel;
}

export const TabInnhold = ({
  beregningsgrunnlag,
  beregningsgrunnlagsvilkår,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
}: Props) => {
  const { sammenligningsgrunnlagPrStatus = [], inntektsgrunnlag, avklaringsbehov } = beregningsgrunnlag;
  return (
    <VStack gap="space-8">
      <LegacyAksjonspunktTittel beregningsgrunnlag={beregningsgrunnlag} />

      <GrunnlagForBeregning
        beregningsgrunnlag={beregningsgrunnlag}
        beregningsgrunnlagsvilkår={beregningsgrunnlagsvilkår}
        kodeverkSamling={kodeverkSamling}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />

      <HStack gap="space-8">
        <Avviksberegninger sammenligningsgrunnlagPrStatus={beregningsgrunnlag.sammenligningsgrunnlagPrStatus} />
        <Dagsatser
          beregningsgrunnlag={beregningsgrunnlag}
          beregningsgrunnlagsvilkår={beregningsgrunnlagsvilkår}
          kodeverkSamling={kodeverkSamling}
        />
      </HStack>

      {sammenligningsgrunnlagPrStatus.length > 0 &&
        inntektsgrunnlag &&
        inntektsgrunnlag.sammenligningsgrunnlagInntekter.length > 0 && (
          <Sammenligningsgrunnlag
            sammenligningsgrunnlagFom={sammenligningsgrunnlagPrStatus[0].sammenligningsgrunnlagFom}
            sammenligningsgrunnlagInntekter={inntektsgrunnlag.sammenligningsgrunnlagInntekter}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
        )}

      <ReadonlyAPGraderingUtenBG
        avklaringsbehov={avklaringsbehov.find(medAPKode(AksjonspunktKode.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG))}
      />
    </VStack>
  );
};
