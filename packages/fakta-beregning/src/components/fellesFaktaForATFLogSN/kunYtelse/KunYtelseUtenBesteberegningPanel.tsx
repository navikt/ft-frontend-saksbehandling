import { Label } from '@navikt/ds-react';
import { BorderBox, FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import BrukersAndelFieldArray from './BrukersAndelFieldArray';
import styles from './kunYtelseUtenBesteberegningPanel.module.css';
import KodeverkForPanel from '../../../typer/kodeverkForPanel';

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
  <BorderBox>
    <FlexRow>
      <FlexColumn className={styles.flexColumn9}>
        <Label size="small">
          <FormattedMessage id="KunYtelsePanel.Overskrift" />
        </Label>
      </FlexColumn>
    </FlexRow>
    <BrukersAndelFieldArray
      name={brukersAndelFieldArrayName}
      readOnly={readOnly}
      isAksjonspunktClosed={isAksjonspunktClosed}
      kodeverkSamling={kodeverkSamling}
    />
  </BorderBox>
);

export default KunYtelseUtenBesteberegningPanel;
