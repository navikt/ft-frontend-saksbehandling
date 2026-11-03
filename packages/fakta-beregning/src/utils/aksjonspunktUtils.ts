import type { BeregningAvklaringsbehov } from '@navikt/ft-types';
import { isAksjonspunktOpen } from '@navikt/ft-utils';

import { FaktaBeregningAvklaringsbehovCode as AC } from '../typer/interface/FaktaBeregningAvklaringsbehovCode';

export const isAksjonspunktClosed = (avklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  avklaringsbehov.some(
    ap =>
      (ap.definisjon === AC.VURDER_FAKTA_FOR_ATFL_SN || ap.definisjon === AC.OVERSTYRING_AV_BEREGNINGSGRUNNLAG) &&
      !isAksjonspunktOpen(ap),
  );
