import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Heading, Table, VStack } from '@navikt/ds-react';

import { AktivitetStatus, isStatusDagpengerOrAAP } from '@navikt/ft-kodeverk';
import { BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';

import { RelevanteStatuserProp } from '../../types/RelevanteStatuser';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';
import tableStyle from '../tableStyle.module.css';

const getTekstForAndelBruktIBeregning = (andel: BeregningsgrunnlagAndel): string => {
  if (andel.aktivitetStatus === AktivitetStatus.DAGPENGER) {
    return 'Beregningsgrunnlag.TilstottendeYtelse.Dagpenger';
  }
  if (andel.aktivitetStatus === AktivitetStatus.SYKEPENGER_AV_DAGPENGER) {
    return 'Beregningsgrunnlag.TilstottendeYtelse.SykepengerAvDagpenger';
  }
  if (andel.aktivitetStatus === AktivitetStatus.PLEIEPENGER_AV_DAGPENGER) {
    return 'Beregningsgrunnlag.TilstottendeYtelse.PleiepengerAvDagpenger';
  }
  if (andel.aktivitetStatus === AktivitetStatus.ARBEIDSAVKLARINGSPENGER) {
    return 'Beregningsgrunnlag.TilstottendeYtelse.AAP';
  }
  return '';
};
const isAktivitetKodeDagpenger = (aktivitetStatusKode: string): boolean =>
  aktivitetStatusKode === AktivitetStatus.DAGPENGER;

type Props = {
  alleAndeler: BeregningsgrunnlagAndel[];
  relevanteStatuser: RelevanteStatuserProp;
  gjelderBesteberegning: boolean;
};

export const TilstotendeYtelser = ({ alleAndeler, relevanteStatuser, gjelderBesteberegning }: Props) => {
  const relevanteAndeler = alleAndeler.filter(andel => isStatusDagpengerOrAAP(andel.aktivitetStatus));
  const harFlereYtelser = relevanteAndeler.length > 1;

  return (
    <VStack gap="2">
      {relevanteStatuser.isKombinasjonsstatus && (
        <Heading size="medium">
          <FormattedMessage id="Beregningsgrunnlag.TilstottendeYtelse.TittelNav" />
        </Heading>
      )}
      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell align="right" textSize="small">
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned" />
            </Table.HeaderCell>
            <Table.HeaderCell align="right" textSize="small">
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {relevanteAndeler.map((andel: BeregningsgrunnlagAndel) => (
          <Table.Body key={andel.aktivitetStatus} className={tableStyle.tableGroup}>
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
            {gjelderBesteberegning && isAktivitetKodeDagpenger(andel.aktivitetStatus) && (
              <Table.Row shadeOnHover={false}>
                <Table.DataCell textSize="small" colSpan={3}>
                  <FormattedMessage id="Beregningsgrunnlag.TilstottendeYtelse.Besteberegning" />
                </Table.DataCell>
              </Table.Row>
            )}
          </Table.Body>
        ))}
      </Table>
    </VStack>
  );
};
