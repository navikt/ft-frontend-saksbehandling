import { FormattedMessage } from 'react-intl';

import { BodyShort, Detail, Heading, Label } from '@navikt/ds-react';

import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';

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
      <>
        <FlexRow>
          <FlexColumn>
            <Heading size="medium">
              <FormattedMessage id="Beregningsgrunnlag.YtelserFraInfotrygd.Ytelse2" />
            </Heading>
            <VerticalSpacer eightPx />
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn className={beregningStyles.tabellAktivitet} />
          <FlexColumn className={beregningStyles.tabellInntekt}>
            <Detail>
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned" />
            </Detail>
          </FlexColumn>
          <FlexColumn className={beregningStyles.tabellInntekt}>
            <Detail>
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar" />
            </Detail>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn className={beregningStyles.tabellAktivitet}>
            <BodyShort size="small">
              <FormattedMessage id="Beregningsgrunnlag.YtelserFraInfotrygd.YtelseNavn" />
            </BodyShort>
          </FlexColumn>
          <FlexColumn className={beregningStyles.tabellInntekt}>
            <BodyShort size="small">{formatCurrencyNoKr(bruttoPrAar / 12)}</BodyShort>
          </FlexColumn>
          <FlexColumn className={beregningStyles.tabellInntekt}>
            <Label size="small">{formatCurrencyNoKr(bruttoPrAar)}</Label>
          </FlexColumn>
        </FlexRow>
      </>
    );
  }
  return null;
};
