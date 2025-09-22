import type { Aktsomhet } from './Aktsomhet';
import type { VedtakResultatType } from './VedtakResultatType';

export type BeregningResultatPeriode = {
  periode: {
    fom: string;
    tom: string;
  };
  vurdering: Aktsomhet;
  feilutbetaltBeløp: number;
  andelAvBeløp: number;
  renterProsent: number;
  tilbakekrevingBeløp: number;
  tilbakekrevingBeløpEtterSkatt: number;
};

export type BeregningsresultatTilbakekreving = {
  beregningResultatPerioder: BeregningResultatPeriode[];
  vedtakResultatType: VedtakResultatType;
};
