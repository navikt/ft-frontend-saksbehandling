import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import PeriodeController, { PeriodeMedBelop, PeriodeMedFeilutbetaling } from './PeriodeController';
import PeriodeInformasjon from './PeriodeInformasjon';
import ForeldelsesresultatActivity from '../../types/foreldelsesresultatActivitytsType';

interface PureOwnProps {
  periode: ForeldelsesresultatActivity;
  oppdaterSplittedePerioder: (data: PeriodeMedFeilutbetaling[]) => void;
  callbackForward: (event: React.KeyboardEvent | React.MouseEvent) => void;
  callbackBackward: (event: React.KeyboardEvent | React.MouseEvent) => void;
  readOnly: boolean;
  behandlingUuid: string;
  beregnBelop: (data: { behandlingUuid: string; perioder: PeriodeMedBelop[] }) => Promise<any>;
  lukkPeriode: () => void;
}

const TilbakekrevingTimelineData: FunctionComponent<PureOwnProps> = ({
  periode,
  callbackForward,
  callbackBackward,
  readOnly,
  oppdaterSplittedePerioder,
  behandlingUuid,
  beregnBelop,
  lukkPeriode,
}) => (
  <>
    <PeriodeController
      callbackForward={callbackForward}
      callbackBackward={callbackBackward}
      periode={periode}
      readOnly={readOnly}
      oppdaterSplittedePerioder={oppdaterSplittedePerioder}
      behandlingUuid={behandlingUuid}
      beregnBelop={beregnBelop}
      intl={useIntl()}
      lukkPeriode={lukkPeriode}
    />
    <VerticalSpacer sixteenPx />
    <PeriodeInformasjon feilutbetaling={periode.feilutbetaling} fom={periode.fom} tom={periode.tom} />
  </>
);

export default TilbakekrevingTimelineData;
