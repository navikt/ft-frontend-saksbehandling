import { FormattedMessage } from 'react-intl';

import { ErrorMessage, Table } from '@navikt/ds-react';

import type { AktivitetStatus } from '@navikt/ft-types';
import { BeløpLabel, NoWrap } from '@navikt/ft-ui-komponenter';

import type { KodeverkForPanel } from '../../types/KodeverkForPanel';
import type { TabellData } from './dagsatserUtils';

import styles from './dagsats.module.css';

interface Props {
  tabellData: TabellData;
  kodeverkSamling: KodeverkForPanel;
}

export const AndelInntektTabell = ({
  tabellData: { andelerPerStatus, totalAndelsInntekt },
  kodeverkSamling,
}: Props) => {
  const tabellRader = andelerPerStatus.flatMap(rad => [
    <Table.Row shadeOnHover={false} key={`andel_${rad.aktivitetStatus}`}>
      <Table.DataCell textSize="small">{formaterAktivitetStatus(rad.aktivitetStatus, kodeverkSamling)}</Table.DataCell>
      <Table.DataCell textSize="small" align="right">
        {rad.ferdigBeregnetInntekt !== undefined ? (
          <BeløpLabel beløp={rad.ferdigBeregnetInntekt} kr />
        ) : (
          <ErrorMessage size="small">
            <NoWrap>
              <FormattedMessage id="Dagsats.IkkeBeregnet" />
            </NoWrap>
          </ErrorMessage>
        )}
      </Table.DataCell>
    </Table.Row>,
    ...(rad.bortfaltNaturalytelse
      ? [
          <Table.Row shadeOnHover={false} key={`naturalytelse_${rad.aktivitetStatus}`}>
            <Table.DataCell textSize="small">
              <FormattedMessage id="Dagsats.Naturalytelser" />
            </Table.DataCell>
            <Table.DataCell textSize="small" align="right">
              <BeløpLabel beløp={rad.bortfaltNaturalytelse} kr />
            </Table.DataCell>
          </Table.Row>,
        ]
      : []),
  ]);

  return (
    <Table size="small" className={styles.table}>
      <Table.Body>{tabellRader}</Table.Body>
      {!!totalAndelsInntekt && tabellRader.length > 1 && (
        <tfoot>
          <Table.Row shadeOnHover={false}>
            <Table.HeaderCell textSize="small">
              <FormattedMessage id="Dagsats.TotalÅrsinntekt" />
            </Table.HeaderCell>
            <Table.HeaderCell textSize="small" align="right">
              <BeløpLabel beløp={totalAndelsInntekt} kr />
            </Table.HeaderCell>
          </Table.Row>
        </tfoot>
      )}
    </Table>
  );
};

const formaterAktivitetStatus = (status: AktivitetStatus, kodeverkSamling: KodeverkForPanel) => {
  const aktivitetStatus = kodeverkSamling['AktivitetStatus'].find(as => as.kode === status)?.navn ?? status;
  return <FormattedMessage id="Dagsats.FastsattÅrsinntekt" values={{ aktivitetStatus }} />;
};
