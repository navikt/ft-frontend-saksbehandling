import React, { FunctionComponent, useState } from 'react';
import { RawIntlProvider } from 'react-intl';

import dayjs from 'dayjs';
import { Tabs } from '@navikt/ds-react';

import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  StandardFaktaPanelProps,
  Vilkar,
  Vilkarperiode,
} from '@navikt/ft-types';

import { createIntl, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import FordelBeregningsgrunnlagAP from './types/interface/FordelBeregningsgrunnlagAP';
import VurderRefusjonBeregningsgrunnlagAP from './types/interface/VurderRefusjonBeregningsgrunnlagAP';
import FordelBeregningsgrunnlagPanel from './components/FordelBeregningsgrunnlagPanel';
import messages from '../i18n/nb_NO.json';
import {
  FordelBeregningsgrunnlagFormValues,
  TilkommetAktivitetFormValues,
  VurderRefusjonFormValues,
} from './types/FordelBeregningsgrunnlagPanelValues';
import FaktaFordelBeregningAvklaringsbehovCode from './types/interface/FaktaFordelBeregningAvklaringsbehovCode';
import mapAvklaringsbehovKode from './types/interface/AvklaringsbehovMapping';
import VurderNyttInntektsforholdAP from './types/interface/VurderNyttInntektsforholdAP';
import { finnVilkårsperiode, vurderesIBehandlingen } from './components/felles/vilkårsperiodeUtils';

const intl = createIntl(messages);

const { FORDEL_BEREGNINGSGRUNNLAG, VURDER_REFUSJON_BERGRUNN, VURDER_NYTT_INNTKTSFRHLD } =
  FaktaFordelBeregningAvklaringsbehovCode;

const lagLabel = (bg: Beregningsgrunnlag, vilkårsperioder: Vilkarperiode[]): string => {
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

const kreverManuellBehandlingFn = (bg: Beregningsgrunnlag) =>
  bg.avklaringsbehov.some(
    a =>
      a.definisjon === VURDER_REFUSJON_BERGRUNN ||
      a.definisjon === FORDEL_BEREGNINGSGRUNNLAG ||
      a.definisjon === VURDER_NYTT_INNTKTSFRHLD,
  );

const skalVurderes = (bg: Beregningsgrunnlag, vilkårsperioder: Vilkarperiode[]) =>
  kreverManuellBehandlingFn(bg) && vurderesIBehandlingen(vilkårsperioder, bg.vilkårsperiodeFom);

function konverterTilNyeAvklaringsbehovKoder(beregningsgrunnlag: Beregningsgrunnlag[]): Beregningsgrunnlag[] {
  const res = [...beregningsgrunnlag];
  for (let i = 0; i < res.length; i += 1) {
    const bg = res[i];
    for (let j = 0; j < bg.avklaringsbehov.length; j += 1) {
      const a = bg.avklaringsbehov[j];
      // @ts-ignore
      a.definisjon = mapAvklaringsbehovKode(a.definisjon);
    }
  }
  return res;
}

type OwnProps = {
  beregningsgrunnlagVilkår: Vilkar;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  alleKodeverk: AlleKodeverk;
  submittable: boolean;
};

type Props = OwnProps &
  StandardFaktaPanelProps<
    FordelBeregningsgrunnlagAP | VurderRefusjonBeregningsgrunnlagAP | VurderNyttInntektsforholdAP,
    FordelBeregningsgrunnlagFormValues | VurderRefusjonFormValues | TilkommetAktivitetFormValues
  >;

const FordelBeregningsgrunnlagFaktaIndex: FunctionComponent<Props> = ({
  beregningsgrunnlagVilkår,
  beregningsgrunnlagListe,
  alleKodeverk,
  submitCallback,
  readOnly,
  submittable,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => {
  const konverterteBg = konverterTilNyeAvklaringsbehovKoder(beregningsgrunnlagListe);

  const bgMedAvklaringsbehov = konverterteBg.filter(bg => kreverManuellBehandlingFn(bg));
  const [aktivtBeregningsgrunnlagIndeks, setAktivtBeregningsgrunnlagIndeks] = useState(0);

  if (bgMedAvklaringsbehov.length === 0) {
    return null;
  }

  const skalBrukeTabs = bgMedAvklaringsbehov.length > 1;

  return (
    <RawIntlProvider value={intl}>
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
                  skalVurderes(currentBeregningsgrunnlag, beregningsgrunnlagVilkår.perioder) ? 'harAksjonspunkt' : ''
                }
              />
            ))}
          </Tabs.List>
        </Tabs>
      )}
      <VerticalSpacer eightPx />
      <FordelBeregningsgrunnlagPanel
        aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
        alleKodeverk={alleKodeverk}
        submitCallback={submitCallback}
        readOnly={readOnly}
        beregningsgrunnlagListe={bgMedAvklaringsbehov}
        vilkarperioder={beregningsgrunnlagVilkår.perioder}
        submittable={submittable}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        formData={formData}
        setFormData={setFormData}
      />
    </RawIntlProvider>
  );
};

export default FordelBeregningsgrunnlagFaktaIndex;
