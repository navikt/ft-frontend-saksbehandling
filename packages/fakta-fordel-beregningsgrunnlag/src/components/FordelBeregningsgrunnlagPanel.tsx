import { useState } from 'react';

import { VStack } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, BeregningAvklaringsbehov, Beregningsgrunnlag } from '@navikt/ft-types';

import type { AksjonspunktSubmitType } from '../types/AksjonspunktSubmitType.ts';
import type {
  FordelBeregningsgrunnlagFormValues,
  VurderRefusjonFormValues,
} from '../types/FordelBeregningsgrunnlagPanelValues';
import { FaktaFordelBeregningAvklaringsbehovCode } from '../types/interface/FaktaFordelBeregningAvklaringsbehovCode';
import type { KodeverkForPanel } from '../types/kodeverkForPanel';
import type { Vilkårperiode } from '../types/Vilkår';
import { FordelingForm } from './fordeling/FordelingForm';
import { VurderEndringRefusjonForm } from './refusjon/VurderEndringRefusjonForm';

const { FORDEL_BEREGNINGSGRUNNLAG, VURDER_REFUSJON_BERGRUNN } = FaktaFordelBeregningAvklaringsbehovCode;

const harFordelInfo = (bg: Beregningsgrunnlag): boolean =>
  bg && bg.faktaOmFordeling ? !!bg.faktaOmFordeling.fordelBeregningsgrunnlag : false;

const harRefusjonInfo = (bg: Beregningsgrunnlag): boolean => !!(bg && bg.refusjonTilVurdering);

const getAvklaringsbehov = (
  avklaringsbehov: BeregningAvklaringsbehov[],
  def: string,
): BeregningAvklaringsbehov | undefined =>
  avklaringsbehov && def ? avklaringsbehov.find(ap => ap.definisjon === def) : undefined;

interface Props {
  aktivtBeregningsgrunnlagIndeks: number;
  readOnly: boolean;
  submitCallback: (aksjonspunktData: AksjonspunktSubmitType) => Promise<void>;
  submittable: boolean;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  vilkarperioder: Vilkårperiode[];
  kodeverkSamling: KodeverkForPanel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formData?: FordelBeregningsgrunnlagFormValues | VurderRefusjonFormValues;
  setFormData: (data: FordelBeregningsgrunnlagFormValues | VurderRefusjonFormValues) => void;
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
}: Props) => {
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

  const skalViseFordeling = fordelAP && harFordelInfo(beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks]);

  const skalViseRefusjon = refusjonAP && harRefusjonInfo(beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks]);

  return (
    <VStack gap="space-8">
      {skalViseRefusjon && (
        <VurderEndringRefusjonForm
          aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
          submittable={submittable && !fordelingFormIsDirty}
          readOnly={readOnly}
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
          submittable={submittable && !refusjonFormIsDirty}
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
