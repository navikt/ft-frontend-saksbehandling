import { Label } from '@navikt/ds-react';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag, BeregningsgrunnlagPeriodeProp } from '@navikt/ft-types';
import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';
import { FormattedMessage } from 'react-intl';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';
import { BeregningsresultatPeriode } from './BeregningsresultatPeriode';
import {
  erSøktForAndelISøknadsperiode,
  finnBruttoForStatusIPeriode,
  finnFrisinnperioderSomSkalVises,
  FrisinnGrunnlag,
  FrisinnPeriode,
} from './FrisinnUtils';

const finnInntektstak = (bg: Beregningsgrunnlag) => (bg.grunnbeløp ? bg.grunnbeløp * 6 : 0);

const finnBGFrilans = (bg: Beregningsgrunnlag, periode: BeregningsgrunnlagPeriodeProp): number => {
  if (
    !erSøktForAndelISøknadsperiode(AktivitetStatus.FRILANSER, periode, bg.ytelsesspesifiktGrunnlag as FrisinnGrunnlag)
  ) {
    return 0;
  }
  let inntektstak = finnInntektstak(bg);
  const atBrutto = finnBruttoForStatusIPeriode(AktivitetStatus.ARBEIDSTAKER, bg, periode);
  inntektstak -= atBrutto;
  if (
    !erSøktForAndelISøknadsperiode(
      AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
      periode,
      bg.ytelsesspesifiktGrunnlag as FrisinnGrunnlag,
    )
  ) {
    const snBrutto = finnBruttoForStatusIPeriode(AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE, bg, periode);
    inntektstak -= snBrutto;
  }
  const frilansBrutto = finnBruttoForStatusIPeriode(AktivitetStatus.FRILANSER, bg, periode);
  return frilansBrutto > inntektstak ? inntektstak : frilansBrutto;
};

const finnBGNæring = (bg: Beregningsgrunnlag, periode: BeregningsgrunnlagPeriodeProp): number => {
  if (
    !erSøktForAndelISøknadsperiode(
      AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
      periode,
      bg.ytelsesspesifiktGrunnlag as FrisinnGrunnlag,
    )
  ) {
    return 0;
  }
  let inntektstak = finnInntektstak(bg);
  const atBrutto = finnBruttoForStatusIPeriode(AktivitetStatus.ARBEIDSTAKER, bg, periode);
  inntektstak -= atBrutto;
  const flBrutto = finnBruttoForStatusIPeriode(AktivitetStatus.FRILANSER, bg, periode);
  inntektstak -= flBrutto;
  const snBrutto = finnBruttoForStatusIPeriode(AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE, bg, periode);
  return snBrutto > inntektstak ? inntektstak : snBrutto;
};

const overlapperMedFrisinnPeriode = (bgPeriode: BeregningsgrunnlagPeriodeProp, frisinnPerioder: FrisinnPeriode[]) => {
  const bgFom = dayjs(bgPeriode.beregningsgrunnlagPeriodeFom);
  const bgTom = dayjs(bgPeriode.beregningsgrunnlagPeriodeTom);
  return (
    Array.isArray(frisinnPerioder) &&
    frisinnPerioder.some(p => !dayjs(p.fom).isBefore(bgFom) && !dayjs(p.tom).isAfter(bgTom))
  );
};

type Props = {
  beregningsgrunnlag: Beregningsgrunnlag;
};

export const Beregningsresultat = ({ beregningsgrunnlag }: Props) => {
  const frisinnPerioderSomSkalVises = finnFrisinnperioderSomSkalVises(
    beregningsgrunnlag.ytelsesspesifiktGrunnlag as FrisinnGrunnlag,
  );
  const bgPerioderSomSkalVises = Array.isArray(beregningsgrunnlag.beregningsgrunnlagPeriode)
    ? beregningsgrunnlag.beregningsgrunnlagPeriode.filter(p =>
        overlapperMedFrisinnPeriode(p, frisinnPerioderSomSkalVises),
      )
    : [];
  return (
    <div>
      <FlexRow>
        <FlexColumn>
          <Label size="small" className={beregningStyles.avsnittOverskrift}>
            <FormattedMessage id="Beregningsgrunnlag.Frisinn.Resultat" />
          </Label>
        </FlexColumn>
      </FlexRow>
      {bgPerioderSomSkalVises.map(periode => (
        <div key={periode.beregningsgrunnlagPeriodeFom}>
          <BeregningsresultatPeriode
            bgperiode={periode}
            ytelsegrunnlag={beregningsgrunnlag.ytelsesspesifiktGrunnlag as FrisinnGrunnlag}
            frilansGrunnlag={finnBGFrilans(beregningsgrunnlag, periode)}
            næringGrunnlag={finnBGNæring(beregningsgrunnlag, periode)}
            key={periode.beregningsgrunnlagPeriodeFom}
          />
        </div>
      ))}
    </div>
  );
};
