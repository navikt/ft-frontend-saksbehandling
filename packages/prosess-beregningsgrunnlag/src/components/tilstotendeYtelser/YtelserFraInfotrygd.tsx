import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
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
            <Element className={beregningStyles.avsnittOverskrift}>
              <FormattedMessage id="Beregningsgrunnlag.YtelserFraInfotrygd.Ytelse2" />
            </Element>
            <VerticalSpacer eightPx />
          </Column>
        </Row>
        <Row>
          <Column xs="7" />
          <Column xs="2" className={beregningStyles.colMaanedText}>
            <Undertekst>
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned" />
            </Undertekst>
          </Column>
          <Column xs="2" className={beregningStyles.colAarText}>
            <Undertekst>
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar" />
            </Undertekst>
          </Column>
          <Column xs="2" />
        </Row>
        <Row>
          <Column xs="7">
            <Normaltekst>
              <FormattedMessage id="Beregningsgrunnlag.YtelserFraInfotrygd.YtelseNavn" />
            </Normaltekst>
          </Column>
          <Column xs="2" className={beregningStyles.colMaanedText}>
            <Normaltekst>{formatCurrencyNoKr(bruttoPrAar / 12)}</Normaltekst>
          </Column>
          <Column xs="2" className={beregningStyles.colAarText}>
            <Element>{formatCurrencyNoKr(bruttoPrAar)}</Element>
          </Column>
        </Row>
      </>
    );
  }
  return null;
};

export default YtelserFraInfotrygd;
