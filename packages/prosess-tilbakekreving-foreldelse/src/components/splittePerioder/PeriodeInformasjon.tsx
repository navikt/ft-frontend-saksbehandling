import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Label, Spacer, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { calcDaysAndWeeks, DDMMYYYY_DATE_FORMAT, formatCurrencyNoKr } from '@navikt/ft-utils';

import styles from './periodeInformasjon.module.css';

interface Props {
  fom: string;
  tom: string;
  feilutbetaling: number;
}

/**
 * PeriodeInformasjon
 *
 * Tilbakekreving periode oppsummering
 */
export const PeriodeInformasjon = ({ fom, tom, feilutbetaling }: Props) => {
  const daysAndWeeks = calcDaysAndWeeks(fom, tom);
  return (
    <VStack gap="space-8" className={styles.infoSummary}>
      <HStack>
        <Label size="small">
          {`${dayjs(fom).format(DDMMYYYY_DATE_FORMAT)} - ${dayjs(tom).format(DDMMYYYY_DATE_FORMAT)}`}
        </Label>
        <Spacer />
        <BodyShort size="small">{daysAndWeeks.formattedString}</BodyShort>
      </HStack>
      <HStack gap="space-16">
        <BodyShort size="small" className={styles.resultName}>
          <FormattedMessage id="PeriodeInformasjon.Feilutbetaling" />:
          <span className={feilutbetaling ? styles.redNumber : styles.positivNumber}>
            {formatCurrencyNoKr(feilutbetaling)}
          </span>
        </BodyShort>
      </HStack>
    </VStack>
  );
};
