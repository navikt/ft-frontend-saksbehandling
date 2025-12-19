import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Heading, Tabs, VStack } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, StandardProsessPanelProps } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import { TabInnhold } from './components/TabInnhold';
import { useSkjæringstidspunktTabs } from './hooks/useSkjæringstidspunktTabs';
import { BeregningFP } from './legacyAP/components/BeregningFP';
import type { BeregningFormValues } from './legacyAP/types/BeregningFormValues';
import type { BeregningAksjonspunktSubmitType } from './legacyAP/types/BeregningsgrunnlagAP';
import type { KodeverkForPanel } from './types/KodeverkForPanel';
import type { Vilkår } from './types/Vilkår';

import messages from '../i18n/nb_NO.json';

interface Props {
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  beregningsgrunnlagsvilkår: Vilkår | null;
  kodeverkSamling: KodeverkForPanel;
  isSubmittable: boolean;
}

const intl = createIntl(messages);

export const BeregningProsessIndex = ({
  beregningsgrunnlagListe,
  beregningsgrunnlagsvilkår,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
  submitCallback,
  isReadOnly,
  isSubmittable,
}: Props & StandardProsessPanelProps<BeregningAksjonspunktSubmitType[], BeregningFormValues>) => {
  const { tabOptions, currentTabValue, onTabChange } = useSkjæringstidspunktTabs(
    beregningsgrunnlagListe,
    beregningsgrunnlagsvilkår,
  );
  if (
    !beregningsgrunnlagsvilkår ||
    beregningsgrunnlagListe.length === 0 ||
    (beregningsgrunnlagListe.length === 1 && !beregningsgrunnlagListe[0].aktivitetStatus)
  ) {
    const ikkeTilstrekkeligInntektsgrunnlag = beregningsgrunnlagsvilkår?.perioder?.some(
      periode => periode.avslagKode === '1043',
    );
    return (
      <RawIntlProvider value={intl}>
        <VStack gap="space-8">
          <Heading size="medium" level="2">
            <FormattedMessage id="BeregningsgrunnlagProsessIndex.Title" />
          </Heading>
          <BodyShort size="small">
            <FormattedMessage
              id={
                ikkeTilstrekkeligInntektsgrunnlag
                  ? 'BeregningsgrunnlagProsessIndex.IkkeTilstrekkeligInntektsgrunnlag'
                  : 'BeregningsgrunnlagProsessIndex.HarIkkeBeregningsregler'
              }
            />
          </BodyShort>
        </VStack>
      </RawIntlProvider>
    );
  }

  return (
    <RawIntlProvider value={intl}>
      <Tabs value={currentTabValue} onChange={onTabChange}>
        {tabOptions.length > 1 && (
          <Tabs.List>
            {tabOptions.map(o => (
              <Tabs.Tab
                key={o.bgIndex}
                value={o.bgIndex.toString()}
                id={`${o.optionLabel}-tab`}
                label={o.optionLabel}
                aria-controls={`${o.optionLabel}-panel`}
                icon={
                  o.harAksjonspunkt && o.skalVurderes ? (
                    <ExclamationmarkTriangleFillIcon aria-hidden color="var(--ax-bg-warning-strong)" />
                  ) : undefined
                }
              />
            ))}
          </Tabs.List>
        )}
      </Tabs>
      {tabOptions.map(o => (
        <div
          role="tabpanel"
          hidden={o.bgIndex.toString() !== currentTabValue}
          key={o.bgIndex}
          id={`${o.optionLabel}-panel`}
          aria-labelledby={`${o.optionLabel}-tab`}
        >
          <TabInnhold
            beregningsgrunnlag={beregningsgrunnlagListe[o.bgIndex]}
            beregningsgrunnlagsvilkår={beregningsgrunnlagsvilkår}
            kodeverkSamling={kodeverkSamling}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
        </div>
      ))}
      <BeregningFP
        aktivtBeregningsgrunnlagIndeks={Number(currentTabValue)}
        beregningsgrunnlagListe={beregningsgrunnlagListe}
        submitCallback={submitCallback}
        readOnly={isReadOnly}
        isSubmittable={isSubmittable}
        vilkår={beregningsgrunnlagsvilkår}
        kodeverkSamling={kodeverkSamling}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        setFormData={setFormData}
        formData={formData}
      />
    </RawIntlProvider>
  );
};
