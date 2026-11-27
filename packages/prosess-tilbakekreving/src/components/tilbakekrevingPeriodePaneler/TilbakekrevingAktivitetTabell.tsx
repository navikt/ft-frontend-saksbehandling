import { FormattedMessage } from 'react-intl';

import { Table } from '@navikt/ds-react';

import { BeløpLabel } from '@navikt/ft-ui-komponenter';

import styles from './tilbakekrevingAktivitetTabell.module.css';

interface Props {
  ytelser: {
    aktivitet: string;
    belop: number;
  }[];
}

export const TilbakekrevingAktivitetTabell = ({ ytelser }: Props) => {
  if (ytelser.length === 0) {
    return null;
  }

  return (
    <Table className={styles.feilutbetalingTable} size="small">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col" textSize="small">
            <FormattedMessage id="TilbakekrevingAktivitetTabell.Aktivitet" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col" textSize="small">
            <FormattedMessage id="TilbakekrevingAktivitetTabell.FeilutbetaltBelop" />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {ytelser.map(y => (
          <Table.Row key={y.aktivitet + y.belop}>
            <Table.DataCell textSize="small">{y.aktivitet}</Table.DataCell>
            <Table.DataCell textSize="small">
              <BeløpLabel beløp={y.belop} />
            </Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
