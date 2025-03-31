import { useState } from 'react';
import { RawIntlProvider } from 'react-intl';

import { Tabs, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, StandardFaktaPanelProps } from '@navikt/ft-types';
import { createIntl, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';

import { finnVilkårsperiode, vurderesIBehandlingen } from './components/felles/vilkårsperiodeUtils';
import { FordelBeregningsgrunnlagPanel } from './components/FordelBeregningsgrunnlagPanel';
import {
  FordelBeregningsgrunnlagFormValues,
  TilkommetAktivitetFormValues,
  VurderRefusjonFormValues,
} from './types/FordelBeregningsgrunnlagPanelValues';
import { FaktaFordelBeregningAvklaringsbehovCode } from './types/interface/FaktaFordelBeregningAvklaringsbehovCode';
import { FordelBeregningsgrunnlagAP } from './types/interface/FordelBeregningsgrunnlagAP';
import { VurderNyttInntektsforholdAP } from './types/interface/VurderNyttInntektsforholdAP';
import { VurderRefusjonBeregningsgrunnlagAP } from './types/interface/VurderRefusjonBeregningsgrunnlagAP';
import { KodeverkForPanel } from './types/kodeverkForPanel';
import { Vilkår, Vilkårperiode } from './types/Vilkår';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const { FORDEL_BEREGNINGSGRUNNLAG, VURDER_REFUSJON_BERGRUNN, VURDER_NYTT_INNTKTSFRHLD } =
  FaktaFordelBeregningAvklaringsbehovCode;

const lagLabel = (bg: Beregningsgrunnlag, vilkårsperioder: Vilkårperiode[]): string => {
  const vilkårPeriode = finnVilkårsperiode(vilkårsperioder, bg.vilkårsperiodeFom);
  if (vilkårPeriode) {
    const { fom, tom } = vilkårPeriode.periode;
    if (tom !== null) {
      return `${dayjs(fom).format(DDMMYYYY_DATE_FORMAT)} - ${dayjs(tom).format(DDMMYYYY_DATE_FORMAT)}`;
    }
    return `${dayjs(fom).format(DDMMYYYY_DATE_FORMAT)} - `;
  }
  return `${dayjs(bg.vilkårsperiodeFom).format(DDMMYYYY_DATE_FORMAT)}`;
};

const kreverManuellBehandlingFn = (bg: Beregningsgrunnlag, skalHåndtereNyInntekt: boolean) =>
  bg.avklaringsbehov.some(
    a =>
      a.definisjon === VURDER_REFUSJON_BERGRUNN ||
      a.definisjon === FORDEL_BEREGNINGSGRUNNLAG ||
      (a.definisjon === VURDER_NYTT_INNTKTSFRHLD && skalHåndtereNyInntekt),
  );

const skalVurderes = (bg: Beregningsgrunnlag, vilkårsperioder: Vilkårperiode[], skalHåndtereNyInntekt: boolean) =>
  kreverManuellBehandlingFn(bg, skalHåndtereNyInntekt) && vurderesIBehandlingen(vilkårsperioder, bg.vilkårsperiodeFom);

type OwnProps = {
  beregningsgrunnlagVilkår: Vilkår;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  kodeverkSamling: KodeverkForPanel;
  submittable: boolean;
  skalHåndtereNyInntekt?: boolean;
};

type Props = OwnProps &
  StandardFaktaPanelProps<
    FordelBeregningsgrunnlagAP | VurderRefusjonBeregningsgrunnlagAP | VurderNyttInntektsforholdAP,
    FordelBeregningsgrunnlagFormValues | VurderRefusjonFormValues | TilkommetAktivitetFormValues
  >;

export const FordelBeregningsgrunnlagFaktaIndex = ({
  beregningsgrunnlagVilkår,
  beregningsgrunnlagListe,
  kodeverkSamling,
  submitCallback,
  readOnly,
  submittable,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
  skalHåndtereNyInntekt = true,
}: Props) => {
  const bgMedAvklaringsbehov = beregningsgrunnlagListe.filter(bg =>
    kreverManuellBehandlingFn(bg, skalHåndtereNyInntekt),
  );
  const [aktivtBeregningsgrunnlagIndeks, setAktivtBeregningsgrunnlagIndeks] = useState(0);

  if (bgMedAvklaringsbehov.length === 0) {
    return null;
  }

  const skalBrukeTabs = bgMedAvklaringsbehov.length > 1;

  return (
    <RawIntlProvider value={intl}>
      <VStack gap="2">
        {skalBrukeTabs && (
          <Tabs
            value={aktivtBeregningsgrunnlagIndeks.toString()}
            onChange={(clickedIndex: string) => setAktivtBeregningsgrunnlagIndeks(Number(clickedIndex))}
          >
            <Tabs.List>
              {bgMedAvklaringsbehov.map((currentBeregningsgrunnlag, currentBeregningsgrunnlagIndex) => (
                <Tabs.Tab
                  key={currentBeregningsgrunnlag.skjaeringstidspunktBeregning}
                  value={currentBeregningsgrunnlagIndex.toString()}
                  label={lagLabel(currentBeregningsgrunnlag, beregningsgrunnlagVilkår.perioder)}
                  className={
                    skalVurderes(currentBeregningsgrunnlag, beregningsgrunnlagVilkår.perioder, skalHåndtereNyInntekt)
                      ? 'harAksjonspunkt'
                      : ''
                  }
                />
              ))}
            </Tabs.List>
          </Tabs>
        )}
        <FordelBeregningsgrunnlagPanel
          aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
          kodeverkSamling={kodeverkSamling}
          submitCallback={submitCallback}
          readOnly={readOnly}
          beregningsgrunnlagListe={bgMedAvklaringsbehov}
          vilkarperioder={beregningsgrunnlagVilkår.perioder}
          submittable={submittable}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          formData={formData}
          setFormData={setFormData}
          skalHåndtereNyInntekt={skalHåndtereNyInntekt}
        />
      </VStack>
    </RawIntlProvider>
  );
};
