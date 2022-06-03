import { BeregningAvklaringsbehov, BeregningsgrunnlagPeriodeProp } from '@navikt/ft-types';
import {
  ATFLDekningsgradBegrunnelseValues,
  ATFLTidsbegrensetValues,
  ATFLValues,
  FrilansInntektValues,
} from './ATFLAksjonspunktTsType';
import { NyIArbeidslivetValues, VurderOgFastsettValues } from './NaringAksjonspunktTsType';
import DekningsgradValues from './DekningsgradAksjonspunktTsType';
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
  | ATFLDekningsgradBegrunnelseValues
  | ATFLTidsbegrensetValues
  | FrilansInntektValues
  | VurderOgFastsettValues
  | NyIArbeidslivetValues
  | ATFLValues
  | DekningsgradValues;

export type BeregningsgrunnlagValues = VurderingValues & AksjonspunktDataValues;
