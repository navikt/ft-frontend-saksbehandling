import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, BodyShort, Detail } from '@navikt/ds-react';
import { Column, Row } from 'nav-frontend-grid';
import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { VerticalSpacer, AvsnittSkiller } from '@navikt/ft-ui-komponenter';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';

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
        <AvsnittSkiller spaceAbove spaceUnder />
        <Row>
          <Column xs="12">
            <Label size="small" className={beregningStyles.avsnittOverskrift}>
              <FormattedMessage id="Beregningsgrunnlag.YtelserFraInfotrygd.Ytelse2" />
            </Label>
            <VerticalSpacer eightPx />
          </Column>
        </Row>
        <Row>
          <Column xs="7" />
          <Column xs="2" className={beregningStyles.colMaanedText}>
            <Detail size="small">
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned" />
            </Detail>
          </Column>
          <Column xs="2" className={beregningStyles.colAarText}>
            <Detail size="small">
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar" />
            </Detail>
          </Column>
          <Column xs="2" />
        </Row>
        <Row>
          <Column xs="7">
            <BodyShort size="small">
              <FormattedMessage id="Beregningsgrunnlag.YtelserFraInfotrygd.YtelseNavn" />
            </BodyShort>
          </Column>
          <Column xs="2" className={beregningStyles.colMaanedText}>
            <BodyShort size="small">{formatCurrencyNoKr(bruttoPrAar / 12)}</BodyShort>
          </Column>
          <Column xs="2" className={beregningStyles.colAarText}>
            <Label size="small">{formatCurrencyNoKr(bruttoPrAar)}</Label>
          </Column>
        </Row>
      </>
    );
  }
  return null;
};

export default YtelserFraInfotrygd;
