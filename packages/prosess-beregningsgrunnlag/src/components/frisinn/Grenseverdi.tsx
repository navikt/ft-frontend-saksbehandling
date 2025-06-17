import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Label, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag, BeregningsgrunnlagPeriodeProp } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr, periodFormat, TIDENES_ENDE } from '@navikt/ft-utils';

import {
  erSøktForAndelISøknadsperiode,
  finnBruttoForStatusIPeriode,
  finnFrisinnperioderSomSkalVises,
  FrisinnGrunnlag,
  FrisinnPeriode,
} from './FrisinnUtils';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';

const førsteDato = dayjs('2020-04-01');

const lagGrenseveriPeriode = (
  originaltInntektstak: number,
  annenInntektIkkeSøktFor: number,
  utregnetInntektstak: number,
) => (
  <HStack gap="2">
    <BodyShort className={beregningStyles.tabellAktivitet}>
      <FormattedMessage
        id="Frisinn.Inntektstak"
        values={{
          grenseverdi: formatCurrencyNoKr(originaltInntektstak),
          annenInntekt: formatCurrencyNoKr(annenInntektIkkeSøktFor),
        }}
      />
    </BodyShort>
    <BodyShort size="small" className={beregningStyles.tabellInntekt}>
      <BeløpLabel beløp={utregnetInntektstak} />
    </BodyShort>
  </HStack>
);

const overlapperMedFrisinnPeriode = (bgPeriode: BeregningsgrunnlagPeriodeProp, frisinnPerioder: FrisinnPeriode[]) => {
  if (!Array.isArray(frisinnPerioder)) {
    return false;
  }
  const bgFom = dayjs(bgPeriode.beregningsgrunnlagPeriodeFom);
  const bgTom = dayjs(bgPeriode.beregningsgrunnlagPeriodeTom);
  return frisinnPerioder.some(p => !dayjs(p.fom).isBefore(bgFom) && !dayjs(p.tom).isAfter(bgTom));
};

/**
 * Henter kun ut perioder som avsluttes på siste dag i en måned, da dette er de som skal vises for FRISINN.
 * De må også overlappe med frisinnperiode
 * De får rett startdato senere
 */
const finnAllePerioderSomSkalVises = (
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
  frisinnperioder: FrisinnPeriode[],
) => {
  const perioder = [] as BeregningsgrunnlagPeriodeProp[];
  if (Array.isArray(bgPerioder)) {
    bgPerioder.forEach(periode => {
      if (overlapperMedFrisinnPeriode(periode, frisinnperioder)) {
        const tom = dayjs(periode.beregningsgrunnlagPeriodeTom);
        const sisteDatoIMåned = dayjs(periode.beregningsgrunnlagPeriodeTom).endOf('month');
        if (
          tom.isAfter(førsteDato) &&
          tom.isSame(sisteDatoIMåned, 'day') &&
          periode.beregningsgrunnlagPeriodeTom !== TIDENES_ENDE
        ) {
          perioder.push(periode);
        }
      }
    });
  }
  return perioder;
};

const starterFørISammeMåned = (frisinnPeriode: FrisinnPeriode, bgPeriode: BeregningsgrunnlagPeriodeProp) => {
  const bgFom = dayjs(bgPeriode.beregningsgrunnlagPeriodeFom);
  const frisinnFom = dayjs(frisinnPeriode.fom);
  return bgFom.year() === frisinnFom.year() && bgFom.month() === frisinnFom.month() && frisinnFom.isBefore(bgFom);
};

const lagGrenseverdirad = (bg: Beregningsgrunnlag, bgPeriode: BeregningsgrunnlagPeriodeProp) => {
  const frisinnGrunnlag = bg.ytelsesspesifiktGrunnlag as FrisinnGrunnlag;
  const bruttoAT = finnBruttoForStatusIPeriode(AktivitetStatus.ARBEIDSTAKER, bg, bgPeriode);
  const originaltInntektstak = bg.grunnbeløp * 6;
  let annenInntektIkkeSøktFor = bruttoAT;
  if (!erSøktForAndelISøknadsperiode(AktivitetStatus.FRILANSER, bgPeriode, frisinnGrunnlag)) {
    const bruttoFL = finnBruttoForStatusIPeriode(AktivitetStatus.FRILANSER, bg, bgPeriode);
    annenInntektIkkeSøktFor += bruttoFL;
  }
  if (!erSøktForAndelISøknadsperiode(AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE, bgPeriode, frisinnGrunnlag)) {
    const bruttoSN = finnBruttoForStatusIPeriode(AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE, bg, bgPeriode);
    annenInntektIkkeSøktFor += bruttoSN;
  }
  const utregnetInntektstak =
    originaltInntektstak > annenInntektIkkeSøktFor ? originaltInntektstak - annenInntektIkkeSøktFor : 0;

  const tom = bgPeriode.beregningsgrunnlagPeriodeTom;
  const førstePeriodeISammeMåned =
    Array.isArray(frisinnGrunnlag.frisinnPerioder) &&
    frisinnGrunnlag.frisinnPerioder.find(frisinnPeriode => starterFørISammeMåned(frisinnPeriode, bgPeriode));
  const fom = førstePeriodeISammeMåned ? førstePeriodeISammeMåned.fom : bgPeriode.beregningsgrunnlagPeriodeFom;

  return (
    <VStack gap="2">
      <Label size="small" className={beregningStyles.avsnittOverskrift}>
        <FormattedMessage
          id="Frisinn.InntektstakOpplysningerPeriode"
          key={`fom-tom${fom}${tom}`}
          values={{
            periode: periodFormat(fom, tom),
          }}
        />
      </Label>
      {lagGrenseveriPeriode(originaltInntektstak, annenInntektIkkeSøktFor, utregnetInntektstak)}
    </VStack>
  );
};

type Props = {
  beregningsgrunnlag: Beregningsgrunnlag;
};

/**
 * Vi ønsker å vise en rad for grenseverdi pr måned det er søkt ytelse for.
 * Om det er søkt to perioder i en måned skal disse vises som en rad der vi tar utgangspunkt i den siste, fordi denne alltid
 * vil vare ut måneden.
 */
export const Grenseverdi = ({ beregningsgrunnlag }: Props) => {
  const relevanteFrisinnperioder = finnFrisinnperioderSomSkalVises(
    beregningsgrunnlag.ytelsesspesifiktGrunnlag as FrisinnGrunnlag,
  );
  const perioderSomSkalvises = finnAllePerioderSomSkalVises(
    beregningsgrunnlag.beregningsgrunnlagPeriode,
    relevanteFrisinnperioder,
  );
  return (
    <div>
      {perioderSomSkalvises.map(periode => (
        <div key={periode.beregningsgrunnlagPeriodeFom}>{lagGrenseverdirad(beregningsgrunnlag, periode)}</div>
      ))}
    </div>
  );
};
