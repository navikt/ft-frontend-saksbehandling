import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label } from '@navikt/ds-react';
import { Column, Row } from 'nav-frontend-grid';

import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';

type OwnProps = {
  alleAndeler: BeregningsgrunnlagAndel[];
};

/**
 * MilitaerPanel
 *
 * Presentasjonskomponent. Viser beregningsgrunnlag for militær og sivilforsvarstjeneste.
 */
const MilitaerPanel: FunctionComponent<OwnProps> = ({ alleAndeler }) => {
  const relevanteAndeler = alleAndeler.filter(andel => andel.aktivitetStatus === AktivitetStatus.MILITAER_ELLER_SIVIL);
  const beregnetAarsinntekt = relevanteAndeler && relevanteAndeler.length > 0 ? relevanteAndeler[0].beregnetPrAar : '';
  return (
    <>
      <Row>
        <Column xs="12">
          <Label size="small" className={beregningStyles.avsnittOverskrift}>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Militær" />
          </Label>
        </Column>
      </Row>
      <VerticalSpacer eightPx />
      <Row>
        <Column xs="12">
          <Label size="small">{formatCurrencyNoKr(beregnetAarsinntekt)}</Label>
        </Column>
      </Row>
    </>
  );
};

export default MilitaerPanel;
