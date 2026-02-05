import { FormattedMessage, useIntl } from 'react-intl';

import { HelpText, HStack, List, Table, Tag, VStack } from '@navikt/ds-react';

import type { Beregningsgrunnlag, BeregningsgrunnlagAndel, SammenligningsgrunlagProp } from '@navikt/ft-types';
import { BeløpLabel, FaktaBoks, LabeledValue } from '@navikt/ft-ui-komponenter';

import { finnKilderForAndeler } from '../../utils/beregnetPrÅrKildeUtils';
import {
  finnAlleAndelerIFørstePeriode,
  finnAndelerSomSkalVises,
  grupperSummerteInntekterPerArbeidsgiver,
} from '../../utils/beregningsgrunnlagUtils';

import styles from './avviksberegning.module.css';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  sammenligningsgrunnlag: SammenligningsgrunlagProp;
  formaterVisningsnavnForAndel: (andel: BeregningsgrunnlagAndel) => string;
}

export const AvviksberegningForSammenligningsgrunnlagType = ({
  beregningsgrunnlag,
  sammenligningsgrunnlag,
  formaterVisningsnavnForAndel,
}: Props) => {
  const { differanseBeregnet, rapportertPrAar, avvikProsent, sammenligningsgrunnlagType } = sammenligningsgrunnlag;
  const intl = useIntl();

  const avvikProsentAvrundet = Number.parseFloat(avvikProsent.toFixed(1));

  const årsinntekt = rapportertPrAar + differanseBeregnet;

  const kilderForAndeler = finnKilderForAndeler(
    finnAndelerSomSkalVises(finnAlleAndelerIFørstePeriode(beregningsgrunnlag.beregningsgrunnlagPeriode)),
    grupperSummerteInntekterPerArbeidsgiver(beregningsgrunnlag.inntektsgrunnlag?.beregningsgrunnlagInntekter),
    formaterVisningsnavnForAndel,
  );

  return (
    <FaktaBoks tittel={intl.formatMessage({ id: 'Avviksberegning.Tittel' }, { type: sammenligningsgrunnlagType })}>
      <Table size="small" className={styles.table}>
        <Table.Body>
          <Table.Row>
            <Table.DataCell textSize="small">
              <HStack align="center" gap="space-4">
                <FormattedMessage id="Avviksberegning.BeregnetÅrsinntekt" />
                <HelpText title={intl.formatMessage({ id: 'Avviksberegning.BeregnetÅrsinntekt.HelpText' })}>
                  <VStack gap="space-8">
                    <LabeledValue
                      size="small"
                      label={<FormattedMessage id="Avviksberegning.BeregnetÅrsinntekt.HelpText.Tittel" />}
                      value={<FormattedMessage id="Avviksberegning.BeregnetÅrsinntekt.HelpText.Beskrivelse" />}
                    />
                    <List size="small">
                      {kilderForAndeler.map(andel => (
                        <List.Item key={andel.andelsnr}>
                          <FormattedMessage
                            id="Avviksberegning.BeregnetÅrsinntekt.HelpText.Andel"
                            values={{ arbeidsgiver: andel.arbeidsgiver }}
                          />
                          <br />
                          <FormattedMessage
                            id="Avviksberegning.BeregnetÅrsinntekt.HelpText.Beløp"
                            values={{ beløp: <BeløpLabel beløp={andel.beregnetPrAar} kr /> }}
                          />
                          <br />
                          <FormattedMessage
                            id="Avviksberegning.BeregnetÅrsinntekt.HelpText.Kilde"
                            values={{ kilde: andel.beregnetPrÅrKilde }}
                          />
                        </List.Item>
                      ))}
                    </List>
                  </VStack>
                </HelpText>
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
        <tfoot>
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
        </tfoot>
      </Table>
    </FaktaBoks>
  );
};
