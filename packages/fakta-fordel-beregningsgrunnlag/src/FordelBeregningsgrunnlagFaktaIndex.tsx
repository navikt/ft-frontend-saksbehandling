import React, { FunctionComponent, useState, useMemo } from 'react';
import { RawIntlProvider } from 'react-intl';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';

import dayjs from 'dayjs';
import { Tabs } from '@navikt/ds-react';

import {
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  BeregningsgrunnlagMedId,
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
import VurderNyttInntektsforholdAP from './types/interface/VurderNyttInntektsforholdAP';
import { finnVilkårsperiode, vurderesIBehandlingen } from './components/felles/vilkårsperiodeUtils';
import KodeverkForPanel from './types/kodeverkForPanel';

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

type OwnProps = {
  beregningsgrunnlagVilkår: Vilkar;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  kodeverkSamling: KodeverkForPanel;
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
  kodeverkSamling,
  submitCallback,
  readOnly,
  submittable,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => {
  const bgMedAvklaringsbehov = useMemo(
    () =>
      beregningsgrunnlagListe
        .filter(bg => kreverManuellBehandlingFn(bg))
        .map(bg => ({ ...bg, beregningsgrunnlagId: uuidv4() })),
    [JSON.stringify(beregningsgrunnlagListe), JSON.stringify(kreverManuellBehandlingFn)],
  );
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
        kodeverkSamling={kodeverkSamling}
        submitCallback={submitCallback}
        readOnly={readOnly}
        beregningsgrunnlagListe={bgMedAvklaringsbehov as BeregningsgrunnlagMedId[]}
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
