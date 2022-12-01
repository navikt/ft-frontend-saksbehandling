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
  VurderRefusjonFormValues,
} from './types/FordelBeregningsgrunnlagPanelValues';
import FaktaFordelBeregningAksjonspunktCode from './types/interface/FaktaFordelBeregningAksjonspunktCode';

const intl = createIntl(messages);

const { FORDEL_BEREGNINGSGRUNNLAG, VURDER_REFUSJON_BERGRUNN } = FaktaFordelBeregningAksjonspunktCode;

const lagLabel = (bg: Beregningsgrunnlag, vilkårsperioder: Vilkarperiode[]): string => {
  const stpOpptjening = bg.vilkårsperiodeFom;
  const vilkårPeriode = vilkårsperioder.find(({ periode }) => periode.fom === stpOpptjening);
  if (vilkårPeriode) {
    const { fom, tom } = vilkårPeriode.periode;
    if (tom !== null) {
      return `${dayjs(fom).format(DDMMYYYY_DATE_FORMAT)} - ${dayjs(tom).format(DDMMYYYY_DATE_FORMAT)}`;
    }
    return `${dayjs(fom).format(DDMMYYYY_DATE_FORMAT)} - `;
  }
  return `${dayjs(stpOpptjening).format(DDMMYYYY_DATE_FORMAT)}`;
};

const kreverManuellBehandlingFn = (bg: Beregningsgrunnlag) =>
  bg.avklaringsbehov.some(a => a.definisjon === VURDER_REFUSJON_BERGRUNN || a.definisjon === FORDEL_BEREGNINGSGRUNNLAG);

type OwnProps = {
  beregningsgrunnlagVilkår: Vilkar;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  alleKodeverk: AlleKodeverk;
  submittable: boolean;
};

type Props = OwnProps &
  StandardFaktaPanelProps<
    FordelBeregningsgrunnlagAP | VurderRefusjonBeregningsgrunnlagAP,
    FordelBeregningsgrunnlagFormValues | VurderRefusjonFormValues
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
  const bgMedAvklaringsbehov = beregningsgrunnlagListe.filter(bg => kreverManuellBehandlingFn(bg));

  if (bgMedAvklaringsbehov.length === 0) {
    return null;
  }

  const skalBrukeTabs = bgMedAvklaringsbehov.length > 1;
  const [aktivtBeregningsgrunnlagIndeks, setAktivtBeregningsgrunnlagIndeks] = useState(0);

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
