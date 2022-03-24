import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { IntlShape } from 'react-intl';

import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagPeriodeProp,
  FordelBeregningsgrunnlagPeriode,
  AlleKodeverk,
} from '@ft-frontend-saksbehandling/types';
import Beregningsgrunnlag from '@ft-frontend-saksbehandling/types/src/beregningsgrunnlagTsType';
import KodeverkType from '@ft-frontend-saksbehandling/kodeverk/src/kodeverkTyper';

import { FordelBeregningsgrunnlagPerioderTransformedValues }
  from '@ft-frontend-saksbehandling/types-avklar-aksjonspunkter/src/fakta/FordelBeregningsgrunnlagAP';
import FordelBeregningsgrunnlagForm from './FordelBeregningsgrunnlagForm';

import FordelBeregningsgrunnlagMedAksjonspunktValues, { FordelBeregningsgrunnlagValues } from '../../types/FordelingTsType';

type OwnProps = {
    readOnly: boolean;
    perioder: FordelBeregningsgrunnlagPeriode[];
    isAksjonspunktClosed: boolean;
    bgPerioder: BeregningsgrunnlagPeriodeProp[];
    beregningsgrunnlag: Beregningsgrunnlag;
    alleKodeverk: AlleKodeverk;
    behandlingType: string;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

interface StaticFunctions {
  buildInitialValues: (fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
                       bg: Beregningsgrunnlag,
                       getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
                       arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId) => FordelBeregningsgrunnlagValues;
  transformValues: (values: FordelBeregningsgrunnlagMedAksjonspunktValues,
                    fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
                    bgPerioder: BeregningsgrunnlagPeriodeProp[]) => FordelBeregningsgrunnlagPerioderTransformedValues;
  validate: (intl: IntlShape,
             values: FordelBeregningsgrunnlagMedAksjonspunktValues,
             fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
             beregningsgrunnlag: Beregningsgrunnlag,
             getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
             arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId) => any;
}

export const FastsettFordeltBeregningsgrunnlagImpl: FunctionComponent<OwnProps> & StaticFunctions = ({
  isAksjonspunktClosed,
  readOnly,
  perioder, bgPerioder,
  beregningsgrunnlag,
  alleKodeverk,
  behandlingType,
  arbeidsgiverOpplysningerPerId,
}) => (
  <FordelBeregningsgrunnlagForm
    perioder={perioder}
    readOnly={readOnly}
    isAksjonspunktClosed={isAksjonspunktClosed}
    bgPerioder={bgPerioder}
    beregningsgrunnlag={beregningsgrunnlag}
    alleKodeverk={alleKodeverk}
    behandlingType={behandlingType}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
  />
);

FastsettFordeltBeregningsgrunnlagImpl.buildInitialValues = (fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
  bg: Beregningsgrunnlag,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): FordelBeregningsgrunnlagValues => (FordelBeregningsgrunnlagForm
  .buildInitialValues(fordelBGPerioder, bg, getKodeverknavn, arbeidsgiverOpplysningerPerId));

FastsettFordeltBeregningsgrunnlagImpl.transformValues = (values: FordelBeregningsgrunnlagMedAksjonspunktValues,
  fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
  bgPerioder: BeregningsgrunnlagPeriodeProp[]): FordelBeregningsgrunnlagPerioderTransformedValues => FordelBeregningsgrunnlagForm.transformValues(values,
  fordelBGPerioder, bgPerioder);

FastsettFordeltBeregningsgrunnlagImpl.validate = (intl: IntlShape,
  values: FordelBeregningsgrunnlagMedAksjonspunktValues,
  fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
  beregningsgrunnlag: Beregningsgrunnlag,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId) => (
  FordelBeregningsgrunnlagForm
    .validate(intl, values, fordelBGPerioder, beregningsgrunnlag, getKodeverknavn, arbeidsgiverOpplysningerPerId));

const emptyArray = [];

const getFordelPerioder = (beregningsgrunnlag) => {
  if (beregningsgrunnlag && beregningsgrunnlag.faktaOmFordeling
    && beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag) {
    return beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
  }
  return undefined;
};

const mapStateToProps = (state, ownProps) => {
  const bgPerioder = ownProps.beregningsgrunnlag.beregningsgrunnlagPeriode;
  const perioder = getFordelPerioder(ownProps.beregningsgrunnlag);
  return ({
    perioder: perioder || emptyArray,
    bgPerioder,
  });
};

export default connect(mapStateToProps)(FastsettFordeltBeregningsgrunnlagImpl);
