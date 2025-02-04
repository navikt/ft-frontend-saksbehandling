import { FormattedMessage } from 'react-intl';

import { BodyShort, Label } from '@navikt/ds-react';

import { BeregningsgrunnlagAndel, BeregningsgrunnlagPeriodeProp, Månedsgrunnlag } from '@navikt/ft-types';
import { FlexColumn, FlexRow, Table, TableColumn, TableRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
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

const headerColumnContent = [
  // For å lage tom kolonne først
  <div key="TomKolNøkkel" />,
  <Label size="small" key="Kap8Nøkkel">
    {' '}
    <FormattedMessage id="Besteberegning.ResultatGrunnlag.BeregningEtterKap8" />{' '}
  </Label>,
  <Label size="small" key="BBNøkkel">
    {' '}
    <FormattedMessage id="Besteberegning.ResultatGrunnlag.BeregningEtterBesteberegning" />{' '}
  </Label>,
];

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
      <FlexRow>
        <FlexColumn>
          <FormattedMessage id="Besteberegning.ResultatGrunnlag.BrukerOmfattesAvBesteberegning" />
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer twentyPx />
      <FlexRow>
        <FlexColumn>
          <Table headerColumnContent={headerColumnContent} noHover>
            <TableRow>
              <TableColumn>
                <BodyShort size="small">
                  <FormattedMessage id="Besteberegning.ResultatGrunnlag.BruttoBeregningsgrunnlag" />
                </BodyShort>
              </TableColumn>
              <TableColumn>
                <BodyShort size="small">{formatCurrencyNoKr(kap8Beregning)}</BodyShort>
              </TableColumn>
              <TableColumn>
                <BodyShort size="small">{formatCurrencyNoKr(besteberegnet)}</BodyShort>
              </TableColumn>
            </TableRow>
          </Table>
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn>
          <BodyShort size="small">
            {girKap8Besteberegning(kap8Beregning, besteberegnet) && (
              <FormattedMessage id="Besteberegning.ResultatGrunnlag.Kap1471GirBesteBeregning" />
            )}
            {!girKap8Besteberegning(kap8Beregning, besteberegnet) && (
              <FormattedMessage id="Besteberegning.ResultatGrunnlag.Kap1473GirBesteBeregning" />
            )}
          </BodyShort>
        </FlexColumn>
      </FlexRow>
    </div>
  );
};
