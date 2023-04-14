import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { KodeverkType } from '@navikt/ft-kodeverk';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import PeriodeController from './PeriodeController';
import PeriodeInformasjon from './PeriodeInformasjon';
import DataForPeriode from '../../types/dataForPeriodeTsType';
import KodeverkFpTilbakeForPanel from '../../types/kodeverkFpTilbakeForPanel';

type OwnProps = {
  periode: DataForPeriode;
  callbackForward: (...args: any[]) => any;
  callbackBackward: (...args: any[]) => any;
  oppdaterSplittedePerioder: (...args: any[]) => any;
  readOnly: boolean;
  behandlingUuid: string;
  beregnBelop: (data: any) => Promise<any>;
  kodeverkSamlingFpTilbake: KodeverkFpTilbakeForPanel;
};

const TilbakekrevingTimelineData: FunctionComponent<OwnProps> = ({
  periode,
  callbackForward,
  callbackBackward,
  readOnly,
  oppdaterSplittedePerioder,
  behandlingUuid,
  beregnBelop,
  kodeverkSamlingFpTilbake,
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
    />
    <VerticalSpacer sixteenPx />
    <PeriodeInformasjon
      feilutbetaling={periode.feilutbetaling}
      fom={periode.fom}
      tom={periode.tom}
      arsakHendelseNavn={
        kodeverkSamlingFpTilbake[KodeverkType.HENDELSE_TYPE].find(ht => ht.kode === periode.årsak?.hendelseType)?.navn
      }
    />
  </>
);

export default TilbakekrevingTimelineData;
