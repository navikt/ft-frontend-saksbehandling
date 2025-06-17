import { FormattedMessage } from 'react-intl';

import { BodyShort, Table } from '@navikt/ds-react';

import { formatCurrencyNoKr } from '@navikt/ft-utils';

import styles from './tilbakekrevingAktivitetTabell.module.css';

export interface Props {
  ytelser: {
    aktivitet: string;
    belop: number;
  }[];
}

export const TilbakekrevingAktivitetTabell = ({ ytelser }: Props) => {
  if (ytelser.length === 0) {
    return null;
  }
  let counter = 0;
  return (
    <Table className={styles.feilutbetalingTable}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="TilbakekrevingAktivitetTabell.Aktivitet" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="TilbakekrevingAktivitetTabell.FeilutbetaltBelop" />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {ytelser.map(y => {
          counter += 1;
          return (
            <Table.Row key={y.aktivitet + y.belop + counter}>
              <Table.DataCell>
                <BodyShort size="small">{y.aktivitet}</BodyShort>
              </Table.DataCell>
              <Table.DataCell>
                <BodyShort size="small">{formatCurrencyNoKr(y.belop)}</BodyShort>
              </Table.DataCell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
