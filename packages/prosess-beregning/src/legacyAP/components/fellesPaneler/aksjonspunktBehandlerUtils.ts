import type { BeregningsgrunnlagAndel, BeregningsgrunnlagPeriodeProp } from '@navikt/ft-types';

export const finnAlleAndelerIFørstePeriode = (
  allePerioder: BeregningsgrunnlagPeriodeProp[],
): BeregningsgrunnlagAndel[] => {
  if (allePerioder && allePerioder.length > 0) {
    return allePerioder[0].beregningsgrunnlagPrStatusOgAndel ?? [];
  }
  return [];
};
