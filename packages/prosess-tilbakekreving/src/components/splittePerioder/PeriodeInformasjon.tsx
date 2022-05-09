import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Normaltekst } from 'nav-frontend-typografi';

import { calcDaysAndWeeks, DDMMYYYY_DATE_FORMAT, formatCurrencyNoKr } from '@navikt/ft-utils';

import styles from './periodeInformasjon.less';

interface OwnProps {
  fom: string;
  tom: string;
  feilutbetaling: number;
  arsakHendelseNavn?: string;
}

/**
 * PeriodeInformasjon
 *
 * Tilbakekreving periode oppsummering
 *
 * Presentationskomponent
 */
const PeriodeInformasjon: FunctionComponent<OwnProps> = ({
  fom,
  tom,
  feilutbetaling,
  arsakHendelseNavn,
}) => {
  const daysAndWeeks = calcDaysAndWeeks(fom, tom);
  return (
    <Row>
      <Column md="8">
        <div className={styles.infoSummary}>
          <Row>
            <Column xs="6">
              <Element>
                { `${moment(fom).format(DDMMYYYY_DATE_FORMAT)} - ${moment(tom).format(DDMMYYYY_DATE_FORMAT)}` }
              </Element>
            </Column>
            <Column xs="6">
              <Normaltekst>
                <FormattedMessage
                  id={daysAndWeeks.id}
                  values={{
                    weeks: daysAndWeeks.weeks,
                    days: daysAndWeeks.days,
                  }}
                />
              </Normaltekst>
            </Column>
          </Row>
          <div className={styles.resultSum}>
            <Row className={styles.redNumbers}>
              <Column xs="6">
                <Normaltekst className={styles.resultName}>
                  <FormattedMessage id="PeriodeInformasjon.Feilutbetaling" />
                  :
                  <span className={feilutbetaling ? styles.redNumber : styles.positivNumber}>{ formatCurrencyNoKr(feilutbetaling) }</span>
                </Normaltekst>
              </Column>
              <Column xs="6">
                {arsakHendelseNavn && (
                  <Normaltekst className={styles.resultName}>
                    {arsakHendelseNavn}
                  </Normaltekst>
                )}
              </Column>
            </Row>
          </div>
        </div>
      </Column>
    </Row>
  );
};

export default PeriodeInformasjon;
