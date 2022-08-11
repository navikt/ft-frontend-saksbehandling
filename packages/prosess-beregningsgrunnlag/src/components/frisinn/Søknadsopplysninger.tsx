import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import { FormattedMessage } from 'react-intl';

import { Beregningsgrunnlag } from '@navikt/ft-types';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FrisinnGrunnlag, FrisinnPeriode } from './FrisinnUtils';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';

const lagPerioderadMedTekst = (tekstId: string, fom: string, tom: string) => (
  <Row>
    <Column xs="12">
      <Normaltekst>
        <FormattedMessage
          id={tekstId}
          values={{
            fom: dayjs(fom).format(DDMMYYYY_DATE_FORMAT),
            tom: dayjs(tom).format(DDMMYYYY_DATE_FORMAT),
          }}
        />
      </Normaltekst>
    </Column>
  </Row>
);

const lagSøktYtelseRadPeriode = (periode: FrisinnPeriode) => {
  const snAndel = periode.frisinnAndeler.find(
    andel => andel.statusSøktFor === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
  );
  const flAndel = periode.frisinnAndeler.find(andel => andel.statusSøktFor === AktivitetStatus.FRILANSER);
  return (
    <div key={periode.fom}>
      {flAndel && lagPerioderadMedTekst('Beregningsgrunnlag.Søknad.SøktYtelseFL', periode.fom, periode.tom)}
      {snAndel && lagPerioderadMedTekst('Beregningsgrunnlag.Søknad.SøktYtelseSN', periode.fom, periode.tom)}
    </div>
  );
};
//
type OwnProps = {
  beregningsgrunnlag: Beregningsgrunnlag;
};
const Søknadsopplysninger: FunctionComponent<OwnProps> = ({ beregningsgrunnlag }) => {
  const ytelsegrunnlag = beregningsgrunnlag.ytelsesspesifiktGrunnlag as FrisinnGrunnlag;
  const { frisinnPerioder } = ytelsegrunnlag;
  return (
    <div>
      <Row>
        <Column xs="12">
          <Element className={beregningStyles.avsnittOverskrift}>
            <FormattedMessage id="Beregningsgrunnlag.Søknad.Tittel" />
          </Element>
        </Column>
      </Row>
      <VerticalSpacer eightPx />
      {Array.isArray(frisinnPerioder) && frisinnPerioder.map(periode => lagSøktYtelseRadPeriode(periode))}
      <VerticalSpacer sixteenPx />
    </div>
  );
};

export default Søknadsopplysninger;
