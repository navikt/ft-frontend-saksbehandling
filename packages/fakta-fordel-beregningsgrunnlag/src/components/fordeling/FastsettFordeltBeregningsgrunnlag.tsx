import React, { FunctionComponent } from 'react';

import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagPeriodeProp,
  FordelBeregningsgrunnlagPeriode,
  AlleKodeverk,
  Beregningsgrunnlag,
} from '@navikt/ft-types';
import { KodeverkType } from '@navikt/ft-kodeverk';

import { FordelBeregningsgrunnlagPerioderTransformedValues } from '../../types/interface/FordelBeregningsgrunnlagAP';
import FordelBeregningsgrunnlagForm from './FordelBeregningsgrunnlagForm';

import { FordelBeregningsgrunnlagValues } from '../../types/FordelBeregningsgrunnlagPanelValues';

const getFordelPerioder = (beregningsgrunnlag: Beregningsgrunnlag): FordelBeregningsgrunnlagPeriode[] => {
  if (
    beregningsgrunnlag &&
    beregningsgrunnlag.faktaOmFordeling &&
    beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag
  ) {
    return beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
  }
  return [];
};

type OwnProps = {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  alleKodeverk: AlleKodeverk;
  behandlingType: string;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldIndex: number;
};

interface StaticFunctions {
  buildInitialValues: (
    fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
    bg: Beregningsgrunnlag,
    getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  ) => FordelBeregningsgrunnlagValues;
  transformValues: (
    values: FordelBeregningsgrunnlagValues,
    fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
    bgPerioder: BeregningsgrunnlagPeriodeProp[],
  ) => FordelBeregningsgrunnlagPerioderTransformedValues;
}

const FastsettFordeltBeregningsgrunnlag: FunctionComponent<OwnProps> & StaticFunctions = ({
  isAksjonspunktClosed,
  readOnly,
  beregningsgrunnlag,
  alleKodeverk,
  behandlingType,
  arbeidsgiverOpplysningerPerId,
  fieldIndex,
}) => {
  const bgPerioder = beregningsgrunnlag.beregningsgrunnlagPeriode;
  const perioder = getFordelPerioder(beregningsgrunnlag);
  return (
    <FordelBeregningsgrunnlagForm
      perioder={perioder}
      readOnly={readOnly}
      isAksjonspunktClosed={isAksjonspunktClosed}
      bgPerioder={bgPerioder}
      beregningsgrunnlag={beregningsgrunnlag}
      alleKodeverk={alleKodeverk}
      behandlingType={behandlingType}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      fieldIndex={fieldIndex}
    />
  );
};

FastsettFordeltBeregningsgrunnlag.buildInitialValues = (
  fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
  bg: Beregningsgrunnlag,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): FordelBeregningsgrunnlagValues =>
  FordelBeregningsgrunnlagForm.buildInitialValues(fordelBGPerioder, bg, getKodeverknavn, arbeidsgiverOpplysningerPerId);

FastsettFordeltBeregningsgrunnlag.transformValues = (
  values: FordelBeregningsgrunnlagValues,
  fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
): FordelBeregningsgrunnlagPerioderTransformedValues =>
  FordelBeregningsgrunnlagForm.transformValues(values, fordelBGPerioder, bgPerioder);

export default FastsettFordeltBeregningsgrunnlag;
