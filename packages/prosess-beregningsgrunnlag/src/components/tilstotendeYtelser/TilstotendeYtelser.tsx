import { FormattedMessage } from 'react-intl';

import { Heading, Table, VStack } from '@navikt/ds-react';

import type { BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';

import type { RelevanteStatuserProp } from '../../types/RelevanteStatuser';
import { isStatusDagpengerOrAAP } from '../../util/aktivitetStatusUtils';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';

const getTekstForAndelBruktIBeregning = (andel: BeregningsgrunnlagAndel): string => {
  if (andel.aktivitetStatus === 'DP') {
    return 'TilstottendeYtelse.Dagpenger';
  }
  if (andel.aktivitetStatus === 'SP_AV_DP') {
    return 'TilstottendeYtelse.SykepengerAvDagpenger';
  }
  if (andel.aktivitetStatus === 'PSB_AV_DP') {
    return 'TilstottendeYtelse.PleiepengerAvDagpenger';
  }
  if (andel.aktivitetStatus === 'AAP') {
    return 'TilstottendeYtelse.AAP';
  }
  return '';
};

type Props = {
  alleAndeler: BeregningsgrunnlagAndel[];
  relevanteStatuser: RelevanteStatuserProp;
  gjelderBesteberegning: boolean;
};

export const TilstotendeYtelser = ({ alleAndeler, relevanteStatuser, gjelderBesteberegning }: Props) => {
  const relevanteAndeler = alleAndeler.filter(andel => isStatusDagpengerOrAAP(andel.aktivitetStatus));
  const harFlereYtelser = relevanteAndeler.length > 1;

  return (
    <VStack gap="space-8">
      {relevanteStatuser.isKombinasjonsstatus && (
        <Heading size="medium" level="4">
          <FormattedMessage id="TilstottendeYtelse.Tittel" />
        </Heading>
      )}
      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell align="right" textSize="small">
              <FormattedMessage id="TabellKolonne.Maaned" />
            </Table.HeaderCell>
            <Table.HeaderCell align="right" textSize="small">
              <FormattedMessage id="TabellKolonne.BeregnetAar" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {relevanteAndeler.map((andel: BeregningsgrunnlagAndel) => (
          <Table.Body key={andel.aktivitetStatus}>
            <Table.Row>
              <Table.DataCell textSize="small">
                <FormattedMessage id={getTekstForAndelBruktIBeregning(andel)} />
              </Table.DataCell>
              <Table.DataCell textSize="small" align="right">
                <BeløpLabel beløp={andel.beregnetPrAar ? andel.beregnetPrAar / 12 : 0} />
              </Table.DataCell>
              <Table.DataCell
                textSize="small"
                align="right"
                className={!harFlereYtelser ? beregningStyles.semiBoldText : ''}
              >
                <BeløpLabel beløp={andel.beregnetPrAar} />
              </Table.DataCell>
            </Table.Row>
            {gjelderBesteberegning && andel.aktivitetStatus === 'DP' && (
              <Table.Row shadeOnHover={false}>
                <Table.DataCell textSize="small" colSpan={3}>
                  <FormattedMessage id="TilstottendeYtelse.Besteberegning" />
                </Table.DataCell>
              </Table.Row>
            )}
          </Table.Body>
        ))}
      </Table>
    </VStack>
  );
};
