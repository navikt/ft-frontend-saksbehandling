import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import { Table } from '@navikt/ds-react';

import { BeløpLabel } from '@navikt/ft-ui-komponenter';

import { type TransformertRegisterinntekter } from '../registerinntekterUtils';

import styles from './registerinntekterTabell.module.css';

interface Props {
  transformerteRegisterinntekter: TransformertRegisterinntekter;
}
export const RegisterinntekterTabell = ({
  transformerteRegisterinntekter: { kilder, grunnlag_8_30, grunnlag_8_28, tabellData, vis_8_28 },
}: Props) => (
  <Table size="small" className={styles.table}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell scope="col" textSize="small">
          <FormattedMessage id="RegisterinntektTabell.Måned" />
        </Table.HeaderCell>
        <Table.HeaderCell scope="col" textSize="small">
          <FormattedMessage id="RegisterinntektTabell.Inntektskilde" />
        </Table.HeaderCell>
        <Table.HeaderCell scope="col" textSize="small" align="right">
          <FormattedMessage id="RegisterinntektTabell.8-30" />
        </Table.HeaderCell>
        {vis_8_28 && (
          <Table.HeaderCell scope="col" textSize="small" align="right">
            <FormattedMessage id="RegisterinntektTabell.8-28" />
          </Table.HeaderCell>
        )}
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {tabellData.map(({ formatertPeriode, kilderForRad, månedinntekt_8_30, månedinntekt_8_28 }) => (
        <Table.Row key={formatertPeriode}>
          <Table.HeaderCell scope="row" textSize="small">
            {formatertPeriode}
          </Table.HeaderCell>
          <Table.DataCell textSize="small">
            {kilderForRad.map((kilde, index) => (
              <Fragment key={kilde}>
                {kilde}
                {index < kilderForRad.length - 1 && <br />}
              </Fragment>
            ))}
          </Table.DataCell>
          <Table.DataCell align="right" textSize="small">
            {kilderForRad.map((kilde, index) => (
              <Fragment key={`${index}-${kilde}`}>
                {<BeløpLabel beløp={månedinntekt_8_30[kilde]?.beløp} kr />}
                {index < kilderForRad.length - 1 && <br />}
              </Fragment>
            ))}
          </Table.DataCell>
          {vis_8_28 && (
            <Table.DataCell align="right" textSize="small">
              {Object.values(månedinntekt_8_28).length > 0 &&
                kilderForRad.map((kilde, index) => (
                  <Fragment key={`${index}-${kilde}`}>
                    {<BeløpLabel beløp={månedinntekt_8_28[kilde]?.beløp} kr />}
                    {index < kilderForRad.length - 1 && <br />}
                  </Fragment>
                ))}
            </Table.DataCell>
          )}
        </Table.Row>
      ))}
    </Table.Body>
    <tfoot>
      {kilder.length > 1 &&
        kilder.map((kilde, index) => (
          <Table.Row key={kilde.label}>
            <Table.HeaderCell scope="row" textSize="small">
              {index === 0 && <FormattedMessage id="Tabell.Subtotal" />}
            </Table.HeaderCell>
            <Table.DataCell textSize="small">{kilde.label}</Table.DataCell>
            <Table.DataCell align="right" textSize="small">
              <BeløpLabel beløp={grunnlag_8_30.subtotal.get(kilde.label)} kr />
            </Table.DataCell>
            {vis_8_28 && (
              <Table.DataCell align="right" textSize="small">
                <BeløpLabel beløp={grunnlag_8_28.subtotal.get(kilde.label)} kr />
              </Table.DataCell>
            )}
          </Table.Row>
        ))}
      <Table.Row>
        <Table.HeaderCell scope="row" colSpan={2} textSize="small">
          <FormattedMessage id="Tabell.Total" />
        </Table.HeaderCell>
        <Table.HeaderCell scope="row" align="right" textSize="small">
          <BeløpLabel beløp={grunnlag_8_30.total} kr />
        </Table.HeaderCell>
        {vis_8_28 && (
          <Table.HeaderCell scope="row" align="right" textSize="small">
            <BeløpLabel beløp={grunnlag_8_28.total} kr />
          </Table.HeaderCell>
        )}
      </Table.Row>
    </tfoot>
  </Table>
);
