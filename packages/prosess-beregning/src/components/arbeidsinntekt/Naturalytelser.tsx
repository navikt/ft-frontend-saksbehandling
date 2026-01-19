import { FormattedMessage } from 'react-intl';

import { Table } from '@navikt/ds-react';

import { BeløpLabel, LabeledValue, PeriodLabel } from '@navikt/ft-ui-komponenter';

import { type NaturalytelseEndring } from './naturalytelserUtils';

import styles from './arbeidsinntekt.module.css';

interface Props {
  naturalytelseEndringer: NaturalytelseEndring[];
}

export const Naturalytelser = ({ naturalytelseEndringer }: Props) => {
  return (
    <LabeledValue
      horizontal={naturalytelseEndringer.length === 1}
      size="small"
      label={<FormattedMessage id="Arbeidsinntekt.Naturalytelse" />}
      value={
        naturalytelseEndringer.length === 1 ? (
          <FormattedMessage
            id="Arbeidsinntekt.Naturalytelse.EnPeriode"
            values={{
              beløpPrMåned: <BeløpLabel beløp={naturalytelseEndringer[0].beløpPrMåned} kr />,
              beløpPrÅr: <BeløpLabel beløp={naturalytelseEndringer[0].beløpPrÅr} kr />,
              periode: (
                <PeriodLabel
                  dateStringFom={naturalytelseEndringer[0].fom}
                  dateStringTom={naturalytelseEndringer[0].tom}
                />
              ),
            }}
          />
        ) : (
          <Table size="small" className={styles.table}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell textSize="small" align="right">
                  <FormattedMessage id="Tabell.Måned" />
                </Table.HeaderCell>
                <Table.HeaderCell textSize="small" align="right">
                  <FormattedMessage id="Tabell.År" />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {naturalytelseEndringer.map(endring => (
                <Table.Row key={endring.fom}>
                  <Table.DataCell textSize="small">
                    <PeriodLabel dateStringFom={endring.fom} dateStringTom={endring.tom} />
                  </Table.DataCell>
                  <Table.DataCell textSize="small" align="right">
                    <BeløpLabel beløp={endring.beløpPrMåned} kr />
                  </Table.DataCell>
                  <Table.DataCell textSize="small" align="right">
                    <BeløpLabel beløp={endring.beløpPrÅr} kr />
                  </Table.DataCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )
      }
    />
  );
};
