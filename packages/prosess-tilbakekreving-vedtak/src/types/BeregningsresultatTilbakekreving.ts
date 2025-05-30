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
  manueltSattTilbakekrevingsbeløp: number;
  tilbakekrevingBeløpUtenRenter: number;
  renteBeløp: number;
  tilbakekrevingBeløp: number;
  skattBeløp: number;
  tilbakekrevingBeløpEtterSkatt: number;
  utbetaltYtelseBeløp: number;
  riktigYtelseBeløp: number;
};

export type BeregningsresultatTilbakekreving = {
  beregningResultatPerioder: BeregningResultatPeriode[];
  vedtakResultatType: VedtakResultatType;
};
