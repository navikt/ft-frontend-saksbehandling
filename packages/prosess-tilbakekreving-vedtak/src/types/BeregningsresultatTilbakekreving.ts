import { VedtakResultatType } from '@navikt/ft-kodeverk';

import { Aktsomhet } from '../kodeverk/aktsomhet';

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
