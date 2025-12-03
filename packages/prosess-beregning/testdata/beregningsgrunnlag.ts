import type { Beregningsgrunnlag } from '@navikt/ft-types';

export const lagBG = (overrides: Partial<Beregningsgrunnlag>): Beregningsgrunnlag => ({
  avklaringsbehov: [],
  skjaeringstidspunktBeregning: '2025-01-01',
  vilkårsperiodeFom: '2025-01-01',
  beregningsgrunnlagPeriode: [],
  dekningsgrad: 80,
  grunnbeløp: 99858,
  faktaOmBeregning: {
    andelerForFaktaOmBeregning: [],
    saksopplysninger: { lønnsendringSaksopplysning: [], kortvarigeArbeidsforhold: [] },
  },
  erOverstyrtInntekt: false,
  ...overrides,
});
