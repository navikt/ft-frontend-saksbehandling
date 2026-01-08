import type { BeregningsgrunnlagAndel, BeregningsgrunnlagPeriodeProp } from '@navikt/ft-types';

import type { Vilkår } from '../types/Vilkår';

export const erBGTilVurdering = (vilkårsperiodeFom: string, beregningsgrunnlagsvilkår: Vilkår | null) => {
  const perioderTilVurdering = beregningsgrunnlagsvilkår?.perioder
    ? beregningsgrunnlagsvilkår.perioder.filter(periode => periode.vurderesIBehandlingen && !periode.erForlengelse)
    : [];
  return perioderTilVurdering.some(vkp => vkp.periode.fom === vilkårsperiodeFom);
};

export const finnAlleAndelerIFørstePeriode = (
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[],
): BeregningsgrunnlagAndel[] => {
  if (beregningsgrunnlagPeriode.length > 0) {
    return beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel ?? [];
  }
  return [];
};

// TODO: verifiser med Cecilie om overstyrte andeler alltid skal inkluderes uavhengig om tilkommen
export const andelErIkkeTilkommetEllerLagtTilAvSBH = (andel: BeregningsgrunnlagAndel): boolean => {
  if (andel.overstyrtPrAar !== null && andel.overstyrtPrAar !== undefined) {
    return true;
  }
  return andel.erTilkommetAndel === false && andel.lagtTilAvSaksbehandler === false;
};
