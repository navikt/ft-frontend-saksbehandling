import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Label, VStack } from '@navikt/ds-react';

import { BeløpLabel, LabeledValue, PeriodLabel } from '@navikt/ft-ui-komponenter';
import { calcDaysAndWeeks } from '@navikt/ft-utils';

import type { DataForPeriode } from '../../types/dataForPeriode';
import type { KodeverkTilbakeForPanel } from '../../types/kodeverkTilbakeForPanel';

import styles from './periodeInformasjon.module.css';

interface Props {
  periode: DataForPeriode;
  kodeverkSamlingFpTilbake: KodeverkTilbakeForPanel;
}

export const PeriodeInformasjon = ({
  periode: { fom, tom, feilutbetaling, årsak },
  kodeverkSamlingFpTilbake,
}: Props) => {
  const daysAndWeeks = calcDaysAndWeeks(fom, tom);
  const årsakHendelseNavn = kodeverkSamlingFpTilbake['HendelseType'].find(ht => ht.kode === årsak.hendelseType)?.navn;

  return (
    <VStack gap="space-8" className={styles.infoSummary}>
      <HStack gap="space-8">
        <Label as="span" size="small">
          <PeriodLabel dateStringFom={fom} dateStringTom={tom} />
        </Label>
        <BodyShort as="span" size="small">
          ({daysAndWeeks.formattedString})
        </BodyShort>
      </HStack>
      <HStack gap="space-32">
        <LabeledValue
          size="small"
          horizontal
          label={<FormattedMessage id="PeriodeInformasjon.Feilutbetaling" />}
          value={<BeløpLabel rød={feilutbetaling > 0} beløp={feilutbetaling} kr />}
        />
        {årsakHendelseNavn && <BodyShort size="small">{årsakHendelseNavn}</BodyShort>}
      </HStack>
    </VStack>
  );
};
