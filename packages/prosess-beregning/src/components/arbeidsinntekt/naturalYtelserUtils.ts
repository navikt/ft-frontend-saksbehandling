import type { BeregningsgrunnlagPeriodeProp } from '@navikt/ft-types';
import { sortPeriodsByFom } from '@navikt/ft-utils';

const finnBortfaltBeløp = (arbeidsgiverIdent: string, periode: BeregningsgrunnlagPeriodeProp): number => {
  const matchendeAndel = (periode.beregningsgrunnlagPrStatusOgAndel ?? []).find(
    bgAndel => bgAndel.arbeidsforhold?.arbeidsgiverIdent === arbeidsgiverIdent,
  );
  const bortfalt = matchendeAndel?.arbeidsforhold ? matchendeAndel.arbeidsforhold.naturalytelseBortfaltPrÅr : 0;
  return bortfalt || 0;
};

export type NaturalytelseEndringer = ReturnType<typeof finnEndringerINaturalytelserForArbeidsgiver>;
export const finnEndringerINaturalytelserForArbeidsgiver = (
  arbeidsgiverIdent: string,
  beregningsgrunnlagPerioder: BeregningsgrunnlagPeriodeProp[],
) => {
  return beregningsgrunnlagPerioder
    .flatMap(periode => {
      const bortfaltBeløp = finnBortfaltBeløp(arbeidsgiverIdent, periode);
      return bortfaltBeløp
        ? [
            {
              fom: periode.beregningsgrunnlagPeriodeFom,
              tom: periode.beregningsgrunnlagPeriodeTom,
              beløpPrÅr: bortfaltBeløp,
              beløpPrMåned: bortfaltBeløp / 12,
            },
          ]
        : [];
    })
    .sort(sortPeriodsByFom);
};
