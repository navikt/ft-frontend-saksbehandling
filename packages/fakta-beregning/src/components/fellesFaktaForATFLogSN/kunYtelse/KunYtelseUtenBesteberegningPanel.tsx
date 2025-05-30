import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';

import { KodeverkFpSakForPanel } from '../../../typer/KodeverkForPanelForFb';
import { BrukersAndelFieldArray } from './BrukersAndelFieldArray';

interface Props {
  readOnly: boolean;
  brukersAndelFieldArrayName: string;
  isAksjonspunktClosed: boolean;
  kodeverkSamling: KodeverkFpSakForPanel;
}

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
  <VStack gap="4">
    <Label size="medium">
      <FormattedMessage id="KunYtelsePanel.RapporterteInntekter" />
    </Label>
    <BrukersAndelFieldArray
      name={brukersAndelFieldArrayName}
      readOnly={readOnly}
      isAksjonspunktClosed={isAksjonspunktClosed}
      kodeverkSamling={kodeverkSamling}
    />
  </VStack>
);
