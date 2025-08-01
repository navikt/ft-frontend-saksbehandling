import { VStack } from '@navikt/ds-react';

import type {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
  Inntektsgrunnlag,
  SammenligningsgrunlagProp,
} from '@navikt/ft-types';
import { removeSpacesFromNumber } from '@navikt/ft-utils';

import type { ATFLBegrunnelseValues, ATFLTidsbegrensetValues, ATFLValues } from '../../types/ATFLAksjonspunkt';
import type {
  FastsettAvvikATFLResultatAP,
  FastsettAvvikATFLTidsbegrensetResultatAP,
} from '../../types/interface/BeregningsgrunnlagAP';
import { ProsessBeregningsgrunnlagAvklaringsbehovCode } from '../../types/interface/ProsessBeregningsgrunnlagAvklaringsbehovCode';
import type { KodeverkForPanel } from '../../types/KodeverkForPanel';
import type { RelevanteStatuserProp } from '../../types/RelevanteStatuser';
import { AksjonspunktBehandlerAT } from '../arbeidstaker/AksjonspunktBehandlerAT';
import { AksjonspunktBehandlerTidsbegrenset } from '../arbeidstaker/AksjonspunktBehandlerTB';
import { GrunnlagForAarsinntektPanelAT } from '../arbeidstaker/GrunnlagForAarsinntektPanelAT';
import { NaturalytelsePanel } from '../arbeidstaker/NaturalytelsePanel';
import { SammenligningsgrunnlagAOrdningen } from '../fellesPaneler/SammenligningsgrunnlagAOrdningen';
import { GrunnlagForAarsinntektPanelFL } from '../frilanser/GrunnlagForAarsinntektPanelFL';
import { MilitaerPanel } from '../militar/MilitaerPanel';
import { GrunnlagForAarsinntektPanelSN } from '../selvstendigNaeringsdrivende/GrunnlagForAarsinntektPanelSN';
import { NaeringsopplysningsPanel } from '../selvstendigNaeringsdrivende/NaeringsOpplysningsPanel';
import { TilstotendeYtelser } from '../tilstotendeYtelser/TilstotendeYtelser';
import { YtelserFraInfotrygd } from '../tilstotendeYtelser/YtelserFraInfotrygd';

const { FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS, FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD } =
  ProsessBeregningsgrunnlagAvklaringsbehovCode;

const finnAksjonspunktForATFL = (
  gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[],
): BeregningAvklaringsbehov | undefined =>
  gjeldendeAvklaringsbehov &&
  gjeldendeAvklaringsbehov.find(
    ap =>
      ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS ||
      ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  );

const finnAlleAndelerIFørstePeriode = (allePerioder?: BeregningsgrunnlagPeriodeProp[]): BeregningsgrunnlagAndel[] => {
  if (allePerioder && allePerioder.length > 0) {
    return allePerioder[0].beregningsgrunnlagPrStatusOgAndel || [];
  }
  return [];
};

type Props = {
  relevanteStatuser: RelevanteStatuserProp;
  allePerioder?: BeregningsgrunnlagPeriodeProp[];
  gjelderBesteberegning: boolean;
  kodeverkSamling: KodeverkForPanel;
  sammenligningsGrunnlagInntekter?: Inntektsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  sammenligningsgrunnlag?: SammenligningsgrunlagProp[];
};

// ------------------------------------------------------------------------------------------ //
// Component : BeregningsgrunnlagImpl
// ------------------------------------------------------------------------------------------ //
/**
 * Beregningsgrunnlag
 *
 * Presentasjonsskomponent. Holder på alle komponenter relatert til å vise beregningsgrunnlaget til de forskjellige
 * statusene og viser disse samlet i en faktagruppe.
 */
