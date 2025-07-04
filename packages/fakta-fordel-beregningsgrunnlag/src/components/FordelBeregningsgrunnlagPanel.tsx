import { useState } from 'react';

import { VStack } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, BeregningAvklaringsbehov, Beregningsgrunnlag } from '@navikt/ft-types';

import type {
  FordelBeregningsgrunnlagFormValues,
  TilkommetAktivitetFormValues,
  VurderRefusjonFormValues,
} from '../types/FordelBeregningsgrunnlagPanelValues';
import { FaktaFordelBeregningAvklaringsbehovCode } from '../types/interface/FaktaFordelBeregningAvklaringsbehovCode';
import type { FordelBeregningsgrunnlagAP } from '../types/interface/FordelBeregningsgrunnlagAP';
import type { VurderNyttInntektsforholdAP } from '../types/interface/VurderNyttInntektsforholdAP';
import type { VurderRefusjonBeregningsgrunnlagAP } from '../types/interface/VurderRefusjonBeregningsgrunnlagAP';
import type { KodeverkForPanel } from '../types/kodeverkForPanel';
import type { Vilkårperiode } from '../types/Vilkår';
import { FordelingForm } from './fordeling/FordelingForm';
import { VurderEndringRefusjonForm } from './refusjon/VurderEndringRefusjonForm';
import { TilkommetAktivitet } from './tilkommetAktivitet/TilkommetAktivitet';

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

interface Props {
  aktivtBeregningsgrunnlagIndeks: number;
  readOnly: boolean;
  submitCallback: (
    aksjonspunktData: FordelBeregningsgrunnlagAP | VurderRefusjonBeregningsgrunnlagAP | VurderNyttInntektsforholdAP,
  ) => Promise<void>;
  submittable: boolean;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  vilkarperioder: Vilkårperiode[];
  kodeverkSamling: KodeverkForPanel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formData?: FordelBeregningsgrunnlagFormValues | VurderRefusjonFormValues | TilkommetAktivitetFormValues;
  setFormData: (
    data: FordelBeregningsgrunnlagFormValues | VurderRefusjonFormValues | TilkommetAktivitetFormValues,
  ) => void;
  skalHåndtereNyInntekt: boolean;
}

export const FordelBeregningsgrunnlagPanel = ({
  aktivtBeregningsgrunnlagIndeks,
  readOnly,
  submitCallback,
  beregningsgrunnlagListe,
  vilkarperioder,
  kodeverkSamling,
  submittable,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
  skalHåndtereNyInntekt,
}: Props) => {
  const [tilkommetAktivitetFormIsDirty, setTilkommetAktivitetFormIsDirty] = useState(false);
  const [refusjonFormIsDirty, setRefusjonFormIsDirty] = useState(false);
  const [fordelingFormIsDirty, setFordelingFormIsDirty] = useState(false);
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

  const harNyttInntektsforholdAP =
    skalHåndtereNyInntekt &&
    nyttInntektsforholdAP &&
    harNyttInntektsforholdInfo(beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks]);

  const skalViseFordeling = fordelAP && harFordelInfo(beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks]);

  const skalViseRefusjon = refusjonAP && harRefusjonInfo(beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks]);

  return (
    <VStack gap="2">
      {harNyttInntektsforholdAP && (
        <TilkommetAktivitet
          aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
          formData={formData as TilkommetAktivitetFormValues}
          setFormData={setFormData}
          submittable={submittable && !refusjonFormIsDirty && !fordelingFormIsDirty}
          readOnly={readOnly}
          submitCallback={submitCallback}
          beregningsgrunnlagListe={beregningsgrunnlagListe}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          vilkarperioder={vilkarperioder}
          setTilkommetAktivitetFormIsDirty={setTilkommetAktivitetFormIsDirty}
        />
      )}
      {skalViseRefusjon && (
        <VurderEndringRefusjonForm
          aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
          submittable={submittable && !tilkommetAktivitetFormIsDirty && !fordelingFormIsDirty}
          readOnly={readOnly}
          //@ts-expect-error Fiks
          submitCallback={submitCallback}
          beregningsgrunnlagListe={beregningsgrunnlagListe}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          formData={formData as VurderRefusjonFormValues}
          setFormData={setFormData}
          vilkarperioder={vilkarperioder}
          setRefusjonFormIsDirty={setRefusjonFormIsDirty}
        />
      )}
      {skalViseFordeling && (
        <FordelingForm
          aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
          submittable={submittable && !tilkommetAktivitetFormIsDirty && !refusjonFormIsDirty}
          readOnly={readOnly}
          submitCallback={submitCallback}
          kodeverkSamling={kodeverkSamling}
          beregningsgrunnlagListe={beregningsgrunnlagListe}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          formData={formData as FordelBeregningsgrunnlagFormValues}
          setFormData={setFormData}
          vilkårsperioder={vilkarperioder}
          setFordelingFormIsDirty={setFordelingFormIsDirty}
        />
      )}
    </VStack>
  );
};
