/* eslint-disable import/prefer-default-export */
import { Inntektsforhold, VurderInntektsforholdPeriode } from '@navikt/ft-types/src/beregningsgrunnlagFordelingTsType';

export const getInntektsforhold = (
  inntektsforholdPerioder?: VurderInntektsforholdPeriode[],
): Inntektsforhold | undefined =>
  inntektsforholdPerioder
    ?.flatMap(inntektsforholdPeriode => inntektsforholdPeriode.inntektsforholdListe)
    .filter(
      (inntektsforhold, i, liste) =>
        liste.findIndex(listeElement => listeElement.arbeidsgiverId === inntektsforhold.arbeidsgiverId) === i,
    )[0];
