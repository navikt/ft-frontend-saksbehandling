import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag } from '@navikt/ft-types';

import { AndelFieldIdentifikator, InntektTransformed } from '../../../../typer/FieldValues';

export const erAndelUtenReferanseOgGrunnlagHarAndelForSammeArbeidsgiverMedReferanse = (
  andel: AndelFieldIdentifikator | InntektTransformed,
  beregningsgrunnlag: Beregningsgrunnlag,
  arbeidsforholdId?: string,
): boolean => {
  if (!arbeidsforholdId) {
    const antallAndelerISammeVirksomhetMedReferanse =
      beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel
        .filter(a => a.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER)
        .filter(a => a.arbeidsforhold && a.arbeidsforhold.arbeidsgiverIdent === andel.arbeidsgiverId)
        .filter(a => a.arbeidsforhold && a.arbeidsforhold.arbeidsforholdId).length;
    return antallAndelerISammeVirksomhetMedReferanse > 0;
  }
  return false;
};
