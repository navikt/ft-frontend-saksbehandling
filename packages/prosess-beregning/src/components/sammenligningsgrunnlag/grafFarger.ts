import type { InntektsgrunnlagInntekt } from '@navikt/ft-types';
import { assertUnreachable } from '@navikt/ft-utils';

type ColorPair = [string, string];
/**
 * Farger for stolpene i grafen
 * https://aksel.nav.no/grunnleggende/styling/design-tokens#Datavisualisering
 */
const BAR_COLORS_ARBEID_LIGHT: ColorPair[] = [
  ['#CCE1FF', '#3386E0'],
  ['#99C4DD', '#3386E0'],
  ['#A9C5FF', '#244FA8'],
  ['#F0F6FF', '#2F6FDB'],
  ['#3386E0', '#005B82'],
  ['#3D6FD6', '#172E63'],
];
const BAR_COLORS_ARBEID_DARK: ColorPair[] = [
  ['#24508F', '#8AB9FF'],
  ['#3B73C9', '#A5CCFF'],
  ['#070F1F', '#4D86E6'],
  ['#183363', '#73A8FF'],
  ['#6FA4FF', '#D6E4FF'],
  ['#0E1F3D', '#5F96F0'],
];

const BAR_COLORS_FRILANS_LIGHT: ColorPair = ['#C0B2D2', '#8269A2'];
const BAR_COLORS_FRILANS_DARK: ColorPair = ['#2A2236', '#B7A6D9'];

const BAR_COLORS_YTELSE_LIGHT: ColorPair = ['#99DEAD', '#2AA758'];
const BAR_COLORS_YTELSE_DARK: ColorPair = ['#0F2E1F', '#6FE3A3'];

export const getGrafFarger = (inntektAktivitetType: InntektsgrunnlagInntekt['inntektAktivitetType'], index: number) => {
  // TODO: fiks context for darkmode slik at det funker for k9 også (de har foreløpig ikke darkmode ennå)
  const isDarkmode = localStorage.getItem('fp-frontend-theme') === 'dark';

  switch (inntektAktivitetType) {
    case 'ARBEIDSTAKERINNTEKT':
      return isDarkmode
        ? BAR_COLORS_ARBEID_DARK[index % BAR_COLORS_ARBEID_DARK.length]
        : BAR_COLORS_ARBEID_LIGHT[index % BAR_COLORS_ARBEID_LIGHT.length];
    case 'FRILANSINNTEKT':
      return isDarkmode ? BAR_COLORS_FRILANS_DARK : BAR_COLORS_FRILANS_LIGHT;
    case 'YTELSEINNTEKT':
      return isDarkmode ? BAR_COLORS_YTELSE_DARK : BAR_COLORS_YTELSE_LIGHT;
    default:
      assertUnreachable(inntektAktivitetType);
  }
};
