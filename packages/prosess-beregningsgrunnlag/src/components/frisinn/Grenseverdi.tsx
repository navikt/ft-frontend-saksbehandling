import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, BodyShort } from '@navikt/ds-react';
import { Beregningsgrunnlag, BeregningsgrunnlagPeriodeProp } from '@navikt/ft-types';
import dayjs from 'dayjs';
import { DDMMYYYY_DATE_FORMAT, formatCurrencyNoKr, TIDENES_ENDE } from '@navikt/ft-utils';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';
import {
  erSøktForAndelISøknadsperiode,
  finnBruttoForStatusIPeriode,
  finnFrisinnperioderSomSkalVises,
  FrisinnGrunnlag,
  FrisinnPeriode,
} from './FrisinnUtils';

const førsteDato = dayjs('2020-04-01');

const lagGrenseveriPeriode = (
  originaltInntektstak: number,
  annenInntektIkkeSøktFor: number,
  utregnetInntektstak: number,
) => (
  <FlexRow>
    <FlexColumn className={beregningStyles.tabellAktivitet}>
      <FormattedMessage
        id="Beregningsgrunnlag.Frisinn.Inntektstak"
        values={{
          grenseverdi: formatCurrencyNoKr(originaltInntektstak),
          annenInntekt: formatCurrencyNoKr(annenInntektIkkeSøktFor),
        }}
      />
    </FlexColumn>
    <FlexColumn className={beregningStyles.tabellInntekt}>
      <BodyShort size="small">{formatCurrencyNoKr(utregnetInntektstak)}</BodyShort>
    </FlexColumn>
  </FlexRow>
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
    <>
      <FlexRow>
        <FlexColumn>
          <Label size="small" className={beregningStyles.avsnittOverskrift}>
            <FormattedMessage
              id="Beregningsgrunnlag.Frisinn.InntektstakOpplysningerPeriode"
              key={`fom-tom${fom}${tom}`}
              values={{
                fom: dayjs(fom).format(DDMMYYYY_DATE_FORMAT),
                tom: tom ? dayjs(tom).format(DDMMYYYY_DATE_FORMAT) : '',
              }}
            />
          </Label>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      {lagGrenseveriPeriode(originaltInntektstak, annenInntektIkkeSøktFor, utregnetInntektstak)}
      <VerticalSpacer sixteenPx />
    </>
  );
};

type OwnProps = {
  beregningsgrunnlag: Beregningsgrunnlag;
};

/**
 * Vi ønsker å vise en rad for grenseverdi pr måned det er søkt ytelse for.
 * Om det er søkt to perioder i en måned skal disse vises som en rad der vi tar utgangspunkt i den siste, fordi denne alltid
 * vil vare ut måneden.
 */
const Grenseverdi: FunctionComponent<OwnProps> = ({ beregningsgrunnlag }) => {
  const relevanteFrisinnperioder = finnFrisinnperioderSomSkalVises(
    beregningsgrunnlag.ytelsesspesifiktGrunnlag as FrisinnGrunnlag,
  );
  const perioderSomSkalvises = finnAllePerioderSomSkalVises(
    beregningsgrunnlag.beregningsgrunnlagPeriode,
    relevanteFrisinnperioder,
  );
  return (
    <>
      {perioderSomSkalvises.map(periode => (
        <div key={periode.beregningsgrunnlagPeriodeFom}>{lagGrenseverdirad(beregningsgrunnlag, periode)}</div>
      ))}
    </>
  );
};

export default Grenseverdi;
