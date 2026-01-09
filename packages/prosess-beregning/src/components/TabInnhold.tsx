import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, HStack, Spacer, VStack } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';
import { BTag, dateFormat } from '@navikt/ft-utils';

import { LegacyAksjonspunktTittel } from '../legacyAP/LegacyAksjonspunktTittel';
import type { KodeverkForPanel } from '../types/KodeverkForPanel';
import type { Vilkår } from '../types/Vilkår';
import { AksjonspunktKode, medAPKode } from '../utils/aksjonspunkt';
import { ReadonlyAPGraderingUtenBG } from './aksjonspunkt/utgåttAP/ReadonlyAPGraderingUtenBG';
import { AktivitetStatusTags } from './AktivitetStatusTags';
import { Arbeidsinntekt } from './arbeidsinntekt/Arbeidsinntekt';
import { Avviksberegninger } from './avviksberegning/Avviksberegninger';
import { Dagsatser } from './dagsats/Dagsatser';
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
    <VStack gap="space-16">
      <LegacyAksjonspunktTittel beregningsgrunnlag={beregningsgrunnlag} />
      <VStack gap="space-12">
        <Heading size="medium" level="2">
          <FormattedMessage id="TabInnhold.Tittel" />
        </Heading>
        <HStack align="center" gap="space-12">
          <AktivitetStatusTags
            kodeverkSamling={kodeverkSamling}
            beregningsgrunnlagPeriode={beregningsgrunnlag.beregningsgrunnlagPeriode}
          />
          <Spacer />
          <BodyShort size="small">
            <FormattedMessage
              id="TabInnhold.Skjæringstidspunkt"
              values={{ dato: dateFormat(beregningsgrunnlag.skjaeringstidspunktBeregning), b: BTag }}
            />
          </BodyShort>
        </HStack>
      </VStack>

      <Arbeidsinntekt
        beregningsgrunnlag={beregningsgrunnlag}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        kodeverkSamling={kodeverkSamling}
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
