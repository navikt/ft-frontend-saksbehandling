import { FormattedMessage } from 'react-intl';

import { HStack, Table, Tag } from '@navikt/ds-react';

import type { Beregningsgrunnlag, BeregningsgrunnlagAndel, SammenligningsgrunlagProp } from '@navikt/ft-types';
import { BeløpLabel, FaktaBoks, TableSum } from '@navikt/ft-ui-komponenter';

import { finnInntektstyperSomVises } from '../../utils/beregningsgrunnlagUtils';
import { BeregnetÅrsinntektHelpText } from './BeregnetÅrsinntektHelpText';

import styles from './avviksberegning.module.css';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  sammenligningsgrunnlag: SammenligningsgrunlagProp;
  formaterVisningsnavnForAndel: (andel: BeregningsgrunnlagAndel) => string;
}

export const AvviksberegningForSammenligningsgrunnlagType = ({
  sammenligningsgrunnlag,
  beregningsgrunnlag,
  formaterVisningsnavnForAndel,
}: Props) => {
  const { differanseBeregnet, rapportertPrAar, avvikProsent, sammenligningsgrunnlagType } = sammenligningsgrunnlag;

  const avvikProsentAvrundet = Number.parseFloat(avvikProsent.toFixed(1));

  const årsinntekt = rapportertPrAar + differanseBeregnet;

  const { harArbeidstaker, harFrilans } = finnInntektstyperSomVises(beregningsgrunnlag);
  const visningType =
    sammenligningsgrunnlagType === 'SAMMENLIGNING_AT_FL' && !harArbeidstaker && harFrilans
      ? 'SAMMENLIGNING_FL'
      : sammenligningsgrunnlagType;

  return (
    <FaktaBoks tittel={<FormattedMessage id="Avviksberegning.Tittel" values={{ type: visningType }} />}>
      <Table size="small" className={styles.table}>
        <Table.Body>
          <Table.Row>
            <Table.DataCell textSize="small">
              <HStack align="center" gap="space-4">
                <FormattedMessage id="Avviksberegning.BeregnetÅrsinntekt" />
                {(sammenligningsgrunnlagType === 'SAMMENLIGNING_AT_FL' ||
                  sammenligningsgrunnlagType === 'SAMMENLIGNING_AT') && (
                  <BeregnetÅrsinntektHelpText
                    beregningsgrunnlag={beregningsgrunnlag}
                    formaterVisningsnavnForAndel={formaterVisningsnavnForAndel}
                  />
                )}
              </HStack>
            </Table.DataCell>
            <Table.DataCell textSize="small" align="right">
              <BeløpLabel beløp={årsinntekt} kr />
            </Table.DataCell>
            <Table.DataCell />
          </Table.Row>
          <Table.Row>
            <Table.DataCell textSize="small">
              <FormattedMessage id="Avviksberegning.RapportertAarsinntekt" />
            </Table.DataCell>
            <Table.DataCell textSize="small" align="right">
              <BeløpLabel beløp={rapportertPrAar} kr />
            </Table.DataCell>
            <Table.DataCell />
          </Table.Row>
        </Table.Body>
        <TableSum bottomBorder="double">
          <Table.Row>
            <Table.HeaderCell textSize="small">
              <FormattedMessage id="Avviksberegning.BeregnetAvvik" />
            </Table.HeaderCell>
            <Table.HeaderCell textSize="small" align="right">
              <BeløpLabel beløp={differanseBeregnet} kr />
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Tag variant={avvikProsentAvrundet > 25 ? 'error' : 'success'} size="small">
                {avvikProsentAvrundet.toLocaleString('nb-NO', { maximumFractionDigits: 1 }) + '%'}
              </Tag>
            </Table.HeaderCell>
          </Table.Row>
        </TableSum>
      </Table>
    </FaktaBoks>
  );
};
