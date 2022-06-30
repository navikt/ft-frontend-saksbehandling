import AvklaringsbehovTilBekreftelse from '@navikt/ft-types/src/BeregningAvklaringsbehovTilBekreftelse';
import FaktaFordelBeregningAksjonspunktCode from './FaktaFordelBeregningAksjonspunktCode';

export type FordelBeregningsgrunnlagFastsatteVerdierTransformedValues = {
  refusjonPrÅr: number;
  fastsattÅrsbeløpInklNaturalytelse: number;
  inntektskategori: string;
};

export type FordelBeregningsgrunnlagAndelTransformedValues = {
  andelsnr: number | string;
  aktivitetStatus: string;
  arbeidsgiverId: string;
  arbeidsforholdId: string;
  nyAndel: boolean;
  kilde: string;
  lagtTilAvSaksbehandler: boolean;
  arbeidsforholdType: string;
  beregningsperiodeTom: string;
  beregningsperiodeFom: string;
  forrigeArbeidsinntektPrÅr: number;
  forrigeRefusjonPrÅr: number;
  forrigeInntektskategori: string;
  fastsatteVerdier: FordelBeregningsgrunnlagFastsatteVerdierTransformedValues;
};

export type FordelBeregningsgrunnlagPeriodeTransformedValues = {
  fom: string;
  tom: string;
  andeler: FordelBeregningsgrunnlagAndelTransformedValues[];
};

export type FordelBeregningsgrunnlagPerioderTransformedValues = {
  endretBeregningsgrunnlagPerioder: FordelBeregningsgrunnlagPeriodeTransformedValues[];
};

type FordelBeregningsgrunnlagAP = AvklaringsbehovTilBekreftelse<
  FaktaFordelBeregningAksjonspunktCode.FORDEL_BEREGNINGSGRUNNLAG,
  FordelBeregningsgrunnlagPerioderTransformedValues
>;

export default FordelBeregningsgrunnlagAP;
