import { InntektAktivitetType } from '@navikt/ft-kodeverk';

/**
 * Farger for stolpene i grafen
 * https://aksel.nav.no/grunnleggende/styling/design-tokens#Datavisualisering
 */
const BAR_COLORS_ARBEID = [
  ['#CCE1FF', '#3386E0'],
  ['#99C4DD', '#3386E0'],
  ['#3386E0', '#005B82'],
  ['#368DA8', '#005B82'],
  ['#66CBEC', '#368DA8'],
  ['#005B82', '#368DA8'],
];
const BAR_COLORS_FRILANS = [['#C0B2D2', '#8269A2']];
const BAR_COLORS_YTELSE = [['#99DEAD', '#2AA758']];

export const getBarColors = (inntektAktivitetType: InntektAktivitetType, index: number) => {
  switch (inntektAktivitetType) {
    case InntektAktivitetType.ARBEID:
      return BAR_COLORS_ARBEID[index];
    case InntektAktivitetType.FRILANS:
      return BAR_COLORS_FRILANS[0];
    case InntektAktivitetType.YTELSE:
      return BAR_COLORS_YTELSE[0];
  }
};
