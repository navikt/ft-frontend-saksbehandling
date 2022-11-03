import { BeregningAvklaringsbehov, BeregningsgrunnlagPeriodeProp } from '@navikt/ft-types';
import { ATFLTidsbegrensetValues, ATFLValues, FrilansInntektValues } from './ATFLAksjonspunktTsType';
import { NyIArbeidslivetValues, VurderOgFastsettValues } from './NaringAksjonspunktTsType';

type VurderingValues = {
  periode: {
    fom: string;
    tom: string;
  };
  erTilVurdering: boolean;
  gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[];
  allePerioder: BeregningsgrunnlagPeriodeProp[];
};

export type AksjonspunktDataValues =
  | ATFLTidsbegrensetValues
  | FrilansInntektValues
  | VurderOgFastsettValues
  | NyIArbeidslivetValues
  | ATFLValues;

export type BeregningsgrunnlagValues = VurderingValues & AksjonspunktDataValues;
