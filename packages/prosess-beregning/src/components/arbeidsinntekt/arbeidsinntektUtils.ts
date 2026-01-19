import type {
  Beregningsgrunnlag,
  BeregningsgrunnlagAndel,
  InntektsgrunnlagInntektAT,
  InntektsgrunnlagMåned,
  Stillingsprosent,
} from '@navikt/ft-types';
import { dateFormat, sortPeriodsBy } from '@navikt/ft-utils';

import { finnAlleAndelerIFørstePeriode } from '../../utils/beregningsgrunnlagUtils';
import { finnEndringerINaturalytelserForArbeidsgiver } from './naturalytelserUtils';

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

type ArbeidsinntektVisning = {
  andelsLabel: string;
  erTidsbegrensetArbeidsforhold: boolean;
  andelsnr: number;
  ansattPeriode?: {
    fom: string | undefined;
    tom: string | undefined;
  };
  sisteLønnsendringsdato?: string;
  formatertStillingsprosenter?: string;
  naturalytelser?: ReturnType<typeof finnEndringerINaturalytelserForArbeidsgiver>;
} & ArbeidsinntektVisningBeløp;

export type ArbeidsinntektVisningBeløp = {
  inntektsmeldingMånedinntekt?: number;
  inntektsmeldingÅrsinntekt?: number;
  beregningsgrunnlagMånedinntekt?: number;
  beregningsgrunnlagÅrsinntekt?: number;
};

export const mapBeregningsgrunnlagTilArbeidsinntektVisning = (
  { inntektsgrunnlag, beregningsgrunnlagPeriode }: Beregningsgrunnlag,
  formaterVisningsnavnForAndel: (andel: BeregningsgrunnlagAndel) => string,
): ArbeidsinntektVisning[] => {
  const andelerIFørstePeriode = finnAlleAndelerIFørstePeriode(beregningsgrunnlagPeriode);
  const relevanteAndeler = finnAndelerSomSkalVises(andelerIFørstePeriode);

  const beregningsgrunnlagInntekter = grupperSummerteInntekterPerArbeidsgiver(
    inntektsgrunnlag?.beregningsgrunnlagInntekter,
  );

  return relevanteAndeler.map<ArbeidsinntektVisning>(andel => {
    const arbeidsgiverIdent = andel.arbeidsforhold?.arbeidsgiverIdent;
    return {
      andelsLabel: formaterVisningsnavnForAndel(andel),
      erTidsbegrensetArbeidsforhold: andel.erTidsbegrensetArbeidsforhold ?? false,
      andelsnr: andel.andelsnr,
      ansattPeriode: andel.arbeidsforhold
        ? {
            fom: andel.arbeidsforhold.startdato,
            tom: andel.arbeidsforhold.opphoersdato,
          }
        : undefined,
      sisteLønnsendringsdato: andel.arbeidsforhold?.sisteLønnsendringsdato,
      formatertStillingsprosenter: formaterStillingsprosenter(andel.arbeidsforhold?.stillingsprosenter),
      inntektsmeldingMånedinntekt: andel.arbeidsforhold?.belopFraInntektsmeldingPrMnd
        ? andel.arbeidsforhold.belopFraInntektsmeldingPrMnd
        : undefined,
      inntektsmeldingÅrsinntekt: andel.arbeidsforhold?.belopFraInntektsmeldingPrMnd
        ? andel.arbeidsforhold.belopFraInntektsmeldingPrMnd * 12
        : undefined,
      beregningsgrunnlagMånedinntekt:
        arbeidsgiverIdent && beregningsgrunnlagInntekter[arbeidsgiverIdent]
          ? beregningsgrunnlagInntekter[arbeidsgiverIdent] / 3
          : undefined,
      beregningsgrunnlagÅrsinntekt:
        arbeidsgiverIdent && beregningsgrunnlagInntekter[arbeidsgiverIdent]
          ? (beregningsgrunnlagInntekter[arbeidsgiverIdent] / 3) * 12
          : undefined,
      naturalytelser: arbeidsgiverIdent
        ? finnEndringerINaturalytelserForArbeidsgiver(arbeidsgiverIdent, beregningsgrunnlagPeriode)
        : undefined,
    };
  });
};

export const formaterStillingsprosenter = (
  stillingsprosenter: Stillingsprosent[] | undefined = [],
): string | undefined => {
  if (stillingsprosenter.length === 0) {
    return undefined;
  }
  const sortedStillingsprosenter = stillingsprosenter.toSorted(sortPeriodsBy('fomDato'));

  const nyeste = sortedStillingsprosenter.at(-1);
  const nestNyeste = sortedStillingsprosenter.at(-2);

  if (nyeste && nestNyeste) {
    return `Fra ${nestNyeste.prosent}% til ${nyeste.prosent}% (${dateFormat(nyeste.fomDato)})`;
  }
  return stillingsprosenter[0].prosent + '%';
};
