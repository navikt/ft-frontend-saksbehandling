import { RawIntlProvider } from 'react-intl';

import type { StandardProsessPanelProps } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import { type BeregnBeløpParams } from './components/splittePerioder/PeriodeController';
import { TilbakekrevingForm } from './components/TilbakekrevingForm';
import { type CustomVilkarsVurdertePeriode } from './components/TilbakekrevingPeriodeForm';
import type { DetaljerteFeilutbetalingsperioder } from './types/DetaljerteFeilutbetalingsperioder';
import type { FeilutbetalingPerioderWrapper } from './types/FeilutbetalingPerioder';
import type { KodeverkMedNavn } from './types/kodeverkMedNavn';
import type { KodeverkTilbakeForPanel } from './types/KodeverkTilbakeForPanel';
import type { RelasjonsRolleType } from './types/RelasjonsRolleType';
import type { VilkårsvurderingAp } from './types/VilkårsvurderingAp';
import type { VilkårsvurdertePerioderWrapper } from './types/VilkårsvurdertePerioder';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  behandlingUuid: string;
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  vilkarvurderingsperioder: DetaljerteFeilutbetalingsperioder;
  vilkarvurdering: VilkårsvurdertePerioderWrapper;
  beregnBelop: (params: BeregnBeløpParams) => Promise<{ perioder: { belop: number }[] }>;
  kodeverkSamlingFpTilbake: KodeverkTilbakeForPanel;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  relasjonsRolleType: RelasjonsRolleType;
  relasjonsRolleTypeKodeverk: KodeverkMedNavn<RelasjonsRolleType>[];
}

export const TilbakekrevingProsessIndex = (
  props: Props & StandardProsessPanelProps<VilkårsvurderingAp, CustomVilkarsVurdertePeriode[]>,
) => (
  <RawIntlProvider value={intl}>
    <TilbakekrevingForm {...props} />
  </RawIntlProvider>
);
