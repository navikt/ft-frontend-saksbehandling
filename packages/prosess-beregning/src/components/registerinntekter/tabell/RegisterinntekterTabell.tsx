import { FormattedMessage } from 'react-intl';

import { Table } from '@navikt/ds-react';

import { BeløpLabel, TableSum } from '@navikt/ft-ui-komponenter';

import { formaterParagraf, type TransformertRegisterinntekter } from '../registerinntekterUtils';

import styles from './registerinntekterTabell.module.css';

interface Props {
  transformerteRegisterinntekter: TransformertRegisterinntekter;
  textSize?: 'small' | 'medium';
}
export const RegisterinntekterTabell = ({
  transformerteRegisterinntekter: { kilder, grunnlag_8_30, grunnlag_8_28, tabellData, vis_8_28 },
  textSize = 'small',
}: Props) => (
  <Table size="small" className={styles.table}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell scope="col" textSize={textSize}>
          <FormattedMessage id="RegisterinntektTabell.Måned" />
        </Table.HeaderCell>
        <Table.HeaderCell scope="col" textSize={textSize}>
          <FormattedMessage id="RegisterinntektTabell.Inntektskilde" />
        </Table.HeaderCell>
        <Table.HeaderCell scope="col" textSize={textSize} align="right">
          {formaterParagraf('8-30')}
        </Table.HeaderCell>
        {vis_8_28 && (
          <Table.HeaderCell scope="col" textSize={textSize} align="right">
            {formaterParagraf('8-28')}
          </Table.HeaderCell>
        )}
      </Table.Row>
    </Table.Header>
    {tabellData.map(({ formatertPeriode, kilderForRad, månedinntekt_8_30, månedinntekt_8_28 }) => (
      <Table.Body key={formatertPeriode}>
        {(kilderForRad.length > 0 ? kilderForRad : [undefined]).map((kilde, index) => (
          <Table.Row key={kilde ?? `${formatertPeriode}-tom-rad`} shadeOnHover={false}>
            {index === 0 && (
              <Table.HeaderCell scope="rowgroup" rowSpan={Math.max(kilderForRad.length, 1)} textSize={textSize}>
                {formatertPeriode}
              </Table.HeaderCell>
            )}
            <Table.DataCell textSize={textSize}>{kilde}</Table.DataCell>
            <Table.DataCell align="right" textSize={textSize}>
              {kilde && <BeløpLabel beløp={månedinntekt_8_30[kilde]?.beløp} kr />}
            </Table.DataCell>
            {vis_8_28 && (
              <Table.DataCell align="right" textSize={textSize}>
                {kilde && Object.values(månedinntekt_8_28).length > 0 && (
                  <BeløpLabel beløp={månedinntekt_8_28[kilde]?.beløp} kr />
                )}
              </Table.DataCell>
            )}
          </Table.Row>
        ))}
      </Table.Body>
    ))}
    <TableSum bottomBorder="double" withSubtotals>
      {kilder.length > 1 &&
        kilder.map((kilde, index) => (
          <Table.Row key={kilde.label}>
            <Table.HeaderCell scope="row" textSize={textSize}>
              {index === 0 && <FormattedMessage id="Tabell.Subtotal" />}
            </Table.HeaderCell>
            <Table.DataCell textSize={textSize}>{kilde.label}</Table.DataCell>
            <Table.DataCell align="right" textSize={textSize}>
              <BeløpLabel beløp={grunnlag_8_30.subtotal.get(kilde.label)} kr />
            </Table.DataCell>
            {vis_8_28 && (
              <Table.DataCell align="right" textSize={textSize}>
                <BeløpLabel beløp={grunnlag_8_28.subtotal.get(kilde.label)} kr />
              </Table.DataCell>
            )}
          </Table.Row>
        ))}
      <Table.Row>
        <Table.HeaderCell scope="row" colSpan={2} textSize={textSize}>
          <FormattedMessage id="Tabell.Total" />
        </Table.HeaderCell>
        <Table.HeaderCell scope="row" align="right" textSize={textSize}>
          <BeløpLabel beløp={grunnlag_8_30.total} kr />
        </Table.HeaderCell>
        {vis_8_28 && (
          <Table.HeaderCell scope="row" align="right" textSize={textSize}>
            <BeløpLabel beløp={grunnlag_8_28.total} kr />
          </Table.HeaderCell>
        )}
      </Table.Row>
    </TableSum>
  </Table>
);
