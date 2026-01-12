import dayjs from 'dayjs';

import type { BeregningsgrunnlagPeriodeProp } from '@navikt/ft-types';
import { sortPeriodsByFom } from '@navikt/ft-utils';

const finnBortfaltBeløp = (arbeidsgiverIdent: string, periode: BeregningsgrunnlagPeriodeProp): number => {
  const matchendeAndel = (periode.beregningsgrunnlagPrStatusOgAndel ?? []).find(
    bgAndel => bgAndel.arbeidsforhold?.arbeidsgiverIdent === arbeidsgiverIdent,
  );
  if (matchendeAndel?.arbeidsforhold?.naturalytelseBortfaltPrÅr) {
    return matchendeAndel?.arbeidsforhold?.naturalytelseBortfaltPrÅr;
  }
  return 0;
};

export type NaturalytelseEndring = {
  fom: string;
  tom: string;
  beløpPrÅr: number;
  beløpPrMåned: number;
};
export const finnEndringerINaturalytelserForArbeidsgiver = (
  arbeidsgiverIdent: string,
  beregningsgrunnlagPerioder: BeregningsgrunnlagPeriodeProp[],
) => {
  return beregningsgrunnlagPerioder
    .flatMap<NaturalytelseEndring>(periode => {
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
    .sort(sortPeriodsByFom)
    .reduce(slåSammenSammenhengendePerioder, []);
};

const slåSammenSammenhengendePerioder = (merged: NaturalytelseEndring[], current: NaturalytelseEndring) => {
  const lastMerged = merged.at(-1);
  if (lastMerged) {
    const erSammenhengende = dayjs(current.fom).diff(dayjs(lastMerged.tom), 'day') === 1;
    const erSammeBeløp = lastMerged.beløpPrÅr === current.beløpPrÅr;

    if (erSammenhengende && erSammeBeløp) {
      lastMerged.tom = current.tom;
      return merged;
    }
  }

  return [...merged, current];
};
