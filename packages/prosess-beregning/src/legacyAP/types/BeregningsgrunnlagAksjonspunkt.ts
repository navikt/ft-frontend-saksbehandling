import type { BeregningAvklaringsbehov, BeregningsgrunnlagPeriodeProp } from '@navikt/ft-types';

import type { ATFLTidsbegrensetValues, ATFLValues, FrilansInntektValues } from './ATFLAksjonspunkt';
import type { NyIArbeidslivetValues, VurderOgFastsettValues } from './NæringAksjonspunkt';

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
