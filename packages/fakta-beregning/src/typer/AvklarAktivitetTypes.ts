import { BeregningAvklaringsbehov, AvklarBeregningAktiviteterMap } from '@navikt/ft-types';

export type AktivitetValues = {
  beregningAktivitetNavn: string;
  fom: string;
  tom: string;
  skalBrukes: boolean;
}

export type AktiviteterValues = {
  [key: string]: AktivitetValues;
}

type AvklarAktiviteterValues = {
  manuellOverstyringBeregningAktiviteter?: boolean;
  begrunnelseAvklareAktiviteter?: string;
  avklaringsbehov?: BeregningAvklaringsbehov[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  aktiviteterValues?: AktiviteterValues;
  periode?: { fom: string; tom: string;}
  erTilVurdering?: boolean;
}

export default AvklarAktiviteterValues;
