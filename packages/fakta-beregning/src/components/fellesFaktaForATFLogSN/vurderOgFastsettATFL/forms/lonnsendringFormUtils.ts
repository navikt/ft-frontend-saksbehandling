import type { FaktaOmBeregning } from '@navikt/ft-types';

import type { FaktaOmBeregningAksjonspunktValues } from '../../../../typer/FaktaBeregningTypes';
import type { InntektTransformed } from '../../../../typer/FieldValues';

export const lonnsendringField = 'lonnsendringField';

export const harFieldLønnsendring = (
  field: InntektTransformed,
  faktaOmBeregning: FaktaOmBeregning,
  values: FaktaOmBeregningAksjonspunktValues,
): boolean =>
  !!values[lonnsendringField] &&
  !!faktaOmBeregning.arbeidsforholdMedLønnsendringUtenIM &&
  faktaOmBeregning.arbeidsforholdMedLønnsendringUtenIM.find(andel => andel.andelsnr === field.andelsnr) !== undefined;
