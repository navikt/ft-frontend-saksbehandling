import { expect } from 'vitest';

// eslint-disable-next-line max-len
import { arbeidstakerFlereArbeidsforholdMedNaturalytelser80ProsentDekningsgradOgOver6G } from '../../../testdata/arbeidstakerFlereArbeidsforholdMedNaturalytelser80ProsentDekningsgradOgOver6G';
import { finnEndringerINaturalytelserForArbeidsgiver } from './naturalytelserUtils';

describe('naturalytelserUtils', () => {
  const beregningsgrunnlagPeriode =
    arbeidstakerFlereArbeidsforholdMedNaturalytelser80ProsentDekningsgradOgOver6G.beregningsgrunnlagListe[0]
      .beregningsgrunnlagPeriode;

  it('returnerer tom liste når arbeidsgiver ikke har endringer i naturalytelser', () => {
    const resultat = finnEndringerINaturalytelserForArbeidsgiver('555555555', beregningsgrunnlagPeriode);

    expect(JSON.stringify(beregningsgrunnlagPeriode)).toContain('555555555');
    expect(resultat).toEqual([]);
  });

  it('returnerer en periode når arbeidsgiver har bortfall av naturalytelse', () => {
    const resultat = finnEndringerINaturalytelserForArbeidsgiver('333333333', beregningsgrunnlagPeriode);
    expect(JSON.stringify(beregningsgrunnlagPeriode)).toContain('333333333');

    expect(resultat).toEqual([
      {
        beløpPrMåned: 12098,
        beløpPrÅr: 145176,
        fom: '2026-01-02',
        tom: '9999-12-31',
      },
    ]);
  });
});
