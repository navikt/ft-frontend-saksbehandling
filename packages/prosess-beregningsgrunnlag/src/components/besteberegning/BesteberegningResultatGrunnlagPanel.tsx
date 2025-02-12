import { FormattedMessage } from 'react-intl';

import { BodyShort, Table, VStack } from '@navikt/ds-react';

import { BeregningsgrunnlagAndel, BeregningsgrunnlagPeriodeProp, Månedsgrunnlag } from '@navikt/ft-types';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

export interface Props {
  periode: BeregningsgrunnlagPeriodeProp;
  besteMåneder?: Månedsgrunnlag[];
}

const finnGjeldendeBeløp = (andel: BeregningsgrunnlagAndel): number => {
  if (!!andel.overstyrtPrAar || andel.overstyrtPrAar === 0) {
    return andel.overstyrtPrAar;
  }
  return !!andel.beregnetPrAar || andel.beregnetPrAar === 0 ? andel.beregnetPrAar : 0;
};

const finnKap8Beregning = (periode: BeregningsgrunnlagPeriodeProp): number =>
  periode && periode.beregningsgrunnlagPrStatusOgAndel
    ? periode.beregningsgrunnlagPrStatusOgAndel.map(andel => finnGjeldendeBeløp(andel)).reduce((i1, i2) => i1 + i2, 0)
    : 0;

const finnBesteberegnet = (besteMåneder: Månedsgrunnlag[]): number =>
  besteMåneder
    .flatMap(måned => måned.inntekter)
    .map(({ inntekt }) => inntekt)
    .reduce((i1, i2) => i1 + i2, 0) * 2;

const girKap8Besteberegning = (kap8Beregning: number, kap1473Beregning: number): boolean =>
  kap8Beregning > kap1473Beregning;

/**
 * BesteberegningResultatGrunnlagPanel
 *
 * Presentasjonskomponent. Viser sammenligning av kap 8 beregning og §14-7, ledd 3 beregning.
 */
export const BesteberegningResultatGrunnlagPanel = ({ periode, besteMåneder }: Props) => {
  if (!besteMåneder || besteMåneder.length < 1) {
    return null;
  }
  const kap8Beregning = finnKap8Beregning(periode);
  const besteberegnet = finnBesteberegnet(besteMåneder);
  return (
    <div>
      <VStack gap="4">
        <BodyShort size="small">
          <FormattedMessage id="Besteberegning.ResultatGrunnlag.BrukerOmfattesAvBesteberegning" />
        </BodyShort>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col" />
              <Table.HeaderCell scope="col">
                <FormattedMessage id="Besteberegning.ResultatGrunnlag.BeregningEtterKap8" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="Besteberegning.ResultatGrunnlag.BeregningEtterBesteberegning" />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.DataCell>
                <BodyShort size="small">
                  <FormattedMessage id="Besteberegning.ResultatGrunnlag.BruttoBeregningsgrunnlag" />
                </BodyShort>
              </Table.DataCell>
              <Table.DataCell>
                <BodyShort size="small">{formatCurrencyNoKr(kap8Beregning)}</BodyShort>
              </Table.DataCell>
              <Table.DataCell>
                <BodyShort size="small">{formatCurrencyNoKr(besteberegnet)}</BodyShort>
              </Table.DataCell>
            </Table.Row>
          </Table.Body>
        </Table>
        <BodyShort size="small">
          {girKap8Besteberegning(kap8Beregning, besteberegnet) && (
            <FormattedMessage id="Besteberegning.ResultatGrunnlag.Kap1471GirBesteBeregning" />
          )}
          {!girKap8Besteberegning(kap8Beregning, besteberegnet) && (
            <FormattedMessage id="Besteberegning.ResultatGrunnlag.Kap1473GirBesteBeregning" />
          )}
        </BodyShort>
      </VStack>
    </div>
  );
};
