import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Heading, Tabs, VStack } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, StandardProsessPanelProps } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import { TabInnhold } from './components/TabInnhold';
import { useSkjæringstidspunktTabs } from './hooks/useSkjæringstidspunktTabs';
import { FastsettBeregningAksjonspunktContainer } from './legacyAP/components/FastsettBeregningAksjonspunktContainer';
import { LegacyAksjonspunktTittel } from './legacyAP/LegacyAksjonspunktTittel';
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
  const { tabOptions, currentSkjæringstidspunkt, onTabChange, currentBeregningsgrunnlag } = useSkjæringstidspunktTabs(
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
        <VStack gap="space-12">
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
      <VStack gap="space-8">
        {beregningsgrunnlagListe.map(bg => (
          <LegacyAksjonspunktTittel key={bg.vilkårsperiodeFom} beregningsgrunnlag={bg} />
        ))}

        <Heading size="medium" level="2">
          <FormattedMessage id="BeregningProsessIndex.Tittel" />
        </Heading>

        {tabOptions.length > 1 && (
          <Tabs value={currentSkjæringstidspunkt} onChange={onTabChange}>
            <Tabs.List>
              {tabOptions.map(o => (
                <Tabs.Tab
                  key={o.skjæringstidspunkt}
                  value={o.skjæringstidspunkt}
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
          </Tabs>
        )}

        {tabOptions.map(o => (
          <div
            role="tabpanel"
            hidden={o.skjæringstidspunkt !== currentSkjæringstidspunkt}
            key={o.skjæringstidspunkt}
            id={`${o.optionLabel}-panel`}
            aria-labelledby={`${o.optionLabel}-tab`}
          >
            <VStack gap="space-16">
              <TabInnhold
                beregningsgrunnlag={o.beregningsgrunnlag}
                beregningsgrunnlagsvilkår={beregningsgrunnlagsvilkår}
                kodeverkSamling={kodeverkSamling}
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
              />
            </VStack>
          </div>
        ))}

        <FastsettBeregningAksjonspunktContainer
          readOnly={isReadOnly}
          isSubmittable={isSubmittable}
          kodeverkSamling={kodeverkSamling}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          beregningsgrunnlagListe={beregningsgrunnlagListe}
          vilkår={beregningsgrunnlagsvilkår}
          submitCallback={submitCallback}
          formData={formData}
          setFormData={setFormData}
          aktivtBeregningsgrunnlag={currentBeregningsgrunnlag}
        />
      </VStack>
    </RawIntlProvider>
  );
};
