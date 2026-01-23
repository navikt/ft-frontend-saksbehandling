import type {
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
  InntektsgrunnlagInntektAT,
  InntektsgrunnlagMåned,
} from '@navikt/ft-types';

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

export const andelErIkkeTilkommetEllerLagtTilAvSBH = (andel: BeregningsgrunnlagAndel): boolean => {
  if (andel.overstyrtPrAar !== null && andel.overstyrtPrAar !== undefined) {
    return true;
  }
  return andel.erTilkommetAndel === false && andel.lagtTilAvSaksbehandler === false;
};

export const finnAndelerSomSkalVises = (andeler: BeregningsgrunnlagAndel[]): BeregningsgrunnlagAndel[] =>
  andeler.filter(andel => andel.aktivitetStatus === 'AT').filter(andel => andel.erTilkommetAndel === false);

export const grupperSummerteInntekterPerArbeidsgiver = (
  inntekterMnd: InntektsgrunnlagMåned[] | undefined,
): Record<string, number> => {
  if (!inntekterMnd) {
    return {};
  }

  return inntekterMnd
    .flatMap(({ inntekter }) => inntekter)
    .filter<InntektsgrunnlagInntektAT>(inntekt => inntekt.inntektAktivitetType === 'ARBEIDSTAKERINNTEKT')
    .reduce(
      (acc, inntekt) => {
        acc[inntekt.arbeidsgiverIdent] = (acc[inntekt.arbeidsgiverIdent] || 0) + inntekt.beløp;
        return acc;
      },
      {} as Record<string, number>,
    );
};
