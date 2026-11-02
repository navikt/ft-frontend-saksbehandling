import { FormattedMessage } from 'react-intl';

import { HStack, Table, Tag } from '@navikt/ds-react';

import type {
  Beregningsgrunnlag,
  BeregningsgrunnlagAndel,
  SammenligningsgrunlagProp,
  SammenligningType,
} from '@navikt/ft-types';
import { BeløpLabel, FaktaBoks, TableSum } from '@navikt/ft-ui-komponenter';
import { assertUnreachable } from '@navikt/ft-utils';

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

  return (
    <FaktaBoks tittel={lagTittelForAvviksberegning(sammenligningsgrunnlagType, beregningsgrunnlag)}>
      <Table size="small" className={styles.table}>
        <Table.Body>
          <Table.Row>
            <Table.DataCell textSize="small">
              <HStack gap="space-4" align="center">
                {årsinntektLabel(sammenligningsgrunnlagType)}
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
            <Table.DataCell textSize="small">{rapportertPrÅrLabel(sammenligningsgrunnlagType)}</Table.DataCell>
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

const årsinntektLabel = (sammenligningsgrunnlagType: SammenligningType) => {
  switch (sammenligningsgrunnlagType) {
    case 'SAMMENLIGNING_AT':
    case 'SAMMENLIGNING_FL':
    case 'SAMMENLIGNING_AT_FL':
      return <FormattedMessage id="Avviksberegning.BeregnetÅrsinntekt" />;
    case 'SAMMENLIGNING_SN':
    case 'SAMMENLIGNING_ATFL_SN':
    case 'SAMMENLIGNING_MIDL_INAKTIV':
      return <FormattedMessage id="Avviksberegning.PensjonsgivendeInntekt" />;
    default:
      assertUnreachable(sammenligningsgrunnlagType);
  }
};

const rapportertPrÅrLabel = (sammenligningsgrunnlagType: SammenligningType) => {
  switch (sammenligningsgrunnlagType) {
    case 'SAMMENLIGNING_AT':
    case 'SAMMENLIGNING_FL':
    case 'SAMMENLIGNING_AT_FL':
      return <FormattedMessage id="Avviksberegning.RapportertAarsinntekt" />;
    case 'SAMMENLIGNING_SN':
    case 'SAMMENLIGNING_ATFL_SN':
    case 'SAMMENLIGNING_MIDL_INAKTIV':
      return <FormattedMessage id="Avviksberegning.SamletInntekt" />;
    default:
      assertUnreachable(sammenligningsgrunnlagType);
  }
};

const lagTittelForAvviksberegning = (
  sammenligningsgrunnlagType: SammenligningType,
  beregningsgrunnlag: Beregningsgrunnlag,
) => {
  const { harArbeidstaker, harFrilans } = finnInntektstyperSomVises(beregningsgrunnlag);

  if (sammenligningsgrunnlagType === 'SAMMENLIGNING_AT_FL') {
    if (!harArbeidstaker && harFrilans) {
      return <FormattedMessage id="Avviksberegning.Tittel" values={{ type: 'SAMMENLIGNING_FL' }} />;
    }
    if (harArbeidstaker && !harFrilans) {
      return <FormattedMessage id="Avviksberegning.Tittel" values={{ type: 'SAMMENLIGNING_AT' }} />;
    }
  }
  return <FormattedMessage id="Avviksberegning.Tittel" values={{ type: sammenligningsgrunnlagType }} />;
};
