import { ReactElement } from 'react';

import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
  Inntektsgrunnlag,
  SammenligningsgrunlagProp,
} from '@navikt/ft-types';
import { removeSpacesFromNumber } from '@navikt/ft-utils';
import {
  FastsettAvvikATFLResultatAP,
  FastsettAvvikATFLTidsbegrensetResultatAP,
} from '../../types/interface/BeregningsgrunnlagAP';
import { ProsessBeregningsgrunnlagAvklaringsbehovCode } from '../../types/interface/ProsessBeregningsgrunnlagAvklaringsbehovCode';
import { RelevanteStatuserProp } from '../../types/RelevanteStatuser';
import { AksjonspunktBehandlerAT } from '../arbeidstaker/AksjonspunktBehandlerAT';
import { AksjonspunktBehandlerTidsbegrenset } from '../arbeidstaker/AksjonspunktBehandlerTB';
import { GrunnlagForAarsinntektPanelAT } from '../arbeidstaker/GrunnlagForAarsinntektPanelAT';
import { SammenligningsgrunnlagAOrdningen } from '../fellesPaneler/SammenligningsgrunnlagAOrdningen';
import { GrunnlagForAarsinntektPanelFL } from '../frilanser/GrunnlagForAarsinntektPanelFL';
import { MilitaerPanel } from '../militar/MilitaerPanel';
import { GrunnlagForAarsinntektPanelSN } from '../selvstendigNaeringsdrivende/GrunnlagForAarsinntektPanelSN';
import { TilstotendeYtelser } from '../tilstotendeYtelser/TilstotendeYtelser';
import { YtelserFraInfotrygd } from '../tilstotendeYtelser/YtelserFraInfotrygd';

import { ATFLBegrunnelseValues, ATFLTidsbegrensetValues, ATFLValues } from '../../types/ATFLAksjonspunkt';
import { KodeverkForPanel } from '../../types/KodeverkForPanel';
import { NaeringsopplysningsPanel } from '../selvstendigNaeringsdrivende/NaeringsOpplysningsPanel';
import beregningStyles from './beregningsgrunnlag.module.css';

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

const storSpacer = <div className={beregningStyles.storSpace} />;

const createRelevantePaneler = (
  alleAndelerIForstePeriode: BeregningsgrunnlagAndel[],
  relevanteStatuser: RelevanteStatuserProp,
  allePerioder: BeregningsgrunnlagPeriodeProp[],
  gjelderBesteberegning: boolean,
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  sammenligningsgrunnlag?: SammenligningsgrunlagProp[],
  sammenligningsGrunnlagInntekter?: Inntektsgrunnlag,
): ReactElement => ( // NOSONAR TODO splitte i flere komponenter?
  <div className={beregningStyles.panelLeft}>
    {relevanteStatuser.isArbeidstaker && (
      <GrunnlagForAarsinntektPanelAT
        alleAndelerIFørstePeriode={alleAndelerIForstePeriode}
        allePerioder={allePerioder}
        kodeverkSamling={kodeverkSamling}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
    )}
    {relevanteStatuser.isFrilanser && (
      <>
        {storSpacer}
        <GrunnlagForAarsinntektPanelFL alleAndeler={alleAndelerIForstePeriode} />
      </>
    )}
    {relevanteStatuser.harDagpengerEllerAAP && (
      <div>
        {storSpacer}
        <TilstotendeYtelser
          alleAndeler={alleAndelerIForstePeriode}
          relevanteStatuser={relevanteStatuser}
          gjelderBesteberegning={gjelderBesteberegning}
        />
      </div>
    )}
    {relevanteStatuser.isMilitaer && (
      <>
        {storSpacer}
        <MilitaerPanel alleAndeler={alleAndelerIForstePeriode} />
      </>
    )}
    {relevanteStatuser.harAndreTilstotendeYtelser && (
      <>
        {storSpacer}
        <YtelserFraInfotrygd bruttoPrAar={allePerioder[0].bruttoPrAar} />
      </>
    )}

    {(relevanteStatuser.isSelvstendigNaeringsdrivende || relevanteStatuser.isMidlertidigInaktiv) && (
      <>
        {storSpacer}
        <GrunnlagForAarsinntektPanelSN
          alleAndeler={alleAndelerIForstePeriode}
          inntektsgrunnlag={sammenligningsGrunnlagInntekter}
        />
        {storSpacer}
        <NaeringsopplysningsPanel
          alleAndelerIForstePeriode={alleAndelerIForstePeriode}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
      </>
    )}
    {(relevanteStatuser.isFrilanser || relevanteStatuser.isArbeidstaker) &&
      sammenligningsGrunnlagInntekter &&
      sammenligningsgrunnlag && (
        <>
          {storSpacer}
          <SammenligningsgrunnlagAOrdningen
            sammenligningsGrunnlagInntekter={sammenligningsGrunnlagInntekter}
            sammenligningsgrunnlag={sammenligningsgrunnlag}
          />
        </>
      )}
  </div>
);

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
  return createRelevantePaneler(
    alleAndelerIForstePeriode,
    relevanteStatuser,
    allePerioder,
    gjelderBesteberegning,
    kodeverkSamling,
    arbeidsgiverOpplysningerPerId,
    sammenligningsgrunnlag,
    sammenligningsGrunnlagInntekter,
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
