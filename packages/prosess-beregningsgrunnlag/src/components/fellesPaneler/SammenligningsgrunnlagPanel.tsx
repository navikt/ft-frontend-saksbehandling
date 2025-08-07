import { FormattedMessage } from 'react-intl';

import { Table } from '@navikt/ds-react';

import type { SammenligningsgrunlagProp } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';

type Props = {
  beregnetAarsinntekt?: number;
  sammenligningsgrunnlag: SammenligningsgrunlagProp;
  erPGI: boolean;
};

export const SammenligningsgrunnlagPanel = ({ beregnetAarsinntekt, sammenligningsgrunnlag, erPGI }: Props) => {
  const { differanseBeregnet, rapportertPrAar, avvikProsent } = sammenligningsgrunnlag;
  const avvikProsentAvrundet = parseFloat(avvikProsent.toFixed(1));
  const inntektTekst = erPGI
    ? 'SammenligningsgrunnlagPanel.OmregnetAarsinntekt.Naring'
    : 'SammenligningsgrunnlagPanel.OmregnetAarsinntekt';
  const sammenligningTekst = erPGI
    ? 'SammenligningsgrunnlagPanel.SamletInntekt'
    : 'SammenligningsgrunnlagPanel.RapportertAarsinntekt';

  return (
    <Table size="small">
      <Table.Body>
        <Table.Row>
          <Table.DataCell textSize="small" colSpan={2}>
            <FormattedMessage id={inntektTekst} />
          </Table.DataCell>
          <Table.DataCell textSize="small" align="right">
            <BeløpLabel beløp={beregnetAarsinntekt === 0 ? undefined : beregnetAarsinntekt} />
          </Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell textSize="small" colSpan={2}>
            <FormattedMessage id={sammenligningTekst} />
          </Table.DataCell>
          <Table.DataCell textSize="small" align="right">
            <BeløpLabel beløp={rapportertPrAar} />
          </Table.DataCell>
        </Table.Row>
      </Table.Body>
      <tfoot>
        <Table.Row>
          <Table.HeaderCell textSize="small">
            <FormattedMessage id="SammenligningsgrunnlagPanel.BeregnetAvvik" />
          </Table.HeaderCell>
          <Table.HeaderCell
            textSize="small"
            align="right"
            className={avvikProsentAvrundet > 25 ? beregningStyles.redError : ''}
          >
            {avvikProsentAvrundet + '%'}
          </Table.HeaderCell>
          <Table.HeaderCell textSize="small" align="right">
            <BeløpLabel beløp={differanseBeregnet ?? 0} />
          </Table.HeaderCell>
        </Table.Row>
      </tfoot>
    </Table>
  );
};
