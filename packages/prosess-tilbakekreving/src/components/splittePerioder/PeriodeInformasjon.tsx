import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Label, BodyShort } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
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
const PeriodeInformasjon: FunctionComponent<OwnProps> = ({ fom, tom, feilutbetaling, arsakHendelseNavn }) => {
  const daysAndWeeks = calcDaysAndWeeks(fom, tom);
  return (
    <div className={styles.infoSummary}>
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Label size="small">
              {`${moment(fom).format(DDMMYYYY_DATE_FORMAT)} - ${moment(tom).format(DDMMYYYY_DATE_FORMAT)}`}
            </Label>
          </FlexColumn>
          <FlexColumn>
            <BodyShort size="small">
              <FormattedMessage
                id={daysAndWeeks.id}
                values={{
                  weeks: daysAndWeeks.weeks,
                  days: daysAndWeeks.days,
                }}
              />
            </BodyShort>
          </FlexColumn>
        </FlexRow>
        <div className={styles.resultSum}>
          <FlexRow className={styles.redNumbers}>
            <FlexColumn>
              <BodyShort size="small" className={styles.resultName}>
                <FormattedMessage id="PeriodeInformasjon.Feilutbetaling" />:
                <span className={feilutbetaling ? styles.redNumber : styles.positivNumber}>
                  {formatCurrencyNoKr(feilutbetaling)}
                </span>
              </BodyShort>
            </FlexColumn>
            <FlexColumn>
              {arsakHendelseNavn && (
                <BodyShort size="small" className={styles.resultName}>
                  {arsakHendelseNavn}
                </BodyShort>
              )}
            </FlexColumn>
          </FlexRow>
        </div>
      </FlexContainer>
    </div>
  );
};

export default PeriodeInformasjon;
