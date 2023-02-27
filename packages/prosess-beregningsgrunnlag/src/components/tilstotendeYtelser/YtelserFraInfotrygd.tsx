import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, BodyShort, Detail, Heading } from '@navikt/ds-react';
import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';

type OwnProps = {
  bruttoPrAar?: number;
};

/**
 * YtelserFraInfotrygd
 *
 * Presentasjonskomponent. Viser navn og sum på alle andeler som er tilstøttende ytelser fra infotrygd
 */
const YtelserFraInfotrygd = ({ bruttoPrAar }: OwnProps) => {
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
            <Detail size="small">
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned" />
            </Detail>
          </FlexColumn>
          <FlexColumn className={beregningStyles.tabellInntekt}>
            <Detail size="small">
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

export default YtelserFraInfotrygd;
