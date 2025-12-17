import type {
  Beregningsgrunnlag,
  BeregningsgrunnlagAndel,
  InntektsgrunnlagInntektAT,
  InntektsgrunnlagMåned,
  Stillingsprosent,
} from '@navikt/ft-types';
import { dateFormat, sortPeriodsBy } from '@navikt/ft-utils';

const grupperSummerteInntekterPerArbeidsgiver = (
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

/**
 * Andeler som er tilkommen andel skal ikke vises i arbeidsinntektsoversikten
 */
const finnAndelerSomSkalVises = (andeler: BeregningsgrunnlagAndel[]): BeregningsgrunnlagAndel[] =>
  andeler.filter(andel => andel.aktivitetStatus === 'AT').filter(andel => andel.erTilkommetAndel === false);

export const mapBeregningsgrunnlagTilArbeidsinntektVisning = (
  { inntektsgrunnlag, beregningsgrunnlagPeriode }: Beregningsgrunnlag,
  formaterArbeidsgiver: (arbeidsgiverIdent: string | undefined) => string,
) => {
  const andelerIFørstePeriode = beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel || [];
  const relevanteAndeler = finnAndelerSomSkalVises(andelerIFørstePeriode);

  const beregningsgrunnlagInntekter = grupperSummerteInntekterPerArbeidsgiver(
    inntektsgrunnlag?.beregningsgrunnlagInntekter,
  );
  const sammenligningsgrunnlagInntekter = grupperSummerteInntekterPerArbeidsgiver(
    inntektsgrunnlag?.sammenligningsgrunnlagInntekter,
  );

  return relevanteAndeler.map(andel => {
    const arbeidsgiverIdent = andel.arbeidsforhold?.arbeidsgiverIdent;
    return {
      arbeidsgiverLabel: formaterArbeidsgiver(arbeidsgiverIdent),
      andelsnr: andel.andelsnr,
      ansattPeriode: andel.arbeidsforhold
        ? {
            fom: andel.arbeidsforhold.startdato,
            tom: andel.arbeidsforhold.opphoersdato,
          }
        : undefined,
      sisteLønnsendringsdato: andel.arbeidsforhold?.sisteLønnsendringsdato,
      formatertStillingsprosenter: formaterStillingsprosenter(andel.arbeidsforhold?.stillingsprosenter),
      inntektsmeldingÅrsinntekt: (andel.arbeidsforhold?.belopFraInntektsmeldingPrMnd ?? 0) * 12,
      beregningsgrunnlagÅrsinntekt: arbeidsgiverIdent ? beregningsgrunnlagInntekter[arbeidsgiverIdent] : 0,
      sammenligningsgrunnlagÅrsinntekt: arbeidsgiverIdent ? sammenligningsgrunnlagInntekter[arbeidsgiverIdent] : 0,
    };
  });
};

export const formaterStillingsprosenter = (stillingsprosenter: Stillingsprosent[] | undefined): string | undefined => {
  if (!stillingsprosenter || stillingsprosenter.length === 0) {
    return undefined;
  }
  if (stillingsprosenter.length === 1) {
    return stillingsprosenter[0].prosent + '%';
  }
  const sortedStillingsprosenter = stillingsprosenter?.toSorted(sortPeriodsBy('fomDato'));
  const nyeste = sortedStillingsprosenter.at(-1)!;
  const nestNyeste = sortedStillingsprosenter.at(-2)!;

  return `Fra ${nestNyeste.prosent}% til ${nyeste.prosent}% (${dateFormat(nyeste.fomDato)})`;
};
