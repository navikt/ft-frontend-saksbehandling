import { FormattedMessage } from 'react-intl';

import { BodyShort, Label, Table } from '@navikt/ds-react';

import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { BeregningResultatPeriode } from '../types/BeregningsresultatTilbakekreving';
import { KodeverkFpTilbakeForPanel } from '../types/KodeverkFpTilbakeForPanelTv';

import styles from './tilbakekrevingVedtakPeriodeTabell.module.css';

interface Props {
  perioder: BeregningResultatPeriode[];
  kodeverkSamlingFpTilbake: KodeverkFpTilbakeForPanel;
}

export const TilbakekrevingVedtakPeriodeTabell = ({ perioder, kodeverkSamlingFpTilbake }: Props) => {
  const rader = perioder
    .map(periode => (
      <Table.Row key={periode.periode.fom}>
        <Table.DataCell>
          <BodyShort size="small">
            <PeriodLabel dateStringFom={periode.periode.fom} dateStringTom={periode.periode.tom} />
          </BodyShort>
        </Table.DataCell>
        <Table.DataCell>
          <BodyShort size="small">{formatCurrencyNoKr(periode.feilutbetaltBeløp)}</BodyShort>
        </Table.DataCell>
        <Table.DataCell>
          <BodyShort size="small">
            {kodeverkSamlingFpTilbake['Aktsomhet'].find(a => a.kode === periode.vurdering)?.navn}
          </BodyShort>
        </Table.DataCell>
        <Table.DataCell>
          <BodyShort size="small">
            {periode.andelAvBeløp !== undefined && periode.andelAvBeløp !== null ? `${periode.andelAvBeløp}%` : ''}
          </BodyShort>
        </Table.DataCell>
        <Table.DataCell>
          <BodyShort size="small">{periode.renterProsent ? `${periode.renterProsent}%` : ''}</BodyShort>
        </Table.DataCell>
        <Table.DataCell>
          <BodyShort size="small">{formatCurrencyNoKr(periode.tilbakekrevingBeløp)}</BodyShort>
        </Table.DataCell>
        <Table.DataCell>
          <BodyShort size="small">{formatCurrencyNoKr(periode.tilbakekrevingBeløpEtterSkatt)}</BodyShort>
        </Table.DataCell>
      </Table.Row>
    ))
    .concat(
      <Table.Row key="sum">
        <Table.DataCell>
          <BodyShort size="small">
            <FormattedMessage id="TilbakekrevingVedtakPeriodeTabell.Sum" />
          </BodyShort>
        </Table.DataCell>
        <Table.DataCell>
          <BodyShort size="small">
            {formatCurrencyNoKr(perioder.reduce((sum, periode) => sum + periode.feilutbetaltBeløp, 0))}
          </BodyShort>
        </Table.DataCell>
        <Table.DataCell />
        <Table.DataCell />
        <Table.DataCell />
        <Table.DataCell>
          <Label size="small">
            {formatCurrencyNoKr(perioder.reduce((sum, periode) => sum + periode.tilbakekrevingBeløp, 0))}
          </Label>
        </Table.DataCell>
        <Table.DataCell>
          <Label size="small">
            {formatCurrencyNoKr(perioder.reduce((sum, periode) => sum + periode.tilbakekrevingBeløpEtterSkatt, 0))}
          </Label>
        </Table.DataCell>
      </Table.Row>,
    );

  return (
    <div className={styles.table}>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="TilbakekrevingVedtakPeriodeTabell.Periode" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="TilbakekrevingVedtakPeriodeTabell.Vurdering" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="TilbakekrevingVedtakPeriodeTabell.AndelAvBelop" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="TilbakekrevingVedtakPeriodeTabell.Renter" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="TilbakekrevingVedtakPeriodeTabell.ForSkatt" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{rader}</Table.Body>
      </Table>
    </div>
  );
};
