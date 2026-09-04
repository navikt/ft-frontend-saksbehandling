import type {
  Beregningsgrunnlag,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
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
  andeler
    .filter(andel => andel.aktivitetStatus === 'AT' || andel.aktivitetStatus === 'FL')
    .filter(andel => andel.erTilkommetAndel === false);

export const finnInntektstyperSomVises = ({
  beregningsgrunnlagPeriode,
}: Pick<Beregningsgrunnlag, 'beregningsgrunnlagPeriode'>) => {
  const relevanteAndeler = finnAndelerSomSkalVises(finnAlleAndelerIFørstePeriode(beregningsgrunnlagPeriode));
  return {
    harArbeidstaker: relevanteAndeler.some(andel => andel.aktivitetStatus === 'AT'),
    harFrilans: relevanteAndeler.some(andel => andel.aktivitetStatus === 'FL'),
  };
};

const FRILANS_INNTEKT_KEY = 'FRILANS';

/**
 * Finner nøkkelen som brukes for å slå opp summert inntekt fra a-ordningen for en andel.
 * Arbeidstakere slås opp per arbeidsgiver, mens frilans grupperes samlet under {@link FRILANS_INNTEKT_KEY}
 * siden frilansinntekt ikke er knyttet til en arbeidsgiver.
 */
export const finnInntektsnøkkelForAndel = (andel: BeregningsgrunnlagAndel): string | undefined =>
  andel.aktivitetStatus === 'FL' ? FRILANS_INNTEKT_KEY : andel.arbeidsforhold?.arbeidsgiverIdent;

export const grupperSummerteInntekterPerArbeidsgiver = (
  inntekterMnd: InntektsgrunnlagMåned[] | undefined,
): Record<string, number> => {
  if (!inntekterMnd) {
    return {};
  }

  return inntekterMnd
    .flatMap(({ inntekter }) => inntekter)
    .reduce(
      (acc, inntekt) => {
        if (inntekt.inntektAktivitetType === 'ARBEIDSTAKERINNTEKT') {
          acc[inntekt.arbeidsgiverIdent] = (acc[inntekt.arbeidsgiverIdent] || 0) + inntekt.beløp;
        } else if (inntekt.inntektAktivitetType === 'FRILANSINNTEKT') {
          acc[FRILANS_INNTEKT_KEY] = (acc[FRILANS_INNTEKT_KEY] || 0) + inntekt.beløp;
        }
        return acc;
      },
      {} as Record<string, number>,
    );
};
