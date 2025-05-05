import { FormattedMessage } from 'react-intl';

import { Heading, Table, VStack } from '@navikt/ds-react';

import { BeløpLabel, NoWrap } from '@navikt/ft-ui-komponenter';

type Props = {
  bruttoPrAar?: number;
};

/**
 * YtelserFraInfotrygd
 *
 * Presentasjonskomponent. Viser navn og sum på alle andeler som er tilstøttende ytelser fra infotrygd
 */
export const YtelserFraInfotrygd = ({ bruttoPrAar }: Props) => {
  if (bruttoPrAar || bruttoPrAar === 0) {
    return (
      <VStack gap="2">
        <Heading size="medium">
          <FormattedMessage id="Beregningsgrunnlag.YtelserFraInfotrygd.Ytelse2" />
        </Heading>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell textSize="small" align="right">
                <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned" />
              </Table.HeaderCell>
              <Table.HeaderCell textSize="small" align="right">
                <NoWrap>
                  <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar" />
                </NoWrap>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row shadeOnHover={false}>
              <Table.DataCell textSize="small">
                <FormattedMessage id="Beregningsgrunnlag.YtelserFraInfotrygd.YtelseNavn" />
              </Table.DataCell>
              <Table.DataCell textSize="small" align="right">
                <BeløpLabel beløp={bruttoPrAar / 12} />
              </Table.DataCell>
              <Table.HeaderCell textSize="small" align="right">
                <BeløpLabel beløp={bruttoPrAar} />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Body>
        </Table>
      </VStack>
    );
  }
  return null;
};
