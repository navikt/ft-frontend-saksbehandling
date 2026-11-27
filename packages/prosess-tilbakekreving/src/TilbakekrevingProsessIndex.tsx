import { RawIntlProvider } from 'react-intl';

import type { StandardProsessPanelProps } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import { type BeregnBeløpParams } from './components/splittePerioder/PeriodeController';
import { TilbakekrevingForm, type TilbakekrevingFormData } from './components/TilbakekrevingForm';
import type { DetaljerteFeilutbetalingsperioder } from './types/detaljerteFeilutbetalingsperioder';
import type { FeilutbetalingPerioderWrapper } from './types/feilutbetalingPerioder';
import type { KodeverkMedNavn } from './types/kodeverkMedNavn';
import type { KodeverkTilbakeForPanel } from './types/kodeverkTilbakeForPanel';
import type { RelasjonsRolleType } from './types/relasjonsRolleType';
import type { VilkårsvurderingAp } from './types/vilkårsvurderingAp';
import type { VilkårsvurdertePerioderWrapper } from './types/vilkårsvurdertePerioder';

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
  props: Props & StandardProsessPanelProps<VilkårsvurderingAp, TilbakekrevingFormData>,
) => (
  <RawIntlProvider value={intl}>
    <TilbakekrevingForm {...props} />
  </RawIntlProvider>
);
