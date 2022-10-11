import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, BodyShort, Detail } from '@navikt/ds-react';
import { BeregningsgrunnlagPeriodeProp } from '@navikt/ft-types';
import dayjs from 'dayjs';
import { DDMMYYYY_DATE_FORMAT, formatCurrencyNoKr, TIDENES_ENDE } from '@navikt/ft-utils';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import { finnOppgittInntektForAndelIPeriode, FrisinnAndel, FrisinnGrunnlag } from './FrisinnUtils';

const lagPeriodeHeader = (fom: string, originalTom: string) => {
  let tom = null;
  if (originalTom !== TIDENES_ENDE) {
    tom = originalTom;
  }
  return (
    <FormattedMessage
      id="Beregningsgrunnlag.BeregningTable.Periode"
      key={`fom-tom${fom}${tom}`}
      values={{
        fom: dayjs(fom).format(DDMMYYYY_DATE_FORMAT),
        tom: tom ? dayjs(tom).format(DDMMYYYY_DATE_FORMAT) : '',
      }}
    />
  );
};

const statuserDetErSøktOmIPerioden = (
  bgPeriode: BeregningsgrunnlagPeriodeProp,
  ytelsegrunnlag: FrisinnGrunnlag,
): FrisinnAndel[] => {
  const fom = bgPeriode.beregningsgrunnlagPeriodeFom;
  const tom = bgPeriode.beregningsgrunnlagPeriodeTom;
  const perioder = ytelsegrunnlag.frisinnPerioder;
  const gjeldendePeriode =
    Array.isArray(perioder) &&
    perioder.find(periode => !dayjs(fom).isBefore(periode.fom) && !dayjs(tom).isAfter(periode.tom));
  return gjeldendePeriode ? gjeldendePeriode.frisinnAndeler : [];
};

const lagBeskrivelseMedBeløpRad = (tekstId: string, beløp: number) => (
  <FlexRow>
    <FlexColumn className={beregningStyles.atflTabellAktivitet}>
      <FormattedMessage id={tekstId} />
    </FlexColumn>
    <FlexColumn className={beregningStyles.atflTabellInntekt}>
      <BodyShort size="small">{formatCurrencyNoKr(beløp)}</BodyShort>
    </FlexColumn>
  </FlexRow>
);

const lagRedusertBGRad = (
  tekstIdRedusert: string,
  beløpÅRedusere: number,
  tekstIdLøpende: string,
  løpendeBeløp: number,
  gjeldendeDekningsgrad: number,
) => {
  const multiplikator = gjeldendeDekningsgrad / 100;
  const redusert = beløpÅRedusere * multiplikator;
  return (
    <>
      <FlexRow>
        <FlexColumn className={beregningStyles.atflTabellAktivitet}>
          <FormattedMessage id={tekstIdRedusert} values={{ grad: gjeldendeDekningsgrad }} />
        </FlexColumn>
        <FlexColumn className={beregningStyles.atflTabellInntekt}>
          <BodyShort size="small">{formatCurrencyNoKr(redusert)}</BodyShort>
        </FlexColumn>
      </FlexRow>
      {(løpendeBeløp || løpendeBeløp === 0) && (
        <FlexRow>
          <FlexColumn className={beregningStyles.atflTabellAktivitet}>
            <FormattedMessage id={tekstIdLøpende} />
          </FlexColumn>
          <FlexColumn className={beregningStyles.atflTabellInntekt}>
            <BodyShort size="small">{formatCurrencyNoKr(løpendeBeløp)}</BodyShort>
          </FlexColumn>
        </FlexRow>
      )}
    </>
  );
};

const erBeløpSatt = (beløp: number | null) => beløp || beløp === 0;

const finnDekningsgrad = (bgPeriodeFom: string) => {
  const fomDato = dayjs(bgPeriodeFom);
  if (fomDato.isBefore(dayjs('2020-11-01', 'YYYY-MM-DD'))) {
    return 80;
  }
  return fomDato.isBefore(dayjs('2022-01-01', 'YYYY-MM-DD')) ? 60 : 70;
};

