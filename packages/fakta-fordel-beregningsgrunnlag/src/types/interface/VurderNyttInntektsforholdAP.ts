import { AvklaringsbehovTilBekreftelse } from '@navikt/ft-types';
import FaktaFordelBeregningAvklaringsbehovCode from './FaktaFordelBeregningAvklaringsbehovCode';

export type VurderNyttInntektsforholdAndelTransformedValues = {
  arbeidsgiverId: string;
  arbeidsforholdId: string;
  bruttoInntektPrÅr: number;
  skalRedusereUtbetaling: boolean;
};

export type VurderNyttInntektsforholdTilkomneInntektsforholdPerioderTransformedValues = {
  andeler: VurderNyttInntektsforholdAndelTransformedValues[];
  fom: string;
  tom: string;
};

export type VurderNyttInntektsforholTransformedValues = {
  tilkomneInntektsforhold: VurderNyttInntektsforholdTilkomneInntektsforholdPerioderTransformedValues[];
};

type VurderNyttInntektsforholdAP = AvklaringsbehovTilBekreftelse<
  FaktaFordelBeregningAvklaringsbehovCode.VURDER_NYTT_INNTKTSFRHLD,
  VurderNyttInntektsforholTransformedValues
>;

export default VurderNyttInntektsforholdAP;
