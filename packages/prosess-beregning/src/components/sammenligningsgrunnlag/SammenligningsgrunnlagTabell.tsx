import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import { Table } from '@navikt/ds-react';

import { BeløpLabel } from '@navikt/ft-ui-komponenter';

import { type TransformertSammenligningsgrunnlag } from './sammenligningsgrunnlagUtils';

import styles from './sammenligningsgrunnlagTabell.module.css';

interface Props {
  transformertSammenligningsgrunnlag: TransformertSammenligningsgrunnlag;
}
export const SammenligningsgrunnlagTabell = ({
  transformertSammenligningsgrunnlag: { periodeData, alleInntektskilder, totalInntekt },
}: Props) => {
  return (
    <Table size="small" className={styles.table}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col" textSize="small">
            <FormattedMessage id="SammenligningsgrunnlagTabell.Måned" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col" textSize="small">
            <FormattedMessage id="SammenligningsgrunnlagTabell.Inntektskilde" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col" textSize="small" align="right">
            <FormattedMessage id="SammenligningsgrunnlagTabell.Beløp" />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {periodeData
          .map((formatertPeriode, periodeIndex) => {
            const inntektskilderForRad = alleInntektskilder
              .map(({ label, datapunkter }) => ({ label, beløp: datapunkter[periodeIndex] }))
              .filter(({ beløp }) => beløp !== 0);

            return (
              <Table.Row key={formatertPeriode}>
                <Table.HeaderCell scope="row" textSize="small">
                  {formatertPeriode}
                </Table.HeaderCell>
                <Table.DataCell textSize="small">
                  {inntektskilderForRad.map(({ label }, index) => (
                    <Fragment key={label}>
                      {label}
                      {index < inntektskilderForRad.length - 1 && <br />}
                    </Fragment>
                  ))}
                </Table.DataCell>
                <Table.DataCell align="right" textSize="small">
                  {inntektskilderForRad.map(({ beløp }, index) => (
                    <Fragment key={`${index}-${beløp}`}>
                      {<BeløpLabel beløp={beløp} kr />}
                      {index < inntektskilderForRad.length - 1 && <br />}
                    </Fragment>
                  ))}
                  {inntektskilderForRad.length === 0 && '-'}
                </Table.DataCell>
              </Table.Row>
            );
          })
          .reverse()}
      </Table.Body>
      <tfoot>
        {alleInntektskilder.length > 1 &&
          alleInntektskilder.map(({ label, datapunkter }, index) => (
            <Table.Row key={label}>
              <Table.HeaderCell scope="row" textSize="small">
                {index === 0 && <FormattedMessage id="Tabell.Subtotal" />}
              </Table.HeaderCell>
              <Table.DataCell textSize="small">{label}</Table.DataCell>
              <Table.DataCell align="right" textSize="small">
                <BeløpLabel beløp={datapunkter.reduce((acc, beløp) => acc + beløp, 0)} kr />
              </Table.DataCell>
            </Table.Row>
          ))}
        <Table.Row>
          <Table.HeaderCell scope="row" colSpan={2} textSize="small">
            <FormattedMessage id="Sammenligningsgrunnlag.TotalSammenligningsgrunnlag" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="row" align="right" textSize="small">
            <BeløpLabel beløp={totalInntekt} kr />
          </Table.HeaderCell>
        </Table.Row>
      </tfoot>
    </Table>
  );
};
