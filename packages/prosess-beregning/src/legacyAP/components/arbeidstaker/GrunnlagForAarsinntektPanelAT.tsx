import type { BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import type { ArbeidstakerInntektValues } from '../../types/ATFLAksjonspunkt';

const andelErIkkeTilkommetEllerLagtTilAvSBH = (andel: BeregningsgrunnlagAndel): boolean => {
  // Andelen er fastsatt før og må kunne fastsettes igjen
  if (andel.overstyrtPrAar !== null && andel.overstyrtPrAar !== undefined) {
    return true;
  }

  // Andeler som er lagt til av sbh eller tilkom før stp skal ikke kunne endres på
  return andel.erTilkommetAndel === false && andel.lagtTilAvSaksbehandler === false;
};

const finnAndelerSomSkalVises = (andeler: BeregningsgrunnlagAndel[]): BeregningsgrunnlagAndel[] => {
  if (!andeler) {
    return [];
  }
  return andeler
    .filter(andel => andel.aktivitetStatus === 'AT')
    .filter(andel => andelErIkkeTilkommetEllerLagtTilAvSBH(andel));
};

/**
 * GrunnlagForAarsinntektPanelAT
 *
 * Presentasjonskomponent. Viser beregningsgrunnlagstabellen for arbeidstakere.
 * Vises også hvis status er en kombinasjonsstatus som inkluderer arbeidstaker.
 */
export const GrunnlagForAarsinntektPanelAT = () => {
  return null;
};

GrunnlagForAarsinntektPanelAT.buildInitialValues = (
  alleAndeler: BeregningsgrunnlagAndel[],
): ArbeidstakerInntektValues => {
  const relevanteAndeler = finnAndelerSomSkalVises(alleAndeler);
  const initialValues = {} as ArbeidstakerInntektValues;
  relevanteAndeler.forEach((inntekt, index) => {
    initialValues[`inntekt${index}`] = formatCurrencyNoKr(inntekt.overstyrtPrAar) ?? '';
  });
  return initialValues;
};
