import React, { FunctionComponent } from 'react';
import { BodyShort } from '@navikt/ds-react';

import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';

import styles from './tilbakekrevingAktivitetTabell.module.css';

const headerTextCodes = ['TilbakekrevingAktivitetTabell.Aktivitet', 'TilbakekrevingAktivitetTabell.FeilutbetaltBelop'];

export interface OwnProps {
  ytelser: {
    aktivitet: string;
    belop: number;
  }[];
}

const TilbakekrevingAktivitetTabell: FunctionComponent<OwnProps> = ({ ytelser }) => {
  if (ytelser.length === 0) {
    return null;
  }
  let counter = 0;
  return (
    <Table headerTextCodes={headerTextCodes} noHover classNameTable={styles.feilutbetalingTable}>
      {ytelser.map(y => {
        counter += 1;
        return (
          <TableRow key={y.aktivitet + y.belop + counter}>
            <TableColumn>
              <BodyShort size="small">{y.aktivitet}</BodyShort>
            </TableColumn>
            <TableColumn>
              <BodyShort size="small">{formatCurrencyNoKr(y.belop)}</BodyShort>
            </TableColumn>
          </TableRow>
        );
      })}
    </Table>
  );
};

export default TilbakekrevingAktivitetTabell;
