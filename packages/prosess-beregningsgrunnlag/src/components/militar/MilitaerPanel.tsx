import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, Heading } from '@navikt/ds-react';

import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';

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
      <FlexRow>
        <FlexColumn>
          <Heading size="medium">
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Militær" />
          </Heading>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      <FlexRow>
        <FlexColumn>
          <Label size="small">{formatCurrencyNoKr(beregnetAarsinntekt)}</Label>
        </FlexColumn>
      </FlexRow>
    </>
  );
};

export default MilitaerPanel;