export const Beregningsgrunnlag = ({
  relevanteStatuser,
  allePerioder = undefined,
  gjelderBesteberegning,
  kodeverkSamling,
  sammenligningsGrunnlagInntekter = undefined,
  arbeidsgiverOpplysningerPerId,
  sammenligningsgrunnlag,
}: Props) => {
  if (!allePerioder) {
    return null;
  }
  const alleAndelerIForstePeriode = finnAlleAndelerIFørstePeriode(allePerioder);

  return (
    <VStack gap="space-32">
      {relevanteStatuser.isArbeidstaker && (
        <>
          <GrunnlagForAarsinntektPanelAT
            alleAndelerIFørstePeriode={alleAndelerIForstePeriode}
            kodeverkSamling={kodeverkSamling}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
          <NaturalytelsePanel
            allePerioder={allePerioder}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
        </>
      )}
      {relevanteStatuser.isFrilanser && <GrunnlagForAarsinntektPanelFL alleAndeler={alleAndelerIForstePeriode} />}
      {relevanteStatuser.harDagpengerEllerAAP && (
        <TilstotendeYtelser
          alleAndeler={alleAndelerIForstePeriode}
          relevanteStatuser={relevanteStatuser}
          gjelderBesteberegning={gjelderBesteberegning}
        />
      )}
      {relevanteStatuser.isMilitaer && <MilitaerPanel alleAndeler={alleAndelerIForstePeriode} />}
      {relevanteStatuser.harAndreTilstotendeYtelser && (
        <YtelserFraInfotrygd bruttoPrAar={allePerioder[0].bruttoPrAar} />
      )}

      {(relevanteStatuser.isSelvstendigNaeringsdrivende || relevanteStatuser.isMidlertidigInaktiv) && (
        <>
          <GrunnlagForAarsinntektPanelSN
            alleAndeler={alleAndelerIForstePeriode}
            inntektsgrunnlag={sammenligningsGrunnlagInntekter}
          />
          <NaeringsopplysningsPanel
            alleAndelerIForstePeriode={alleAndelerIForstePeriode}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
        </>
      )}
      {(relevanteStatuser.isFrilanser || relevanteStatuser.isArbeidstaker) &&
        sammenligningsGrunnlagInntekter &&
        sammenligningsgrunnlag && (
          <SammenligningsgrunnlagAOrdningen
            sammenligningsGrunnlagInntekter={sammenligningsGrunnlagInntekter}
            sammenligningsgrunnlag={sammenligningsgrunnlag}
          />
        )}
    </VStack>
  );
};

Beregningsgrunnlag.buildInitialValues = (
  gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[],
): ATFLBegrunnelseValues => {
  const aksjonspunktATFL = finnAksjonspunktForATFL(gjeldendeAvklaringsbehov);
  return {
    ATFLVurdering: aksjonspunktATFL && aksjonspunktATFL.begrunnelse ? aksjonspunktATFL.begrunnelse : '',
  };
};

Beregningsgrunnlag.transformATFLValues = (
  values: ATFLValues,
  alleAndelerIFørstePeriode: BeregningsgrunnlagAndel[],
): FastsettAvvikATFLResultatAP => ({
  begrunnelse: values.ATFLVurdering,
  inntektPrAndelList: AksjonspunktBehandlerAT.transformValues(values, alleAndelerIFørstePeriode),
  inntektFrilanser: values.inntektFrilanser !== undefined ? removeSpacesFromNumber(values.inntektFrilanser) : null,
});

Beregningsgrunnlag.transformATFLTidsbegrensetValues = (
  values: ATFLTidsbegrensetValues,
  allePerioder: BeregningsgrunnlagPeriodeProp[],
): FastsettAvvikATFLTidsbegrensetResultatAP => ({
  begrunnelse: values.ATFLVurdering,
  fastsatteTidsbegrensedePerioder: AksjonspunktBehandlerTidsbegrenset.transformValues(values, allePerioder),
  frilansInntekt: values.inntektFrilanser !== undefined ? removeSpacesFromNumber(values.inntektFrilanser) : null,
});
