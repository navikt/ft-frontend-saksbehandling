import type { Beregningsgrunnlag } from '@navikt/ft-types';

import type { AndelFieldIdentifikator, InntektTransformed } from '../../../../typer/FieldValues';

export const erAndelUtenReferanseOgGrunnlagHarAndelForSammeArbeidsgiverMedReferanse = (
  andel: AndelFieldIdentifikator | InntektTransformed,
  beregningsgrunnlag: Beregningsgrunnlag,
  arbeidsforholdId?: string,
): boolean => {
  const andeler = beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel;
  if (!arbeidsforholdId && andeler) {
    const antallAndelerISammeVirksomhetMedReferanse = andeler
      .filter(a => a.aktivitetStatus === 'AT')
      .filter(a => a.arbeidsforhold && a.arbeidsforhold.arbeidsgiverIdent === andel.arbeidsgiverId)
      .filter(a => a.arbeidsforhold && a.arbeidsforhold.arbeidsforholdId).length;
    return antallAndelerISammeVirksomhetMedReferanse > 0;
  }
  return false;
};
