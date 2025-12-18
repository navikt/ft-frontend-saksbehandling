import { RawIntlProvider } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { Tabs } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, StandardProsessPanelProps } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import { TabInnhold } from './components/TabInnhold';
import { useSkjæringstidspunktTabs } from './hooks/useSkjæringstidspunktTabs';
import type { BeregningFormValues } from './legacyAP/types/BeregningFormValues.ts';
import type { BeregningAksjonspunktSubmitType } from './legacyAP/types/BeregningsgrunnlagAP.ts';
import type { KodeverkForPanel } from './types/KodeverkForPanel';
import type { Vilkår } from './types/Vilkår';

import messages from '../i18n/nb_NO.json';

interface Props {
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  beregningsgrunnlagsvilkår: Vilkår | null;
  kodeverkSamling: KodeverkForPanel;
  readOnlySubmitButton: boolean;
}

const intl = createIntl(messages);

export const BeregningProsessIndex = ({
  beregningsgrunnlagListe,
  beregningsgrunnlagsvilkår,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
}: Props & StandardProsessPanelProps<BeregningAksjonspunktSubmitType[], BeregningFormValues>) => {
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
