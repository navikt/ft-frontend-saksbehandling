import { aktivitetStatus } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag } from '@navikt/ft-types';
import { AndelFieldIdentifikator, InntektTransformed } from '../../../../typer/FieldValues';

const erAndelUtenReferanseOgGrunnlagHarAndelForSammeArbeidsgiverMedReferanse = (andel: AndelFieldIdentifikator | InntektTransformed,
  beregningsgrunnlag: Beregningsgrunnlag, arbeidsforholdId?: string): boolean => {
  if (arbeidsforholdId === null) {
    const antallAndelerISammeVirksomhetMedReferanse = beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel
      .filter((a) => a.aktivitetStatus === aktivitetStatus.ARBEIDSTAKER)
      .filter((a) => a.arbeidsforhold && a.arbeidsforhold.arbeidsgiverIdent === andel.arbeidsgiverId)
      .filter((a) => a.arbeidsforhold && a.arbeidsforhold.arbeidsforholdId != null)
      .length;
    return antallAndelerISammeVirksomhetMedReferanse > 0;
  }
  return false;
};

export default erAndelUtenReferanseOgGrunnlagHarAndelForSammeArbeidsgiverMedReferanse;
