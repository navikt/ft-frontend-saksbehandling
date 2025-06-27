import { FormattedMessage } from 'react-intl';

import { Table } from '@navikt/ds-react';

import { BeløpLabel, PeriodLabel } from '@navikt/ft-ui-komponenter';

import { BeregningResultatPeriode } from '../types/BeregningsresultatTilbakekreving';
import { KodeverkTilbakeForPanel } from '../types/KodeverkTilbakeForPanel';

interface Props {
  perioder: BeregningResultatPeriode[];
  kodeverkSamlingFpTilbake: KodeverkTilbakeForPanel;
}

export const TilbakekrevingVedtakPeriodeTabell = ({ perioder, kodeverkSamlingFpTilbake }: Props) => (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell scope="col">
          <FormattedMessage id="TilbakekrevingVedtakPeriodeTabell.Periode" />
        </Table.HeaderCell>
        <Table.HeaderCell scope="col" align="right">
          <FormattedMessage id="TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop" />
        </Table.HeaderCell>
        <Table.HeaderCell scope="col">
          <FormattedMessage id="TilbakekrevingVedtakPeriodeTabell.Vurdering" />
        </Table.HeaderCell>
        <Table.HeaderCell scope="col" align="right">
          <FormattedMessage id="TilbakekrevingVedtakPeriodeTabell.AndelAvBelop" />
        </Table.HeaderCell>
        <Table.HeaderCell scope="col" align="right">
          <FormattedMessage id="TilbakekrevingVedtakPeriodeTabell.Renter" />
        </Table.HeaderCell>
        <Table.HeaderCell scope="col" align="right">
          <FormattedMessage id="TilbakekrevingVedtakPeriodeTabell.ForSkatt" />
        </Table.HeaderCell>
        <Table.HeaderCell scope="col" align="right">
          <FormattedMessage id="TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves" />
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {perioder.map(periode => (
        <Table.Row key={periode.periode.fom}>
          <Table.DataCell>
            <PeriodLabel dateStringFom={periode.periode.fom} dateStringTom={periode.periode.tom} />
          </Table.DataCell>
          <Table.DataCell align="right">
            <BeløpLabel beløp={periode.feilutbetaltBeløp} />
          </Table.DataCell>
          <Table.DataCell>
            {kodeverkSamlingFpTilbake['Aktsomhet'].find(a => a.kode === periode.vurdering)?.navn}
          </Table.DataCell>
          <Table.DataCell align="right">
            {periode.andelAvBeløp !== undefined && periode.andelAvBeløp !== null ? `${periode.andelAvBeløp}%` : ''}
          </Table.DataCell>
          <Table.DataCell align="right">{periode.renterProsent ? `${periode.renterProsent}%` : ''}</Table.DataCell>
          <Table.DataCell align="right">
            <BeløpLabel beløp={periode.tilbakekrevingBeløp} />
          </Table.DataCell>
          <Table.DataCell align="right">
            <BeløpLabel beløp={periode.tilbakekrevingBeløpEtterSkatt} />
          </Table.DataCell>
        </Table.Row>
      ))}
      <Table.Row key="sum">
        <Table.HeaderCell>
          <FormattedMessage id="TilbakekrevingVedtakPeriodeTabell.Sum" />
        </Table.HeaderCell>
        <Table.HeaderCell align="right">
          <BeløpLabel beløp={perioder.reduce((sum, periode) => sum + periode.feilutbetaltBeløp, 0)} />
        </Table.HeaderCell>
        <Table.DataCell />
        <Table.DataCell />
        <Table.DataCell />
        <Table.HeaderCell align="right">
          <BeløpLabel beløp={perioder.reduce((sum, periode) => sum + periode.tilbakekrevingBeløp, 0)} />
        </Table.HeaderCell>
        <Table.HeaderCell align="right">
          <BeløpLabel beløp={perioder.reduce((sum, periode) => sum + periode.tilbakekrevingBeløpEtterSkatt, 0)} />
        </Table.HeaderCell>
      </Table.Row>
    </Table.Body>
  </Table>
);
