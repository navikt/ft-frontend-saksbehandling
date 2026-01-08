import type { InntektsgrunnlagInntekt } from '@navikt/ft-types';
import { assertUnreachable } from '@navikt/ft-utils';

type ColorPair = [string, string];
/**
 * Farger for stolpene i grafen
 * https://aksel.nav.no/grunnleggende/styling/design-tokens#Datavisualisering
 */
const BAR_COLORS_ARBEID: ColorPair[] = [
  ['#CCE1FF', '#3386E0'],
  ['#99C4DD', '#3386E0'],
  ['#3386E0', '#005B82'],
  ['#368DA8', '#005B82'],
  ['#66CBEC', '#368DA8'],
  ['#005B82', '#368DA8'],
];
const BAR_COLORS_FRILANS: ColorPair = ['#C0B2D2', '#8269A2'];
const BAR_COLORS_YTELSE: ColorPair = ['#99DEAD', '#2AA758'];

export const getGrafFarger = (inntektAktivitetType: InntektsgrunnlagInntekt['inntektAktivitetType'], index: number) => {
  switch (inntektAktivitetType) {
    case 'ARBEIDSTAKERINNTEKT':
      return BAR_COLORS_ARBEID[index % BAR_COLORS_ARBEID.length];
    case 'FRILANSINNTEKT':
      return BAR_COLORS_FRILANS;
    case 'YTELSEINNTEKT':
      return BAR_COLORS_YTELSE;
    default:
      assertUnreachable(inntektAktivitetType);
  }
};
