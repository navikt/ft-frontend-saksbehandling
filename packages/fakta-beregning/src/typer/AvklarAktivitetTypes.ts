import { BeregningAvklaringsbehov, AvklarBeregningAktiviteterMap } from '@navikt/ft-types';

export type AktivitetValues = {
  beregningAktivitetNavn: string;
  fom: string;
  tom: string;
  skalBrukes?: string;
};

export type AktiviteterValues = {
  [key: string]: AktivitetValues;
};

export type AvklarAktiviteterValues = {
  manuellOverstyringBeregningAktiviteter?: boolean;
  begrunnelseAvklareAktiviteter?: string;
  avklaringsbehovListe: BeregningAvklaringsbehov[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  aktiviteterValues?: AktiviteterValues;
  periode: { fom: string; tom: string };
  erTilVurdering: boolean;
};
