import { FormattedMessage } from 'react-intl';

import { Box, Heading, Table, Tag, VStack } from '@navikt/ds-react';

import type { SammenligningsgrunlagProp } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';

interface Props {
  sammenligningsgrunnlag: SammenligningsgrunlagProp;
}

export const AvviksberegningForSammenligningsgrunnlagType = ({ sammenligningsgrunnlag }: Props) => {
  const { differanseBeregnet, rapportertPrAar, avvikProsent, sammenligningsgrunnlagType } = sammenligningsgrunnlag;

  const avvikProsentAvrundet = Number.parseFloat(avvikProsent.toFixed(1));

  const årsinntekt = rapportertPrAar + differanseBeregnet;

  return (
    <Box.New background="neutral-soft" padding="5" flexBasis="0%" flexGrow="1">
      <VStack gap="space-20">
        <Heading size="medium" level="4">
          <FormattedMessage id="Avviksberegning.Tittel" values={{ type: sammenligningsgrunnlagType }} />
        </Heading>
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.DataCell>
                <FormattedMessage id="Avviksberegning.OmregnetAarsinntekt" />
              </Table.DataCell>
              <Table.DataCell align="right">
                <BeløpLabel beløp={årsinntekt} kr />
              </Table.DataCell>
              <Table.DataCell />
            </Table.Row>
            <Table.Row>
              <Table.DataCell>
                <FormattedMessage id="Avviksberegning.RapportertAarsinntekt" />
              </Table.DataCell>
              <Table.DataCell align="right">
                <BeløpLabel beløp={rapportertPrAar} kr />
              </Table.DataCell>
              <Table.DataCell />
            </Table.Row>
          </Table.Body>
          <tfoot>
            <Table.Row>
              <Table.HeaderCell>
                <FormattedMessage id="Avviksberegning.BeregnetAvvik" />
              </Table.HeaderCell>
              <Table.HeaderCell align="right">
                <BeløpLabel beløp={differanseBeregnet} kr />
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Tag variant={avvikProsentAvrundet > 25 ? 'error' : 'success'} size="small">
                  {avvikProsentAvrundet + '%'}
                </Tag>
              </Table.HeaderCell>
            </Table.Row>
          </tfoot>
        </Table>
      </VStack>
    </Box.New>
  );
};
