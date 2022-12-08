import { AvklaringsbehovTilBekreftelse } from '@navikt/ft-types';
import FaktaFordelBeregningAvklaringsbehovCode from './FaktaFordelBeregningAvklaringsbehovCode';

export type VurderNyttInntektsforholdAndelTransformedValues = {
  arbeidsgiverId: string;
  arbeidsforholdId: string;
  bruttoInntektPrÅr: string;
  skalRedusereUtbetaling: boolean;
};

export type VurderNyttInntektsforholdTilkomneInntektsforholdPerioderTransformedValues = {
  andeler: VurderNyttInntektsforholdAndelTransformedValues[];
  fom: string;
  tom: string;
};

export type VurderNyttInntektsforholTransformedValues = {
  tilkomneInntektsforholdPerioder: VurderNyttInntektsforholdTilkomneInntektsforholdPerioderTransformedValues[];
};

type VurderNyttInntektsforholdAP = AvklaringsbehovTilBekreftelse<
  FaktaFordelBeregningAvklaringsbehovCode.VURDER_NYTT_INNTKTSFRHLD,
  VurderNyttInntektsforholTransformedValues
>;

export default VurderNyttInntektsforholdAP;
