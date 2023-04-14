import React, { FunctionComponent } from 'react';

import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagPeriodeProp,
  FordelBeregningsgrunnlagPeriode,
  Beregningsgrunnlag,
  ForlengelsePeriodeProp,
} from '@navikt/ft-types';

import { FordelBeregningsgrunnlagPerioderTransformedValues } from '../../types/interface/FordelBeregningsgrunnlagAP';

import FordelBeregningsgrunnlagForm from './FordelBeregningsgrunnlagForm';
import { FordelBeregningsgrunnlagValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import KodeverkForPanel from '../../types/kodeverkForPanel';

const getFordelPerioder = (beregningsgrunnlag: Beregningsgrunnlag): FordelBeregningsgrunnlagPeriode[] =>
  beregningsgrunnlag.faktaOmFordeling?.fordelBeregningsgrunnlag?.fordelBeregningsgrunnlagPerioder || [];

type OwnProps = {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  kodeverkSamling: KodeverkForPanel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldIndex: number;
};

interface StaticFunctions {
  buildInitialValues: (
    fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
    bg: Beregningsgrunnlag,
    kodeverkSamling: KodeverkForPanel,
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  ) => FordelBeregningsgrunnlagValues;
  transformValues: (
    values: FordelBeregningsgrunnlagValues,
    fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
    bgPerioder: BeregningsgrunnlagPeriodeProp[],
    forlengelseperioder?: ForlengelsePeriodeProp[],
  ) => FordelBeregningsgrunnlagPerioderTransformedValues;
}

const FastsettFordeltBeregningsgrunnlag: FunctionComponent<OwnProps> & StaticFunctions = ({
  isAksjonspunktClosed,
  readOnly,
  beregningsgrunnlag,
  kodeverkSamling,
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
      kodeverkSamling={kodeverkSamling}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      fieldIndex={fieldIndex}
    />
  );
};

FastsettFordeltBeregningsgrunnlag.buildInitialValues = (
  fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
  bg: Beregningsgrunnlag,
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): FordelBeregningsgrunnlagValues =>
  FordelBeregningsgrunnlagForm.buildInitialValues(fordelBGPerioder, bg, kodeverkSamling, arbeidsgiverOpplysningerPerId);

FastsettFordeltBeregningsgrunnlag.transformValues = (
  values: FordelBeregningsgrunnlagValues,
  fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
  forlengelseperioder?: ForlengelsePeriodeProp[],
): FordelBeregningsgrunnlagPerioderTransformedValues =>
  FordelBeregningsgrunnlagForm.transformValues(values, fordelBGPerioder, bgPerioder, forlengelseperioder);

export default FastsettFordeltBeregningsgrunnlag;
