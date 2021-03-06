import React, { FunctionComponent, ReactElement } from 'react';

import { removeSpacesFromNumber } from '@navikt/ft-utils';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
  Inntektsgrunnlag,
  SammenligningsgrunlagProp,
} from '@navikt/ft-types';
import {
  FastsettAvvikATFLResultatAP,
  FastsettAvvikATFLTidsbegrensetResultatAP,
} from '../../types/interface/BeregningsgrunnlagAP';
import ProsessBeregningsgrunnlagAksjonspunktCode from '../../types/interface/ProsessBeregningsgrunnlagAksjonspunktCode';

import YtelserFraInfotrygd from '../tilstotendeYtelser/YtelserFraInfotrygd';
import GrunnlagForAarsinntektPanelSN from '../selvstendigNaeringsdrivende/GrunnlagForAarsinntektPanelSN';
import TilstotendeYtelser from '../tilstotendeYtelser/TilstotendeYtelser';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';

import MilitaerPanel from '../militar/MilitaerPanel';
import AksjonspunktBehandlerTidsbegrenset from '../arbeidstaker/AksjonspunktBehandlerTB';
import AksjonspunktBehandlerAT from '../arbeidstaker/AksjonspunktBehandlerAT';

import GrunnlagForAarsinntektPanelFL from '../frilanser/GrunnlagForAarsinntektPanelFL';
import SammenlignsgrunnlagAOrdningen from '../fellesPaneler/SammenligningsgrunnlagAOrdningen';
import GrunnlagForAarsinntektPanelAT from '../arbeidstaker/GrunnlagForAarsinntektPanelAT';

import NaeringsopplysningsPanel from '../selvstendigNaeringsdrivende/NaeringsOpplysningsPanel';
import beregningStyles from './beregningsgrunnlag.less';
import {
  ATFLDekningsgradBegrunnelseValues,
  ATFLTidsbegrensetValues,
  ATFLValues,
} from '../../types/ATFLAksjonspunktTsType';

const { FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS, FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD } =
  ProsessBeregningsgrunnlagAksjonspunktCode;

const finnAksjonspunktForATFL = (
  gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[],
): BeregningAvklaringsbehov | undefined =>
  gjeldendeAvklaringsbehov &&
  gjeldendeAvklaringsbehov.find(
    ap =>
      ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS ||
      ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  );

const finnAlleAndelerIF??rstePeriode = (allePerioder?: BeregningsgrunnlagPeriodeProp[]): BeregningsgrunnlagAndel[] => {
  if (allePerioder && allePerioder.length > 0) {
    return allePerioder[0].beregningsgrunnlagPrStatusOgAndel || [];
  }
  return [];
};

const createRelevantePaneler = (
  alleAndelerIForstePeriode: BeregningsgrunnlagAndel[],
  relevanteStatuser: RelevanteStatuserProp,
  allePerioder: BeregningsgrunnlagPeriodeProp[],
  gjelderBesteberegning: boolean,
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  sammenligningsgrunnlag?: SammenligningsgrunlagProp[],
  sammenligningsGrunnlagInntekter?: Inntektsgrunnlag,
): ReactElement => ( // NOSONAR TODO splitte i flere komponenter?
  <div className={beregningStyles.panelLeft}>
    {relevanteStatuser.isArbeidstaker && (
      <GrunnlagForAarsinntektPanelAT
        alleAndelerIF??rstePeriode={alleAndelerIForstePeriode}
        allePerioder={allePerioder}
        alleKodeverk={alleKodeverk}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
    )}
    {relevanteStatuser.isFrilanser && <GrunnlagForAarsinntektPanelFL alleAndeler={alleAndelerIForstePeriode} />}
    {relevanteStatuser.harDagpengerEllerAAP && (
      <div>
        <TilstotendeYtelser
          alleAndeler={alleAndelerIForstePeriode}
          relevanteStatuser={relevanteStatuser}
          gjelderBesteberegning={gjelderBesteberegning}
        />
      </div>
    )}
    {relevanteStatuser.isMilitaer && <MilitaerPanel alleAndeler={alleAndelerIForstePeriode} />}
    {relevanteStatuser.harAndreTilstotendeYtelser && <YtelserFraInfotrygd bruttoPrAar={allePerioder[0].bruttoPrAar} />}

    {relevanteStatuser.isSelvstendigNaeringsdrivende && (
      <>
        <GrunnlagForAarsinntektPanelSN alleAndeler={alleAndelerIForstePeriode} />
        <NaeringsopplysningsPanel
          alleAndelerIForstePeriode={alleAndelerIForstePeriode}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
      </>
    )}
    {!relevanteStatuser.isSelvstendigNaeringsdrivende &&
      sammenligningsGrunnlagInntekter &&
      sammenligningsgrunnlag &&
      (relevanteStatuser.isFrilanser || relevanteStatuser.isArbeidstaker) && (
        <SammenlignsgrunnlagAOrdningen
          sammenligningsGrunnlagInntekter={sammenligningsGrunnlagInntekter}
          sammenligningsgrunnlag={sammenligningsgrunnlag}
        />
      )}
  </div>
);

