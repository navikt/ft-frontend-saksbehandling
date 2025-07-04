import dayjs, { Dayjs } from 'dayjs';

import { BehandlingArsakType } from '@navikt/ft-kodeverk';
import type { Beregningsgrunnlag, BeregningsgrunnlagAndel, BeregningsgrunnlagPeriodeProp } from '@navikt/ft-types';

export type FrisinnAndel = Readonly<{
  oppgittInntekt: number;
  statusSøktFor: string;
}>;

export type FrisinnPeriode = Readonly<{
  fom: string;
  tom: string;
  frisinnAndeler: FrisinnAndel[];
}>;

export type FrisinnGrunnlag = Readonly<{
  ytelsetype: string;
  frisinnPerioder: FrisinnPeriode[];
  behandlingÅrsaker: string[];
}>;

const finnSamletBruttoForStatus = (andeler: BeregningsgrunnlagAndel[], status: string) => {
  if (!andeler) {
    return 0;
  }
  const inntekt = andeler
    .filter(a => a.aktivitetStatus === status)
    .map(({ bruttoPrAar }) => bruttoPrAar || 0)
    .reduce((sum, brutto) => sum + brutto, 0);
  if (!inntekt || inntekt === 0) {
    return 0;
  }
  return inntekt;
};

const erMars2020 = (dato: Dayjs) => dato.month() === 2 && dato.year() === 2020;

const erSøktForMars2020 = (frisinnPeriode: FrisinnPeriode) => {
  const tom = dayjs(frisinnPeriode.tom);
  return erMars2020(tom);
};

/**
 Denne metoden sjekker om det er søkt for valgt status i denne beregningsperiode eller i neste dersom den inngår i samme søknadsperiode.
 Hvis to perioder ligger i samme måned ligger de i samme søknadsperiode
 */
const finnFrisinnAndelerISøknadsperiodeForStatus = (
  status: string,
  bgPeriode: BeregningsgrunnlagPeriodeProp,
  ytelsegrunnlag: FrisinnGrunnlag,
) => {
  const { frisinnPerioder } = ytelsegrunnlag;
  if (!Array.isArray(frisinnPerioder)) {
    return null;
  }
  const bgFom = dayjs(bgPeriode.beregningsgrunnlagPeriodeFom);

  // Søkader for mars må spesialhåndteres da disse er de eneste som krysser måneder
  if (erMars2020(bgFom) && frisinnPerioder.some(p => erSøktForMars2020(p))) {
    const aprilSlutt = dayjs('2020-04-30');
    const periodeVedSisteDagIApril = frisinnPerioder.find(p => dayjs(p.tom).isSame(aprilSlutt, 'day'));
    if (!periodeVedSisteDagIApril) {
      return null;
    }
    return periodeVedSisteDagIApril.frisinnAndeler.filter(andel => andel.statusSøktFor === status);
  }
  const sisteDatoIMåned = dayjs(bgPeriode.beregningsgrunnlagPeriodeTom).endOf('month');
  const periodeVedSisteDagIMnd = frisinnPerioder.find(
    p => !dayjs(p.fom).isBefore(bgFom) && dayjs(p.tom).isSame(sisteDatoIMåned, 'day'),
  );
  if (!periodeVedSisteDagIMnd) {
    return null;
  }
  return periodeVedSisteDagIMnd.frisinnAndeler.filter(andel => andel.statusSøktFor === status);
};

export const erSøktForAndelISøknadsperiode = (
  status: string,
  bgPeriode: BeregningsgrunnlagPeriodeProp,
  ytelsegrunnlag: FrisinnGrunnlag,
) => {
  const andeler = finnFrisinnAndelerISøknadsperiodeForStatus(status, bgPeriode, ytelsegrunnlag);
  return !!andeler && andeler.length > 0;
};

/**
 * hvis det er søkt frisinn for samme søknadsperiode som bgPeriode er i (hele måneder), skal man bruke tallet som ligger
 * i første periode. Ellers skal man bruke tallet som ligger i perioden. For arbeidstakere skal man alltid bruke inntekten
 * som ligger i perioden
 */
export const finnBruttoForStatusIPeriode = (
  status: string,
  bg: Beregningsgrunnlag,
  bgPeriode: BeregningsgrunnlagPeriodeProp,
) => {
  if (!status || !bg || !bgPeriode) {
    return 0;
  }
  if (erSøktForAndelISøknadsperiode(status, bgPeriode, bg.ytelsesspesifiktGrunnlag as FrisinnGrunnlag)) {
    const førstePeriode = bg.beregningsgrunnlagPeriode[0];
    return finnSamletBruttoForStatus(førstePeriode.beregningsgrunnlagPrStatusOgAndel || [], status);
  }
  return finnSamletBruttoForStatus(bgPeriode.beregningsgrunnlagPrStatusOgAndel || [], status);
};

export const finnOppgittInntektForAndelIPeriode = (
  status: string,
  bgPeriode: BeregningsgrunnlagPeriodeProp,
  ytelsegrunnlag: FrisinnGrunnlag,
) => {
  const matchendeAndeler = finnFrisinnAndelerISøknadsperiodeForStatus(status, bgPeriode, ytelsegrunnlag);
  if (!matchendeAndeler || matchendeAndeler.length < 1) {
    return 0;
  }
  const inntekt = matchendeAndeler.map(({ oppgittInntekt }) => oppgittInntekt).reduce((sum, brutto) => sum + brutto, 0);
  if (!inntekt || inntekt === 0) {
    return 0;
  }
  return inntekt;
};

export const finnFrisinnperioderSomSkalVises = (frisinnGrunnlag: FrisinnGrunnlag): FrisinnPeriode[] => {
  const { frisinnPerioder, behandlingÅrsaker } = frisinnGrunnlag;
  if (!Array.isArray(frisinnPerioder)) {
    return [];
  }
  if (behandlingÅrsaker && frisinnPerioder.length > 1) {
    const eropprettetGrunetEndring = behandlingÅrsaker.some(
      årsak => årsak === BehandlingArsakType.RE_ENDRING_FRA_BRUKER,
    );
    if (eropprettetGrunetEndring) {
      // Skal kun vise siste søknadsperiode
      const kronologiskePerioder = [...frisinnPerioder].sort((a, b) => a.fom.localeCompare(b.fom));
      const sistePeriode = kronologiskePerioder[kronologiskePerioder.length - 1];
      const sisteTom = dayjs(sistePeriode.tom);
      if (sisteTom.month() === 3 && sisteTom.year() === 2020) {
        // Spesialbehandling for første søknadsmåned
        // Returner alle periuoder som starter i mars eller april
        return kronologiskePerioder.filter(p => dayjs(p.fom).month() === 3 || dayjs(p.fom).month() === 2);
      }
      // Returner alle perioder som starter i samme måned og år
      return kronologiskePerioder.filter(
        p => dayjs(p.fom).month() === sisteTom.month() && dayjs(p.fom).year() === sisteTom.year(),
      );
    }
  }
  return frisinnPerioder;
};
