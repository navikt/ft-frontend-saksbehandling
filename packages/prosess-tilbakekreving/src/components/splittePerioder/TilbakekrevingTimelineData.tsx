import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';

import { AlleKodeverkTilbakekreving } from '@navikt/ft-types';
import { getKodeverknavnFn } from '@navikt/ft-utils';
import { KodeverkType } from '@navikt/ft-kodeverk';

import PeriodeController from './PeriodeController';
import PeriodeInformasjon from './PeriodeInformasjon';
import DataForPeriode from '../../types/dataForPeriodeTsType';

type OwnProps = {
  periode: DataForPeriode;
  callbackForward: (...args: any[]) => any;
  callbackBackward: (...args: any[]) => any;
  oppdaterSplittedePerioder: (...args: any[]) => any;
  readOnly: boolean;
  behandlingUuid: string;
  beregnBelop: (data: any) => Promise<any>;
  alleTilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
};

const TilbakekrevingTimelineData: FunctionComponent<OwnProps> = ({
  periode,
  callbackForward,
  callbackBackward,
  readOnly,
  oppdaterSplittedePerioder,
  behandlingUuid,
  beregnBelop,
  alleTilbakekrevingKodeverk,
}) => (
  <Row>
    <Column xs="12">
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
      <PeriodeInformasjon
        feilutbetaling={periode.feilutbetaling}
        fom={periode.fom}
        tom={periode.tom}
        arsakHendelseNavn={getKodeverknavnFn(alleTilbakekrevingKodeverk)(periode.årsak?.hendelseType, KodeverkType.HENDELSE_TYPE)}
      />
    </Column>
  </Row>
);

export default TilbakekrevingTimelineData;