const lagPeriodeblokk = (
  bgperiode: BeregningsgrunnlagPeriodeProp,
  ytelsegrunnlag: FrisinnGrunnlag,
  frilansGrunnlag: number,
  næringGrunnlag: number,
) => {
  const andelerDetErSøktOm = statuserDetErSøktOmIPerioden(bgperiode, ytelsegrunnlag);
  if (!andelerDetErSøktOm || andelerDetErSøktOm.length < 1) {
    return null;
  }
  const beregningsgrunnlagFL = andelerDetErSøktOm.some(p => p.statusSøktFor === AktivitetStatus.FRILANSER)
    ? frilansGrunnlag
    : null;
  const beregningsgrunnlagSN = andelerDetErSøktOm.some(
    p => p.statusSøktFor === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
  )
    ? næringGrunnlag
    : null;

  const løpendeInntektFL = finnOppgittInntektForAndelIPeriode(AktivitetStatus.FRILANSER, bgperiode, ytelsegrunnlag);
  const løpendeInntektSN = finnOppgittInntektForAndelIPeriode(
    AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
    bgperiode,
    ytelsegrunnlag,
  );
  const gjeldendeDekningsgrad = finnDekningsgrad(bgperiode.beregningsgrunnlagPeriodeFom);
  return (
    <>
      {erBeløpSatt(beregningsgrunnlagFL) &&
        lagBeskrivelseMedBeløpRad('Beregningsgrunnlag.Frisinn.BeregningsgrunnlagFL', beregningsgrunnlagFL || 0)}
      {erBeløpSatt(beregningsgrunnlagFL) &&
        lagRedusertBGRad(
          'Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertFL',
          beregningsgrunnlagFL || 0,
          'Beregningsgrunnlag.Søknad.LøpendeFL',
          løpendeInntektFL,
          gjeldendeDekningsgrad,
        )}
      {erBeløpSatt(beregningsgrunnlagSN) &&
        lagBeskrivelseMedBeløpRad('Beregningsgrunnlag.Frisinn.BeregningsgrunnlagSN', beregningsgrunnlagSN || 0)}
      {erBeløpSatt(beregningsgrunnlagSN) &&
        lagRedusertBGRad(
          'Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertSN',
          beregningsgrunnlagSN || 0,
          'Beregningsgrunnlag.Søknad.LøpendeSN',
          løpendeInntektSN,
          gjeldendeDekningsgrad,
        )}
      <FlexRow>
        <FlexColumn>
          <div className={beregningStyles.colDevider} />
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn className={beregningStyles.atflTabellAktivitet}>
          <Detail size="small">
            <FormattedMessage id="Beregningsgrunnlag.Resultat.Dagsats" />
          </Detail>
        </FlexColumn>
        <FlexColumn className={beregningStyles.atflTabellInntekt}>
          <BodyShort size="small">{formatCurrencyNoKr(bgperiode.dagsats)}</BodyShort>
        </FlexColumn>
      </FlexRow>
    </>
  );
};

type OwnProps = {
  bgperiode: BeregningsgrunnlagPeriodeProp;
  ytelsegrunnlag: FrisinnGrunnlag;
  frilansGrunnlag: number;
  næringGrunnlag: number;
};

const BeregningsresultatPeriode: FunctionComponent<OwnProps> = ({
  bgperiode,
  ytelsegrunnlag,
  frilansGrunnlag,
  næringGrunnlag,
}) => {
  const statuserDetErSøktOm = statuserDetErSøktOmIPerioden(bgperiode, ytelsegrunnlag);
  if (!statuserDetErSøktOm || statuserDetErSøktOm.length < 1) {
    return null;
  }
  const visningFrilans = frilansGrunnlag >= 0 ? frilansGrunnlag : 0;
  const visningNæring = næringGrunnlag >= 0 ? næringGrunnlag : 0;
  return (
    <div>
      <VerticalSpacer eightPx />
      <FlexRow>
        <FlexColumn>
          <Label size="small">
            {lagPeriodeHeader(bgperiode.beregningsgrunnlagPeriodeFom, bgperiode.beregningsgrunnlagPeriodeTom)}
          </Label>
        </FlexColumn>
      </FlexRow>
      {lagPeriodeblokk(bgperiode, ytelsegrunnlag, visningFrilans, visningNæring)}
    </div>
  );
};

export default BeregningsresultatPeriode;
