import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Normaltekst, Undertittel } from 'nav-frontend-typografi';
import { BeregningsgrunnlagPeriodeProp } from '@navikt/ft-types';
import dayjs from 'dayjs';
import { DDMMYYYY_DATE_FORMAT, formatCurrencyNoKr, TIDENES_ENDE } from '@navikt/ft-utils';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
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
        fom: moment(fom).format(DDMMYYYY_DATE_FORMAT),
        tom: tom ? moment(tom).format(DDMMYYYY_DATE_FORMAT) : '',
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
  <Row>
    <Column xs="10">
      <FormattedMessage id={tekstId} />
    </Column>
    <Column xs="2">
      <Normaltekst>{formatCurrencyNoKr(beløp)}</Normaltekst>
    </Column>
  </Row>
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
      <Row>
        <Column xs="10">
          <FormattedMessage id={tekstIdRedusert} values={{ grad: gjeldendeDekningsgrad }} />
        </Column>
        <Column xs="2">
          <Normaltekst>{formatCurrencyNoKr(redusert)}</Normaltekst>
        </Column>
      </Row>
      {(løpendeBeløp || løpendeBeløp === 0) && (
        <Row>
          <Column xs="10">
            <FormattedMessage id={tekstIdLøpende} />
          </Column>
          <Column xs="2">
            <Normaltekst>{formatCurrencyNoKr(løpendeBeløp)}</Normaltekst>
          </Column>
        </Row>
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
      <Row>
        <Column xs="12" className={beregningStyles.noPaddingRight}>
          <div className={beregningStyles.colDevider} />
        </Column>
      </Row>
      <Row>
        <Column xs="10">
          <Undertittel>
            <FormattedMessage id="Beregningsgrunnlag.Resultat.Dagsats" />
          </Undertittel>
        </Column>
        <Column xs="2">
          <Normaltekst>{formatCurrencyNoKr(bgperiode.dagsats)}</Normaltekst>
        </Column>
      </Row>
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
      <Row>
        <Column xs="10">
          <Element>
            {lagPeriodeHeader(bgperiode.beregningsgrunnlagPeriodeFom, bgperiode.beregningsgrunnlagPeriodeTom)}
          </Element>
        </Column>
      </Row>
      {lagPeriodeblokk(bgperiode, ytelsegrunnlag, visningFrilans, visningNæring)}
    </div>
  );
};

export default BeregningsresultatPeriode;
