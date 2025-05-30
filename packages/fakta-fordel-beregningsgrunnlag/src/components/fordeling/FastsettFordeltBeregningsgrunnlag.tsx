import {
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  BeregningsgrunnlagPeriodeProp,
  FordelBeregningsgrunnlagPeriode,
  ForlengelsePeriodeProp,
} from '@navikt/ft-types';

import { FordelBeregningsgrunnlagValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import { FordelBeregningsgrunnlagPerioderTransformedValues } from '../../types/interface/FordelBeregningsgrunnlagAP';
import { KodeverkFpSakForPanel } from '../../types/kodeverkForPanel';
import { FordelBeregningsgrunnlagForm } from './FordelBeregningsgrunnlagForm';

const getFordelPerioder = (beregningsgrunnlag: Beregningsgrunnlag): FordelBeregningsgrunnlagPeriode[] =>
  beregningsgrunnlag.faktaOmFordeling?.fordelBeregningsgrunnlag?.fordelBeregningsgrunnlagPerioder || [];

type Props = {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  kodeverkSamling: KodeverkFpSakForPanel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldIndex: number;
};

export const FastsettFordeltBeregningsgrunnlag = ({
  isAksjonspunktClosed,
  readOnly,
  beregningsgrunnlag,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  fieldIndex,
}: Props) => {
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
  kodeverkSamling: KodeverkFpSakForPanel,
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
