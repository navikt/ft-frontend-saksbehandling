import type { InntektsgrunnlagInntekt } from '@navikt/ft-types';
import { assertUnreachable } from '@navikt/ft-utils';

import './grafFarger.css';

type ColorPair = [string, string];

export const getGrafFarger = (
  inntektAktivitetType: InntektsgrunnlagInntekt['inntektAktivitetType'],
  index: number,
  styles: CSSStyleDeclaration,
) => {
  switch (inntektAktivitetType) {
    case 'ARBEIDSTAKERINNTEKT':
      return getColorPair(`--ft-graf-arbeid-${(index % 6) + 1}`, styles);
    case 'FRILANSINNTEKT':
      return getColorPair('--ft-graf-frilans', styles);
    case 'YTELSEINNTEKT':
      return getColorPair('--ft-graf-ytelse', styles);
    default:
      assertUnreachable(inntektAktivitetType);
  }
};

const getColorPair = (prefix: string, styles: CSSStyleDeclaration): ColorPair => [
  styles.getPropertyValue(`${prefix}-bakgrunn`).trim(),
  styles.getPropertyValue(`${prefix}-kant`).trim(),
];
