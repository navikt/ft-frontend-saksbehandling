import { RawIntlProvider } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { Tabs } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import { TabInnhold } from './components/TabInnhold.tsx';
import { useSkjæringstidspunktTabs } from './hooks/useSkjæringstidspunktTabs.tsx';
import type { KodeverkForPanel } from './types/KodeverkForPanel';
import type { Vilkår } from './types/Vilkår';

import messages from '../i18n/nb_NO.json';

interface Props {
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  beregningsgrunnlagsvilkår: Vilkår | null;
  kodeverkSamling: KodeverkForPanel;
}

const intl = createIntl(messages);

export const BeregningProsessIndex = ({
  beregningsgrunnlagListe,
  beregningsgrunnlagsvilkår,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
}: Props) => {
  const { tabOptions, currentTabValue, onTabChange } = useSkjæringstidspunktTabs(
    beregningsgrunnlagListe,
    beregningsgrunnlagsvilkår,
  );
  return (
    <RawIntlProvider value={intl}>
      <Tabs value={currentTabValue} onChange={onTabChange}>
        {tabOptions.length > 1 && (
          <Tabs.List>
            {tabOptions.map(o => (
              <Tabs.Tab
                key={o.bgIndex}
                value={o.bgIndex.toString()}
                label={o.optionLabel}
                icon={
                  o.harAvklaringsbehov ? (
                    <ExclamationmarkTriangleFillIcon aria-hidden color="var(--ax-bg-warning-strong)" />
                  ) : undefined
                }
              />
            ))}
          </Tabs.List>
        )}
        {tabOptions.map(o => (
          <Tabs.Panel key={o.bgIndex} value={o.bgIndex.toString()} aria-label={o.optionLabel}>
            <TabInnhold
              beregningsgrunnlag={beregningsgrunnlagListe[o.bgIndex]}
              beregningsgrunnlagsvilkår={beregningsgrunnlagsvilkår}
              kodeverkSamling={kodeverkSamling}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            />
          </Tabs.Panel>
        ))}
      </Tabs>
    </RawIntlProvider>
  );
};
