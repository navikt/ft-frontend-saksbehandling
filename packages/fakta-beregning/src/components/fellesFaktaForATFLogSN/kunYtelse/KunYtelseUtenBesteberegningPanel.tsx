import { Label } from '@navikt/ds-react';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import { KodeverkForPanel } from '../../../typer/KodeverkForPanelForFb';
import { BrukersAndelFieldArray } from './BrukersAndelFieldArray';
import styles from './kunYtelseUtenBesteberegningPanel.module.css';

type Props = {
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

export const KunYtelseUtenBesteberegningPanel = ({
  readOnly,
  brukersAndelFieldArrayName,
  kodeverkSamling,
  isAksjonspunktClosed,
}: Props) => (
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
