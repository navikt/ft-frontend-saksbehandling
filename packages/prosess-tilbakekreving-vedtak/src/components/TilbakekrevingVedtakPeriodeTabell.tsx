import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Label } from '@navikt/ds-react/esm';

import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { PeriodLabel, Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { BeregningResultatPeriode } from '@navikt/ft-types';
import { KodeverkType } from '@navikt/ft-kodeverk';

import styles from './tilbakekrevingVedtakPeriodeTabell.module.css';

const headerTextCodes = [
  'TilbakekrevingVedtakPeriodeTabell.Periode',
  'TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop',
  'TilbakekrevingVedtakPeriodeTabell.Vurdering',
  'TilbakekrevingVedtakPeriodeTabell.AndelAvBelop',
  'TilbakekrevingVedtakPeriodeTabell.Renter',
  'TilbakekrevingVedtakPeriodeTabell.ForSkatt',
  'TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves',
];

interface OwnProps {
  perioder: BeregningResultatPeriode[];
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string;
}

const TilbakekrevingVedtakPeriodeTabell: FunctionComponent<OwnProps> = ({ perioder, getKodeverknavn }) => {
  const rader = perioder
    .map(periode => (
      <TableRow key={periode.periode.fom}>
        <TableColumn>
          <BodyShort size="small">
            <PeriodLabel dateStringFom={periode.periode.fom} dateStringTom={periode.periode.tom} />
          </BodyShort>
        </TableColumn>
        <TableColumn>
          <BodyShort size="small">{formatCurrencyNoKr(periode.feilutbetaltBeløp)}</BodyShort>
        </TableColumn>
        <TableColumn>
          <BodyShort size="small">{getKodeverknavn(periode.vurdering, KodeverkType.AKTSOMHET)}</BodyShort>
        </TableColumn>
        <TableColumn>
          <BodyShort size="small">
            {periode.andelAvBeløp !== undefined && periode.andelAvBeløp !== null ? `${periode.andelAvBeløp}%` : ''}
          </BodyShort>
        </TableColumn>
        <TableColumn>
          <BodyShort size="small">{periode.renterProsent ? `${periode.renterProsent}%` : ''}</BodyShort>
        </TableColumn>
        <TableColumn>
          <BodyShort size="small">{formatCurrencyNoKr(periode.tilbakekrevingBeløp)}</BodyShort>
        </TableColumn>
        <TableColumn>
          <BodyShort size="small">{formatCurrencyNoKr(periode.tilbakekrevingBeløpEtterSkatt)}</BodyShort>
        </TableColumn>
      </TableRow>
    ))
    .concat(
      <TableRow key="sum">
        <TableColumn>
          <BodyShort size="small">
            <FormattedMessage id="TilbakekrevingVedtakPeriodeTabell.Sum" />
          </BodyShort>
        </TableColumn>
        <TableColumn>
          <BodyShort size="small">
            {formatCurrencyNoKr(perioder.reduce((sum, periode) => sum + periode.feilutbetaltBeløp, 0))}
          </BodyShort>
        </TableColumn>
        <TableColumn />
        <TableColumn />
        <TableColumn />
        <TableColumn>
          <Label size="small">
            {formatCurrencyNoKr(perioder.reduce((sum, periode) => sum + periode.tilbakekrevingBeløp, 0))}
          </Label>
        </TableColumn>
        <TableColumn>
          <Label size="small">
            {formatCurrencyNoKr(perioder.reduce((sum, periode) => sum + periode.tilbakekrevingBeløpEtterSkatt, 0))}
          </Label>
        </TableColumn>
      </TableRow>,
    );

  return (
    <div className={styles.table}>
      <Table noHover headerTextCodes={headerTextCodes}>
        {rader}
      </Table>
    </div>
  );
};

export default TilbakekrevingVedtakPeriodeTabell;
