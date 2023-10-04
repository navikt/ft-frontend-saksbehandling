import { Label } from '@navikt/ds-react';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import KodeverkForPanel from '../../../typer/kodeverkForPanel';
import BrukersAndelFieldArray from './BrukersAndelFieldArray';
import styles from './kunYtelseUtenBesteberegningPanel.module.css';

type OwnProps = {
  readOnly: boolean;
  brukersAndelFieldArrayName: string;
  isAksjonspunktClosed: boolean;
  kodeverkSamling: KodeverkForPanel;
};

/**
 * KunYtelseUtenBesteberegningPanel
 *
 * Presentasjonskomponent. Behandling av aksjonspunktet for fastsetting av bg for
 *  kun ytelse uten vurdering av besteberegning.
 */

const KunYtelseUtenBesteberegningPanel: FunctionComponent<OwnProps> = ({
  readOnly,
  brukersAndelFieldArrayName,
  kodeverkSamling,
  isAksjonspunktClosed,
}) => (
  <>
    <FlexRow>
      <FlexColumn className={styles.flexColumn9}>
        <Label size="medium">
          <FormattedMessage id="KunYtelsePanel.RapporterteInntekter" />
        </Label>
      </FlexColumn>
    </FlexRow>
    <VerticalSpacer eightPx />
    <BrukersAndelFieldArray
      name={brukersAndelFieldArrayName}
      readOnly={readOnly}
      isAksjonspunktClosed={isAksjonspunktClosed}
      kodeverkSamling={kodeverkSamling}
    />
  </>
);

export default KunYtelseUtenBesteberegningPanel;
