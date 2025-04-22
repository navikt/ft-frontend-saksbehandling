import { RawIntlProvider } from 'react-intl';

import { Behandling, KodeverkMedNavn, StandardProsessPanelProps } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import { BeregnBeløpParams } from './components/splittePerioder/PeriodeController';
import { TilbakekrevingForm } from './components/TilbakekrevingForm';
import { CustomVilkarsVurdertePeriode } from './components/TilbakekrevingPeriodeForm';
import { DetaljerteFeilutbetalingsperioder } from './types/DetaljerteFeilutbetalingsperioder';
import { FeilutbetalingPerioderWrapper } from './types/FeilutbetalingPerioder';
import { KodeverkFpTilbakeForPanel } from './types/KodeverkFpTilbakeForPanelTb';
import { VilkårsvurderingAp } from './types/VilkårsvurderingAp';
import { VilkårsvurdertePerioderWrapper } from './types/VilkårsvurdertePerioder';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export interface Props {
  behandling: Behandling;
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  vilkarvurderingsperioder: DetaljerteFeilutbetalingsperioder;
  vilkarvurdering: VilkårsvurdertePerioderWrapper;
  beregnBelop: (params: BeregnBeløpParams) => Promise<{ perioder: { belop: number }[] }>;
  kodeverkSamlingFpTilbake: KodeverkFpTilbakeForPanel;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  relasjonsRolleType: string;
  relasjonsRolleTypeKodeverk: KodeverkMedNavn[];
}

export const TilbakekrevingProsessIndex = (
  props: Props & StandardProsessPanelProps<VilkårsvurderingAp, CustomVilkarsVurdertePeriode[]>,
) => (
  <RawIntlProvider value={intl}>
    <TilbakekrevingForm {...props} />
  </RawIntlProvider>
);
