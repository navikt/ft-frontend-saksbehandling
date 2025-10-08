import type { Beregningsgrunnlag, BeregningsgrunnlagAndel } from '@navikt/ft-types';

import { VurderEtterlonnSluttpakkeForm } from './VurderEtterlonnSluttpakkeForm';

describe('VurderEtterlonnSluttpakkeForm', () => {
  it('Skal teste at buildInitialvalues bygges korrekt når det er tidligere fastsatt etterlønn eller sluttpakke', () => {
    const ap = {
      status: 'OPPRETTET',
      definisjon: 'VURDER_FAKTA_ATFL_SN',
      kanLoses: true,
    };
    const bg = {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              arbeidsforhold: {
                arbeidsforholdType: 'ETTERLØNN_SLUTTPAKKE',
              },
              beregnetPrAar: 120000,
            } as BeregningsgrunnlagAndel,
          ],
        },
      ],
    } as Beregningsgrunnlag;
    const values = VurderEtterlonnSluttpakkeForm.buildInitialValues(bg, ap);
    const testobj = {
      vurderEtterlønnSluttpakke: true,
    };
    expect(values).toEqual(testobj);
  });

  it('Skal teste at buildInitialvalues bygges korrekt når det ikke er tidligere fastsatt etterlønn eller sluttpakke', () => {
    const ap = {
      status: 'OPPRETTET',
      definisjon: 'VURDER_FAKTA_ATFL_SN',
      kanLoses: true,
    };
    const bg = {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              arbeidsforhold: {
                arbeidsforholdType: 'ETTERLØNN_SLUTTPAKKE',
              },
              beregnetPrAar: undefined,
            } as BeregningsgrunnlagAndel,
          ],
        },
      ],
    } as Beregningsgrunnlag;
    const values = VurderEtterlonnSluttpakkeForm.buildInitialValues(bg, ap);
    const testobj = {
      vurderEtterlønnSluttpakke: undefined,
    };
    expect(values).toEqual(testobj);
  });
});
