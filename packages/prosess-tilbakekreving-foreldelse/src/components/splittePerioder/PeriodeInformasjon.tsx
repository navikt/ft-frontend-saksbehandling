import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Label, BodyShort } from '@navikt/ds-react';

import { calcDaysAndWeeks, DDMMYYYY_DATE_FORMAT, formatCurrencyNoKr } from '@navikt/ft-utils';

import styles from './periodeInformasjon.less';

interface PureOwnProps {
  fom: string;
  tom: string;
  feilutbetaling: number;
}

/**
 * PeriodeInformasjon
 *
 * Tilbakekreving periode oppsummering
 *
 * Presentationskomponent
 */
const PeriodeInformasjon: FunctionComponent<PureOwnProps> = ({ fom, tom, feilutbetaling }) => {
  const daysAndWeeks = calcDaysAndWeeks(fom, tom);
  return (
    <Row>
      <Column md="8">
        <div className={styles.infoSummary}>
          <Row>
            <Column xs="6">
              <Label size="small">
                {`${moment(fom).format(DDMMYYYY_DATE_FORMAT)} - ${moment(tom).format(DDMMYYYY_DATE_FORMAT)}`}
              </Label>
            </Column>
            <Column xs="6">
              <BodyShort size="small">
                <FormattedMessage
                  id={daysAndWeeks.id}
                  values={{
                    weeks: daysAndWeeks.weeks,
                    days: daysAndWeeks.days,
                  }}
                />
              </BodyShort>
            </Column>
          </Row>
          <div className={styles.resultSum}>
            <Row className={styles.redNumbers}>
              <Column xs="6">
                <BodyShort size="small" className={styles.resultName}>
                  <FormattedMessage id="PeriodeInformasjon.Feilutbetaling" />:
                  <span className={feilutbetaling ? styles.redNumber : styles.positivNumber}>
                    {formatCurrencyNoKr(feilutbetaling)}
                  </span>
                </BodyShort>
              </Column>
            </Row>
          </div>
        </div>
      </Column>
    </Row>
  );
};

export default PeriodeInformasjon;
