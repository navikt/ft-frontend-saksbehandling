import { BeregningAvklaringsbehov, BeregningsgrunnlagPeriodeProp } from '@navikt/ft-types';
import { ATFLTidsbegrensetValues, ATFLValues, FrilansInntektValues } from './ATFLAksjonspunktTsType';
import { NyIArbeidslivetValues, VurderOgFastsettValues } from './NaringAksjonspunktTsType';
import RelevanteStatuserProp from './RelevanteStatuserTsType';

type VurderingValues = {
  periode: {
    fom: string;
    tom: string;
  };
  erTilVurdering: boolean;
  relevanteStatuser: RelevanteStatuserProp;
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
