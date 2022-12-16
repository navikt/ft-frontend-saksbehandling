import React, { FunctionComponent } from 'react';

import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  Vilkarperiode,
} from '@navikt/ft-types';

import { FagsakStatus } from '@navikt/ft-kodeverk';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import FordelBeregningsgrunnlagAP from '../types/interface/FordelBeregningsgrunnlagAP';
import VurderRefusjonBeregningsgrunnlagAP from '../types/interface/VurderRefusjonBeregningsgrunnlagAP';
import VurderEndringRefusjonForm from './refusjon/VurderEndringRefusjonForm';
import FordelingForm from './fordeling/FordelingForm';
import {
  FordelBeregningsgrunnlagFormValues,
  TilkommetAktivitetFormValues,
  VurderRefusjonFormValues,
} from '../types/FordelBeregningsgrunnlagPanelValues';
import TilkommetAktivitet from './tilkommetAktivitet/TilkommetAktivitet';
import FaktaFordelBeregningAvklaringsbehovCode from '../types/interface/FaktaFordelBeregningAvklaringsbehovCode';
import VurderNyttInntektsforholdAP from '../types/interface/VurderNyttInntektsforholdAP';

const { FORDEL_BEREGNINGSGRUNNLAG, VURDER_REFUSJON_BERGRUNN, VURDER_NYTT_INNTKTSFRHLD } =
  FaktaFordelBeregningAvklaringsbehovCode;

const harFordelInfo = (bg: Beregningsgrunnlag): boolean =>
  bg && bg.faktaOmFordeling ? !!bg.faktaOmFordeling.fordelBeregningsgrunnlag : false;

const harRefusjonInfo = (bg: Beregningsgrunnlag): boolean => !!(bg && bg.refusjonTilVurdering);

const harNyttInntektsforholdInfo = (bg: Beregningsgrunnlag): boolean =>
  bg && bg.faktaOmFordeling ? !!bg.faktaOmFordeling.vurderNyttInntektsforholdDto : false;

const getAvklaringsbehov = (
  avklaringsbehov: BeregningAvklaringsbehov[],
  def: string,
): BeregningAvklaringsbehov | undefined =>
  avklaringsbehov && def ? avklaringsbehov.find(ap => ap.definisjon === def) : undefined;

interface OwnProps {
  aktivtBeregningsgrunnlagIndeks: number;
  readOnly: boolean;
  submitCallback: (
    aksjonspunktData: FordelBeregningsgrunnlagAP | VurderRefusjonBeregningsgrunnlagAP | VurderNyttInntektsforholdAP,
  ) => Promise<void>;
  submittable: boolean;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  vilkarperioder: Vilkarperiode[];
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formData?: FordelBeregningsgrunnlagFormValues | VurderRefusjonFormValues | TilkommetAktivitetFormValues;
  setFormData: (
    data: FordelBeregningsgrunnlagFormValues | VurderRefusjonFormValues | TilkommetAktivitetFormValues,
  ) => void;
}

/**
 * FordelBeregningsgrunnlagPanel
 *
 * Har ansvar for å sette opp Formen for "avklar fakta om fordeling" panel.
 */
const FordelBeregningsgrunnlagPanel: FunctionComponent<OwnProps> = ({
  aktivtBeregningsgrunnlagIndeks,
  readOnly,
  submitCallback,
  beregningsgrunnlagListe,
  vilkarperioder,
  alleKodeverk,
  submittable,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => {
  const fordelAP = getAvklaringsbehov(
    beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks].avklaringsbehov,
    FORDEL_BEREGNINGSGRUNNLAG,
  );
  const refusjonAP = getAvklaringsbehov(
    beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks].avklaringsbehov,
    VURDER_REFUSJON_BERGRUNN,
  );
  const nyttInntektsforholdAP = getAvklaringsbehov(
    beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks].avklaringsbehov,
    VURDER_NYTT_INNTKTSFRHLD,
  );

  const alleAksjonspunktErLøst =
    (!fordelAP || fordelAP.status !== FagsakStatus.OPPRETTET) &&
    (!refusjonAP || refusjonAP.status !== FagsakStatus.OPPRETTET) &&
    (!nyttInntektsforholdAP || nyttInntektsforholdAP.status !== FagsakStatus.OPPRETTET);

  const skalViseNyttInntektsforhold =
    nyttInntektsforholdAP &&
    harNyttInntektsforholdInfo(beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks]) &&
    (nyttInntektsforholdAP.status === FagsakStatus.OPPRETTET || alleAksjonspunktErLøst);
  const skalViseFordeling =
    fordelAP &&
    harFordelInfo(beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks]) &&
    ((!skalViseNyttInntektsforhold && fordelAP.status === FagsakStatus.OPPRETTET) || alleAksjonspunktErLøst);
  const skalViseRefusjon =
    refusjonAP &&
    harRefusjonInfo(beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks]) &&
    ((!skalViseNyttInntektsforhold && !skalViseFordeling && refusjonAP.status === FagsakStatus.OPPRETTET) ||
      alleAksjonspunktErLøst);

  return (
    <>
      {skalViseNyttInntektsforhold && (
        <>
          <TilkommetAktivitet
            aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
            formData={formData as TilkommetAktivitetFormValues}
            setFormData={setFormData}
            submittable={submittable}
            readOnly={readOnly}
            submitCallback={submitCallback}
            beregningsgrunnlagListe={beregningsgrunnlagListe}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            vilkarperioder={vilkarperioder}
          />
          {alleAksjonspunktErLøst && <VerticalSpacer fourtyPx />}
        </>
      )}
      {skalViseRefusjon && (
        <>
          <VurderEndringRefusjonForm
            aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
            submittable={submittable}
            readOnly={readOnly}
            submitCallback={submitCallback}
            beregningsgrunnlagListe={beregningsgrunnlagListe}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            formData={formData as VurderRefusjonFormValues}
            setFormData={setFormData}
            vilkarperioder={vilkarperioder}
          />
          {alleAksjonspunktErLøst && <VerticalSpacer fourtyPx />}
        </>
      )}
      {skalViseFordeling && (
        <FordelingForm
          aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
          submittable={submittable}
          readOnly={readOnly}
          submitCallback={submitCallback}
          alleKodeverk={alleKodeverk}
          beregningsgrunnlagListe={beregningsgrunnlagListe}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          formData={formData as FordelBeregningsgrunnlagFormValues}
          setFormData={setFormData}
          vilkårsperioder={vilkarperioder}
        />
      )}
    </>
  );
};

export default FordelBeregningsgrunnlagPanel;