interface StaticFunctions {
  buildInitialValues: (gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[]) => ATFLDekningsgradBegrunnelseValues;
  transformATFLValues: (
    values: ATFLValues,
    relevanteStatuser: RelevanteStatuserProp,
    alleAndelerIF??rstePeriode: BeregningsgrunnlagAndel[],
  ) => FastsettAvvikATFLResultatAP;
  transformATFLTidsbegrensetValues: (
    values: ATFLTidsbegrensetValues,
    allePerioder: BeregningsgrunnlagPeriodeProp[],
  ) => FastsettAvvikATFLTidsbegrensetResultatAP;
}

type OwnProps = {
  relevanteStatuser: RelevanteStatuserProp;
  allePerioder?: BeregningsgrunnlagPeriodeProp[];
  gjelderBesteberegning: boolean;
  alleKodeverk: AlleKodeverk;
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
 * Presentasjonsskomponent. Holder p?? alle komponenter relatert til ?? vise beregningsgrunnlaget til de forskjellige
 * statusene og viser disse samlet i en faktagruppe.
 */
const Beregningsgrunnlag: FunctionComponent<OwnProps> & StaticFunctions = ({
  relevanteStatuser,
  allePerioder,
  gjelderBesteberegning,
  alleKodeverk,
  sammenligningsGrunnlagInntekter,
  arbeidsgiverOpplysningerPerId,
  sammenligningsgrunnlag,
}) => {
  if (!allePerioder) {
    return null;
  }
  const alleAndelerIForstePeriode = finnAlleAndelerIF??rstePeriode(allePerioder);
  return createRelevantePaneler(
    alleAndelerIForstePeriode,
    relevanteStatuser,
    allePerioder,
    gjelderBesteberegning,
    alleKodeverk,
    arbeidsgiverOpplysningerPerId,
    sammenligningsgrunnlag,
    sammenligningsGrunnlagInntekter,
  );
};

Beregningsgrunnlag.defaultProps = {
  allePerioder: undefined,
  sammenligningsGrunnlagInntekter: undefined,
};

Beregningsgrunnlag.buildInitialValues = (
  gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[],
): ATFLDekningsgradBegrunnelseValues => {
  const aksjonspunktATFL = finnAksjonspunktForATFL(gjeldendeAvklaringsbehov);
  return {
    ATFLVurdering: aksjonspunktATFL && aksjonspunktATFL.begrunnelse ? aksjonspunktATFL.begrunnelse : '',
  };
};

Beregningsgrunnlag.transformATFLValues = (
  values: ATFLValues,
  relevanteStatuser: RelevanteStatuserProp,
  alleAndelerIF??rstePeriode: BeregningsgrunnlagAndel[],
): FastsettAvvikATFLResultatAP => ({
  begrunnelse: values.ATFLVurdering,
  inntektPrAndelList: AksjonspunktBehandlerAT.transformValues(values, relevanteStatuser, alleAndelerIF??rstePeriode),
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

export default Beregningsgrunnlag;
