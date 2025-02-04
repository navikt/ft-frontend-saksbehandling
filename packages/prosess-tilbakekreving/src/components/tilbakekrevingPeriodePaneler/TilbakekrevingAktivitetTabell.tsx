import { BodyShort } from '@navikt/ds-react';

import { Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import styles from './tilbakekrevingAktivitetTabell.module.css';

const headerTextCodes = ['TilbakekrevingAktivitetTabell.Aktivitet', 'TilbakekrevingAktivitetTabell.FeilutbetaltBelop'];

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
