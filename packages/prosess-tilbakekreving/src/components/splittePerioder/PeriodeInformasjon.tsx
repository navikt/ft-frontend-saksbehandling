import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Label, Spacer } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { calcDaysAndWeeks, DDMMYYYY_DATE_FORMAT, formatCurrencyNoKr } from '@navikt/ft-utils';

import styles from './periodeInformasjon.module.css';

export interface Props {
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
export const PeriodeInformasjon = ({ fom, tom, feilutbetaling, arsakHendelseNavn }: Props) => {
  const daysAndWeeks = calcDaysAndWeeks(fom, tom);
  return (
    <div className={styles.infoSummary}>
      <HStack>
        <Label size="small">
          {`${dayjs(fom).format(DDMMYYYY_DATE_FORMAT)} - ${dayjs(tom).format(DDMMYYYY_DATE_FORMAT)}`}
        </Label>
        <Spacer />
        <BodyShort size="small">{daysAndWeeks.formattedString}</BodyShort>
      </HStack>
      <VerticalSpacer sixteenPx />
      <HStack gap="4">
        <BodyShort size="small" className={styles.resultName}>
          <FormattedMessage id="PeriodeInformasjon.Feilutbetaling" />:
          <span className={feilutbetaling ? styles.redNumber : styles.positivNumber}>
            {formatCurrencyNoKr(feilutbetaling)}
          </span>
        </BodyShort>
        {arsakHendelseNavn && (
          <BodyShort size="small" className={styles.resultName}>
            {arsakHendelseNavn}
          </BodyShort>
        )}
      </HStack>
    </div>
  );
};
